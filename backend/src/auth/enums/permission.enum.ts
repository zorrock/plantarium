import { Role } from "./role.enum";

export enum Permission {
  'report.create' = "report.create",
  'report.read' = "report.read",
  'report.update' = "report.update",
  'report.delete'='report.delete',

  'user.create'='user.create',
  'user.read'='user.read',
  'user.update'='user.update',
  'user.delete'='user.delete'
}

const anonPermissions = [
  Permission["user.create"],
  Permission["report.create"],
  Permission["report.read"],
]

const userPermissions = [
  ...anonPermissions,
  Permission["user.update"],
  Permission["user.read"],
  Permission["user.delete"],

  Permission["report.delete"],
]

const adminPermissions = [
  ...userPermissions,
  Permission["report.update"]
]

const permissions:{[key: string]:Permission[]} = {
  [Role.ANON]: anonPermissions.sort(),
  [Role.USER]: userPermissions.sort(),
  [Role.ADMIN]: adminPermissions.sort(),
}

export function getPermissionsForRole(role: Role) {
  return permissions[role];
}
