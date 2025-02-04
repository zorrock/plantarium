import { cloneObject, EventEmitter, logger } from '@plantarium/helpers';
import * as storage from '$lib/storage';
import { browser } from "$app/env"
import createId from 'shortid';
import type { Writable } from 'svelte/store';
import type { PlantariumSettings } from "$lib/types"
import { writable } from 'svelte/store';
import { renderProject } from '../../helpers';
import type { PlantProject, TransferGeometry } from '@plantarium/types';
import { fernSimple } from "./examples"
import { createToast } from '@plantarium/ui';

const log = logger('ProjectManager');

const PTP_PREFIX = 'pt_project_';

export default class ProjectManager extends EventEmitter {
  private plant?: PlantProject;
  public activeProjectId?: string;
  public activeProject: Writable<PlantProject | undefined> = writable();
  private projects: { [key: string]: PlantProject } = {};
  private loadingActiveProject?: Promise<PlantProject>;
  public store: Writable<PlantProject[]> = writable([]);

  constructor() {
    super();

    this.loadProjects();
  }


  private createNewProject(p?: PlantProject): PlantProject {
    const plant = {
      meta: {
        ...(p?.meta || {
          transform: { x: 0, y: 0, s: 1 },
          name: 'DefaultProject',
        }),
        id: createId(),
      },
      nodes: p?.nodes || [{
        "attributes": {
          "pos": {
            "x": -100,
            "y": 0
          },
          "type": "stem",
          "id": "1",
          "refs": [
            {
              "id": "0",
              "out": 0,
              "in": "input"
            }
          ]
        },
        "state": {
          "origin": {
            "x": 0,
            "y": 0,
            "z": 0
          },
          "height": 2,
          "thiccness": 0.06,
          "amount": 1
        }
      },
      {
        "attributes": {
          "pos": {
            "x": 0,
            "y": 0
          },
          "type": "output",
          "id": "0",
        },
      }
      ]
    };

    const currentProjectNames = Object.values(this.projects).map(_p => _p.meta.name);
    if (currentProjectNames.includes(plant.meta.name)) {
      let currentName = plant.meta.name.replace(/\d+$/, "");
      let i = 0;
      while (currentProjectNames.includes(plant.meta.name)) {
        plant.meta.name = currentName + i;
        i++;
      }
    }

    log('created new plant', plant);

    return plant;
  }

  public createNew(p?: PlantProject): void {
    const plant = this.createNewProject(p);
    this.emit('new', plant);

    this.saveProject(plant);

    this.setActiveProject(plant.meta.id)
  }

  async updateProjectMeta(id: string, meta: Partial<PlantProject["meta"]>): Promise<void> {
    const project = await this.getProject(id);

    project.meta = { ...project.meta, ...meta };

    log('update meta', id);

    this.emit('update', project);

    this.saveProject(project);
  }

  async saveProject(_project: PlantProject) {

    const project = cloneObject(_project);

    this.projects[project.meta.id] = project;

    this.emit('save', project);

    // if (!project?.meta?.thumbnail) this.renderThumbnail({ project });

    await storage.setItem('pt_project_ids', Object.keys(this.projects));

    await storage.setItem(PTP_PREFIX + project.meta.id, project);

    log('saved plant id: ', project.meta.id);

    this.store.set(Object.values(this.projects));
  }

  async getProject(id: string): Promise<PlantProject> {
    if (id in this.projects) return this.projects[id];
    const project = (await storage.getItem(PTP_PREFIX + id)) as PlantProject;
    this.projects[id] = project;
    return project;
  }

  async deleteProject(id: string): Promise<void> {
    if (id in this.projects) {
      delete this.projects[id];
      await storage.removeItem(PTP_PREFIX + id);
      await storage.setItem('pt_project_ids', Object.keys(this.projects));
      this.store.set(Object.values(this.projects));
      this.emit('delete', id);
      log('deleted project with id: ' + id);
    } else {
      log.warn('cant delete project with id: ' + id);
    }
  }

  async setActiveProject(id: string) {
    this.loadingActiveProject && (await this.loadingActiveProject);
    if (id === this.activeProjectId) return;

    this.activeProjectId = id;

    this.loadingActiveProject = this.getProject(id);

    const project = await this.loadingActiveProject;

    if (this.loadingActiveProject) {
      this.activeProjectId = id;
      this.saveProject(project);
      this.activeProject.set(project);
      await storage.setItem('pt_active_id', id);
      log('set active project to id: ' + id);
      this.emit('load', project);
      delete this.loadingActiveProject;
    } else {
      log.warn('cant find plant with id: ' + id);
    }
  }

  async renderThumbnail({ project, geo }: { project?: PlantProject; geo?: TransferGeometry }) {
    const projectId = project?.meta?.id || this.activeProjectId;

    if (!projectId || !(projectId in this.projects)) return;

    const a = performance.now();

    const thumbDataString = await renderProject({ pd: project, geo });

    if (thumbDataString) {
      const b = performance.now() - a;

      this.projects[projectId].meta.thumbnail = thumbDataString;

      log('generated thumbnail for ' + projectId + ' in ' + Math.floor(b) + 'ms');

      this.saveProject(this.projects[projectId]);

      this.store.set(Object.values(this.projects));
    } else {
      log.warn('There was an error rendering a thumbnail for: ' + projectId);
    }
  }

  private async loadProjects() {
    const projectIds = ((await storage.getItem('pt_project_ids')) as string[]) || [];

    log('loaded project ids', projectIds);

    const activeProjectId = (await storage.getItem('pt_active_id')) as string;

    if (!projectIds.length && browser) {
      const plant = this.createNewProject(fernSimple);
      projectIds.push(plant.meta.id);
      await this.saveProject(plant);
      createToast("Because you had no projects, (yet) I loaded the Fern Simple example for you", { type: "success" });
    }

    await Promise.all(
      projectIds.map(async (id) => {
        const p = await this.getProject(id);
        log('loaded ', id);
        this.projects[id] = p;
      })
    );

    if (activeProjectId && projectIds.includes(activeProjectId)) {
      this.setActiveProject(activeProjectId);
    } else {
      this.setActiveProject(projectIds[0]);
    }

    this.store.set(Object.values(this.projects));
  }

  setProject(plant: PlantProject) {
    this.plant = plant;
    this.emit('plant', plant);
  }

  getActiveProject() {
    return this.plant;
  }

  setSettings(settings: PlantariumSettings) {
    this.emit('settings', settings);
  }
}
