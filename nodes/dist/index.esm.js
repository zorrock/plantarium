var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// ../../node_modules/.pnpm/file-saver@2.0.5/node_modules/file-saver/dist/FileSaver.min.js
var require_FileSaver_min = __commonJS({
  "../../node_modules/.pnpm/file-saver@2.0.5/node_modules/file-saver/dist/FileSaver.min.js"(exports, module) {
    (function(a, b) {
      if (typeof define == "function" && define.amd)
        define([], b);
      else if (typeof exports != "undefined")
        b();
      else {
        b(), a.FileSaver = { exports: {} }.exports;
      }
    })(exports, function() {
      "use strict";
      function b(a2, b2) {
        return typeof b2 == "undefined" ? b2 = { autoBom: false } : typeof b2 != "object" && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c2);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || (typeof window != "object" || window !== f ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", typeof b2 == "string" ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
        if (g2 = g2 || f2.name || "download", typeof f2 != "string")
          navigator.msSaveOrOpenBlob(b(f2, h), g2);
        else if (d(f2))
          c(f2, g2, h);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), typeof b2 == "string")
          return c(b2, d2, e2);
        var h = b2.type === "application/octet-stream", i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && typeof FileReader != "undefined") {
          var k = new FileReader();
          k.onloadend = function() {
            var a2 = k.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
          }, k.readAsDataURL(b2);
        } else {
          var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
          g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
            l.revokeObjectURL(m);
          }, 4e4);
        }
      });
      f.saveAs = g.saveAs = g, typeof module != "undefined" && (module.exports = g);
    });
  }
});

// ../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/random/random-from-seed.js
var require_random_from_seed = __commonJS({
  "../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/random/random-from-seed.js"(exports, module) {
    "use strict";
    var seed = 1;
    function getNextValue() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }
    function setSeed(_seed_) {
      seed = _seed_;
    }
    module.exports = {
      nextValue: getNextValue,
      seed: setSeed
    };
  }
});

// ../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/alphabet.js
var require_alphabet = __commonJS({
  "../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/alphabet.js"(exports, module) {
    "use strict";
    var randomFromSeed = require_random_from_seed();
    var ORIGINAL = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
    var alphabet;
    var previousSeed;
    var shuffled;
    function reset() {
      shuffled = false;
    }
    function setCharacters(_alphabet_) {
      if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
          alphabet = ORIGINAL;
          reset();
        }
        return;
      }
      if (_alphabet_ === alphabet) {
        return;
      }
      if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error("Custom alphabet for shortid must be " + ORIGINAL.length + " unique characters. You submitted " + _alphabet_.length + " characters: " + _alphabet_);
      }
      var unique = _alphabet_.split("").filter(function(item, ind, arr) {
        return ind !== arr.lastIndexOf(item);
      });
      if (unique.length) {
        throw new Error("Custom alphabet for shortid must be " + ORIGINAL.length + " unique characters. These characters were not unique: " + unique.join(", "));
      }
      alphabet = _alphabet_;
      reset();
    }
    function characters(_alphabet_) {
      setCharacters(_alphabet_);
      return alphabet;
    }
    function setSeed(seed) {
      randomFromSeed.seed(seed);
      if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
      }
    }
    function shuffle() {
      if (!alphabet) {
        setCharacters(ORIGINAL);
      }
      var sourceArray = alphabet.split("");
      var targetArray = [];
      var r = randomFromSeed.nextValue();
      var characterIndex;
      while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
      }
      return targetArray.join("");
    }
    function getShuffled() {
      if (shuffled) {
        return shuffled;
      }
      shuffled = shuffle();
      return shuffled;
    }
    function lookup(index) {
      var alphabetShuffled = getShuffled();
      return alphabetShuffled[index];
    }
    function get() {
      return alphabet || ORIGINAL;
    }
    module.exports = {
      get,
      characters,
      seed: setSeed,
      lookup,
      shuffled: getShuffled
    };
  }
});

// ../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/random/random-byte-browser.js
var require_random_byte_browser = __commonJS({
  "../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/random/random-byte-browser.js"(exports, module) {
    "use strict";
    var crypto = typeof window === "object" && (window.crypto || window.msCrypto);
    var randomByte;
    if (!crypto || !crypto.getRandomValues) {
      randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
          bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
      };
    } else {
      randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
      };
    }
    module.exports = randomByte;
  }
});

// ../../node_modules/.pnpm/nanoid@2.1.11/node_modules/nanoid/format.browser.js
var require_format_browser = __commonJS({
  "../../node_modules/.pnpm/nanoid@2.1.11/node_modules/nanoid/format.browser.js"(exports, module) {
    module.exports = function(random, alphabet, size) {
      var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
      var step = -~(1.6 * mask * size / alphabet.length);
      var id = "";
      while (true) {
        var bytes = random(step);
        var i = step;
        while (i--) {
          id += alphabet[bytes[i] & mask] || "";
          if (id.length === +size)
            return id;
        }
      }
    };
  }
});

// ../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/generate.js
var require_generate = __commonJS({
  "../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/generate.js"(exports, module) {
    "use strict";
    var alphabet = require_alphabet();
    var random = require_random_byte_browser();
    var format = require_format_browser();
    function generate(number) {
      var loopCounter = 0;
      var done;
      var str = "";
      while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < Math.pow(16, loopCounter + 1);
        loopCounter++;
      }
      return str;
    }
    module.exports = generate;
  }
});

// ../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/build.js
var require_build = __commonJS({
  "../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/build.js"(exports, module) {
    "use strict";
    var generate = require_generate();
    var alphabet = require_alphabet();
    var REDUCE_TIME = 1567752802062;
    var version = 7;
    var counter;
    var previousSeconds;
    function build(clusterWorkerId) {
      var str = "";
      var seconds = Math.floor((Date.now() - REDUCE_TIME) * 1e-3);
      if (seconds === previousSeconds) {
        counter++;
      } else {
        counter = 0;
        previousSeconds = seconds;
      }
      str = str + generate(version);
      str = str + generate(clusterWorkerId);
      if (counter > 0) {
        str = str + generate(counter);
      }
      str = str + generate(seconds);
      return str;
    }
    module.exports = build;
  }
});

// ../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/is-valid.js
var require_is_valid = __commonJS({
  "../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/is-valid.js"(exports, module) {
    "use strict";
    var alphabet = require_alphabet();
    function isShortId(id) {
      if (!id || typeof id !== "string" || id.length < 6) {
        return false;
      }
      var nonAlphabetic = new RegExp("[^" + alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]");
      return !nonAlphabetic.test(id);
    }
    module.exports = isShortId;
  }
});

// ../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/util/cluster-worker-id-browser.js
var require_cluster_worker_id_browser = __commonJS({
  "../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/util/cluster-worker-id-browser.js"(exports, module) {
    "use strict";
    module.exports = 0;
  }
});

// ../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/lib/index.js"(exports, module) {
    "use strict";
    var alphabet = require_alphabet();
    var build = require_build();
    var isValid = require_is_valid();
    var clusterWorkerId = require_cluster_worker_id_browser() || 0;
    function seed(seedValue) {
      alphabet.seed(seedValue);
      return module.exports;
    }
    function worker(workerId) {
      clusterWorkerId = workerId;
      return module.exports;
    }
    function characters(newCharacters) {
      if (newCharacters !== void 0) {
        alphabet.characters(newCharacters);
      }
      return alphabet.shuffled();
    }
    function generate() {
      return build(clusterWorkerId);
    }
    module.exports = generate;
    module.exports.generate = generate;
    module.exports.seed = seed;
    module.exports.worker = worker;
    module.exports.characters = characters;
    module.exports.isValid = isValid;
  }
});

// ../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/index.js
var require_shortid = __commonJS({
  "../../node_modules/.pnpm/shortid@2.2.16/node_modules/shortid/index.js"(exports, module) {
    "use strict";
    module.exports = require_lib();
  }
});

// ../../node_modules/.pnpm/@yr+monotone-cubic-spline@1.0.3/node_modules/@yr/monotone-cubic-spline/index.js
var require_monotone_cubic_spline = __commonJS({
  "../../node_modules/.pnpm/@yr+monotone-cubic-spline@1.0.3/node_modules/@yr/monotone-cubic-spline/index.js"(exports, module) {
    "use strict";
    var \u03B5 = 1e-6;
    module.exports = {
      points: function points(_points) {
        var tgts = tangents(_points);
        var p = _points[1];
        var p0 = _points[0];
        var pts = [];
        var t = tgts[1];
        var t0 = tgts[0];
        pts.push(p0, [p0[0] + t0[0], p0[1] + t0[1], p[0] - t[0], p[1] - t[1], p[0], p[1]]);
        for (var i = 2, n = tgts.length; i < n; i++) {
          var _p = _points[i];
          var _t = tgts[i];
          pts.push([_p[0] - _t[0], _p[1] - _t[1], _p[0], _p[1]]);
        }
        return pts;
      },
      slice: function slice(points, start, end) {
        var pts = points.slice(start, end);
        if (start) {
          if (pts[1].length < 6) {
            var n = pts[0].length;
            pts[1] = [pts[0][n - 2] * 2 - pts[0][n - 4], pts[0][n - 1] * 2 - pts[0][n - 3]].concat(pts[1]);
          }
          pts[0] = pts[0].slice(-2);
        }
        return pts;
      },
      svgPath: function svgPath(points) {
        var p = "";
        for (var i = 0; i < points.length; i++) {
          var point = points[i];
          var n = point.length;
          if (!i) {
            p += "M" + point[n - 2] + " " + point[n - 1];
          } else if (n > 4) {
            p += "C" + point[0] + ", " + point[1];
            p += ", " + point[2] + ", " + point[3];
            p += ", " + point[4] + ", " + point[5];
          } else {
            p += "S" + point[0] + ", " + point[1];
            p += ", " + point[2] + ", " + point[3];
          }
        }
        return p;
      }
    };
    function tangents(points) {
      var m = finiteDifferences(points);
      var n = points.length - 1;
      var tgts = [];
      var a = void 0, b = void 0, d = void 0, s = void 0;
      for (var i = 0; i < n; i++) {
        d = slope(points[i], points[i + 1]);
        if (Math.abs(d) < \u03B5) {
          m[i] = m[i + 1] = 0;
        } else {
          a = m[i] / d;
          b = m[i + 1] / d;
          s = a * a + b * b;
          if (s > 9) {
            s = d * 3 / Math.sqrt(s);
            m[i] = s * a;
            m[i + 1] = s * b;
          }
        }
      }
      for (var _i = 0; _i <= n; _i++) {
        s = (points[Math.min(n, _i + 1)][0] - points[Math.max(0, _i - 1)][0]) / (6 * (1 + m[_i] * m[_i]));
        tgts.push([s || 0, m[_i] * s || 0]);
      }
      return tgts;
    }
    function slope(p0, p1) {
      return (p1[1] - p0[1]) / (p1[0] - p0[0]);
    }
    function finiteDifferences(points) {
      var m = [];
      var p0 = points[0];
      var p1 = points[1];
      var d = m[0] = slope(p0, p1);
      var i = 1;
      for (var n = points.length - 1; i < n; i++) {
        p0 = p1;
        p1 = points[i + 1];
        m[i] = (d + (d = slope(p0, p1))) * 0.5;
      }
      m[i] = d;
      return m;
    }
  }
});

// ../helpers/src/aggregate.ts
var aggregate_default = (baseClass, ...mixins) => {
  const copyProps = (target, source) => {
    Object.getOwnPropertyNames(source).concat(Object.getOwnPropertySymbols(source).map((s) => s.toString())).forEach((prop) => {
      if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
        Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
    });
  };
  const base = class Base extends baseClass {
    constructor(...args) {
      super(...args);
      mixins.forEach((mixin) => copyProps(this, new mixin()));
    }
  };
  mixins.forEach((mixin) => {
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  });
  return base;
};

// ../helpers/src/composeableError.ts
var _ComposableError = class extends Error {
  detail;
  meta;
  constructor(message, meta2 = {}) {
    super(message);
    this.detail = message;
    this.meta = meta2;
  }
  static fromParent(parentError, code, message, meta2) {
    return new _ComposableError(message, Object.assign({ cause: parentError }, meta2));
  }
  getCause() {
    return this.meta.cause || void 0;
  }
  unwrapChain(err = this) {
    return _ComposableError.unwrapChain(err);
  }
};
var ComposableError = _ComposableError;
__publicField(ComposableError, "unwrapChain", (err) => {
  const chain = [err];
  let nextError = err.getCause();
  while (nextError) {
    chain.push(nextError);
    nextError = nextError.getCause();
  }
  return chain;
});

// ../helpers/src/debounceDecorator.ts
function Debounce(wait2, immediate = false) {
  return function(target, propertyKey, descriptor) {
    let timeout;
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      const later = () => {
        timeout = null;
        if (!immediate)
          originalMethod.apply(this, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait2);
      if (callNow)
        originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

// ../helpers/src/download.ts
var import_file_saver = __toModule(require_FileSaver_min());

// ../helpers/src/throttle.ts
function throttle(_func, wait2) {
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;
  const func = _func;
  const later = () => {
    previous = 0;
    timeout = null;
    result = func.apply(context, args);
    if (!timeout)
      context = args = null;
  };
  const f = function() {
    const now2 = Date.now();
    if (!previous)
      previous = now2;
    const remaining = wait2 - (now2 - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait2) {
      if (timeout) {
        window.clearTimeout(timeout);
        timeout = null;
      }
      previous = now2;
      result = func.apply(context, args);
      if (!timeout)
        context = args = null;
    } else if (!timeout) {
      timeout = window.setTimeout(later, remaining);
    }
    return result;
  };
  return f;
}

// ../helpers/src/EventEmitter.ts
var debug = { amountEmitters: 0, amountCallbacks: 0, emitters: [] };
if (typeof self !== "undefined" && "window" in self) {
  window["debug"] = debug;
}
var EventEmitter = class {
  index = 0;
  constructor() {
    this.index = debug.amountEmitters;
    debug.amountEmitters++;
  }
  cbs = {};
  cbsOnce = {};
  emit(event, data) {
    if (event in this.cbs) {
      this.cbs[event].forEach((c) => c(data));
    }
    if (event in this.cbsOnce) {
      this.cbsOnce[event].forEach((c) => c(data));
      delete this.cbsOnce[event];
    }
  }
  on(event, cb, throttleTimer = 0) {
    if (throttleTimer > 0)
      cb = throttle(cb, throttleTimer);
    const cbs = Object.assign(this.cbs, {
      [event]: [...this.cbs[event] || [], cb]
    });
    this.cbs = cbs;
    debug.emitters[this.index] = {
      name: this.constructor.name,
      cbs: Object.fromEntries(Object.keys(this.cbs).map((key) => [key, this.cbs[key].length]))
    };
    debug.amountCallbacks++;
    return () => {
      debug.amountCallbacks--;
      cbs[event]?.splice(cbs[event].indexOf(cb), 1);
      debug.emitters[this.index] = {
        name: this.constructor.name,
        cbs: Object.fromEntries(Object.keys(this.cbs).map((key) => [key, this.cbs[key].length]))
      };
    };
  }
  once(event, cb) {
    this.cbsOnce[event] = [...this.cbsOnce[event] || [], cb];
    return () => {
      this.cbsOnce[event].splice(this.cbsOnce[event].indexOf(cb), 1);
    };
  }
  destroyEventEmitter() {
    debug.amountEmitters--;
    Object.keys(this.cbs).forEach((key) => {
      debug.amountCallbacks -= this.cbs[key].length;
      delete this.cbs[key];
    });
    Object.keys(this.cbsOnce).forEach((key) => delete this.cbsOnce[key]);
    this.cbs = {};
    this.cbsOnce = {};
    delete debug.emitters[this.index];
  }
};

// ../helpers/src/fastHash.ts
function fastHash_default(input) {
  if (input.length === 0)
    return 0;
  let hash2 = 0;
  for (let i = 0; i < input.length; i++) {
    hash2 = (hash2 << 5) - hash2 + input.charCodeAt(i);
    hash2 = hash2 & hash2;
  }
  return hash2;
}

// ../helpers/src/genId.ts
var genId_default = () => {
  const idMap = {};
  let amount = 0;
  const genID = (id = 0, iteration = 0) => {
    if (iteration > 500) {
      throw new Error("Infinite loop in id generation algo");
    }
    if (id in idMap) {
      return genID(Math.max(id++, amount++), iteration + 1);
    }
    idMap[id] = true;
    return id.toString();
  };
  genID.reset = () => {
    Object.keys(idMap).forEach((id) => delete idMap[+id]);
    amount = 0;
  };
  return genID;
};

// ../helpers/src/logger.ts
var filters = [];
var level = 2;
var longestName = 0;
var scopes = {};
var currentIndex = 0;
var colors = [
  "#00ffff",
  "#f0ffff",
  "#f5f5dc",
  "#000000",
  "#0000ff",
  "#a52a2a",
  "#00ffff",
  "#00008b",
  "#008b8b",
  "#a9a9a9",
  "#006400",
  "#bdb76b",
  "#8b008b",
  "#556b2f",
  "#ff8c00",
  "#9932cc",
  "#8b0000",
  "#e9967a",
  "#9400d3",
  "#ff00ff",
  "#ffd700",
  "#008000",
  "#4b0082",
  "#f0e68c",
  "#add8e6",
  "#e0ffff",
  "#90ee90",
  "#d3d3d3",
  "#ffb6c1",
  "#ffffe0",
  "#00ff00",
  "#ff00ff",
  "#800000",
  "#000080",
  "#808000",
  "#ffa500",
  "#ffc0cb",
  "#800080",
  "#800080",
  "#ff0000",
  "#c0c0c0",
  "#ffffff",
  "#ffff00"
];
function log(scope) {
  longestName = Math.max(longestName, scope.length);
  const myIndex = currentIndex;
  scopes[scope] = colors[currentIndex];
  currentIndex++;
  const log3 = (...args) => {
    if ((!filters.length || filters.includes(scope)) && level === 0) {
      if (typeof args[0] === "string" && typeof args[1] === "object") {
        console.groupCollapsed(`%c[${scope.padEnd(longestName, " ")}]`, `color: hsl(${myIndex * 30}deg 68% 64%); font-weight: bold;`, args[0]);
        console.log(...args.slice(1));
        console.groupEnd();
        return;
      }
      console.log(`%c[${scope.padEnd(longestName, " ")}]`, `color: hsl(${myIndex * 30}deg 68% 64%); font-weight: bold;`, ...args);
    }
  };
  log3.group = (...args) => {
    if (level < 1)
      console.groupCollapsed(`%c[${scope.padEnd(longestName, " ")}]`, `color: hsl(${myIndex * 30}deg 68% 64%); font-weight: bold;`, ...args);
  };
  log3.warn = (...args) => {
    if (level <= 1)
      console.warn(`[${scope.padEnd(longestName, " ")}]`, ...args);
  };
  log3.error = (err) => {
    console.error(`[${scope.padEnd(longestName, " ")}]`, err);
  };
  return log3;
}
log.setFilter = (...f) => {
  filters = f;
};
log.setLevel = (l = 0) => {
  level = l;
};
var logger_default = log;

// ../helpers/src/memoize.ts
function memoize(func) {
  const memo2 = {};
  return (...args) => {
    const hash2 = fastHash_default(JSON.stringify(args));
    if (hash2 in memo2) {
      return memo2[hash2];
    } else {
      return memo2[hash2] = func(...args);
    }
  };
}

// ../helpers/src/parseStackTrace.ts
var regex = /^(?:[ ]+)?(?:at )([^ ]*)?(?: )?(?:\[(.*?)\] )?(?:\(([^()]+)\))?$/gm;
var stripPath = (s) => s.replace(window.location.href, "").replace(/^node_modules/, "").replace(/.+?(?=plantarium)plantarium\//, "");
var parseStackTrace_default = (s) => {
  const [rawTitle, ...rawLines] = s.split("\n");
  const [type, title] = rawTitle.split(":");
  const lines = rawLines.map((l) => {
    const res = [...l.matchAll(regex)][0];
    const [, name2, alias, location2] = res;
    return {
      name: stripPath(name2),
      ...location2 ? { location: stripPath(location2) } : {},
      ...alias ? { alias: alias.trim().replace("as ", "") } : {}
    };
  });
  return { title, type, lines };
};

// src/view/ConnectionView.ts
var minMax = (min, max) => (num) => Math.min(Math.max(num, min), max);
var limitDecimals = (amountDecimals) => {
  const amount = __pow(10, amountDecimals);
  return (num) => Math.floor(num * amount) / amount;
};
var limitSafe = minMax(-1e5, 1e5);
var removeDecimals = limitDecimals(1);
var limit = (num) => limitSafe(removeDecimals(num));
var ConnectionView = class {
  constructor({ x1 = 0, y1 = 0, x2 = 0, y2 = 0 }, socket) {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.system = socket.node.system;
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttribute("viewbox", "0 0 100 100");
    this.svg.setAttribute("width", "100");
    this.svg.setAttribute("height", "100");
    this.svg.style.overflow = "visible";
    this.svg.style.position = "absolute";
    this.svg.style.top = "3.5px";
    this.svg.style.pointerEvents = "none";
    this.svg.style.zIndex = "-1";
    socket.view.wrapper.append(this.svg);
    this.path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.path.classList.add("node-connection-path");
    this.path.setAttribute("vector-effect", "non-scaling-stroke");
    this.path.setAttribute("d", `
      M 0 0
      C 50 0 
        50 100
				100  100
      `);
    this.svg.appendChild(this.path);
    this.setPosition();
  }
  setPosition({ x1 = this.x1, y1 = this.y1, x2 = this.x2, y2 = this.y2 } = {}) {
    var _a;
    this.x1 = limit(x1);
    this.y1 = limit(y1);
    this.x2 = limit(x2);
    this.y2 = limit(y2);
    const width = this.x2 - this.x1 + 3.5;
    const height = this.y2 - this.y1;
    (_a = this == null ? void 0 : this.hoverPath) == null ? void 0 : _a.setAttribute("d", `
      M 0 0
      C ${width / 2} 0 
        ${width / 2} ${height}
				${width}  ${height}
      `);
    this.path.setAttribute("d", `
      M 0 0
      C ${width / 2} 0 
        ${width / 2} ${height}
				${width}  ${height}
      `);
  }
  remove() {
    var _a;
    this.path.remove();
    (_a = this == null ? void 0 : this.hoverPath) == null ? void 0 : _a.remove();
    this.system.save();
  }
};

// src/view/NodeConnectionView.ts
var NodeConnectionView = class extends ConnectionView {
  constructor(conn) {
    super({}, conn.output);
    this.connection = conn;
    this.input = conn.input.view;
    this.output = conn.output.view;
    this.hoverPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.hoverPath.classList.add("node-connection-hover");
    this.hoverPath.setAttribute("vector-effect", "non-scaling-stroke");
    this.svg.append(this.hoverPath);
    this.hoverPath.addEventListener("mouseover", () => {
      const { activeNode } = this.system.view;
      if (activeNode && activeNode.view.active && activeNode.view.hoveredConnection !== this) {
        this.handleNodeOver(activeNode);
      }
    });
    this.hoverPath.addEventListener("mouseout", () => {
      const { activeNode } = this.system.view;
      this.handleNodeOut(activeNode);
    });
    conn.input.node.system.view.colorStore.on(conn.input.type[0], (color) => {
      this.path.style.stroke = color;
    });
  }
  handleNodeOver(node2) {
    if (this.connection.isNodeJoinable(node2)) {
      node2.view.hoveredConnection = this;
      this.path.classList.add("hover-active");
    }
  }
  handleNodeOut(node2) {
    if (node2 && node2.view.hoveredConnection === this) {
      delete node2.view.hoveredConnection;
    }
    this.path.classList.remove("hover-active");
  }
  remove() {
    super.remove();
  }
};

// src/helpers/panzoom/domController.ts
function makeDomController(domElement) {
  const elementValid = isDomElement(domElement);
  if (!elementValid) {
    throw new Error("panzoom requires DOM element to be attached to the DOM tree");
  }
  const owner = domElement.parentElement;
  domElement.scrollTop = 0;
  const api = {
    getBBox,
    getOwner,
    applyTransform
  };
  return api;
  function getOwner() {
    return owner;
  }
  function getBBox() {
    return {
      left: 0,
      top: 0,
      width: domElement.clientWidth,
      height: domElement.clientHeight
    };
  }
  function applyTransform(transform) {
    domElement.style.transformOrigin = "0 0 0";
    domElement.style.transform = "matrix(" + transform.scale + ", 0, 0, " + transform.scale + ", " + transform.x + ", " + transform.y + ")";
  }
}
function isDomElement(element2) {
  return element2 && element2.parentElement && element2.style;
}

// src/helpers/panzoom/kinetic.ts
function kinetic(getPoint, scroll, settings) {
  if (typeof settings !== "object") {
    settings = {};
  }
  const minVelocity = typeof settings.minVelocity === "number" ? settings.minVelocity : 5;
  const amplitude = typeof settings.amplitude === "number" ? settings.amplitude : 0.25;
  const cancelAnimationFrame2 = typeof settings.cancelAnimationFrame === "function" ? settings.cancelAnimationFrame : getCancelAnimationFrame();
  const requestAnimationFrame2 = typeof settings.requestAnimationFrame === "function" ? settings.requestAnimationFrame : getRequestAnimationFrame();
  let lastPoint;
  let timestamp;
  const timeConstant = 342;
  let ticker;
  let vx, targetX, ax;
  let vy, targetY, ay;
  let raf2;
  return {
    start,
    stop,
    cancel: dispose
  };
  function dispose() {
    cancelAnimationFrame2(ticker);
    cancelAnimationFrame2(raf2);
  }
  function start() {
    lastPoint = getPoint();
    ax = ay = vx = vy = 0;
    timestamp = new Date();
    cancelAnimationFrame2(ticker);
    cancelAnimationFrame2(raf2);
    ticker = requestAnimationFrame2(track);
  }
  function track() {
    const now2 = Date.now();
    const elapsed = now2 - timestamp;
    timestamp = now2;
    const currentPoint = getPoint();
    const dx = currentPoint.x - lastPoint.x;
    const dy = currentPoint.y - lastPoint.y;
    lastPoint = currentPoint;
    const dt = 1e3 / (1 + elapsed);
    vx = 0.8 * dx * dt + 0.2 * vx;
    vy = 0.8 * dy * dt + 0.2 * vy;
    ticker = requestAnimationFrame2(track);
  }
  function stop() {
    cancelAnimationFrame2(ticker);
    cancelAnimationFrame2(raf2);
    const currentPoint = getPoint();
    targetX = currentPoint.x;
    targetY = currentPoint.y;
    timestamp = Date.now();
    if (vx < -minVelocity || vx > minVelocity) {
      ax = amplitude * vx;
      targetX += ax;
    }
    if (vy < -minVelocity || vy > minVelocity) {
      ay = amplitude * vy;
      targetY += ay;
    }
    raf2 = requestAnimationFrame2(autoScroll);
  }
  function autoScroll() {
    const elapsed = Date.now() - timestamp;
    let moving = false;
    let dx = 0;
    let dy = 0;
    if (ax) {
      dx = -ax * Math.exp(-elapsed / timeConstant);
      if (dx > 0.5 || dx < -0.5)
        moving = true;
      else
        dx = ax = 0;
    }
    if (ay) {
      dy = -ay * Math.exp(-elapsed / timeConstant);
      if (dy > 0.5 || dy < -0.5)
        moving = true;
      else
        dy = ay = 0;
    }
    if (moving) {
      scroll(targetX + dx, targetY + dy);
      raf2 = requestAnimationFrame2(autoScroll);
    }
  }
}
function getCancelAnimationFrame() {
  if (typeof cancelAnimationFrame === "function")
    return cancelAnimationFrame;
  return clearTimeout;
}
function getRequestAnimationFrame() {
  if (typeof requestAnimationFrame === "function")
    return requestAnimationFrame;
  return function(handler) {
    return setTimeout(handler, 16);
  };
}

// src/helpers/panzoom/index.ts
var defaultZoomSpeed = 0.2;
function createPanZoom(domElement, options) {
  const panController = makeDomController(domElement);
  const owner = panController.getOwner();
  const storedCTMResult = { x: 0, y: 0 };
  let isDirty = false;
  const transform = {
    x: 0,
    y: 0,
    scale: 1
  };
  const pinchSpeed = typeof options.pinchSpeed === "number" ? options.pinchSpeed : 1;
  const bounds = options.bounds;
  const maxZoom = typeof options.maxZoom === "number" ? options.maxZoom : Number.POSITIVE_INFINITY;
  const minZoom = typeof options.minZoom === "number" ? options.minZoom : 0;
  const boundsPadding = typeof options.boundsPadding === "number" ? options.boundsPadding : 0.05;
  const speed = typeof options.zoomSpeed === "number" ? options.zoomSpeed : defaultZoomSpeed;
  let transformOrigin = parseTransformOrigin(options.transformOrigin);
  validateBounds(bounds);
  let frameAnimation;
  let touchInProgress = false;
  let panstartFired = false;
  let mouseX;
  let mouseY;
  let pinchZoomLength;
  const smoothScroll = kinetic(getPoint, scroll, options.smoothScroll);
  let zoomToAnimation;
  let multiTouch;
  let paused = false;
  listenForEvents();
  const api = {
    dispose,
    moveBy,
    moveTo,
    smoothMoveTo,
    centerOn,
    zoomTo: publicZoomTo,
    zoomAbs,
    pause,
    resume,
    isPaused,
    getTransform: getTransformModel,
    setTransform,
    getTransformOrigin,
    setTransformOrigin
  };
  const initialX = typeof options.initialX === "number" ? options.initialX : transform.x;
  const initialY = typeof options.initialY === "number" ? options.initialY : transform.y;
  const initialZoom = typeof options.initialZoom === "number" ? options.initialZoom : transform.scale;
  if (initialX != transform.x || initialY != transform.y || initialZoom != transform.scale) {
    zoomAbs(initialX, initialY, initialZoom);
  }
  return api;
  function pause() {
    releaseEvents();
    paused = true;
  }
  function resume() {
    if (paused) {
      listenForEvents();
      paused = false;
    }
  }
  function isPaused() {
    return paused;
  }
  function transformToScreen(x, y) {
    storedCTMResult.x = x;
    storedCTMResult.y = y;
    return storedCTMResult;
  }
  function setTransform(x, y, s) {
    transform.x = x;
    transform.y = y;
    transform.scale = s;
    makeDirty();
  }
  function getTransformModel() {
    return transform;
  }
  function getTransformOrigin() {
    return transformOrigin;
  }
  function setTransformOrigin(newTransformOrigin) {
    transformOrigin = parseTransformOrigin(newTransformOrigin);
  }
  function getPoint() {
    return {
      x: transform.x,
      y: transform.y
    };
  }
  function moveTo(x, y) {
    transform.x = x;
    transform.y = y;
    keepTransformInsideBounds();
    makeDirty();
  }
  function moveBy(dx, dy) {
    moveTo(transform.x + dx, transform.y + dy);
  }
  function keepTransformInsideBounds() {
    const boundingBox = getBoundingBox();
    if (!boundingBox)
      return;
    let adjusted = false;
    const clientRect = getClientRect();
    let diff = boundingBox.left - clientRect.right;
    if (diff > 0) {
      transform.x += diff;
      adjusted = true;
    }
    diff = boundingBox.right - clientRect.left;
    if (diff < 0) {
      transform.x += diff;
      adjusted = true;
    }
    diff = boundingBox.top - clientRect.bottom;
    if (diff > 0) {
      transform.y += diff;
      adjusted = true;
    }
    diff = boundingBox.bottom - clientRect.top;
    if (diff < 0) {
      transform.y += diff;
      adjusted = true;
    }
    return adjusted;
  }
  function getBoundingBox() {
    if (!bounds)
      return;
    if (typeof bounds === "boolean") {
      const ownerRect = owner.getBoundingClientRect();
      const sceneWidth = ownerRect.width;
      const sceneHeight = ownerRect.height;
      return {
        left: sceneWidth * boundsPadding,
        top: sceneHeight * boundsPadding,
        right: sceneWidth * (1 - boundsPadding),
        bottom: sceneHeight * (1 - boundsPadding)
      };
    }
    return bounds;
  }
  function getClientRect() {
    const bbox = panController.getBBox();
    const leftTop = client(bbox.left, bbox.top);
    return {
      left: leftTop.x,
      top: leftTop.y,
      right: bbox.width * transform.scale + leftTop.x,
      bottom: bbox.height * transform.scale + leftTop.y
    };
  }
  function client(x, y) {
    return {
      x: x * transform.scale + transform.x,
      y: y * transform.scale + transform.y
    };
  }
  function makeDirty() {
    isDirty = true;
    frameAnimation = window.requestAnimationFrame(frame);
  }
  function zoomByRatio(clientX, clientY, ratio) {
    if (isNaN2(clientX) || isNaN2(clientY) || isNaN2(ratio)) {
      throw new Error("zoom requires valid numbers");
    }
    const newScale = transform.scale * ratio;
    if (newScale < minZoom) {
      if (transform.scale === minZoom)
        return;
      ratio = minZoom / transform.scale;
    }
    if (newScale > maxZoom) {
      if (transform.scale === maxZoom)
        return;
      ratio = maxZoom / transform.scale;
    }
    const size = transformToScreen(clientX, clientY);
    transform.x = size.x - ratio * (size.x - transform.x);
    transform.y = size.y - ratio * (size.y - transform.y);
    if (bounds && boundsPadding === 1 && minZoom === 1) {
      transform.scale *= ratio;
      keepTransformInsideBounds();
    } else {
      const transformAdjusted = keepTransformInsideBounds();
      if (!transformAdjusted)
        transform.scale *= ratio;
    }
    makeDirty();
  }
  function zoomAbs(clientX, clientY, zoomLevel) {
    const ratio = zoomLevel / transform.scale;
    zoomByRatio(clientX, clientY, ratio);
  }
  function centerOn(ui) {
    const parent = ui.ownerSVGElement;
    if (!parent)
      throw new Error("ui element is required to be within the scene");
    const clientRect = ui.getBoundingClientRect();
    const cx = clientRect.left + clientRect.width / 2;
    const cy = clientRect.top + clientRect.height / 2;
    const container = parent.getBoundingClientRect();
    const dx = container.width / 2 - cx;
    const dy = container.height / 2 - cy;
    internalMoveBy(dx, dy);
  }
  function smoothMoveTo(x, y) {
    internalMoveBy(x - transform.x, y - transform.y);
  }
  function internalMoveBy(dx, dy) {
    return moveBy(dx, dy);
  }
  function scroll(x, y) {
    cancelZoomAnimation();
    moveTo(x, y);
  }
  function dispose() {
    releaseEvents();
  }
  function listenForEvents() {
    owner.addEventListener("mousedown", onMouseDown, { passive: true });
    owner.addEventListener("dblclick", onDoubleClick, { passive: false });
    owner.addEventListener("touchstart", onTouch, { passive: true });
    owner.addEventListener("keydown", onKeyDown);
    owner.addEventListener("wheel", onMouseWheel, { passive: true });
    makeDirty();
  }
  function releaseEvents() {
    owner.removeEventListener("wheel", onMouseWheel);
    owner.removeEventListener("mousedown", onMouseDown);
    owner.removeEventListener("keydown", onKeyDown);
    owner.removeEventListener("dblclick", onDoubleClick);
    owner.removeEventListener("touchstart", onTouch);
    if (frameAnimation) {
      window.cancelAnimationFrame(frameAnimation);
      frameAnimation = 0;
    }
    smoothScroll.cancel();
    releaseDocumentMouse();
    releaseTouches();
    triggerPanEnd();
  }
  function frame() {
    if (isDirty)
      applyTransform();
  }
  function applyTransform() {
    isDirty = false;
    panController.applyTransform(transform);
    frameAnimation = 0;
    if (options.onTransform) {
      options.onTransform(transform);
    }
  }
  function onKeyDown(e) {
    let x = 0, y = 0, z = 0;
    if (e.keyCode === 38) {
      y = 1;
    } else if (e.keyCode === 40) {
      y = -1;
    } else if (e.keyCode === 37) {
      x = 1;
    } else if (e.keyCode === 39) {
      x = -1;
    } else if (e.keyCode === 189 || e.keyCode === 109) {
      z = 1;
    } else if (e.keyCode === 187 || e.keyCode === 107) {
      z = -1;
    }
    if (z) {
      const scaleMultiplier = getScaleMultiplier(z * 100);
      const offset = transformOrigin ? getTransformOriginOffset() : midPoint();
      publicZoomTo(offset.x, offset.y, scaleMultiplier);
    }
  }
  function midPoint() {
    const ownerRect = owner.getBoundingClientRect();
    return {
      x: ownerRect.width / 2,
      y: ownerRect.height / 2
    };
  }
  function onTouch(e) {
    beforeTouch(e);
    if (e.touches.length === 1) {
      return handleSingleFingerTouch(e);
    } else if (e.touches.length === 2) {
      pinchZoomLength = getPinchZoomLength(e.touches[0], e.touches[1]);
      multiTouch = true;
      startTouchListenerIfNeeded();
    }
  }
  function beforeTouch(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  function beforeDoubleClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function handleSingleFingerTouch(e) {
    const touch = e.touches[0];
    const offset = getOffsetXY(touch);
    const point = transformToScreen(offset.x, offset.y);
    mouseX = point.x;
    mouseY = point.y;
    smoothScroll.cancel();
    startTouchListenerIfNeeded();
  }
  function startTouchListenerIfNeeded() {
    if (touchInProgress) {
      return;
    }
    touchInProgress = true;
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchcancel", handleTouchEnd);
  }
  function handleTouchMove(e) {
    if (e.touches.length === 1) {
      e.stopPropagation();
      const touch = e.touches[0];
      const offset = getOffsetXY(touch);
      const point = transformToScreen(offset.x, offset.y);
      const dx = point.x - mouseX;
      const dy = point.y - mouseY;
      if (dx !== 0 && dy !== 0) {
        triggerPanStart();
      }
      mouseX = point.x;
      mouseY = point.y;
      internalMoveBy(dx, dy);
    } else if (e.touches.length === 2) {
      multiTouch = true;
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const currentPinchLength = getPinchZoomLength(t1, t2);
      const scaleMultiplier = 1 + (currentPinchLength / pinchZoomLength - 1) * pinchSpeed;
      const firstTouchPoint = getOffsetXY(t1);
      const secondTouchPoint = getOffsetXY(t2);
      mouseX = (firstTouchPoint.x + secondTouchPoint.x) / 2;
      mouseY = (firstTouchPoint.y + secondTouchPoint.y) / 2;
      if (transformOrigin) {
        const offset = getTransformOriginOffset();
        mouseX = offset.x;
        mouseY = offset.y;
      }
      publicZoomTo(mouseX, mouseY, scaleMultiplier);
      pinchZoomLength = currentPinchLength;
      e.stopPropagation();
      e.preventDefault();
    }
  }
  function handleTouchEnd(e) {
    if (e.touches.length > 0) {
      const offset = getOffsetXY(e.touches[0]);
      const point = transformToScreen(offset.x, offset.y);
      mouseX = point.x;
      mouseY = point.y;
    }
  }
  function getPinchZoomLength(finger1, finger2) {
    const dx = finger1.clientX - finger2.clientX;
    const dy = finger1.clientY - finger2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function onDoubleClick(e) {
    beforeDoubleClick(e);
  }
  function onMouseDown(e) {
    if (touchInProgress) {
      e.stopPropagation();
      return false;
    }
    if (e.target !== owner && e.target !== domElement)
      return;
    const isLeftButton = e.button === 1 && window.event !== null || e.button === 0;
    if (!isLeftButton)
      return;
    smoothScroll.cancel();
    const offset = getOffsetXY(e);
    const point = transformToScreen(offset.x, offset.y);
    mouseX = point.x;
    mouseY = point.y;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return false;
  }
  function onMouseMove(e) {
    if (touchInProgress)
      return;
    if (e.ctrlKey)
      return;
    triggerPanStart();
    const offset = getOffsetXY(e);
    const point = transformToScreen(offset.x, offset.y);
    const dx = point.x - mouseX;
    const dy = point.y - mouseY;
    mouseX = point.x;
    mouseY = point.y;
    internalMoveBy(dx, dy);
  }
  function onMouseUp() {
    triggerPanEnd();
    releaseDocumentMouse();
  }
  function releaseDocumentMouse() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    panstartFired = false;
  }
  function releaseTouches() {
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
    document.removeEventListener("touchcancel", handleTouchEnd);
    panstartFired = false;
    multiTouch = false;
    touchInProgress = false;
  }
  function onMouseWheel(e) {
    smoothScroll.cancel();
    let delta = e.deltaY;
    if (e.deltaMode > 0)
      delta *= 100;
    const scaleMultiplier = getScaleMultiplier(delta);
    if (scaleMultiplier !== 1) {
      const offset = transformOrigin ? getTransformOriginOffset() : getOffsetXY(e);
      publicZoomTo(offset.x, offset.y, scaleMultiplier);
    }
  }
  function getOffsetXY(e) {
    const ownerRect = owner.getBoundingClientRect();
    const offsetX = e.clientX - ownerRect.left;
    const offsetY = e.clientY - ownerRect.top;
    return { x: offsetX, y: offsetY };
  }
  function getTransformOriginOffset() {
    const ownerRect = owner.getBoundingClientRect();
    return {
      x: ownerRect.width * transformOrigin.x,
      y: ownerRect.height * transformOrigin.y
    };
  }
  function publicZoomTo(clientX, clientY, scaleMultiplier) {
    smoothScroll.cancel();
    cancelZoomAnimation();
    return zoomByRatio(clientX, clientY, scaleMultiplier);
  }
  function cancelZoomAnimation() {
    if (zoomToAnimation) {
      zoomToAnimation.cancel();
      zoomToAnimation = null;
    }
  }
  function getScaleMultiplier(delta) {
    const sign = Math.sign(delta);
    const deltaAdjustedSpeed = Math.min(0.25, Math.abs(speed * delta / 128));
    return 1 - sign * deltaAdjustedSpeed;
  }
  function triggerPanStart() {
    if (!panstartFired) {
      panstartFired = true;
      smoothScroll.start();
    }
  }
  function triggerPanEnd() {
    if (panstartFired) {
      if (!multiTouch)
        smoothScroll.stop();
    }
  }
}
function parseTransformOrigin(options) {
  if (!options)
    return;
  if (typeof options === "object") {
    if (!isNumber(options.x) || !isNumber(options.y))
      failTransformOrigin(options);
    return options;
  }
  failTransformOrigin();
}
function failTransformOrigin(options) {
  throw new Error([
    "Cannot parse transform origin.",
    "Some good examples:",
    '  "center center" can be achieved with {x: 0.5, y: 0.5}',
    '  "top center" can be achieved with {x: 0.5, y: 0}',
    '  "bottom right" can be achieved with {x: 1, y: 1}'
  ].join("\n"));
}
function validateBounds(bounds) {
  const boundsType = typeof bounds;
  if (boundsType === "undefined" || boundsType === "boolean")
    return;
  const validBounds = isNumber(bounds.left) && isNumber(bounds.top) && isNumber(bounds.bottom) && isNumber(bounds.right);
  if (!validBounds)
    throw new Error("Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}");
}
function isNumber(x) {
  return Number.isFinite(x);
}
function isNaN2(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }
  return value !== value;
}

// src/helpers/rectanglesIntersect.ts
function rectanglesIntersect(rectA, rectB) {
  const aLeftOfB = rectA.x2 < rectB.x1;
  const aRightOfB = rectA.x1 > rectB.x2;
  const aAboveB = rectA.y1 > rectB.y2;
  const aBelowB = rectA.y2 < rectB.y1;
  return !(aLeftOfB || aRightOfB || aAboveB || aBelowB);
}

// src/helpers/canSocketsConnect.ts
var canSocketsConnect_default = (output, input) => {
  return input.type.includes(output.type) || input.type.includes("*");
};

// src/helpers/diffObjects.ts
function diffObjects(alpha, beta) {
  if (alpha === void 0 && beta === void 0) {
    return;
  }
  const type = Array.isArray(alpha) ? "array" : typeof alpha;
  if (type === "string" || type === "boolean" || type === "number") {
    if (alpha === beta)
      return;
    return beta;
  }
  if (Array.isArray(alpha)) {
    const arrDiff = alpha.map((v, i) => {
      if (typeof beta === "object" && i in beta)
        return diffObjects(v, beta[i]);
      return beta[i];
    });
    if (!arrDiff.length || arrDiff.length === 1 && !arrDiff[0])
      return;
    return arrDiff;
  }
  if (!alpha)
    return beta;
  const keys = Object.keys(alpha);
  const diff = {};
  let changed = false;
  keys.forEach((k) => {
    const _diff = diffObjects(alpha[k], beta[k]);
    if (_diff !== void 0) {
      changed = true;
      diff[k] = _diff;
    }
  });
  if (!changed)
    return;
  return diff;
}
function diffBoth(alpha, beta) {
  return [diffObjects(alpha, beta), diffObjects(beta, alpha)];
}
function mergeObjects(alpha, beta) {
  const type = typeof alpha;
  if (type === "string" || type === "boolean" || type === "number") {
    return beta;
  }
  if (Array.isArray(alpha)) {
    return alpha.map((v, i) => {
      if (beta[i])
        return mergeObjects(v, beta[i]);
      return v;
    });
  }
  if (typeof alpha === "object") {
    const keys = Object.keys(beta);
    const diff = __spreadValues({}, alpha);
    keys.forEach((k) => {
      diff[k] = mergeObjects(alpha[k], beta[k]);
    });
    return diff;
  }
}

// src/model/NodeConnection.ts
var NodeConnection = class {
  constructor(system, { input, output }) {
    if (!output || !input)
      return;
    this.system = system;
    const children2 = input.node.getChildren();
    if (children2.includes(output.node))
      throw new Error("Circular reference");
    if (!canSocketsConnect_default(output, input))
      throw new Error("Can't connect type " + input.type + " to " + output.type);
    this.output = output;
    this.input = input;
    if (system.options.view) {
      this.view = new NodeConnectionView(this);
    }
    this.output.setConnection(this);
    this.input.setConnection(this);
    this.output.node.system.save();
  }
  joinNode(node2) {
    if (!this.isNodeJoinable(node2))
      return;
    this.remove();
    this.output.node.connectTo(node2, 0, node2.getInputs()[0].key);
    const inputs2 = this.input.node.getInputs();
    const indexIn = inputs2.indexOf(this.input);
    const keyIn = inputs2[indexIn].key;
    node2.connectTo(this.input.node, 0, keyIn);
  }
  isNodeJoinable(node2) {
    const outputType = this.input.type;
    const inputType = this.output.type;
    if (this.input.node === node2 || this.output.node === node2)
      return false;
    const nodeInputs = node2.getInputs();
    if (!nodeInputs.length || !nodeInputs.find((input) => input.type.includes(inputType))) {
      return false;
    }
    const nodeOutputs = node2.outputs;
    if (!nodeOutputs.length || !nodeOutputs.find((output) => outputType.includes(output.type) || outputType.includes("*"))) {
      return false;
    }
    return true;
  }
  remove() {
    if (this.view)
      this.view.remove();
    this.input.removeConnection();
    this.output.removeConnection(this);
  }
  deserialize() {
    return {
      id: this.input.node.attributes.id,
      out: this.indexOut,
      in: this.indexIn
    };
  }
  get indexOut() {
    return this.output.node.outputs.indexOf(this.output);
  }
  get indexIn() {
    return this.input.key;
  }
};

// src/model/Node.ts
var Node = class extends EventEmitter {
  constructor(system, props) {
    super();
    this.outputs = [];
    this._state = {};
    this.states = {};
    this.inputData = [];
    this.enableUpdates = true;
    this.refs = [];
    this.system = system;
    const { attributes, state = {} } = props;
    this._state = state;
    this.attributes = attributes;
    this.id = attributes.id;
    this._compute = memoize((_state = this._state) => this.compute(_state));
  }
  get state() {
    return this._state;
  }
  bindView(view) {
    this.view = view;
    this.outputs.forEach((o) => o.bindView());
    Object.values(this.states).forEach((i) => i.bindView());
  }
  setAttributes(attrib) {
    if (this.enableUpdates) {
      this.system.history.addAction();
    }
    this.attributes = __spreadValues(__spreadValues({}, this.attributes), attrib);
    this == null ? void 0 : this.view.updateViewPosition();
    this.save();
  }
  compute(paramaters) {
    return paramaters;
  }
  getChildren() {
    const outConnections = this.outputs.map((o) => o.connections).flat();
    const childNodes = outConnections.map((c) => c.input.node);
    return childNodes;
  }
  getSockets() {
    return [...this.getInputs(), ...this.outputs];
  }
  getInputs() {
    return Object.values(this.states).map((s) => s.getInput()).filter((s) => !!s);
  }
  setStateValue(key, value) {
    this.states[key].setValue(value);
  }
  getStateValue(key) {
    return this.state[key];
  }
  update() {
    if (!this.enableUpdates)
      return;
    this.computedData = this._compute(this.state);
    this.emit("computedData", this.computedData);
    this.refs.forEach((ref) => {
      ref.node.enableUpdates = false;
      ref.keyIn.forEach((keyIn) => {
        ref.node.setStateValue(keyIn, this.computedData);
      });
      ref.node.enableUpdates = true;
      ref.node.update();
    });
    this.save();
  }
  remove() {
    this.system.removeNode(this);
    this.destroyEventEmitter();
  }
  connectTo(node2, indexOut = 0, keyIn = node2.getInputs()[0].key) {
    var _a, _b, _c;
    const output = this.outputs[indexOut];
    const input = (_a = node2.states[keyIn]) == null ? void 0 : _a.getInput();
    if (!input)
      return;
    const connection = new NodeConnection(this.system, { output, input });
    (_b = output == null ? void 0 : output.view) == null ? void 0 : _b.updatePosition();
    (_c = input == null ? void 0 : input.view) == null ? void 0 : _c.updatePosition();
    const existingRef = this.refs.find((ref) => ref.node.id === node2.id && ref.indexOut === indexOut);
    if (existingRef) {
      existingRef.keyIn = [...existingRef.keyIn, keyIn];
    } else {
      this.refs.push({ node: node2, keyIn: [keyIn], indexOut });
    }
    this.update();
    return connection;
  }
  disconnectFrom(node2, keyIn, indexOut) {
    this.refs = this.refs.filter((ref) => {
      if (ref.indexOut !== indexOut)
        return false;
      ref.keyIn.splice(ref.keyIn.indexOf(keyIn), 1);
      if (ref.keyIn.length === 0)
        return false;
      return true;
    });
    this.update();
  }
  deserialize() {
    const attributes = Object.assign({}, this.attributes);
    attributes.refs = this.outputs.map((o) => o.connections).flat().map((c) => c.deserialize());
    const state = {};
    Object.values(this.states).forEach((s) => {
      state[s.key] = s.getValue();
    });
    return Object.assign({}, {
      attributes,
      state
    });
  }
  save() {
    this.system.save();
  }
};

// src/nodes/Boolean.ts
var Boolean_default = {
  title: "Boolean",
  type: "boolean",
  outputs: ["boolean"],
  parameters: {
    value: {
      type: "boolean",
      defaultValue: false
    }
  },
  compute({ value = false }) {
    return value;
  }
};

// src/nodes/Math.ts
var node = {
  title: "Math",
  type: "math",
  outputs: ["number", "number"],
  parameters: {
    mode: {
      type: "whatever",
      internal: true,
      inputType: "selection",
      label: false,
      defaultValue: "add",
      values: ["add", "multiply", "subtract"]
    },
    a: {
      type: "number",
      defaultValue: 0,
      label: false
    },
    b: {
      type: "number",
      defaultValue: 0,
      label: false
    }
  },
  compute({ mode, a, b }) {
    switch (mode) {
      case "multiply":
        return a * b;
      case "subtract":
        return a - b;
      default:
        return a + b;
    }
  }
};
var Math_default = node;

// src/nodes/Number.ts
var Number_default = {
  title: "Number",
  type: "number",
  outputs: ["number"],
  parameters: {
    value: {
      type: "number",
      internal: true,
      label: false,
      defaultValue: 0
    }
  },
  compute({ value = 0 }) {
    return value;
  }
};

// ../../node_modules/.pnpm/svelte@3.44.2/node_modules/svelte/internal/index.mjs
function noop() {
}
var identity = (x) => x;
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store3, ...callbacks) {
  if (store3 == null) {
    return noop;
  }
  const unsub = store3.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function component_subscribe(component, store3, callback) {
  component.$$.on_destroy.push(subscribe(store3, callback));
}
var is_client = typeof window !== "undefined";
var now = is_client ? () => window.performance.now() : () => Date.now();
var raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
var tasks = new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node2) {
  target.appendChild(node2);
}
function get_root_for_style(node2) {
  if (!node2)
    return document;
  const root = node2.getRootNode ? node2.getRootNode() : node2.ownerDocument;
  if (root && root.host) {
    return root;
  }
  return node2.ownerDocument;
}
function append_empty_stylesheet(node2) {
  const style_element = element("style");
  append_stylesheet(get_root_for_style(node2), style_element);
  return style_element;
}
function append_stylesheet(node2, style) {
  append(node2.head || node2, style);
}
function insert(target, node2, anchor) {
  target.insertBefore(node2, anchor || null);
}
function detach(node2) {
  node2.parentNode.removeChild(node2);
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name2) {
  return document.createElement(name2);
}
function svg_element(name2) {
  return document.createElementNS("http://www.w3.org/2000/svg", name2);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node2, event, handler, options) {
  node2.addEventListener(event, handler, options);
  return () => node2.removeEventListener(event, handler, options);
}
function attr(node2, attribute, value) {
  if (value == null)
    node2.removeAttribute(attribute);
  else if (node2.getAttribute(attribute) !== value)
    node2.setAttribute(attribute, value);
}
function set_custom_element_data(node2, prop, value) {
  if (prop in node2) {
    node2[prop] = typeof node2[prop] === "boolean" && value === "" ? true : value;
  } else {
    attr(node2, prop, value);
  }
}
function to_number(value) {
  return value === "" ? null : +value;
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data)
    text2.data = data;
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function set_style(node2, key, value, important) {
  node2.style.setProperty(key, value, important ? "important" : "");
}
function toggle_class(element2, name2, toggle) {
  element2.classList[toggle ? "add" : "remove"](name2);
}
function custom_event(type, detail, bubbles = false) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, false, detail);
  return e;
}
function attribute_to_object(attributes) {
  const result = {};
  for (const attribute of attributes) {
    result[attribute.name] = attribute.value;
  }
  return result;
}
var active_docs = new Set();
var active = 0;
function hash(str) {
  let hash2 = 5381;
  let i = str.length;
  while (i--)
    hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
  return hash2 >>> 0;
}
function create_rule(node2, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = "{\n";
  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
  }
  const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
  const name2 = `__svelte_${hash(rule)}_${uid}`;
  const doc = get_root_for_style(node2);
  active_docs.add(doc);
  const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = append_empty_stylesheet(node2).sheet);
  const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});
  if (!current_rules[name2]) {
    current_rules[name2] = true;
    stylesheet.insertRule(`@keyframes ${name2} ${rule}`, stylesheet.cssRules.length);
  }
  const animation = node2.style.animation || "";
  node2.style.animation = `${animation ? `${animation}, ` : ""}${name2} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name2;
}
function delete_rule(node2, name2) {
  const previous = (node2.style.animation || "").split(", ");
  const next = previous.filter(name2 ? (anim) => anim.indexOf(name2) < 0 : (anim) => anim.indexOf("__svelte") === -1);
  const deleted = previous.length - next.length;
  if (deleted) {
    node2.style.animation = next.join(", ");
    active -= deleted;
    if (!active)
      clear_rules();
  }
}
function clear_rules() {
  raf(() => {
    if (active)
      return;
    active_docs.forEach((doc) => {
      const stylesheet = doc.__svelte_stylesheet;
      let i = stylesheet.cssRules.length;
      while (i--)
        stylesheet.deleteRule(i);
      doc.__svelte_rules = {};
    });
    active_docs.clear();
  });
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
var flushing = false;
var seen_callbacks = new Set();
function flush() {
  if (flushing)
    return;
  flushing = true;
  do {
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
var promise;
function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }
  return promise;
}
function dispatch(node2, direction, kind) {
  node2.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
}
var outroing = new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}
var null_transition = { duration: 0 };
function create_bidirectional_transition(node2, fn, params, intro) {
  let config = fn(node2, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;
  function clear_animation() {
    if (animation_name)
      delete_rule(node2, animation_name);
  }
  function init2(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }
  function go(b) {
    const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop, css } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };
    if (!b) {
      program.group = outros;
      outros.r += 1;
    }
    if (running_program || pending_program) {
      pending_program = program;
    } else {
      if (css) {
        clear_animation();
        animation_name = create_rule(node2, t, b, duration, delay, easing, css);
      }
      if (b)
        tick2(0, 1);
      running_program = init2(program, duration);
      add_render_callback(() => dispatch(node2, b, "start"));
      loop((now2) => {
        if (pending_program && now2 > pending_program.start) {
          running_program = init2(pending_program, duration);
          pending_program = null;
          dispatch(node2, running_program.b, "start");
          if (css) {
            clear_animation();
            animation_name = create_rule(node2, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }
        if (running_program) {
          if (now2 >= running_program.end) {
            tick2(t = running_program.b, 1 - t);
            dispatch(node2, running_program.b, "end");
            if (!pending_program) {
              if (running_program.b) {
                clear_animation();
              } else {
                if (!--running_program.group.r)
                  run_all(running_program.group.c);
              }
            }
            running_program = null;
          } else if (now2 >= running_program.start) {
            const p = now2 - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick2(t, 1 - t);
          }
        }
        return !!(running_program || pending_program);
      });
    }
  }
  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },
    end() {
      clear_animation();
      running_program = pending_program = null;
    }
  };
}
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node2, destroy, create_each_block9, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};
  while (i--)
    old_indexes[old_blocks[i].key] = i;
  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;
  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);
    if (!block) {
      block = create_each_block9(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }
    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes)
      deltas.set(key, Math.abs(i - old_indexes[key]));
  }
  const will_move = new Set();
  const did_move = new Set();
  function insert2(block) {
    transition_in(block, 1);
    block.m(node2, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }
  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert2(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert2(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }
  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key))
      destroy(old_block, lookup);
  }
  while (n)
    insert2(new_blocks[n - 1]);
  return new_blocks;
}
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, on_mount, on_destroy, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance17, create_fragment17, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance17 ? instance17(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment17 ? create_fragment17($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};
var SvelteComponentDev = class extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }
    super();
  }
  $destroy() {
    super.$destroy();
    this.$destroy = () => {
      console.warn("Component was already destroyed");
    };
  }
  $capture_state() {
  }
  $inject_state() {
  }
};

// ../ui/src/lib/helpers/isBrowser.ts
function getBrowser() {
  return "window" in globalThis;
}
var isBrowser = getBrowser();

// ../../node_modules/.pnpm/svelte@3.44.2/node_modules/svelte/easing/index.mjs
function backInOut(t) {
  const s = 1.70158 * 1.525;
  if ((t *= 2) < 1)
    return 0.5 * (t * t * ((s + 1) * t - s));
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}

// ../../node_modules/.pnpm/svelte@3.44.2/node_modules/svelte/transition/index.mjs
function fade(node2, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node2).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function slide(node2, { delay = 0, duration = 400, easing = cubicOut } = {}) {
  const style = getComputedStyle(node2);
  const opacity = +style.opacity;
  const height = parseFloat(style.height);
  const padding_top = parseFloat(style.paddingTop);
  const padding_bottom = parseFloat(style.paddingBottom);
  const margin_top = parseFloat(style.marginTop);
  const margin_bottom = parseFloat(style.marginBottom);
  const border_top_width = parseFloat(style.borderTopWidth);
  const border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};height: ${t * height}px;padding-top: ${t * padding_top}px;padding-bottom: ${t * padding_bottom}px;margin-top: ${t * margin_top}px;margin-bottom: ${t * margin_bottom}px;border-top-width: ${t * border_top_width}px;border-bottom-width: ${t * border_bottom_width}px;`
  };
}
function scale(node2, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node2);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
  };
}

// ../ui/src/lib/icons/index.ts
var icons_exports = {};
__export(icons_exports, {
  arrow: () => arrow_default,
  branch: () => branch_default,
  checkmark: () => checkmark_default,
  cog: () => cog_default,
  cross: () => cross_default,
  exclamation: () => exclamation_default,
  folder: () => folder_default,
  hand: () => hand_default,
  leaf: () => leaf_default,
  pointing: () => pointing_default,
  question: () => question_default,
  stem: () => stem_default,
  triangle: () => triangle_default,
  warning: () => warning_default
});

// ../ui/src/lib/icons/arrow.svg?raw
var arrow_default = '<?xml version="1.0" encoding="utf-8"?>\n<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version="1.2" baseProfile="tiny" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n	 x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" xml:space="preserve">\n</svg>\n';

// ../ui/src/lib/icons/branch.svg?raw
var branch_default = '<svg\n  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <defs>\n    <style>.cls-1{fill:none;stroke:#fff;stroke-width:5px;}</style>\n  </defs>\n  <title>branch</title>\n  <path class="cls-1" d="M49.59,57.35,72.15,38.69"/>\n  <path class="cls-1" d="M51.58,29.45,38,11.21"/>\n  <path class="cls-1" d="M53.14,82.61,21.78,55.74"/>\n  <path class="cls-1" d="M33.46,47.91l4,21"/>\n  <polyline class="cls-1" points="56 97 50 58 51 28 56 16"/>\n</svg>';

// ../ui/src/lib/icons/checkmark.svg?raw
var checkmark_default = '<svg id="e7691b6e-31fa-49a4-aaec-be19b623d191" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style>.b50603dd-20d5-40a2-a0ce-2fdf3b92ec21{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:5px;}</style></defs><title>checkmark</title><path class="b50603dd-20d5-40a2-a0ce-2fdf3b92ec21" d="M75.5,30,40.43,72.47a2,2,0,0,1-3.08,0L24.5,57"/></svg>';

// ../ui/src/lib/icons/cog.svg?raw
var cog_default = '<svg\n  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n<defs>\n	<style>\n		circle, path{\n			fill:none;\n			stroke: var(--text, white);\n			stroke-width: 5px;\n		}\n	</style>\n</defs>\n	<circle class="cls-1" cx="50.37" cy="50.5" r="17.23"/>\n  <path class="cls-1" d="M38.07,20.49,32.17,8.05,50.83,4.41l.61,13.8,12.13,2.28L68.73,8.05l14,10.16-9,10L81.17,38.7l12-5.47,3.34,17.3H81.93L80.57,63l12.59,6.37L82.7,83.62l-9-9.86L63.58,81.19l5.15,11.23-17.9,3.64V82.71L38.08,81.19,32.77,92.42,17.44,82.71l10.17-8.35L19.11,63,8.19,69.36,4.4,50.56H17.45l1.67-13.81L8.2,30.84l9.25-13.2,11.08,8.81Z"/>\n</svg>\n';

// ../ui/src/lib/icons/cross.svg?raw
var cross_default = '<svg\n  xmlns="http://www.w3.org/2000/svg"\n	viewBox="0 0 100 100">\n  <line fill="none" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" x1="27.836" y1="72.164" x2="72.164" y2="27.836"/>\n  <line fill="none" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" x1="27.836" y1="27.988" x2="72.164" y2="72.012"/>\n</svg>\n';

// ../ui/src/lib/icons/exclamation.svg?raw
var exclamation_default = '<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M50.552 59.3295L39.0695 13.7056H60.2078L50.552 59.3295Z" stroke="white" stroke-width="5" stroke-linejoin="round"/>\n<path d="M58.4305 77.2411C58.4305 80.8276 55.4725 83.7944 51.7497 83.7944C48.0269 83.7944 45.0688 80.8276 45.0688 77.2411C45.0688 73.6546 48.0269 70.6878 51.7497 70.6878C55.4725 70.6878 58.4305 73.6546 58.4305 77.2411Z" stroke="white" stroke-width="5"/>\n</svg>\n';

// ../ui/src/lib/icons/folder.svg?raw
var folder_default = '<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n\n<defs>\n	<style>\n		path{\n			stroke: white;\n			stroke-width: 5px;\n		}\n	</style>\n</defs>\n\n<path d="M23.5167 72.9513V32.1483H82.1056L87.6855 37.0307V76.09L82.1056 78.5312H29.4453L23.5167 72.9513Z" />\n<path d="M23.2747 73.6489L12.3145 30.0463L15.8885 21.4688H71.8808L75.693 32.9055" />\n<path d="M25.488 43.9781H86.7394" />\n</svg>\n';

// ../ui/src/lib/icons/hand.svg?raw
var hand_default = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n<path d="M70.5 26.5L77.5 23.5L82 32V69L77.5 82L64.5 92.5H47L32 82L18 46L21 40H27L35 57.5V15.5L39.5 11L45.5 13.5M70.5 26.5L69 15.5L58.5 14M70.5 26.5V57.5M58.5 14L55 8L45.5 13.5M58.5 14V49M45.5 13.5V49" stroke-width="5"/>\n</svg>\n';

// ../ui/src/lib/icons/leaf.svg?raw
var leaf_default = '<svg\n  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <defs>\n    <style>.cls-1{fill:none;stroke:#fff;stroke-width:5px;}</style>\n  </defs>\n  <title>leaf</title>\n  <path class="cls-1" d="M50.69,96.21,72.86,72.33,77,47,65.91,21.7,50.66,4.5"/>\n  <path class="cls-1" d="M53.37,96.21,31.2,72.33,27.07,47,38.15,21.7,53.4,4.5"/>\n</svg>';

// ../ui/src/lib/icons/pointing.svg?raw
var pointing_default = '<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M30.2312 46.4809V15.6962L33.3006 8H40.8035L44.3844 11.0785V29.7203H52.9104L55.9798 33.8249H65.0173L68.0867 38.9557L76.2717 40.1529L79 56.0583L73.7139 72.9899L66.8931 93H36.5405L30.2312 75.5553L20 60.334L21.7052 50.2435L30.2312 46.4809ZM30.2312 46.4809V58.1107M44.3844 29.3783V46.3099M56.4913 34.5091V46.3099M68.7688 39.2978V50.4145" stroke="white" stroke-width="5"/>\n</svg>\n';

// ../ui/src/lib/icons/stem.svg?raw
var stem_default = '<svg\n  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <defs>\n    <style>.cls-1{fill:none;stroke:#fff;stroke-width:5px;}</style>\n  </defs>\n  <title>stem</title>\n  <path class="cls-1" d="M49,95.5l8.66-23.19L43.24,46.07l10.59-21L43.24,4.5"/>\n</svg>';

// ../ui/src/lib/icons/triangle.svg?raw
var triangle_default = '<svg\n  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" xml:space="preserve">\n  <polygon fill="none" stroke="#FFFFFF" stroke-width="5" stroke-miterlimit="10" points="33.5,73.759 33.5,26.241 67.441,50 "/>\n</svg>\n';

// ../ui/src/lib/icons/warning.svg?raw
var warning_default = '<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M54.7631 15.1799L91.7944 79.3201C93.9114 82.9867 91.2652 87.5701 87.0313 87.5701H12.9687C8.73476 87.5701 6.08857 82.9867 8.20552 79.3201L45.2368 15.1799C47.3538 11.5133 52.6462 11.5133 54.7631 15.1799Z" stroke="white" stroke-width="5" stroke-linejoin="round"/>\n<ellipse cx="50.0578" cy="73.7787" rx="5.98166" ry="5.89858" fill="white"/>\n<path d="M52.9755 60.2707C52.5275 63.7615 47.4723 63.7615 47.0243 60.2707L43.5981 33.5748C43.3678 31.781 44.7652 30.1929 46.5736 30.1929L53.4261 30.1929C55.2346 30.1929 56.6319 31.781 56.4017 33.5748L52.9755 60.2707Z" fill="white"/>\n</svg>\n';

// ../ui/src/lib/icons/question.svg?raw
var question_default = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n<path d="M32.7792 25.4477L45.6598 15.6472L61.6205 20.4075L67.2208 32.728L54.3402 46.4486L50.9801 59.3291V63.9218" stroke-width="8"/>\n<path d="M47.3642 83.3434L44.983 79.0169L46.821 74.3331L51.3861 73.0881L55.5363 75.0446L56.307 80.8548L52.3347 84.3528L47.3642 83.3434Z" />\n</svg>\n\n';

// ../ui/src/lib/Icon.svelte
function create_fragment(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.c = noop;
      attr(div, "class", "icon-wrapper");
      toggle_class(div, "active", ctx[0]);
      toggle_class(div, "dark", ctx[1]);
      toggle_class(div, "circle", ctx[2]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      div.innerHTML = ctx[3];
    },
    p(ctx2, [dirty]) {
      if (dirty & 8)
        div.innerHTML = ctx2[3];
      ;
      if (dirty & 1) {
        toggle_class(div, "active", ctx2[0]);
      }
      if (dirty & 2) {
        toggle_class(div, "dark", ctx2[1]);
      }
      if (dirty & 4) {
        toggle_class(div, "circle", ctx2[2]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let icon;
  let { name: name2 = "triangle" } = $$props;
  let { active: active2 = false } = $$props;
  let { dark = false } = $$props;
  let { circle = false } = $$props;
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(4, name2 = $$props2.name);
    if ("active" in $$props2)
      $$invalidate(0, active2 = $$props2.active);
    if ("dark" in $$props2)
      $$invalidate(1, dark = $$props2.dark);
    if ("circle" in $$props2)
      $$invalidate(2, circle = $$props2.circle);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      $:
        $$invalidate(3, icon = name2 in icons_exports ? icons_exports[name2] : name2.toString() + " icon not found");
    }
  };
  return [active2, dark, circle, icon, name2];
}
var Icon = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>.icon-wrapper{width:var(--width, fit-content);height:var(--height, 100%);object-fit:cover;box-sizing:border-box;min-width:20px;min-height:20px;stroke:var(--color)}.icon-wrapper.circle{border-radius:50%;padding:5px;border:solid 2px white}.icon-wrapper>:global(svg){width:100%}.circle::after{content:"";display:block;padding-bottom:100%}.icon-wrapper>:global(*){stroke:var(--stroke, white);fill:var(--fill, none)}.active :global(*){color:var(--text-color, white)}.dark :global(*){stroke:#303030}.icon-wrapper :global(svg > *){transition:stroke 0.1s ease;stroke-width:5px}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance, create_fragment, safe_not_equal, { name: 4, active: 0, dark: 1, circle: 2 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["name", "active", "dark", "circle"];
  }
  get name() {
    return this.$$.ctx[4];
  }
  set name(name2) {
    this.$$set({ name: name2 });
    flush();
  }
  get active() {
    return this.$$.ctx[0];
  }
  set active(active2) {
    this.$$set({ active: active2 });
    flush();
  }
  get dark() {
    return this.$$.ctx[1];
  }
  set dark(dark) {
    this.$$set({ dark });
    flush();
  }
  get circle() {
    return this.$$.ctx[2];
  }
  set circle(circle) {
    this.$$set({ circle });
    flush();
  }
};
customElements.define("plant-icon", Icon);
var Icon_default = Icon;

// ../ui/src/lib/Button.svelte
function create_if_block_1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_2, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[6])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_else_block(ctx) {
  let plant_icon;
  return {
    c() {
      plant_icon = element("plant-icon");
      set_custom_element_data(plant_icon, "name", ctx[1]);
      set_custom_element_data(plant_icon, "active", ctx[0]);
    },
    m(target, anchor) {
      insert(target, plant_icon, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 2) {
        set_custom_element_data(plant_icon, "name", ctx2[1]);
      }
      if (dirty & 1) {
        set_custom_element_data(plant_icon, "active", ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(plant_icon);
    }
  };
}
function create_if_block_2(ctx) {
  let icon_1;
  let current;
  icon_1 = new Icon_default({
    props: {
      name: ctx[1],
      active: ctx[0]
    }
  });
  return {
    c() {
      create_component(icon_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(icon_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_1_changes = {};
      if (dirty & 2)
        icon_1_changes.name = ctx2[1];
      if (dirty & 1)
        icon_1_changes.active = ctx2[0];
      icon_1.$set(icon_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon_1, detaching);
    }
  };
}
function create_if_block(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_fragment2(ctx) {
  let button;
  let t0;
  let t1;
  let div;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[1] && create_if_block_1(ctx);
  let if_block1 = ctx[2] && create_if_block(ctx);
  return {
    c() {
      button = element("button");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      div = element("div");
      div.innerHTML = `<slot></slot>`;
      this.c = noop;
      attr(div, "class", "content");
      button.disabled = ctx[4];
      toggle_class(button, "active", ctx[0]);
      toggle_class(button, "useActive", ctx[3]);
      toggle_class(button, "only-icon", !ctx[2]);
      toggle_class(button, "has-icon", !!ctx[1]);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if (if_block0)
        if_block0.m(button, null);
      append(button, t0);
      if (if_block1)
        if_block1.m(button, null);
      append(button, t1);
      append(button, div);
      ctx[8](button);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[7]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(button, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[2]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(button, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (!current || dirty & 16) {
        button.disabled = ctx2[4];
      }
      if (dirty & 1) {
        toggle_class(button, "active", ctx2[0]);
      }
      if (dirty & 8) {
        toggle_class(button, "useActive", ctx2[3]);
      }
      if (dirty & 4) {
        toggle_class(button, "only-icon", !ctx2[2]);
      }
      if (dirty & 2) {
        toggle_class(button, "has-icon", !!ctx2[1]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      ctx[8](null);
      mounted = false;
      dispose();
    }
  };
}
function instance2($$self, $$props, $$invalidate) {
  let notWebComponent;
  let { icon = void 0 } = $$props;
  let { name: name2 = "" } = $$props;
  let { active: active2 = false } = $$props;
  let { useActive = false } = $$props;
  let { disabled = false } = $$props;
  let buttonEl;
  const dispatch2 = createEventDispatcher();
  const handleClick = () => {
    $$invalidate(0, active2 = !active2);
    dispatch2("click");
  };
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      buttonEl = $$value;
      $$invalidate(5, buttonEl);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("icon" in $$props2)
      $$invalidate(1, icon = $$props2.icon);
    if ("name" in $$props2)
      $$invalidate(2, name2 = $$props2.name);
    if ("active" in $$props2)
      $$invalidate(0, active2 = $$props2.active);
    if ("useActive" in $$props2)
      $$invalidate(3, useActive = $$props2.useActive);
    if ("disabled" in $$props2)
      $$invalidate(4, disabled = $$props2.disabled);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      $:
        $$invalidate(6, notWebComponent = buttonEl && !!buttonEl.parentElement);
    }
  };
  return [
    active2,
    icon,
    name2,
    useActive,
    disabled,
    buttonEl,
    notWebComponent,
    handleClick,
    button_binding
  ];
}
var Button = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}:global(.component-wrapper.fullWidth){width:100%}button.active.useActive{background-color:#65e2a0 !important}button.active.useActive>p{color:#303030 !important}button.active.useActive>:global(.icon-wrapper > svg > *){stroke:#303030 !important}button{position:relative;display:flex;align-items:center;height:40px;border-radius:5px;border:none;background-color:transparent;outline:none;margin:var(--margin, 0);transition:none;cursor:pointer;background-color:var(--bg, --foreground-color)}button:disabled{opacity:0.8;pointer-events:none}button.only-icon{width:40px}button.only-icon>:global(.icon-wrapper){left:9px}button.has-icon>:global(.icon-wrapper),button.has-icon plant-icon{position:absolute;top:9px;height:calc(100% - 18px)}button.has-icon>p{padding-left:30px}p{color:var(--text-color);font-weight:bolder;padding:0px 5px;white-space:nowrap;margin:0}.content{position:absolute;bottom:0px;left:0px;overflow:visible}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance2, create_fragment2, safe_not_equal, {
      icon: 1,
      name: 2,
      active: 0,
      useActive: 3,
      disabled: 4
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["icon", "name", "active", "useActive", "disabled"];
  }
  get icon() {
    return this.$$.ctx[1];
  }
  set icon(icon) {
    this.$$set({ icon });
    flush();
  }
  get name() {
    return this.$$.ctx[2];
  }
  set name(name2) {
    this.$$set({ name: name2 });
    flush();
  }
  get active() {
    return this.$$.ctx[0];
  }
  set active(active2) {
    this.$$set({ active: active2 });
    flush();
  }
  get useActive() {
    return this.$$.ctx[3];
  }
  set useActive(useActive) {
    this.$$set({ useActive });
    flush();
  }
  get disabled() {
    return this.$$.ctx[4];
  }
  set disabled(disabled) {
    this.$$set({ disabled });
    flush();
  }
};
customElements.define("plant-button", Button);
var Button_default = Button;

// ../ui/src/lib/helpers/createMessageStore.ts
var import_shortid = __toModule(require_shortid());

// ../../node_modules/.pnpm/svelte@3.44.2/node_modules/svelte/store/index.mjs
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}

// ../ui/src/lib/helpers/IMessage.ts
var MessageType;
(function(MessageType3) {
  MessageType3["INFO"] = "info";
  MessageType3["WARNING"] = "warning";
  MessageType3["ERROR"] = "error";
  MessageType3["SUCCESS"] = "success";
})(MessageType || (MessageType = {}));

// ../ui/src/lib/helpers/createMessageStore.ts
var createMessageFactory = (store3) => (content, options = {}) => {
  if (!content && !options)
    return;
  const hasValues = Array.isArray(options?.values);
  const message = {
    id: (0, import_shortid.default)(),
    type: MessageType.INFO,
    content,
    props: options.props,
    title: options?.title ?? options?.type,
    values: options?.values,
    timeout: options?.timeout
  };
  const p = new Promise((_res, _rej) => {
    message.resolve = _res;
    message.reject = _rej;
  });
  p.finally(() => store3.update((msgs) => msgs.filter((m) => m.id !== message.id)));
  if (options && "type" in options) {
    const t = options.type.toLowerCase();
    Object.values(MessageType).forEach((v) => {
      if (t === v)
        message.type = v;
    });
  }
  if (content instanceof Error) {
    message.type = MessageType.ERROR;
  }
  if (typeof message.timeout === "undefined") {
    let timeout;
    if (message.type === MessageType.SUCCESS) {
      timeout = 3e3;
    }
    if (message.type === MessageType.INFO) {
      timeout = 2e3;
    }
    if (message.type === MessageType.WARNING) {
      timeout = 7e3;
    }
    if (timeout && !hasValues) {
      message.timeout = timeout;
    }
  }
  if (!("title" in message)) {
    message.title = message.type.toUpperCase().slice(0, 1) + message.type.slice(1);
  }
  store3.update((messages) => [...messages, message]);
  if (message.timeout) {
    setTimeout(message.resolve, message.timeout);
  }
  return p;
};
var createMessageStore_default = () => {
  const store3 = writable([]);
  const createMessage3 = createMessageFactory(store3);
  return { store: store3, createMessage: createMessage3, MessageType };
};

// ../ui/src/lib/alert/AlertStore.ts
var { store: _store, createMessage, MessageType: MessageType2 } = createMessageStore_default();
var store = _store;

// ../ui/src/lib/alert/AlertWrapper.svelte
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_if_block2(ctx) {
  let div2;
  let div1;
  let div0;
  let button;
  let div;
  let t0;
  let t1;
  let current_block_type_index;
  let if_block1;
  let t2;
  let div1_class_value;
  let div1_transition;
  let div2_transition;
  let current;
  button = new Button_default({ props: { icon: "cross" } });
  button.$on("click", ctx[4]);
  let if_block0 = ctx[0].title && create_if_block_3(ctx);
  const if_block_creators = [create_if_block_22, create_else_block2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (typeof ctx2[0].content === "string")
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block2 = ctx[0].values && create_if_block_12(ctx);
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      div = element("div");
      create_component(button.$$.fragment);
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      set_style(div, "display", "contents");
      set_style(div, "--bg", "transparent");
      attr(div0, "class", "close-wrapper");
      attr(div1, "class", div1_class_value = "alert-wrapper alert-" + ctx[0].type);
      toggle_class(div1, "isInverted", ctx[1]);
      attr(div2, "class", "alert-container");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div1);
      append(div1, div0);
      append(div0, div);
      mount_component(button, div, null);
      append(div1, t0);
      if (if_block0)
        if_block0.m(div1, null);
      append(div1, t1);
      if_blocks[current_block_type_index].m(div1, null);
      append(div1, t2);
      if (if_block2)
        if_block2.m(div1, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[0].title) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_3(ctx2);
          if_block0.c();
          if_block0.m(div1, t1);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(div1, t2);
      }
      if (ctx2[0].values) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_12(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div1, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (!current || dirty & 1 && div1_class_value !== (div1_class_value = "alert-wrapper alert-" + ctx2[0].type)) {
        attr(div1, "class", div1_class_value);
      }
      if (dirty & 3) {
        toggle_class(div1, "isInverted", ctx2[1]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(if_block1);
      transition_in(if_block2);
      add_render_callback(() => {
        if (!div1_transition)
          div1_transition = create_bidirectional_transition(div1, scale, {}, true);
        div1_transition.run(1);
      });
      add_render_callback(() => {
        if (!div2_transition)
          div2_transition = create_bidirectional_transition(div2, fade, {}, true);
        div2_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      transition_out(if_block1);
      transition_out(if_block2);
      if (!div1_transition)
        div1_transition = create_bidirectional_transition(div1, scale, {}, false);
      div1_transition.run(0);
      if (!div2_transition)
        div2_transition = create_bidirectional_transition(div2, fade, {}, false);
      div2_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(button);
      if (if_block0)
        if_block0.d();
      if_blocks[current_block_type_index].d();
      if (if_block2)
        if_block2.d();
      if (detaching && div1_transition)
        div1_transition.end();
      if (detaching && div2_transition)
        div2_transition.end();
    }
  };
}
function create_if_block_3(ctx) {
  let h2;
  let t_value = ctx[0].title + "";
  let t;
  return {
    c() {
      h2 = element("h2");
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, h2, anchor);
      append(h2, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[0].title + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(h2);
    }
  };
}
function create_else_block2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [ctx[0].props];
  var switch_value = ctx[0].content;
  function switch_props(ctx2) {
    let switch_instance_props = {};
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty & 1 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(ctx2[0].props)]) : {};
      if (switch_value !== (switch_value = ctx2[0].content)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_22(ctx) {
  let p;
  let raw_value = ctx[0].content + "";
  return {
    c() {
      p = element("p");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 1 && raw_value !== (raw_value = ctx2[0].content + ""))
        p.innerHTML = raw_value;
      ;
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_12(ctx) {
  let div;
  let current;
  let each_value = ctx[0].values;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "options-wrapper");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = ctx2[0].values;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  let button;
  let div;
  let __bg_last;
  let __text_last;
  let current;
  function click_handler_1() {
    return ctx[5](ctx[6]);
  }
  button = new Button_default({ props: { name: ctx[6] } });
  button.$on("click", click_handler_1);
  return {
    c() {
      div = element("div");
      create_component(button.$$.fragment);
      set_style(div, "display", "contents");
      set_style(div, "--bg", __bg_last = "#303030");
      set_style(div, "--text", __text_last = "white");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(button, div, null);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const button_changes = {};
      if (dirty & 1)
        button_changes.name = ctx[6];
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(button, detaching);
    }
  };
}
function create_fragment3(ctx) {
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block2(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.c = noop;
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(window, "keydown", ctx[2]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function instance3($$self, $$props, $$invalidate) {
  let alert2;
  let isInverted;
  let $store;
  component_subscribe($$self, store, ($$value) => $$invalidate(3, $store = $$value));
  function handleKeyDown(ev) {
    if (ev.key === "Escape" && alert2) {
      alert2.reject();
    }
  }
  const click_handler = () => {
    alert2.reject();
  };
  const click_handler_1 = (value) => alert2.resolve(value);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 8) {
      $:
        $$invalidate(0, alert2 = $store[0]);
    }
    if ($$self.$$.dirty & 1) {
      $:
        if (alert2) {
          isBrowser && document.body.classList.add("overlay-visible");
        } else {
          isBrowser && document.body.classList.remove("overlay-visible");
        }
    }
    if ($$self.$$.dirty & 1) {
      $:
        $$invalidate(1, isInverted = alert2 && (alert2.type === "success" || alert2.type === "warning"));
    }
  };
  return [alert2, isInverted, handleKeyDown, $store, click_handler, click_handler_1];
}
var AlertWrapper = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>.alert-container{position:fixed;z-index:99999;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.493);display:grid;place-items:center;backdrop-filter:blur(5px) contrast(0.5)}.close-wrapper{position:absolute;top:0px;right:0px}h2{margin-bottom:10px}.alert-wrapper{min-width:200px;max-height:80vh;max-width:60vw;font-size:1.3em;white-space:pre-line;padding:25px;border-radius:30px;backdrop-filter:blur(10px) contrast(0.5) brightness(1.5);overflow-y:auto}.options-wrapper{padding-top:20px}.alert-info{background-color:#303030;color:white}.alert-success{background-color:#65e2a0;color:black;border-color:gray}.alert-warning{background-color:#fffd7b}.alert-error{background-color:#e26565;color:white}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance3, create_fragment3, safe_not_equal, {}, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
    }
  }
};
customElements.define("plant-alert-wrapper", AlertWrapper);

// ../ui/src/lib/toast/ToastStore.ts
var { store: _store2, createMessage: createMessage2 } = createMessageStore_default();
var store2 = _store2;

// ../ui/src/lib/toast/StackTrace.svelte
function get_each_context2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_if_block3(ctx) {
  let div;
  let p;
  let b;
  let t0_value = ctx[0].type + "";
  let t0;
  let t1;
  let t2;
  let t3_value = ctx[0].title + "";
  let t3;
  let t4;
  let pre;
  let code;
  let each_value = ctx[0].lines;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      p = element("p");
      b = element("b");
      t0 = text(t0_value);
      t1 = text(":");
      t2 = space();
      t3 = text(t3_value);
      t4 = space();
      pre = element("pre");
      code = element("code");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "wrapper");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, p);
      append(p, b);
      append(b, t0);
      append(b, t1);
      append(p, t2);
      append(p, t3);
      append(div, t4);
      append(div, pre);
      append(pre, code);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(code, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[0].type + ""))
        set_data(t0, t0_value);
      if (dirty & 1 && t3_value !== (t3_value = ctx2[0].title + ""))
        set_data(t3, t3_value);
      if (dirty & 1) {
        each_value = ctx2[0].lines;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(code, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block_23(ctx) {
  let t0;
  let strong;
  let t1;
  let t2_value = ctx[1].alias + "";
  let t2;
  return {
    c() {
      t0 = text("as ");
      strong = element("strong");
      t1 = text("$");
      t2 = text(t2_value);
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, strong, anchor);
      append(strong, t1);
      append(strong, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t2_value !== (t2_value = ctx2[1].alias + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(strong);
    }
  };
}
function create_if_block_13(ctx) {
  let t0;
  let i;
  let t1_value = ctx[1].location + "";
  let t1;
  let t2;
  return {
    c() {
      t0 = text("\xA0(");
      i = element("i");
      t1 = text(t1_value);
      t2 = text(")");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, i, anchor);
      append(i, t1);
      insert(target, t2, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t1_value !== (t1_value = ctx2[1].location + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(i);
      if (detaching)
        detach(t2);
    }
  };
}
function create_each_block2(ctx) {
  let t0;
  let strong;
  let t1_value = ctx[1].name + "";
  let t1;
  let if_block0_anchor;
  let br;
  let if_block0 = ctx[1].alias && create_if_block_23(ctx);
  let if_block1 = ctx[1].location && create_if_block_13(ctx);
  return {
    c() {
      t0 = text("at ");
      strong = element("strong");
      t1 = text(t1_value);
      if (if_block0)
        if_block0.c();
      if_block0_anchor = empty();
      if (if_block1)
        if_block1.c();
      br = element("br");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, strong, anchor);
      append(strong, t1);
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, if_block0_anchor, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, br, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t1_value !== (t1_value = ctx2[1].name + ""))
        set_data(t1, t1_value);
      if (ctx2[1].alias) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_23(ctx2);
          if_block0.c();
          if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[1].location) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_13(ctx2);
          if_block1.c();
          if_block1.m(br.parentNode, br);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(strong);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(if_block0_anchor);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(br);
    }
  };
}
function create_fragment4(ctx) {
  let if_block_anchor;
  let if_block = ctx[0] && create_if_block3(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.c = noop;
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block3(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance4($$self, $$props, $$invalidate) {
  let { stacktrace } = $$props;
  $$self.$$set = ($$props2) => {
    if ("stacktrace" in $$props2)
      $$invalidate(0, stacktrace = $$props2.stacktrace);
  };
  return [stacktrace];
}
var StackTrace = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>.wrapper{background-color:#303030;padding:10px;margin:0px;border-radius:5px;overflow-x:auto}pre{width:fit-content}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance4, create_fragment4, safe_not_equal, { stacktrace: 0 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["stacktrace"];
  }
  get stacktrace() {
    return this.$$.ctx[0];
  }
  set stacktrace(stacktrace) {
    this.$$set({ stacktrace });
    flush();
  }
};
var StackTrace_default = StackTrace;

// ../ui/src/lib/toast/Toast.svelte
function get_each_context3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
}
function create_if_block4(ctx) {
  let div6;
  let div5;
  let div3;
  let t0;
  let div1;
  let t1;
  let current_block_type_index;
  let if_block2;
  let t2;
  let div0;
  let t3;
  let t4;
  let div2;
  let icon_1;
  let div;
  let t5;
  let div4;
  let div4_style_value;
  let div5_class_value;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[6] && create_if_block_9(ctx);
  let if_block1 = ctx[0].title && create_if_block_8(ctx);
  const if_block_creators = [create_if_block_4, create_if_block_5, create_if_block_7];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (typeof ctx2[0].content === "string")
      return 0;
    if (ctx2[0].content instanceof Error)
      return 1;
    if (ctx2[0].content instanceof SvelteComponentDev)
      return 2;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx, -1))) {
    if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  let if_block3 = ctx[0].content instanceof Error && create_if_block_32(ctx);
  let if_block4 = ctx[0].values && create_if_block_14(ctx);
  icon_1 = new Icon_default({ props: { name: "cross" } });
  return {
    c() {
      div6 = element("div");
      div5 = element("div");
      div3 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      div1 = element("div");
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      div0 = element("div");
      if (if_block3)
        if_block3.c();
      t3 = space();
      if (if_block4)
        if_block4.c();
      t4 = space();
      div2 = element("div");
      div = element("div");
      create_component(icon_1.$$.fragment);
      t5 = space();
      div4 = element("div");
      attr(div0, "class", "button-wrapper");
      attr(div1, "class", "toast-text");
      set_style(div, "display", "contents");
      set_style(div, "--height", "fit-content");
      attr(div2, "class", "toast-close");
      attr(div3, "class", "toast-content");
      toggle_class(div3, "hasIcon", !!ctx[6]);
      attr(div4, "style", div4_style_value = `transition: width ${ctx[0].timeout}ms linear;`);
      attr(div4, "class", "toast-progress");
      toggle_class(div4, "animateProgress", ctx[2]);
      attr(div5, "class", div5_class_value = "toast toast-" + ctx[0].type);
      toggle_class(div5, "isInverted", ctx[5]);
      attr(div6, "class", "wrapper");
    },
    m(target, anchor) {
      insert(target, div6, anchor);
      append(div6, div5);
      append(div5, div3);
      if (if_block0)
        if_block0.m(div3, null);
      append(div3, t0);
      append(div3, div1);
      if (if_block1)
        if_block1.m(div1, null);
      append(div1, t1);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div1, null);
      }
      append(div1, t2);
      append(div1, div0);
      if (if_block3)
        if_block3.m(div0, null);
      append(div0, t3);
      if (if_block4)
        if_block4.m(div0, null);
      append(div3, t4);
      append(div3, div2);
      append(div2, div);
      mount_component(icon_1, div, null);
      append(div5, t5);
      append(div5, div4);
      ctx[11](div6);
      current = true;
      if (!mounted) {
        dispose = listen(div2, "click", ctx[10]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[6]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 64) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_9(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div3, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[0].title) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_8(ctx2);
          if_block1.c();
          if_block1.m(div1, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block2) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block2 = if_blocks[current_block_type_index];
          if (!if_block2) {
            if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block2.c();
          } else {
            if_block2.p(ctx2, dirty);
          }
          transition_in(if_block2, 1);
          if_block2.m(div1, t2);
        } else {
          if_block2 = null;
        }
      }
      if (ctx2[0].content instanceof Error) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_32(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(div0, t3);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      if (ctx2[0].values) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block_14(ctx2);
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(div0, null);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, () => {
          if_block4 = null;
        });
        check_outros();
      }
      if (dirty & 64) {
        toggle_class(div3, "hasIcon", !!ctx2[6]);
      }
      if (!current || dirty & 1 && div4_style_value !== (div4_style_value = `transition: width ${ctx2[0].timeout}ms linear;`)) {
        attr(div4, "style", div4_style_value);
      }
      if (dirty & 4) {
        toggle_class(div4, "animateProgress", ctx2[2]);
      }
      if (!current || dirty & 1 && div5_class_value !== (div5_class_value = "toast toast-" + ctx2[0].type)) {
        attr(div5, "class", div5_class_value);
      }
      if (dirty & 33) {
        toggle_class(div5, "isInverted", ctx2[5]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block2);
      transition_in(if_block3);
      transition_in(if_block4);
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block2);
      transition_out(if_block3);
      transition_out(if_block4);
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div6);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      if (if_block3)
        if_block3.d();
      if (if_block4)
        if_block4.d();
      destroy_component(icon_1);
      ctx[11](null);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_9(ctx) {
  let div;
  let icon_1;
  let div_1;
  let current;
  icon_1 = new Icon_default({
    props: { name: ctx[6], circle: true }
  });
  return {
    c() {
      div = element("div");
      div_1 = element("div");
      create_component(icon_1.$$.fragment);
      set_style(div_1, "display", "contents");
      set_style(div_1, "--width", "40px");
      set_style(div_1, "--height", "40px");
      attr(div, "class", "toast-icon");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, div_1);
      mount_component(icon_1, div_1, null);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_1_changes = {};
      if (dirty & 64)
        icon_1_changes.name = ctx2[6];
      icon_1.$set(icon_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon_1);
    }
  };
}
function create_if_block_8(ctx) {
  let h3;
  let t_value = ctx[0].title + "";
  let t;
  return {
    c() {
      h3 = element("h3");
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, h3, anchor);
      append(h3, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[0].title + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(h3);
    }
  };
}
function create_if_block_7(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = ctx[0].content;
  function switch_props(ctx2) {
    return {};
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (switch_value !== (switch_value = ctx2[0].content)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_5(ctx) {
  let p;
  let t0_value = ctx[0].content.message + "";
  let t0;
  let t1;
  let if_block_anchor;
  let current;
  let if_block = ctx[3] && create_if_block_6(ctx);
  return {
    c() {
      p = element("p");
      t0 = text(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t0);
      insert(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx2[0].content.message + ""))
        set_data(t0, t0_value);
      if (ctx2[3]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_6(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching)
        detach(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_4(ctx) {
  let p;
  let raw_value = ctx[0].content + "";
  return {
    c() {
      p = element("p");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      p.innerHTML = raw_value;
    },
    p(ctx2, dirty) {
      if (dirty & 1 && raw_value !== (raw_value = ctx2[0].content + ""))
        p.innerHTML = raw_value;
      ;
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_if_block_6(ctx) {
  let div;
  let stacktrace;
  let div_transition;
  let current;
  stacktrace = new StackTrace_default({
    props: {
      stacktrace: parseStackTrace_default(ctx[0].content.stack)
    }
  });
  return {
    c() {
      div = element("div");
      create_component(stacktrace.$$.fragment);
      attr(div, "class", "stack-trace");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(stacktrace, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const stacktrace_changes = {};
      if (dirty & 1)
        stacktrace_changes.stacktrace = parseStackTrace_default(ctx2[0].content.stack);
      stacktrace.$set(stacktrace_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(stacktrace.$$.fragment, local);
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, {}, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(stacktrace.$$.fragment, local);
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, {}, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(stacktrace);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_if_block_32(ctx) {
  let button;
  let div;
  let __text_last;
  let current;
  button = new Button_default({ props: { name: "> StackTrace" } });
  button.$on("click", ctx[7]);
  return {
    c() {
      div = element("div");
      create_component(button.$$.fragment);
      set_style(div, "display", "contents");
      set_style(div, "--margin", "5px 10px 5px -10px");
      set_style(div, "--text", __text_last = ctx[5] ? "#1a1a1a" : "white");
      set_style(div, "--bg", "transparent");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(button, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 32 && __text_last !== (__text_last = ctx2[5] ? "#1a1a1a" : "white")) {
        set_style(div, "--text", __text_last);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(button, detaching);
    }
  };
}
function create_if_block_14(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[0].values;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 49) {
        each_value = ctx2[0].values;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_else_block3(ctx) {
  let button;
  let div;
  let __text_last;
  let __bg_last;
  let current;
  function click_handler_2() {
    return ctx[9](ctx[13]);
  }
  button = new Button_default({ props: { name: ctx[13] } });
  button.$on("click", click_handler_2);
  return {
    c() {
      div = element("div");
      create_component(button.$$.fragment);
      set_style(div, "display", "contents");
      set_style(div, "--margin", "5px 10px 5px 0");
      set_style(div, "--text", __text_last = ctx[5] ? "white" : "#1a1a1a");
      set_style(div, "--bg", __bg_last = ctx[5] ? "#1a1a1a" : "white");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(button, div, null);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 32 && __text_last !== (__text_last = ctx[5] ? "white" : "#1a1a1a")) {
        set_style(div, "--text", __text_last);
      }
      if (dirty & 32 && __bg_last !== (__bg_last = ctx[5] ? "#1a1a1a" : "white")) {
        set_style(div, "--bg", __bg_last);
      }
      const button_changes = {};
      if (dirty & 1)
        button_changes.name = ctx[13];
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(button, detaching);
    }
  };
}
function create_if_block_24(ctx) {
  let plant_button;
  let plant_button_name_value;
  let mounted;
  let dispose;
  function click_handler_1() {
    return ctx[8](ctx[13]);
  }
  return {
    c() {
      plant_button = element("plant-button");
      set_custom_element_data(plant_button, "name", plant_button_name_value = ctx[13]);
    },
    m(target, anchor) {
      insert(target, plant_button, anchor);
      if (!mounted) {
        dispose = listen(plant_button, "click", click_handler_1);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 1 && plant_button_name_value !== (plant_button_name_value = ctx[13])) {
        set_custom_element_data(plant_button, "name", plant_button_name_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(plant_button);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block3(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let t;
  let current;
  const if_block_creators = [create_if_block_24, create_else_block3];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[4])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      t = space();
      attr(div, "class", "button-spacer");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      append(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, t);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_fragment5(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && create_if_block4(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.c = noop;
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance5($$self, $$props, $$invalidate) {
  let icon;
  let isInverted;
  let { toast } = $$props;
  let animateProgress = false;
  let showStackTrace = false;
  function getIcon() {
    if (toast.type === MessageType.ERROR) {
      return "warning";
    }
    if (toast.type === MessageType.SUCCESS) {
      return "checkmark";
    }
    if (toast.type === MessageType.WARNING) {
      return "exclamation";
    }
    return;
  }
  let isCustomElement = false;
  let el;
  onMount(() => {
    setTimeout(() => {
      $$invalidate(2, animateProgress = true);
    }, 10);
  });
  const click_handler = () => {
    $$invalidate(3, showStackTrace = !showStackTrace);
  };
  const click_handler_1 = (v) => toast.resolve(v);
  const click_handler_2 = (v) => toast.resolve(v);
  const click_handler_3 = () => toast.reject();
  function div6_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(1, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("toast" in $$props2)
      $$invalidate(0, toast = $$props2.toast);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $:
        $$invalidate(6, icon = toast && getIcon());
    }
    if ($$self.$$.dirty & 1) {
      $:
        $$invalidate(5, isInverted = toast && (toast.type === "success" || toast.type === "warning"));
    }
    if ($$self.$$.dirty & 2) {
      $:
        $$invalidate(4, isCustomElement = el && !el.parentElement);
    }
  };
  return [
    toast,
    el,
    animateProgress,
    showStackTrace,
    isCustomElement,
    isInverted,
    icon,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    div6_binding
  ];
}
var Toast = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>.stack-trace{margin:0 !important;max-width:100%}.wrapper{padding:10px}.button-spacer{display:inline-block}.button-wrapper{display:flex}.isInverted .toast-close,.isInverted .toast-icon{filter:invert(0.8)}.isInverted p,.isInverted h3{color:#303030}.isInverted .toast-progress{background-color:#303030 !important}.toast{position:relative;width:fit-content;padding:10px;border-radius:5px;overflow:hidden;box-shadow:0px 0px 2px rgba(0, 0, 0, 0.7)}.toast>.toast-content{display:grid;column-gap:15px;grid-template-columns:auto 28px}.toast>.toast-content.hasIcon{grid-template-columns:40px auto 28px}.toast>.toast-content>.toast-icon{width:100%}.toast>.toast-content>.toast-text{max-width:max(30vw, 200px)}.toast>.toast-content>.toast-text h3{margin:0;margin-bottom:5px}.toast>.toast-content>.toast-text p{white-space:pre-line;margin-bottom:5px}.toast>.toast-content>.toast-close{width:30px;cursor:pointer}.toast .toast-progress{background-color:white;position:absolute;height:5px;width:100%;left:0;bottom:0;opacity:0.5 !important}.toast .animateProgress{width:0%}.toast-info{background-color:#303030;color:white}.toast-info .toast-progress{background-color:white}.toast-success{background-color:#65e2a0;color:black;border-color:gray}.toast-success .toast-progress{background-color:gray}.toast-warning{background-color:#fffd7b}.toast-error{background-color:#e26565;color:white}.toast-error .toast-progress{background-color:white}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance5, create_fragment5, safe_not_equal, { toast: 0 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["toast"];
  }
  get toast() {
    return this.$$.ctx[0];
  }
  set toast(toast) {
    this.$$set({ toast });
    flush();
  }
};
customElements.define("plant-toast", Toast);
var Toast_default = Toast;

// ../ui/src/lib/toast/ToastWrapper.svelte
function get_each_context4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_else_block4(ctx) {
  let toast;
  let current;
  toast = new Toast_default({ props: { toast: ctx[4] } });
  return {
    c() {
      create_component(toast.$$.fragment);
    },
    m(target, anchor) {
      mount_component(toast, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toast_changes = {};
      if (dirty & 4)
        toast_changes.toast = ctx2[4];
      toast.$set(toast_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toast.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toast.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toast, detaching);
    }
  };
}
function create_if_block5(ctx) {
  let plant_toast;
  let plant_toast_toast_value;
  return {
    c() {
      plant_toast = element("plant-toast");
      set_custom_element_data(plant_toast, "toast", plant_toast_toast_value = ctx[4]);
    },
    m(target, anchor) {
      insert(target, plant_toast, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && plant_toast_toast_value !== (plant_toast_toast_value = ctx2[4])) {
        set_custom_element_data(plant_toast, "toast", plant_toast_toast_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(plant_toast);
    }
  };
}
function create_each_block4(key_1, ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let t;
  let div_transition;
  let current;
  const if_block_creators = [create_if_block5, create_else_block4];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      if_block.c();
      t = space();
      this.first = div;
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      append(div, t);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, t);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      add_render_callback(() => {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, { easing: backInOut }, true);
        div_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, slide, { easing: backInOut }, false);
      div_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
      if (detaching && div_transition)
        div_transition.end();
    }
  };
}
function create_fragment6(ctx) {
  let div;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let current;
  let each_value = ctx[2];
  const get_key = (ctx2) => ctx2[4].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context4(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block4(key, child_ctx));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.c = noop;
      attr(div, "id", "toast-wrapper");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      ctx[3](div);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 5) {
        each_value = ctx2[2];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block4, null, get_each_context4);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      ctx[3](null);
    }
  };
}
function instance6($$self, $$props, $$invalidate) {
  let $store;
  component_subscribe($$self, store2, ($$value) => $$invalidate(2, $store = $$value));
  let isCustomElement = false;
  let el;
  onMount(function() {
    $$invalidate(0, isCustomElement = !el.parentElement);
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(1, el);
    });
  }
  return [isCustomElement, el, $store, div_binding];
}
var ToastWrapper = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>#toast-wrapper{position:fixed;bottom:0;z-index:99}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance6, create_fragment6, safe_not_equal, {}, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
    }
  }
};
customElements.define("plant-toast-wrapper", ToastWrapper);

// ../ui/src/lib/InputCheckbox.svelte
var import_shortid2 = __toModule(require_shortid());
function create_fragment7(ctx) {
  let div;
  let input;
  let t0;
  let label;
  let svg;
  let title;
  let t1;
  let line0;
  let line1;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      input = element("input");
      t0 = space();
      label = element("label");
      svg = svg_element("svg");
      title = svg_element("title");
      t1 = text("cross");
      line0 = svg_element("line");
      line1 = svg_element("line");
      this.c = noop;
      attr(input, "type", "checkbox");
      attr(input, "id", ctx[1]);
      attr(line0, "vector-effect", "non-scaling-stroke");
      attr(line0, "x1", "0");
      attr(line0, "y1", "100");
      attr(line0, "x2", "100");
      attr(line0, "y2", "0");
      attr(line1, "vector-effect", "non-scaling-stroke");
      attr(line1, "x1", "0");
      attr(line1, "y1", "0");
      attr(line1, "x2", "100");
      attr(line1, "y2", "100");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 100 100");
      attr(label, "class", "checkbox-label");
      attr(label, "for", ctx[1]);
      attr(div, "class", "component-wrapper");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input);
      input.checked = ctx[0];
      append(div, t0);
      append(div, label);
      append(label, svg);
      append(svg, title);
      append(title, t1);
      append(svg, line0);
      append(svg, line1);
      if (!mounted) {
        dispose = listen(input, "change", ctx[2]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 2) {
        attr(input, "id", ctx2[1]);
      }
      if (dirty & 1) {
        input.checked = ctx2[0];
      }
      if (dirty & 2) {
        attr(label, "for", ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function instance7($$self, $$props, $$invalidate) {
  const dispatch2 = createEventDispatcher();
  let { value = false } = $$props;
  let { id = (0, import_shortid2.default)() } = $$props;
  function input_change_handler() {
    value = this.checked;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("id" in $$props2)
      $$invalidate(1, id = $$props2.id);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $:
        value !== void 0 && dispatch2("change", !!value);
    }
  };
  return [value, id, input_change_handler];
}
var InputCheckbox = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}.component-wrapper{position:relative;background-color:#4b4b4b;border-radius:2px;width:var(--width, min-content);user-select:none;transition:box-shadow 0.3s ease;box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0);outline:none !important}.component-wrapper:hover{box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.4)}:global(.component-wrapper.fullWidth){width:100%}input[type=checkbox]{opacity:0;position:absolute}input[type=checkbox]:checked+label>svg{opacity:1}svg{width:12px;height:12px;opacity:0;stroke:white;stroke-width:2px;pointer-events:none}label{height:21px;width:21px;position:absolute;cursor:pointer;display:flex;align-items:center;justify-content:center}.component-wrapper{width:21px;height:21px}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance7, create_fragment7, safe_not_equal, { value: 0, id: 1 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["value", "id"];
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
  get id() {
    return this.$$.ctx[1];
  }
  set id(id) {
    this.$$set({ id });
    flush();
  }
};
customElements.define("plant-checkbox", InputCheckbox);
var InputCheckbox_default = InputCheckbox;

// ../ui/src/lib/InputColor.svelte
function create_if_block_15(ctx) {
  let div3;
  let div0;
  let t0;
  let div1;
  let t1;
  let div2;
  let mounted;
  let dispose;
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      attr(div0, "class", "alpha-value");
      attr(div1, "id", "alpha-picker");
      attr(div2, "id", "alpha-event");
      attr(div3, "class", "alpha-selector");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div0);
      append(div3, t0);
      append(div3, div1);
      ctx[21](div1);
      append(div3, t1);
      append(div3, div2);
      if (!mounted) {
        dispose = [
          listen(div2, "mousedown", ctx[15]),
          listen(div2, "touchstart", ctx[16])
        ];
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div3);
      ctx[21](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block6(ctx) {
  let div7;
  let div1;
  let div0;
  let t0;
  let div2;
  let p0;
  let t1;
  let t2;
  let div6;
  let div3;
  let p1;
  let t3;
  let t4;
  let p2;
  let t6;
  let div4;
  let p3;
  let t7;
  let t8;
  let p4;
  let t10;
  let div5;
  let p5;
  let t11;
  let t12;
  let p6;
  return {
    c() {
      div7 = element("div");
      div1 = element("div");
      div0 = element("div");
      t0 = space();
      div2 = element("div");
      p0 = element("p");
      t1 = text(ctx[5]);
      t2 = space();
      div6 = element("div");
      div3 = element("div");
      p1 = element("p");
      t3 = text(ctx[2]);
      t4 = space();
      p2 = element("p");
      p2.textContent = "R";
      t6 = space();
      div4 = element("div");
      p3 = element("p");
      t7 = text(ctx[3]);
      t8 = space();
      p4 = element("p");
      p4.textContent = "G";
      t10 = space();
      div5 = element("div");
      p5 = element("p");
      t11 = text(ctx[4]);
      t12 = space();
      p6 = element("p");
      p6.textContent = "B";
      attr(div0, "class", "color-picked");
      attr(div1, "class", "color-picked-bg");
      attr(p0, "class", "text");
      attr(div2, "class", "hex-text-block");
      attr(p1, "class", "text");
      attr(p2, "class", "text-label");
      attr(div3, "class", "rgb-text-block");
      attr(p3, "class", "text");
      attr(p4, "class", "text-label");
      attr(div4, "class", "rgb-text-block");
      attr(p5, "class", "text");
      attr(p6, "class", "text-label");
      attr(div5, "class", "rgb-text-block");
      attr(div6, "class", "rgb-text-div");
      attr(div7, "class", "color-info-box");
    },
    m(target, anchor) {
      insert(target, div7, anchor);
      append(div7, div1);
      append(div1, div0);
      ctx[22](div0);
      append(div7, t0);
      append(div7, div2);
      append(div2, p0);
      append(p0, t1);
      append(div7, t2);
      append(div7, div6);
      append(div6, div3);
      append(div3, p1);
      append(p1, t3);
      append(div3, t4);
      append(div3, p2);
      append(div6, t6);
      append(div6, div4);
      append(div4, p3);
      append(p3, t7);
      append(div4, t8);
      append(div4, p4);
      append(div6, t10);
      append(div6, div5);
      append(div5, p5);
      append(p5, t11);
      append(div5, t12);
      append(div5, p6);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 32)
        set_data(t1, ctx2[5]);
      if (dirty[0] & 4)
        set_data(t3, ctx2[2]);
      if (dirty[0] & 8)
        set_data(t7, ctx2[3]);
      if (dirty[0] & 16)
        set_data(t11, ctx2[4]);
    },
    d(detaching) {
      if (detaching)
        detach(div7);
      ctx[22](null);
    }
  };
}
function create_fragment8(ctx) {
  let div9;
  let div8;
  let div4;
  let div3;
  let div2;
  let div0;
  let t0;
  let div1;
  let t1;
  let div7;
  let div5;
  let t2;
  let div6;
  let t3;
  let t4;
  let mounted;
  let dispose;
  let if_block0 = ctx[0] && create_if_block_15(ctx);
  let if_block1 = ctx[1] && create_if_block6(ctx);
  return {
    c() {
      div9 = element("div");
      div8 = element("div");
      div4 = element("div");
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      div7 = element("div");
      div5 = element("div");
      t2 = space();
      div6 = element("div");
      t3 = space();
      if (if_block0)
        if_block0.c();
      t4 = space();
      if (if_block1)
        if_block1.c();
      this.c = noop;
      attr(div0, "id", "colorsquare-picker");
      attr(div1, "id", "colorsquare-event");
      attr(div2, "class", "value-gradient");
      attr(div3, "class", "saturation-gradient");
      attr(div4, "class", "colorsquare size");
      attr(div5, "id", "hue-picker");
      attr(div6, "id", "hue-event");
      attr(div7, "class", "hue-selector");
      attr(div8, "class", "main-container");
      attr(div9, "class", "component-wrapper");
    },
    m(target, anchor) {
      insert(target, div9, anchor);
      append(div9, div8);
      append(div8, div4);
      append(div4, div3);
      append(div3, div2);
      append(div2, div0);
      ctx[18](div0);
      append(div2, t0);
      append(div2, div1);
      ctx[19](div4);
      append(div8, t1);
      append(div8, div7);
      append(div7, div5);
      ctx[20](div5);
      append(div7, t2);
      append(div7, div6);
      append(div8, t3);
      if (if_block0)
        if_block0.m(div8, null);
      append(div8, t4);
      if (if_block1)
        if_block1.m(div8, null);
      if (!mounted) {
        dispose = [
          listen(div1, "mousedown", ctx[11]),
          listen(div1, "touchstart", ctx[12]),
          listen(div6, "mousedown", ctx[13]),
          listen(div6, "touchstart", ctx[14])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[0]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_15(ctx2);
          if_block0.c();
          if_block0.m(div8, t4);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[1]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block6(ctx2);
          if_block1.c();
          if_block1.m(div8, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div9);
      ctx[18](null);
      ctx[19](null);
      ctx[20](null);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function removeEventListenerFromElement(elementId, eventName, listenerCallback) {
  let element2 = document.querySelector(elementId);
  if (element2)
    element2.removeEventListener(eventName, listenerCallback);
}
function hsvToRgb(h2, s2, v2) {
  var r2, g2, b2;
  var i = Math.floor(h2 * 6);
  var f = h2 * 6 - i;
  var p = v2 * (1 - s2);
  var q = v2 * (1 - f * s2);
  var t = v2 * (1 - (1 - f) * s2);
  switch (i % 6) {
    case 0:
      r2 = v2, g2 = t, b2 = p;
      break;
    case 1:
      r2 = q, g2 = v2, b2 = p;
      break;
    case 2:
      r2 = p, g2 = v2, b2 = t;
      break;
    case 3:
      r2 = p, g2 = q, b2 = v2;
      break;
    case 4:
      r2 = t, g2 = p, b2 = v2;
      break;
    case 5:
      r2 = v2, g2 = p, b2 = q;
      break;
  }
  return [Math.round(r2 * 255), Math.round(g2 * 255), Math.round(b2 * 255)];
}
function instance8($$self, $$props, $$invalidate) {
  let { startColor = "#FF0000" } = $$props;
  onMount(() => {
    document.addEventListener("mouseup", mouseUp);
    document.addEventListener("touchend", mouseUp);
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("touchmove", touchMove);
    document.addEventListener("touchstart", killMouseEvents);
    document.addEventListener("mousedown", killTouchEvents);
    setStartColor();
  });
  let { showAlpha = false } = $$props;
  let { showOutput = false } = $$props;
  const dispatch2 = createEventDispatcher();
  let tracked;
  let h = 1;
  let s = 1;
  let v = 1;
  let a = 1;
  let r = 255;
  let g = 0;
  let b = 0;
  let hexValue = "#FF0000";
  let colorSquare;
  let colorSquarePicker;
  let pickedColor;
  let huePicker;
  let alphaPicker;
  function setStartColor() {
    let hex = startColor.replace("#", "");
    if (hex.length !== 6 && hex.length !== 3 && !hex.match(/([^A-F0-9])/gi)) {
      alert("Invalid property value (startColor)");
      return;
    }
    let hexFiltered = "";
    if (hex.length === 3)
      hex.split("").forEach((c) => {
        hexFiltered += c + c;
      });
    else
      hexFiltered = hex;
    $$invalidate(5, hexValue = hexFiltered);
    $$invalidate(2, r = parseInt(hexFiltered.substring(0, 2), 16));
    $$invalidate(3, g = parseInt(hexFiltered.substring(2, 4), 16));
    $$invalidate(4, b = parseInt(hexFiltered.substring(4, 6), 16));
    rgbToHSV(r, g, b, true);
    updateCsPicker();
    updateHuePicker();
  }
  function killMouseEvents() {
    removeEventListenerFromElement("#alpha-event", "mousedown", alphaDown);
    removeEventListenerFromElement("#colorsquare-event", "mousedown", csDown);
    removeEventListenerFromElement("#hue-event", "mousedown", hueDown);
    document.removeEventListener("mouseup", mouseUp);
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("touchstart", killMouseEvents);
    document.removeEventListener("mousedown", killTouchEvents);
  }
  function killTouchEvents() {
    removeEventListenerFromElement("#alpha-event", "touchstart", alphaDownTouch);
    removeEventListenerFromElement("#colorsquare-event", "touchstart", csDownTouch);
    removeEventListenerFromElement("#hue-event", "touchstart", hueDownTouch);
    document.removeEventListener("touchend", mouseUp);
    document.removeEventListener("touchmove", touchMove);
    document.removeEventListener("touchstart", killMouseEvents);
    document.removeEventListener("mousedown", killTouchEvents);
  }
  function updateCsPicker() {
    let xPercentage = s * 100;
    let yPercentage = (1 - v) * 100;
    $$invalidate(7, colorSquarePicker.style.top = yPercentage + "%", colorSquarePicker);
    $$invalidate(7, colorSquarePicker.style.left = xPercentage + "%", colorSquarePicker);
  }
  function updateHuePicker() {
    let xPercentage = h * 100;
    $$invalidate(9, huePicker.style.left = xPercentage + "%", huePicker);
  }
  function colorChangeCallback() {
    dispatch2("colorChange", { r, g, b, a });
  }
  function mouseMove(event) {
    if (tracked) {
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      let trackedPos = tracked.getBoundingClientRect();
      let xPercentage, yPercentage;
      switch (tracked.id) {
        case "colorsquare-event":
          xPercentage = (mouseX - trackedPos.x) / 240 * 100;
          yPercentage = (mouseY - trackedPos.y) / 160 * 100;
          xPercentage > 100 ? xPercentage = 100 : xPercentage < 0 ? xPercentage = 0 : null;
          yPercentage > 100 ? yPercentage = 100 : yPercentage < 0 ? yPercentage = 0 : null;
          yPercentage = yPercentage.toFixed(2);
          xPercentage = xPercentage.toFixed(2);
          $$invalidate(7, colorSquarePicker.style.top = yPercentage + "%", colorSquarePicker);
          $$invalidate(7, colorSquarePicker.style.left = xPercentage + "%", colorSquarePicker);
          s = xPercentage / 100;
          v = 1 - yPercentage / 100;
          colorChange();
          break;
        case "hue-event":
          xPercentage = (mouseX - 10 - trackedPos.x) / 220 * 100;
          xPercentage > 100 ? xPercentage = 100 : xPercentage < 0 ? xPercentage = 0 : null;
          xPercentage = xPercentage.toFixed(2);
          $$invalidate(9, huePicker.style.left = xPercentage + "%", huePicker);
          h = xPercentage / 100;
          hueChange();
          break;
        case "alpha-event":
          xPercentage = (mouseX - 10 - trackedPos.x) / 220 * 100;
          xPercentage > 100 ? xPercentage = 100 : xPercentage < 0 ? xPercentage = 0 : null;
          xPercentage = xPercentage.toFixed(2);
          $$invalidate(10, alphaPicker.style.left = xPercentage + "%", alphaPicker);
          a = xPercentage / 100;
          colorChange();
          break;
      }
    }
  }
  function touchMove(event) {
    if (tracked) {
      let mouseX = event.touches[0].clientX;
      let mouseY = event.touches[0].clientY;
      let trackedPos = tracked.getBoundingClientRect();
      let xPercentage, yPercentage;
      switch (tracked.id) {
        case "colorsquare-event":
          xPercentage = (mouseX - trackedPos.x) / 240 * 100;
          yPercentage = (mouseY - trackedPos.y) / 160 * 100;
          xPercentage > 100 ? xPercentage = 100 : xPercentage < 0 ? xPercentage = 0 : null;
          yPercentage > 100 ? yPercentage = 100 : yPercentage < 0 ? yPercentage = 0 : null;
          yPercentage = yPercentage.toFixed(2);
          xPercentage = xPercentage.toFixed(2);
          $$invalidate(7, colorSquarePicker.style.top = yPercentage + "%", colorSquarePicker);
          $$invalidate(7, colorSquarePicker.style.left = xPercentage + "%", colorSquarePicker);
          s = xPercentage / 100;
          v = 1 - yPercentage / 100;
          colorChange();
          break;
        case "hue-event":
          xPercentage = (mouseX - 10 - trackedPos.x) / 220 * 100;
          xPercentage > 100 ? xPercentage = 100 : xPercentage < 0 ? xPercentage = 0 : null;
          xPercentage = xPercentage.toFixed(2);
          $$invalidate(9, huePicker.style.left = xPercentage + "%", huePicker);
          h = xPercentage / 100;
          hueChange();
          break;
        case "alpha-event":
          xPercentage = (mouseX - 10 - trackedPos.x) / 220 * 100;
          xPercentage > 100 ? xPercentage = 100 : xPercentage < 0 ? xPercentage = 0 : null;
          xPercentage = xPercentage.toFixed(2);
          $$invalidate(10, alphaPicker.style.left = xPercentage + "%", alphaPicker);
          a = xPercentage / 100;
          colorChange();
          break;
      }
    }
  }
  function csDown(event) {
    tracked = event.currentTarget;
    let xPercentage = (event.offsetX + 1) / 240 * 100;
    let yPercentage = (event.offsetY + 1) / 160 * 100;
    yPercentage = +yPercentage.toFixed(2);
    xPercentage = +xPercentage.toFixed(2);
    $$invalidate(7, colorSquarePicker.style.top = yPercentage + "%", colorSquarePicker);
    $$invalidate(7, colorSquarePicker.style.left = xPercentage + "%", colorSquarePicker);
    s = xPercentage / 100;
    v = 1 - yPercentage / 100;
    colorChange();
  }
  function csDownTouch(event) {
    tracked = event.currentTarget;
    let rect = event.target.getBoundingClientRect();
    let offsetX = event.targetTouches[0].clientX - rect.left;
    let offsetY = event.targetTouches[0].clientY - rect.top;
    let xPercentage = (offsetX + 1) / 240 * 100;
    let yPercentage = (offsetY + 1) / 160 * 100;
    yPercentage = +yPercentage.toFixed(2);
    xPercentage = +xPercentage.toFixed(2);
    $$invalidate(7, colorSquarePicker.style.top = yPercentage + "%", colorSquarePicker);
    $$invalidate(7, colorSquarePicker.style.left = xPercentage + "%", colorSquarePicker);
    s = xPercentage / 100;
    v = 1 - yPercentage / 100;
    colorChange();
  }
  function mouseUp() {
    tracked = null;
  }
  function hueDown(event) {
    tracked = event.currentTarget;
    let xPercentage = (event.offsetX - 9) / 220 * 100;
    xPercentage = +xPercentage.toFixed(2);
    $$invalidate(9, huePicker.style.left = xPercentage + "%", huePicker);
    h = xPercentage / 100;
    hueChange();
  }
  function hueDownTouch(event) {
    tracked = event.currentTarget;
    let rect = event.target.getBoundingClientRect();
    let offsetX = event.targetTouches[0].clientX - rect.left;
    let xPercentage = (offsetX - 9) / 220 * 100;
    xPercentage = +xPercentage.toFixed(2);
    $$invalidate(9, huePicker.style.left = xPercentage + "%", huePicker);
    h = xPercentage / 100;
    hueChange();
  }
  function hueChange() {
    let rgb = hsvToRgb(h, 1, 1);
    $$invalidate(6, colorSquare.style.background = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`, colorSquare);
    colorChange();
  }
  function colorChange() {
    let rgb = hsvToRgb(h, s, v);
    $$invalidate(2, r = rgb[0]);
    $$invalidate(3, g = rgb[1]);
    $$invalidate(4, b = rgb[2]);
    $$invalidate(5, hexValue = RGBAToHex());
    colorChangeCallback();
  }
  function alphaDown(event) {
    tracked = event.currentTarget;
    let xPercentage = (event.offsetX - 9) / 220 * 100;
    xPercentage = +xPercentage.toFixed(2);
    $$invalidate(10, alphaPicker.style.left = xPercentage + "%", alphaPicker);
    a = xPercentage / 100;
    colorChange();
  }
  function alphaDownTouch(event) {
    tracked = event.currentTarget;
    let rect = event.target.getBoundingClientRect();
    let offsetX = event.targetTouches[0].clientX - rect.left;
    let xPercentage = (offsetX - 9) / 220 * 100;
    xPercentage = +xPercentage.toFixed(2);
    $$invalidate(10, alphaPicker.style.left = xPercentage + "%", alphaPicker);
    a = xPercentage / 100;
    colorChange();
  }
  function RGBAToHex() {
    let rHex = r.toString(16);
    let gHex = g.toString(16);
    let bHex = b.toString(16);
    if (rHex.length == 1)
      rHex = "0" + rHex;
    if (gHex.length == 1)
      gHex = "0" + gHex;
    if (bHex.length == 1)
      bHex = "0" + bHex;
    return ("#" + rHex + gHex + bHex).toUpperCase();
  }
  function rgbToHSV(r2, g2, b2, update2) {
    let rperc, gperc, bperc, max, min, diff, pr, hueNew, satNew, valNew;
    rperc = r2 / 255;
    gperc = g2 / 255;
    bperc = b2 / 255;
    max = Math.max(rperc, gperc, bperc);
    min = Math.min(rperc, gperc, bperc);
    diff = max - min;
    valNew = max;
    valNew == 0 ? satNew = 0 : satNew = diff / max;
    for (let i = 0; i < 3; i++) {
      if ([rperc, gperc, bperc][i] === max) {
        pr = i;
        break;
      }
    }
    if (diff == 0) {
      hueNew = 0;
      if (update2) {
        h = hueNew;
        s = satNew;
        v = valNew;
        hueChange();
        return;
      } else {
        return { h: hueNew, s: satNew, v: valNew };
      }
    } else {
      switch (pr) {
        case 0:
          hueNew = 60 * ((gperc - bperc) / diff % 6) / 360;
          break;
        case 1:
          hueNew = 60 * ((bperc - rperc) / diff + 2) / 360;
          break;
        case 2:
          hueNew = 60 * ((rperc - gperc) / diff + 4) / 360;
          break;
      }
      if (hueNew < 0)
        hueNew += 6;
    }
    if (update2) {
      h = hueNew;
      s = satNew;
      v = valNew;
      hueChange();
    } else {
      return { h: hueNew, s: satNew, v: valNew };
    }
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      colorSquarePicker = $$value;
      $$invalidate(7, colorSquarePicker);
    });
  }
  function div4_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      colorSquare = $$value;
      $$invalidate(6, colorSquare);
    });
  }
  function div5_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      huePicker = $$value;
      $$invalidate(9, huePicker);
    });
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      alphaPicker = $$value;
      $$invalidate(10, alphaPicker);
    });
  }
  function div0_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      pickedColor = $$value;
      $$invalidate(8, pickedColor);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("startColor" in $$props2)
      $$invalidate(17, startColor = $$props2.startColor);
    if ("showAlpha" in $$props2)
      $$invalidate(0, showAlpha = $$props2.showAlpha);
    if ("showOutput" in $$props2)
      $$invalidate(1, showOutput = $$props2.showOutput);
  };
  return [
    showAlpha,
    showOutput,
    r,
    g,
    b,
    hexValue,
    colorSquare,
    colorSquarePicker,
    pickedColor,
    huePicker,
    alphaPicker,
    csDown,
    csDownTouch,
    hueDown,
    hueDownTouch,
    alphaDown,
    alphaDownTouch,
    startColor,
    div0_binding,
    div4_binding,
    div5_binding,
    div1_binding,
    div0_binding_1
  ];
}
var InputColor = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}.component-wrapper{position:relative;background-color:#4b4b4b;border-radius:2px;width:var(--width, min-content);user-select:none;transition:box-shadow 0.3s ease;box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0);outline:none !important}.component-wrapper:hover{box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.4)}:global(.component-wrapper.fullWidth){width:100%}.main-container{width:240px}.saturation-gradient{background:linear-gradient(to right, white, rgba(255, 255, 255, 0));width:240px;height:160px}.value-gradient{background:linear-gradient(to top, black, rgba(0, 0, 0, 0));overflow:hidden;width:240px;height:160px}.hue-selector{background:linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);margin:15px 10px 10px 10px;border-radius:10px;height:10px}#hue-picker{background:#fff;width:12px;height:12px;border-radius:50%;left:0%;position:relative;cursor:default;transform:translate(-5px, -1px);-webkit-box-shadow:0px 0px 5px 0px rgba(0, 0, 0, 0.67);-moz-box-shadow:0px 0px 5px 0px rgba(0, 0, 0, 0.67);box-shadow:0px 0px 5px 0px rgba(0, 0, 0, 0.67)}#hue-event{width:236px;height:14px;transform:translate(-8px, -14px);cursor:default;touch-action:none}.alpha-selector{background-image:linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%);background-size:10px 10px;background-position:0 0, 0 5px, 5px -5px, -5px 0px;margin:10px 10px;border-radius:10px;height:10px;position:relative}.colorsquare{background:red}#colorsquare-picker{margin:0;padding:0;width:12px;height:12px;border-radius:50%;border:2px solid #fffb;position:relative;transform:translate(-9px, -9px);left:100%}#colorsquare-event{width:100%;height:100%;position:relative;transform:translate(0, -16px);touch-action:none}.component-wrapper{width:fit-content;padding:10px;padding-bottom:6px}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance8, create_fragment8, safe_not_equal, {
      startColor: 17,
      showAlpha: 0,
      showOutput: 1
    }, null, [-1, -1]);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["startColor", "showAlpha", "showOutput"];
  }
  get startColor() {
    return this.$$.ctx[17];
  }
  set startColor(startColor) {
    this.$$set({ startColor });
    flush();
  }
  get showAlpha() {
    return this.$$.ctx[0];
  }
  set showAlpha(showAlpha) {
    this.$$set({ showAlpha });
    flush();
  }
  get showOutput() {
    return this.$$.ctx[1];
  }
  set showOutput(showOutput) {
    this.$$set({ showOutput });
    flush();
  }
};
customElements.define("plant-color", InputColor);

// ../ui/src/lib/InputCurve.svelte
var import_monotone_cubic_spline = __toModule(require_monotone_cubic_spline());
function get_each_context5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  child_ctx[21] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let circle;
  let circle_cx_value;
  let circle_cy_value;
  let mounted;
  let dispose;
  function mousedown_handler() {
    return ctx[10](ctx[19]);
  }
  return {
    c() {
      circle = svg_element("circle");
      attr(circle, "cx", circle_cx_value = ctx[19].x * 100);
      attr(circle, "cy", circle_cy_value = ctx[19].y * 100);
      attr(circle, "r", "2");
      toggle_class(circle, "pinned", ctx[19].pinned);
    },
    m(target, anchor) {
      insert(target, circle, anchor);
      if (!mounted) {
        dispose = listen(circle, "mousedown", mousedown_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 1 && circle_cx_value !== (circle_cx_value = ctx[19].x * 100)) {
        attr(circle, "cx", circle_cx_value);
      }
      if (dirty & 1 && circle_cy_value !== (circle_cy_value = ctx[19].y * 100)) {
        attr(circle, "cy", circle_cy_value);
      }
      if (dirty & 1) {
        toggle_class(circle, "pinned", ctx[19].pinned);
      }
    },
    d(detaching) {
      if (detaching)
        detach(circle);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block7(ctx) {
  let line;
  let line_x__value;
  let line_y__value;
  let line_x__value_1;
  let line_y__value_1;
  return {
    c() {
      line = svg_element("line");
      attr(line, "x1", line_x__value = ctx[3][ctx[21] - 1].x * 100);
      attr(line, "y1", line_y__value = ctx[3][ctx[21] - 1].y * 100);
      attr(line, "x2", line_x__value_1 = ctx[19].x * 100);
      attr(line, "y2", line_y__value_1 = ctx[19].y * 100);
    },
    m(target, anchor) {
      insert(target, line, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(line);
    }
  };
}
function create_each_block5(ctx) {
  let circle;
  let circle_cx_value;
  let circle_cy_value;
  let if_block = ctx[21] > 0 && ctx[21] % 2 === 0 && create_if_block7(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      circle = svg_element("circle");
      attr(circle, "cx", circle_cx_value = ctx[19].x * 100);
      attr(circle, "cy", circle_cy_value = ctx[19].y * 100);
      attr(circle, "r", "1");
      toggle_class(circle, "pinned", ctx[19].pinned);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, circle, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[21] > 0 && ctx2[21] % 2 === 0)
        if_block.p(ctx2, dirty);
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(circle);
    }
  };
}
function create_fragment9(ctx) {
  let div;
  let svg;
  let path_1;
  let g;
  let mounted;
  let dispose;
  let each_value_1 = ctx[0];
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block5(get_each_context5(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      svg = svg_element("svg");
      path_1 = svg_element("path");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      g = svg_element("g");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.c = noop;
      attr(path_1, "d", ctx[2]);
      attr(path_1, "fill", "none");
      attr(path_1, "stroke", "grey");
      attr(g, "id", "debug");
      attr(svg, "viewBox", "0 0 100 100");
      attr(svg, "width", "100");
      attr(svg, "height", "100");
      attr(div, "class", "component-wrapper");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, svg);
      append(svg, path_1);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(svg, null);
      }
      append(svg, g);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(g, null);
      }
      if (!mounted) {
        dispose = [
          listen(svg, "mousedown", ctx[5]),
          listen(svg, "mousemove", ctx[4]),
          listen(svg, "mouseover", ctx[7]),
          listen(svg, "mouseout", ctx[8]),
          listen(svg, "mouseup", ctx[6]),
          listen(svg, "focus", ctx[7]),
          listen(svg, "blur", ctx[8])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4) {
        attr(path_1, "d", ctx2[2]);
      }
      if (dirty & 3) {
        each_value_1 = ctx2[0];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(svg, g);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & 8) {
        each_value = ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context5(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block5(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(g, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance9($$self, $$props, $$invalidate) {
  let points;
  let path;
  const dispatch2 = createEventDispatcher();
  let { value = [{ x: 0, y: 1, pinned: true }, { x: 1, y: 0, pinned: true }] } = $$props;
  let isHovered = false;
  let activePoint = void 0;
  let draggingPoint = void 0;
  let mousePosX = 0;
  let mousePosY = 0;
  let controlPoints = [];
  const updateValue = () => {
    requestAnimationFrame(() => {
      dispatch2("change", points);
      $$invalidate(0, points = points.sort((a, b) => a.x > b.x ? -1 : 1));
    });
  };
  const removePoint = (p) => {
    if (p.pinned)
      return;
    points.splice(points.indexOf(activePoint), 1);
    updateValue();
  };
  const handleMouseMove = (ev) => {
    if (isHovered) {
      mousePosX = ev.offsetX;
      mousePosY = ev.offsetY;
      if (activePoint) {
        draggingPoint = activePoint;
        $$invalidate(1, activePoint = void 0);
      }
      if (draggingPoint) {
        draggingPoint.x = mousePosX / 100;
        draggingPoint.y = mousePosY / 100;
        updateValue();
      }
    }
  };
  const handleMouseDown = () => {
    if (!activePoint) {
      const point = {
        x: mousePosX / 100,
        y: mousePosY / 100,
        pinned: false
      };
      $$invalidate(1, activePoint = point);
      points.push(activePoint);
      updateValue();
    }
  };
  const handleMouseUp = () => {
    if (activePoint) {
      removePoint(activePoint);
      $$invalidate(1, activePoint = void 0);
    }
    draggingPoint = void 0;
  };
  const handleMouseOver = () => {
    isHovered = true;
  };
  const handleMouseOut = () => {
    isHovered = false;
  };
  function renderPath(points2) {
    const pts = import_monotone_cubic_spline.default.points(points2.map((p) => [p.x * 100, p.y * 100]));
    return import_monotone_cubic_spline.default.svgPath(pts);
  }
  const mousedown_handler = (p) => {
    $$invalidate(1, activePoint = p);
  };
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(9, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 512) {
      $:
        $$invalidate(0, points = value);
    }
    if ($$self.$$.dirty & 1) {
      $:
        $$invalidate(2, path = renderPath(points));
    }
  };
  return [
    points,
    activePoint,
    path,
    controlPoints,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseOver,
    handleMouseOut,
    value,
    mousedown_handler
  ];
}
var InputCurve = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}.component-wrapper{position:relative;background-color:#4b4b4b;border-radius:2px;width:var(--width, min-content);user-select:none;transition:box-shadow 0.3s ease;box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0);outline:none !important}.component-wrapper:hover{box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.4)}:global(.component-wrapper.fullWidth){width:100%}.component-wrapper{width:100px;max-width:100%}svg>path{stroke:white;stroke-width:1px}svg circle{opacity:0;stroke-width:1px}circle:hover{fill:white;opacity:1 !important}svg:hover circle{opacity:0.5}svg:hover circle.pinned{opacity:0.5}svg:hover line{opacity:1;stroke-width:0.5px}svg line{opacity:0}#debug{pointer-events:none;display:block}#debug>*{stroke-width:0.5px}svg:hover>#debug>*{opacity:1px}svg{width:100%;stroke-width:1px;display:block}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance9, create_fragment9, safe_not_equal, { value: 9 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["value"];
  }
  get value() {
    return this.$$.ctx[9];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
};
customElements.define("plant-curve", InputCurve);
var InputCurve_default = InputCurve;

// ../ui/src/lib/InputInteger.svelte
function create_if_block8(ctx) {
  let span;
  let span_style_value;
  return {
    c() {
      span = element("span");
      attr(span, "class", "overlay");
      attr(span, "style", span_style_value = `width: ${(ctx[0] - ctx[1]) / (ctx[2] - ctx[1]) * 100}%`);
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 7 && span_style_value !== (span_style_value = `width: ${(ctx2[0] - ctx2[1]) / (ctx2[2] - ctx2[1]) * 100}%`)) {
        attr(span, "style", span_style_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment10(ctx) {
  let div;
  let t0;
  let button0;
  let t2;
  let input;
  let input_style_value;
  let t3;
  let button1;
  let mounted;
  let dispose;
  let if_block = typeof ctx[1] !== "undefined" && typeof ctx[2] !== "undefined" && create_if_block8(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      t0 = space();
      button0 = element("button");
      button0.textContent = "-";
      t2 = space();
      input = element("input");
      t3 = space();
      button1 = element("button");
      button1.textContent = "+";
      this.c = noop;
      attr(input, "step", ctx[3]);
      attr(input, "max", ctx[2]);
      attr(input, "min", ctx[1]);
      attr(input, "type", "number");
      attr(input, "style", input_style_value = `width:${ctx[5]};`);
      attr(div, "class", "component-wrapper");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append(div, t0);
      append(div, button0);
      append(div, t2);
      append(div, input);
      set_input_value(input, ctx[0]);
      ctx[11](input);
      append(div, t3);
      append(div, button1);
      if (!mounted) {
        dispose = [
          listen(button0, "click", ctx[9]),
          listen(input, "input", ctx[10]),
          listen(input, "mousedown", ctx[7]),
          listen(input, "mouseup", ctx[8]),
          listen(button1, "click", ctx[12])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (typeof ctx2[1] !== "undefined" && typeof ctx2[2] !== "undefined") {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block8(ctx2);
          if_block.c();
          if_block.m(div, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 8) {
        attr(input, "step", ctx2[3]);
      }
      if (dirty & 4) {
        attr(input, "max", ctx2[2]);
      }
      if (dirty & 2) {
        attr(input, "min", ctx2[1]);
      }
      if (dirty & 32 && input_style_value !== (input_style_value = `width:${ctx2[5]};`)) {
        attr(input, "style", input_style_value);
      }
      if (dirty & 1 && to_number(input.value) !== ctx2[0]) {
        set_input_value(input, ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      ctx[11](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance10($$self, $$props, $$invalidate) {
  let isClamped;
  let width;
  const dispatch2 = createEventDispatcher();
  let { min = -Infinity } = $$props;
  let { max = Infinity } = $$props;
  let { step = 1 } = $$props;
  let { value = 0 } = $$props;
  let inputEl;
  function handleChange(change) {
    $$invalidate(0, value = Math.max(min, Math.min(+value + change, max)));
  }
  let isMouseDown = false;
  let downX = 0;
  let downY = 0;
  let downV = 0;
  let rect;
  function handleMouseDown(ev) {
    ev.preventDefault();
    isMouseDown = true;
    downV = value;
    downX = ev.clientX;
    downY = ev.clientY;
    rect = inputEl.getBoundingClientRect();
    window.removeEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "ew-resize";
  }
  function handleMouseUp() {
    isMouseDown = false;
    if (downV === value) {
      inputEl.focus();
    } else {
      inputEl.blur();
    }
    document.body.style.cursor = "unset";
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  }
  function handleMouseMove(ev) {
    if (isClamped) {
      const vx = (ev.clientX - rect.left) / rect.width;
      $$invalidate(0, value = Math.max(Math.min(Math.floor(min + (max - min) * vx), max), min));
    } else {
      const vx = ev.clientX - downX;
      $$invalidate(0, value = downV + Math.floor(vx / 10));
    }
  }
  const click_handler = () => handleChange(-step);
  function input_input_handler() {
    value = to_number(this.value);
    $$invalidate(0, value);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      inputEl = $$value;
      $$invalidate(4, inputEl);
    });
  }
  const click_handler_1 = () => handleChange(+step);
  $$self.$$set = ($$props2) => {
    if ("min" in $$props2)
      $$invalidate(1, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(2, max = $$props2.max);
    if ("step" in $$props2)
      $$invalidate(3, step = $$props2.step);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 6) {
      $:
        isClamped = typeof min !== "undefined" && typeof max !== "undefined" && Number.isFinite(min) && Number.isFinite(max);
    }
    if ($$self.$$.dirty & 1) {
      $:
        value !== void 0 && dispatch2("change", parseFloat(value + ""));
    }
    if ($$self.$$.dirty & 1) {
      $:
        $$invalidate(5, width = Number.isFinite(value) ? Math.max((value?.toString().length ?? 1) * 8, 30) + "px" : "20px");
    }
  };
  return [
    value,
    min,
    max,
    step,
    inputEl,
    width,
    handleChange,
    handleMouseDown,
    handleMouseUp,
    click_handler,
    input_input_handler,
    input_binding,
    click_handler_1
  ];
}
var InputInteger = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}.component-wrapper{position:relative;background-color:#4b4b4b;border-radius:2px;width:var(--width, min-content);user-select:none;transition:box-shadow 0.3s ease;box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0);outline:none !important}.component-wrapper:hover{box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.4)}:global(.component-wrapper.fullWidth){width:100%}input[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;cursor:pointer}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}.overlay{position:absolute;top:0px;left:0px;height:100%;background-color:white;opacity:0.2;pointer-events:none}div{max-width:200px;position:relative;width:100%;display:flex;justify-content:space-between;background-color:#4b4b4b;border-radius:2px}div button{background-color:transparent;border:none;cursor:pointer;line-height:0px;margin:0;color:white}div input[type=number]{color:white;background-color:transparent;padding:2px;width:72%;font-size:1em;text-align:center;border:none;border-style:none}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance10, create_fragment10, safe_not_equal, { min: 1, max: 2, step: 3, value: 0 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["min", "max", "step", "value"];
  }
  get min() {
    return this.$$.ctx[1];
  }
  set min(min) {
    this.$$set({ min });
    flush();
  }
  get max() {
    return this.$$.ctx[2];
  }
  set max(max) {
    this.$$set({ max });
    flush();
  }
  get step() {
    return this.$$.ctx[3];
  }
  set step(step) {
    this.$$set({ step });
    flush();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
};
customElements.define("plant-integer", InputInteger);
var InputInteger_default = InputInteger;

// ../ui/src/lib/InputFloat.svelte
function create_fragment11(ctx) {
  let div;
  let span;
  let span_style_value;
  let t;
  let input;
  let input_style_value;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      span = element("span");
      t = space();
      input = element("input");
      this.c = noop;
      attr(span, "class", "overlay");
      attr(span, "style", span_style_value = `width: ${(ctx[0] - ctx[2]) / (ctx[3] - ctx[2]) * 100}%`);
      attr(input, "step", ctx[1]);
      attr(input, "max", ctx[3]);
      attr(input, "min", ctx[2]);
      attr(input, "type", "number");
      attr(input, "style", input_style_value = `width:${ctx[6]};`);
      attr(div, "class", "component-wrapper");
      toggle_class(div, "is-down", ctx[5]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, span);
      append(div, t);
      append(div, input);
      set_input_value(input, ctx[0]);
      ctx[10](input);
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[9]),
          listen(input, "mousedown", ctx[7]),
          listen(input, "mouseup", ctx[8])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 13 && span_style_value !== (span_style_value = `width: ${(ctx2[0] - ctx2[2]) / (ctx2[3] - ctx2[2]) * 100}%`)) {
        attr(span, "style", span_style_value);
      }
      if (dirty & 2) {
        attr(input, "step", ctx2[1]);
      }
      if (dirty & 8) {
        attr(input, "max", ctx2[3]);
      }
      if (dirty & 4) {
        attr(input, "min", ctx2[2]);
      }
      if (dirty & 64 && input_style_value !== (input_style_value = `width:${ctx2[6]};`)) {
        attr(input, "style", input_style_value);
      }
      if (dirty & 1 && to_number(input.value) !== ctx2[0]) {
        set_input_value(input, ctx2[0]);
      }
      if (dirty & 32) {
        toggle_class(div, "is-down", ctx2[5]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[10](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function strip(number) {
  return parseFloat(number).toPrecision(2);
}
function instance11($$self, $$props, $$invalidate) {
  let width;
  let { value = 0.5 } = $$props;
  let { step = 0.01 } = $$props;
  let { min = 0 } = $$props;
  let { max = 1 } = $$props;
  const dispatch2 = createEventDispatcher();
  let inputEl;
  let isMouseDown = false;
  let downX = 0;
  let downY = 0;
  let downV = 0;
  let vx = 0;
  let vy = 0;
  let rect;
  function handleMouseDown(ev) {
    ev.preventDefault();
    $$invalidate(5, isMouseDown = true);
    downV = value;
    downX = ev.clientX;
    downY = ev.clientY;
    rect = inputEl.getBoundingClientRect();
    window.removeEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "ew-resize";
  }
  function handleMouseUp() {
    $$invalidate(5, isMouseDown = false);
    if (downV === value) {
      inputEl.focus();
    }
    document.body.style.cursor = "unset";
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  }
  function handleMouseMove(ev) {
    vx = (ev.clientX - rect.left) / rect.width;
    vy = ev.clientY - downY;
    $$invalidate(0, value = Math.max(Math.min(min + (max - min) * vx, max), min));
  }
  function input_input_handler() {
    value = to_number(this.value);
    $$invalidate(0, value);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      inputEl = $$value;
      $$invalidate(4, inputEl);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("step" in $$props2)
      $$invalidate(1, step = $$props2.step);
    if ("min" in $$props2)
      $$invalidate(2, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(3, max = $$props2.max);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $:
        if (value.toString().length > 5) {
          $$invalidate(0, value = strip(value));
        }
    }
    if ($$self.$$.dirty & 1) {
      $:
        value !== void 0 && dispatch2("change", parseFloat(value + ""));
    }
    if ($$self.$$.dirty & 1) {
      $:
        $$invalidate(6, width = Number.isFinite(value) ? Math.max((value?.toString().length ?? 1) * 8, 50) + "px" : "20px");
    }
  };
  return [
    value,
    step,
    min,
    max,
    inputEl,
    isMouseDown,
    width,
    handleMouseDown,
    handleMouseUp,
    input_input_handler,
    input_binding
  ];
}
var InputFloat = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}.component-wrapper{position:relative;background-color:#4b4b4b;border-radius:2px;width:var(--width, min-content);user-select:none;transition:box-shadow 0.3s ease;box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0);outline:none !important}.component-wrapper:hover{box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.4)}:global(.component-wrapper.fullWidth){width:100%}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}input[type=number]{box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;cursor:pointer;color:white;background-color:transparent;padding:2px;width:100%;font-size:1em;text-align:center;border:none;border-style:none;min-width:100%}.is-down>input{cursor:ew-resize !important}.overlay{position:absolute;top:0px;left:0px;height:100%;max-width:100%;background-color:white;opacity:0.2;pointer-events:none}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance11, create_fragment11, safe_not_equal, { value: 0, step: 1, min: 2, max: 3 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["value", "step", "min", "max"];
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
  get step() {
    return this.$$.ctx[1];
  }
  set step(step) {
    this.$$set({ step });
    flush();
  }
  get min() {
    return this.$$.ctx[2];
  }
  set min(min) {
    this.$$set({ min });
    flush();
  }
  get max() {
    return this.$$.ctx[3];
  }
  set max(max) {
    this.$$set({ max });
    flush();
  }
};
customElements.define("plant-float", InputFloat);
var InputFloat_default = InputFloat;

// ../ui/src/lib/InputSelect.svelte
function get_each_context6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}
function create_else_block5(ctx) {
  let div;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      div.textContent = "none";
      attr(div, "id", "selected-value");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (!mounted) {
        dispose = listen(div, "click", ctx[4]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_16(ctx) {
  let div;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      t = text(ctx[0]);
      attr(div, "id", "selected-value");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
      if (!mounted) {
        dispose = listen(div, "click", ctx[4]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block9(ctx) {
  let p;
  let t0_value = ctx[11] + "";
  let t0;
  let t1;
  let p_style_value;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[8](ctx[11]);
  }
  return {
    c() {
      p = element("p");
      t0 = text(t0_value);
      t1 = space();
      attr(p, "style", p_style_value = `opacity: ${ctx[11] === ctx[0] ? 0.5 : 1}`);
      attr(p, "class", "item");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t0);
      append(p, t1);
      if (!mounted) {
        dispose = listen(p, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 2 && t0_value !== (t0_value = ctx[11] + ""))
        set_data(t0, t0_value);
      if (dirty & 3 && p_style_value !== (p_style_value = `opacity: ${ctx[11] === ctx[0] ? 0.5 : 1}`)) {
        attr(p, "style", p_style_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(p);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block6(ctx) {
  let if_block_anchor;
  let if_block = ctx[11] !== ctx[0] && create_if_block9(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[11] !== ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block9(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment12(ctx) {
  let div2;
  let div1;
  let t;
  let div0;
  function select_block_type(ctx2, dirty) {
    if (ctx2[0] !== void 0)
      return create_if_block_16;
    return create_else_block5;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block6(get_each_context6(ctx, each_value, i));
  }
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      if_block.c();
      t = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.c = noop;
      attr(div0, "id", "item-wrapper");
      attr(div1, "id", "main");
      attr(div2, "class", "component-wrapper");
      toggle_class(div2, "open", ctx[2]);
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div1);
      if_block.m(div1, null);
      append(div1, t);
      append(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      ctx[9](div1);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, t);
        }
      }
      if (dirty & 35) {
        each_value = ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context6(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block6(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 4) {
        toggle_class(div2, "open", ctx2[2]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      if_block.d();
      destroy_each(each_blocks, detaching);
      ctx[9](null);
    }
  };
}
function instance12($$self, $$props, $$invalidate) {
  const dispatch2 = createEventDispatcher();
  let { value = void 0 } = $$props;
  let open2 = false;
  let main;
  function handleOpen() {
    $$invalidate(2, open2 = true);
    setTimeout(() => {
      document.addEventListener("click", () => {
        $$invalidate(2, open2 = false);
      }, { once: true });
    }, 50);
  }
  function setSelected(v) {
    $$invalidate(0, value = v);
    $$invalidate(2, open2 = false);
  }
  let { values = [] } = $$props;
  function setItems(_items) {
    $$invalidate(1, values = _items);
  }
  function setValue(v) {
    $$invalidate(0, value = v);
  }
  const click_handler = (item) => setSelected(item);
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      main = $$value;
      $$invalidate(3, main);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("values" in $$props2)
      $$invalidate(1, values = $$props2.values);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $:
        value && dispatch2("change", value);
    }
  };
  return [
    value,
    values,
    open2,
    main,
    handleOpen,
    setSelected,
    setItems,
    setValue,
    click_handler,
    div1_binding
  ];
}
var InputSelect = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}.component-wrapper{position:relative;background-color:#4b4b4b;border-radius:2px;width:var(--width, min-content);user-select:none;transition:box-shadow 0.3s ease;box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0);outline:none !important}.component-wrapper:hover{box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.4)}:global(.component-wrapper.fullWidth){width:100%}.component-wrapper{height:30px}.open.component-wrapper{overflow:visible;z-index:99}#main{color:white;min-width:100%;border-radius:2px;width:fit-content;box-sizing:border-box;background-color:#4b4b4b;cursor:pointer}.open #main{box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.4)}#selected-value{padding:6px 10px;padding-left:6px;height:auto}#item-wrapper{width:fit-content;min-width:100%;background-color:#4b4b4b;border-radius:2px;overflow:hidden;top:0;z-index:99;left:0;height:0px}.open #item-wrapper{height:auto}.item{padding:6px;margin:0;background-color:#4b4b4b;cursor:pointer;transition:background-color 0.2s ease}.item:hover{background-color:#3d3d3d}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance12, create_fragment12, safe_not_equal, {
      value: 0,
      values: 1,
      setItems: 6,
      setValue: 7
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["value", "values", "setItems", "setValue"];
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
  get values() {
    return this.$$.ctx[1];
  }
  set values(values) {
    this.$$set({ values });
    flush();
  }
  get setItems() {
    return this.$$.ctx[6];
  }
  get setValue() {
    return this.$$.ctx[7];
  }
};
customElements.define("plant-select", InputSelect);
var InputSelect_default = InputSelect;

// ../ui/src/lib/InputShape.svelte
function get_each_context7(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  return child_ctx;
}
function create_each_block7(ctx) {
  let circle;
  let circle_cx_value;
  let circle_cy_value;
  let mounted;
  let dispose;
  function mousedown_handler() {
    return ctx[9](ctx[19]);
  }
  return {
    c() {
      circle = svg_element("circle");
      attr(circle, "cx", circle_cx_value = ctx[19].x * 100);
      attr(circle, "cy", circle_cy_value = ctx[19].y * 200 - 50);
      attr(circle, "r", "4");
      toggle_class(circle, "pinned", ctx[19].pinned);
    },
    m(target, anchor) {
      insert(target, circle, anchor);
      if (!mounted) {
        dispose = listen(circle, "mousedown", mousedown_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 1 && circle_cx_value !== (circle_cx_value = ctx[19].x * 100)) {
        attr(circle, "cx", circle_cx_value);
      }
      if (dirty & 1 && circle_cy_value !== (circle_cy_value = ctx[19].y * 200 - 50)) {
        attr(circle, "cy", circle_cy_value);
      }
      if (dirty & 1) {
        toggle_class(circle, "pinned", ctx[19].pinned);
      }
    },
    d(detaching) {
      if (detaching)
        detach(circle);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment13(ctx) {
  let div;
  let svg0;
  let path0;
  let t;
  let svg1;
  let defs;
  let linearGradient;
  let stop0;
  let stop1;
  let path1;
  let mounted;
  let dispose;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block7(get_each_context7(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t = space();
      svg1 = svg_element("svg");
      defs = svg_element("defs");
      linearGradient = svg_element("linearGradient");
      stop0 = svg_element("stop");
      stop1 = svg_element("stop");
      path1 = svg_element("path");
      this.c = noop;
      attr(path0, "d", ctx[2]);
      attr(path0, "fill", "none");
      attr(path0, "stroke", "#65E2A0");
      attr(svg0, "viewBox", "0 0 100 100");
      attr(svg0, "width", "50");
      attr(svg0, "height", "100");
      attr(stop0, "offset", "0%");
      set_style(stop0, "stop-color", "#65E2A0");
      set_style(stop0, "stop-opacity", "1");
      attr(stop1, "offset", "100%");
      set_style(stop1, "stop-color", "#469C6E");
      set_style(stop1, "stop-opacity", "1");
      attr(linearGradient, "id", "grad1");
      attr(linearGradient, "x1", "0%");
      attr(linearGradient, "y1", "0%");
      attr(linearGradient, "x2", "100%");
      attr(linearGradient, "y2", "0%");
      attr(path1, "d", ctx[2]);
      attr(path1, "fill", "url(#grad1)");
      attr(path1, "stroke", "grey");
      attr(svg1, "id", "right");
      attr(svg1, "viewBox", "0 0 100 100");
      attr(svg1, "width", "50");
      attr(svg1, "height", "100");
      attr(div, "class", "component-wrapper");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, svg0);
      append(svg0, path0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(svg0, null);
      }
      append(div, t);
      append(div, svg1);
      append(svg1, defs);
      append(defs, linearGradient);
      append(linearGradient, stop0);
      append(linearGradient, stop1);
      append(svg1, path1);
      if (!mounted) {
        dispose = [
          listen(svg0, "mousedown", ctx[4]),
          listen(svg0, "mousemove", ctx[3]),
          listen(svg0, "mouseover", ctx[6]),
          listen(svg0, "mouseout", ctx[7]),
          listen(svg0, "mouseup", ctx[5]),
          listen(svg0, "focus", ctx[6]),
          listen(svg0, "blur", ctx[7])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4) {
        attr(path0, "d", ctx2[2]);
      }
      if (dirty & 3) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context7(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block7(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(svg0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 4) {
        attr(path1, "d", ctx2[2]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance13($$self, $$props, $$invalidate) {
  let points;
  let path;
  const dispatch2 = createEventDispatcher();
  let { value = [
    { x: 1, y: 0, pinned: true },
    { x: 0.5, y: 0.5, pinned: true },
    { x: 1, y: 1, pinned: true }
  ] } = $$props;
  let isHovered = false;
  let activePoint = void 0;
  let draggingPoint = void 0;
  let mousePosX = 0;
  let mousePosY = 0;
  const updateValue = () => {
    requestAnimationFrame(() => {
      dispatch2("change", points);
      $$invalidate(0, points = points.sort((a, b) => a.y > b.y ? -1 : 1));
    });
  };
  const removePoint = (p) => {
    if (p.pinned)
      return;
    points.splice(points.indexOf(activePoint), 1);
    updateValue();
  };
  const handleMouseMove = (ev) => {
    if (isHovered) {
      mousePosX = ev.offsetX;
      mousePosY = ev.offsetY;
      if (activePoint) {
        draggingPoint = activePoint;
        $$invalidate(1, activePoint = void 0);
      }
      if (draggingPoint) {
        draggingPoint.x = mousePosX / 50;
        draggingPoint.y = mousePosY / 100;
        updateValue();
      }
    }
  };
  const handleMouseDown = () => {
    if (!activePoint) {
      const point = {
        x: mousePosX / 50,
        y: mousePosY / 100,
        pinned: false
      };
      $$invalidate(1, activePoint = point);
      points.push(activePoint);
      updateValue();
    }
  };
  const handleMouseUp = () => {
    if (activePoint) {
      removePoint(activePoint);
      $$invalidate(1, activePoint = void 0);
    }
    draggingPoint = void 0;
  };
  const handleMouseOver = () => {
    isHovered = true;
  };
  const handleMouseOut = () => {
    isHovered = false;
  };
  const lineCommand = (point) => `L ${point.x * 100} ${point.y * 200 - 50}`;
  function renderPath(points2) {
    return points2.reduce((acc, point, i) => i === 0 ? `M ${point.x * 100},${point.y * 200 - 50}` : `${acc} ${lineCommand(point)}`, "");
  }
  const mousedown_handler = (p) => {
    $$invalidate(1, activePoint = p);
  };
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(8, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 256) {
      $:
        $$invalidate(0, points = value);
    }
    if ($$self.$$.dirty & 1) {
      $:
        $$invalidate(2, path = renderPath(points));
    }
  };
  return [
    points,
    activePoint,
    path,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseOver,
    handleMouseOut,
    value,
    mousedown_handler
  ];
}
var InputShape = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}.component-wrapper{position:relative;background-color:#4b4b4b;border-radius:2px;width:var(--width, min-content);user-select:none;transition:box-shadow 0.3s ease;box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0);outline:none !important}.component-wrapper:hover{box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.4)}:global(.component-wrapper.fullWidth){width:100%}svg{width:50%}svg>circle{fill:#4b4b4b;stroke:#65e2a0}svg>circle:hover{fill:#65e2a0;cursor:pointer}#right{transform:scaleX(-1)}#right>path{stroke:none}.component-wrapper{display:flex;width:100px;max-width:100%}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance13, create_fragment13, safe_not_equal, { value: 8 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["value"];
  }
  get value() {
    return this.$$.ctx[8];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
};
customElements.define("plant-shape", InputShape);
var InputShape_default = InputShape;

// ../ui/src/lib/InputSlider.svelte
function create_fragment14(ctx) {
  let div;
  let output;
  let t0;
  let output_style_value;
  let t1;
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      output = element("output");
      t0 = text(ctx[0]);
      t1 = space();
      input = element("input");
      this.c = noop;
      attr(output, "style", output_style_value = `left: ${ctx[5] * 100}%; transform: translateX(-${ctx[5] * 66.66}%)`);
      toggle_class(output, "isActive", ctx[4]);
      attr(input, "type", "range");
      attr(input, "min", ctx[1]);
      attr(input, "step", ctx[3]);
      attr(input, "max", ctx[2]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, output);
      append(output, t0);
      append(div, t1);
      append(div, input);
      set_input_value(input, ctx[0]);
      if (!mounted) {
        dispose = [
          listen(input, "focus", ctx[7]),
          listen(input, "blur", ctx[8]),
          listen(input, "input", function() {
            if (is_function(ctx[6]("change", ctx[0])))
              ctx[6]("change", ctx[0]).apply(this, arguments);
          }),
          listen(input, "change", ctx[9]),
          listen(input, "input", ctx[9])
        ];
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & 1)
        set_data(t0, ctx[0]);
      if (dirty & 32 && output_style_value !== (output_style_value = `left: ${ctx[5] * 100}%; transform: translateX(-${ctx[5] * 66.66}%)`)) {
        attr(output, "style", output_style_value);
      }
      if (dirty & 16) {
        toggle_class(output, "isActive", ctx[4]);
      }
      if (dirty & 2) {
        attr(input, "min", ctx[1]);
      }
      if (dirty & 8) {
        attr(input, "step", ctx[3]);
      }
      if (dirty & 4) {
        attr(input, "max", ctx[2]);
      }
      if (dirty & 1) {
        set_input_value(input, ctx[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance14($$self, $$props, $$invalidate) {
  let alpha;
  const dispatch2 = createEventDispatcher();
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { value = 50 } = $$props;
  let isActive = false;
  const focus_handler = () => $$invalidate(4, isActive = true);
  const blur_handler = () => $$invalidate(4, isActive = false);
  function input_change_input_handler() {
    value = to_number(this.value);
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("min" in $$props2)
      $$invalidate(1, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(2, max = $$props2.max);
    if ("step" in $$props2)
      $$invalidate(3, step = $$props2.step);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 7) {
      $:
        $$invalidate(5, alpha = (value - min) / Math.abs(min - max));
    }
  };
  return [
    value,
    min,
    max,
    step,
    isActive,
    alpha,
    dispatch2,
    focus_handler,
    blur_handler,
    input_change_input_handler
  ];
}
var InputSlider = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>div{position:relative;width:100%;height:10px}input[type=range]{position:absolute;-webkit-appearance:none;width:100%;background:transparent;margin:0;height:10px}input[type=range]:focus{outline:none}input[type=range]::-webkit-slider-runnable-track{width:100%;height:2px;cursor:pointer;background:#4b4b4b;border-radius:1.4px}input[type=range]::-webkit-slider-thumb{height:10px;width:10px;border-radius:50px;background:#4b4b4b;cursor:pointer;-webkit-appearance:none;margin-top:-3.2px}input[type=range]:hover::-webkit-slider-thumb{box-shadow:0px 0px 5px rgba(0, 0, 0, 0.5)}input[type=range]:focus::-webkit-slider-runnable-track{background:#585858}input[type=range]::-moz-range-track{width:100%;height:2px;cursor:pointer;background:#4b4b4b;border-radius:1.4px;border:0px solid rgba(1, 1, 1, 0)}input[type=range]::-moz-range-thumb{height:10px;width:10px;border-radius:50px;background:#4b4b4b;cursor:pointer}input[type=range]::-ms-track{width:100%;height:2px;cursor:pointer;background:transparent;border-color:transparent;color:transparent}input[type=range]::-ms-fill-lower{background:#3e3e3e;border-radius:5px}input[type=range]::-ms-fill-upper{background:#4b4b4b;border-radius:5px}input[type=range]::-ms-thumb{height:10px;width:10px;border-radius:50px;background:#4b4b4b;cursor:pointer;height:2px}input[type=range]:focus::-ms-fill-lower{background:#4b4b4b}input[type=range]:focus::-ms-fill-upper{background:#585858}output{position:absolute;display:inline;pointer-events:none;color:#cccccc;text-shadow:0px 0px 2px black;top:-1.2em;opacity:0;top:-15px;transition:opacity 0.3s ease, top 0.3s ease}div:hover>output{top:-25px;transform:translateX(-50%);opacity:1}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance14, create_fragment14, safe_not_equal, { min: 1, max: 2, step: 3, value: 0 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["min", "max", "step", "value"];
  }
  get min() {
    return this.$$.ctx[1];
  }
  set min(min) {
    this.$$set({ min });
    flush();
  }
  get max() {
    return this.$$.ctx[2];
  }
  set max(max) {
    this.$$set({ max });
    flush();
  }
  get step() {
    return this.$$.ctx[3];
  }
  set step(step) {
    this.$$set({ step });
    flush();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(value) {
    this.$$set({ value });
    flush();
  }
};
customElements.define("plant-slider", InputSlider);

// ../ui/src/lib/InputSearch.svelte
function get_each_context8(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  child_ctx[23] = i;
  return child_ctx;
}
function create_if_block10(ctx) {
  let div;
  let t0_value = (ctx[21].title || ctx[21].value) + "";
  let t0;
  let t1;
  let mounted;
  let dispose;
  function focus_handler() {
    return ctx[14](ctx[21]);
  }
  function mouseover_handler() {
    return ctx[15](ctx[21]);
  }
  function click_handler() {
    return ctx[16](ctx[21]);
  }
  return {
    c() {
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      attr(div, "class", "search-container");
      toggle_class(div, "focused", ctx[21].value === ctx[3]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t0);
      append(div, t1);
      if (!mounted) {
        dispose = [
          listen(div, "focus", focus_handler),
          listen(div, "mouseover", mouseover_handler),
          listen(div, "click", click_handler)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 16 && t0_value !== (t0_value = (ctx[21].title || ctx[21].value) + ""))
        set_data(t0, t0_value);
      if (dirty & 24) {
        toggle_class(div, "focused", ctx[21].value === ctx[3]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_each_block8(ctx) {
  let if_block_anchor;
  let if_block = ctx[23] < ctx[0] && create_if_block10(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[23] < ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block10(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment15(ctx) {
  let div;
  let input;
  let t;
  let mounted;
  let dispose;
  let each_value = ctx[4];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block8(get_each_context8(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      input = element("input");
      t = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.c = noop;
      attr(input, "type", "text");
      attr(input, "placeholder", "Search");
      attr(div, "class", "search-wrapper");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input);
      ctx[12](input);
      set_input_value(input, ctx[1]);
      append(div, t);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      if (!mounted) {
        dispose = [
          listen(window, "keydown", ctx[6]),
          listen(input, "input", ctx[13])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 2 && input.value !== ctx2[1]) {
        set_input_value(input, ctx2[1]);
      }
      if (dirty & 185) {
        each_value = ctx2[4];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context8(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block8(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[12](null);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance15($$self, $$props, $$invalidate) {
  let filteredItems;
  let selectedValue;
  const dispatch2 = createEventDispatcher();
  const amountSelects = {};
  let { limitAmount = 10 } = $$props;
  let { values = [] } = $$props;
  let inputEl;
  let searchTerm = "";
  function search(items, searchTerm2) {
    if (!searchTerm2?.length)
      return items;
    const filtered = items.filter((i) => {
      if (i.value.includes(searchTerm2))
        return true;
      if (i.title && i.title.toLowerCase().includes(searchTerm2))
        return true;
      return false;
    });
    if (!filtered.length) {
      return [{ value: "Nothing Found" }];
    }
    const activeItem = filtered.find((v) => v.value === selectedValue);
    if (!activeItem) {
      $$invalidate(3, selectedValue = filtered[0].value);
    }
    return filtered;
  }
  function focus() {
    inputEl.focus();
  }
  function clear() {
    $$invalidate(1, searchTerm = "");
  }
  function handleSelect({ value = selectedValue } = { value: selectedValue }) {
    amountSelects[value] = amountSelects[value] + 1 || 1;
    dispatch2("input", value);
  }
  function handleIndexChange(dir) {
    if (!selectedValue.length) {
      $$invalidate(3, selectedValue = filteredItems[0].value);
      return;
    }
    const item = filteredItems.slice(0, limitAmount).find((i) => i.value === selectedValue);
    if (!item)
      return;
    const index = filteredItems.indexOf(item);
    const length = Math.min(filteredItems.length, limitAmount);
    const nextIndex = ((index + dir) % length + length) % length;
    $$invalidate(3, selectedValue = filteredItems[nextIndex].value);
  }
  function handleKeyDown({ key }) {
    if (key === "Enter" && selectedValue.length) {
      handleSelect();
    }
    if (key === "ArrowDown") {
      handleIndexChange(1);
    }
    if (key === "ArrowUp") {
      handleIndexChange(-1);
    }
  }
  function setActive(v) {
    $$invalidate(3, selectedValue = v.value);
  }
  const setItems = (items) => {
    $$invalidate(8, values = items);
  };
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      inputEl = $$value;
      $$invalidate(2, inputEl);
    });
  }
  function input_input_handler() {
    searchTerm = this.value;
    $$invalidate(1, searchTerm);
  }
  const focus_handler = (v) => setActive(v);
  const mouseover_handler = (v) => setActive(v);
  const click_handler = (v) => handleSelect(v);
  $$self.$$set = ($$props2) => {
    if ("limitAmount" in $$props2)
      $$invalidate(0, limitAmount = $$props2.limitAmount);
    if ("values" in $$props2)
      $$invalidate(8, values = $$props2.values);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 258) {
      $:
        $$invalidate(4, filteredItems = search(values, searchTerm.toLowerCase()));
    }
  };
  $:
    $$invalidate(3, selectedValue = "");
  return [
    limitAmount,
    searchTerm,
    inputEl,
    selectedValue,
    filteredItems,
    handleSelect,
    handleKeyDown,
    setActive,
    values,
    focus,
    clear,
    setItems,
    input_binding,
    input_input_handler,
    focus_handler,
    mouseover_handler,
    click_handler
  ];
}
var InputSearch = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>:export{dark_background-color:#1a1a1a;dark_foreground-color:#303030;dark_outline-color:#212121;dark_text-color:#ffffff;dark_shadow:0px 0px 2px rgba(0, 0, 0, 0.7);light_background-color:#d0d0d0;light_foreground-color:white;light_outline-color:#b9b9b9;light_text-color:#484848;light_shadow:0px 0px 5px rgba(0, 0, 0, 0.144)}.search-container{padding:5px;width:100%;border-radius:5px;box-sizing:border-box}.search-container.focused{background:linear-gradient(to right, #65e2a0, #469c6e);color:var(--foreground-color)}.search-wrapper{padding:5px;z-index:2;width:100px;background-color:var(--background-color);border-radius:5px;color:#707070;box-shadow:0px 2px 3px rgba(0, 0, 0, 0.13), 1px 2px 2px rgba(0, 0, 0, 0.1), -1px -2px 2px rgba(0, 0, 0, 0.05)}.search-wrapper input{width:100%;background-color:#cccccc;box-sizing:border-box;font-size:1.5em;border-radius:3px;padding:3px 5px;margin:0;margin-bottom:5px;outline:none !important;border:none}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance15, create_fragment15, safe_not_equal, {
      limitAmount: 0,
      values: 8,
      focus: 9,
      clear: 10,
      setItems: 11
    }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["limitAmount", "values", "focus", "clear", "setItems"];
  }
  get limitAmount() {
    return this.$$.ctx[0];
  }
  set limitAmount(limitAmount) {
    this.$$set({ limitAmount });
    flush();
  }
  get values() {
    return this.$$.ctx[8];
  }
  set values(values) {
    this.$$set({ values });
    flush();
  }
  get focus() {
    return this.$$.ctx[9];
  }
  get clear() {
    return this.$$.ctx[10];
  }
  get setItems() {
    return this.$$.ctx[11];
  }
};
customElements.define("plant-search", InputSearch);
var InputSearch_default = InputSearch;

// ../ui/src/lib/Section.svelte
function create_if_block11(ctx) {
  let div;
  let p;
  let t;
  return {
    c() {
      div = element("div");
      p = element("p");
      t = text(ctx[1]);
      attr(div, "class", "border");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, p);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment16(ctx) {
  let div2;
  let div0;
  let svg;
  let path;
  let t0;
  let t1;
  let div1;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block11(ctx);
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      div1 = element("div");
      div1.innerHTML = `<slot></slot>`;
      this.c = noop;
      attr(path, "d", "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "width", "24");
      attr(svg, "height", "24");
      attr(div0, "class", "header");
      attr(div1, "class", "content");
      attr(div2, "class", "wrapper");
      toggle_class(div2, "open", ctx[0]);
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);
      append(div0, svg);
      append(svg, path);
      append(div0, t0);
      if (if_block)
        if_block.m(div0, null);
      append(div2, t1);
      append(div2, div1);
      if (!mounted) {
        dispose = listen(div0, "click", ctx[2]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block11(ctx2);
          if_block.c();
          if_block.m(div0, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 1) {
        toggle_class(div2, "open", ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function instance16($$self, $$props, $$invalidate) {
  const dispatch2 = createEventDispatcher();
  let { open: open2 = false } = $$props;
  let { name: name2 = "" } = $$props;
  const toggle = () => {
    $$invalidate(0, open2 = !open2);
    dispatch2("toggle", open2);
  };
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open2 = $$props2.open);
    if ("name" in $$props2)
      $$invalidate(1, name2 = $$props2.name);
  };
  return [open2, name2, toggle];
}
var Section = class extends SvelteElement {
  constructor(options) {
    super();
    this.shadowRoot.innerHTML = `<style>p{margin:0px}.wrapper{width:100%}.content{max-height:0px;overflow:hidden;opacity:0;transition:max-height 0.3s ease, opacity 0.3s ease}.open>.content{opacity:1;max-height:1000px}.header{cursor:pointer;display:grid;grid-template-columns:auto 1fr}svg{margin-left:-7px;margin-top:-2px;transform:rotate(0deg);transition:transform 0.2s ease, margin-top 0.3s ease}.open>.header>svg{margin-top:-4px;transform:rotate(90deg)}svg>path{stroke:none !important;fill:#303030}p{user-select:none}.border{padding-bottom:5px;border-bottom:solid thin #30303000;transition:padding-bottom 0.3s ease, border-bottom 0.3s ease}.open>.header>.border{border-bottom:solid thin #30303055;padding-bottom:10px}</style>`;
    init(this, {
      target: this.shadowRoot,
      props: attribute_to_object(this.attributes),
      customElement: true
    }, instance16, create_fragment16, safe_not_equal, { open: 0, name: 1 }, null);
    if (options) {
      if (options.target) {
        insert(options.target, this, options.anchor);
      }
      if (options.props) {
        this.$set(options.props);
        flush();
      }
    }
  }
  static get observedAttributes() {
    return ["open", "name"];
  }
  get open() {
    return this.$$.ctx[0];
  }
  set open(open2) {
    this.$$set({ open: open2 });
    flush();
  }
  get name() {
    return this.$$.ctx[1];
  }
  set name(name2) {
    this.$$set({ name: name2 });
    flush();
  }
};
customElements.define("plant-section", Section);

// ../ui/src/lib/index.ts
function stateToElement({
  target,
  template,
  value
}) {
  if (value === void 0 && "value" in template) {
    value = template.value;
  }
  const component = stateToComponent(template, value);
  const props = { ...template };
  delete props.type;
  delete props.inputType;
  delete props.defaultValue;
  delete props.internal;
  props["value"] = value;
  return new component({ target, props: { ...props, "--width": "100%" } });
}
function stateToComponent(template, value) {
  if (template.inputType === "select" || Array.isArray(template.values)) {
    return InputSelect_default;
  }
  if (template.inputType === "curve") {
    return InputCurve_default;
  }
  if (template.inputType === "shape") {
    return InputShape_default;
  }
  if (template.type === "number" || typeof value === "number") {
    if (template.step && template.step % 1 != 0) {
      return InputFloat_default;
    }
    return InputInteger_default;
  }
  return InputCheckbox_default;
}

// src/view/NodeStateView.ts
var NodeStateView = class {
  constructor(nodeState) {
    this.nodeState = nodeState;
    this.wrapper = document.createElement("div");
    this.input = document.createElement("div");
    this.isPaused = false;
    this.wrapper.classList.add("node-state-single-wrapper");
    this.input.classList.add("node-state-input");
    const template = nodeState.template;
    const label = template.label || nodeState.key;
    if (typeof label === "string") {
      const labelEl = document.createElement("p");
      labelEl.className = "state-label";
      labelEl.innerHTML = label;
      this.wrapper.appendChild(labelEl);
    }
    if ((template == null ? void 0 : template.label) === false) {
      this.wrapper.classList.add("hide-label");
    }
    if (!template.external) {
      this.element = stateToElement({
        target: this.input,
        template,
        value: nodeState.getValue()
      });
      if (this.element) {
        this.element.$on("change", ({ detail }) => {
          if (this.isPaused)
            return;
          this.isPaused = true;
          if (typeof detail !== "undefined" && !Number.isNaN(detail)) {
            this.nodeState.setValue(detail);
          }
          this.isPaused = false;
        });
      }
    }
    nodeState.node.view.stateWrapper.appendChild(this.wrapper);
    this.wrapper.appendChild(this.input);
  }
  updateValue() {
    if (this.isPaused)
      return;
    this.isPaused = true;
    setTimeout(() => {
      if (this.element) {
        this.element.value = this.nodeState.getValue();
      }
    }, 50);
    this.isPaused = false;
  }
  updatePosition() {
    var _a, _b;
    this.rect = this.wrapper.getBoundingClientRect();
    (_b = (_a = this.nodeState.getInput()) == null ? void 0 : _a.view) == null ? void 0 : _b.updatePosition();
  }
  get y() {
    return this.rect.y - this.nodeState.node.view.y;
  }
  get height() {
    return this.rect.height;
  }
  setActive(isActive) {
    this.wrapper.classList[isActive ? "remove" : "add"]("disabled");
  }
};

// src/view/NodeInputView.ts
var NodeInputView = class {
  constructor(input) {
    if (!input || !input.node)
      throw new Error("Somethings missing");
    this.input = input;
    this.node = input.node;
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("node-input-wrapper");
    input.type.forEach((t) => {
      this.wrapper.classList.add(`socket-type-${t === "*" ? "all" : t}`);
    });
    input.state.view.wrapper.appendChild(this.wrapper);
    this.wrapper.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      const connection = this.input.connection;
      if (connection) {
        connection.remove();
        this.node.system.view.createFloatingConnection(connection.output);
      } else {
        this.node.system.view.createFloatingConnection(this.input);
      }
    }, false);
    this.node.system.view.colorStore.on(input.type[0], (color) => {
      const col = window.getComputedStyle(this.wrapper, null).getPropertyValue("background-color");
      this.wrapper.style.backgroundColor = col !== "rgba(0, 0, 0, 0)" ? col : color;
    });
  }
  updatePosition() {
    var _a;
    this.rect = this.wrapper.getBoundingClientRect();
    (_a = this == null ? void 0 : this.connection) == null ? void 0 : _a.setPosition({ x2: this.x, y2: this.y });
  }
  remove() {
    this.wrapper.remove();
    if (this.connection)
      this.connection.remove();
  }
  set state(v) {
    this.wrapper.classList.forEach((c) => {
      if (c.includes("socket-state-"))
        this.wrapper.classList.remove(c);
    });
    if (v && v.length)
      this.wrapper.classList.add("socket-state-" + v);
  }
  get x() {
    return this.node.view.x - 3;
  }
  get y() {
    const system = this.node.system.view;
    const y = (this.rect.y + this.rect.height / 2 - system.y - system.top) / system.s - system.height / 2;
    return y;
  }
};

// src/model/NodeInput.ts
var NodeInput = class {
  constructor(state, type, key) {
    this.state = state;
    this.key = key;
    this.node = state.node;
    this.type = Array.isArray(type) ? type : [type];
  }
  bindView() {
    this.view = new NodeInputView(this);
  }
  removeConnection() {
    const conn = this.connection;
    delete this.connection;
    conn && conn.remove();
    this.node.setStateValue(this.key, void 0);
    this.state.setIsExternal(false);
  }
  setConnection(conn) {
    if (this.connection) {
      this.connection.remove();
    }
    this.connection = conn;
    if (this.view)
      this.view.connection = conn.view;
    this.state.setIsExternal(true);
  }
  remove() {
    if (this.view)
      this.view.remove();
    this.removeConnection();
  }
};

// src/model/NodeState.ts
var NodeState = class extends EventEmitter {
  constructor(node2, key, template) {
    super();
    this.node = node2;
    this.key = key;
    this.template = template;
    this.isExternal = false;
    var _a, _b;
    this.value = (_b = (_a = node2.state[key]) != null ? _a : template.defaultValue) != null ? _b : template.value;
    this.node._state[key] = this.value;
    if (!this.template.internal) {
      this.input = new NodeInput(this, template.type, key);
    }
  }
  setIsExternal(isExternal = false) {
    var _a;
    this.isExternal = isExternal;
    (_a = this == null ? void 0 : this.view) == null ? void 0 : _a.setActive(!isExternal);
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    if (!this.isExternal) {
      if (this.node.enableUpdates) {
        this.node.system.history.addAction();
      }
      this.value = value;
    }
    this.node._state[this.key] = value;
    if (this.node.enableUpdates) {
      this == null ? void 0 : this.view.updateValue();
      this.node.update();
    }
  }
  remove() {
  }
  getInput() {
    return this.input;
  }
  bindView() {
    this.view = new NodeStateView(this);
    this.input && this.input.bindView();
  }
};

// src/view/NodeView.ts
var NodeView = class {
  constructor(node2) {
    this.inputs = [];
    this.outputs = [];
    this.active = false;
    this.x = 0;
    this.y = 0;
    this.downX = 0;
    this.downY = 0;
    this.mDownX = 0;
    this.mDownY = 0;
    this.height = 50;
    this.width = 91;
    this.node = node2;
    this.system = node2.system;
    this.wrapper = document.createElement("div");
    this.wrapper.style.minHeight = this.height + "px";
    this.wrapper.style.minWidth = this.width + "px";
    this.wrapper.classList.add("node-wrapper", "node-type-" + node2.attributes.type.toLowerCase());
    this.wrapper.setAttribute("id", "node-view-" + this.system.id + "-" + this.node.id);
    this.outputWrapper = document.createElement("div");
    this.outputWrapper.classList.add("node-outputs-wrapper");
    this.wrapper.append(this.outputWrapper);
    const title = document.createElement("p");
    title.innerHTML = node2.attributes.name || node2.attributes.type;
    title.classList.add("node-title");
    this.wrapper.appendChild(title);
    this.stateWrapper = document.createElement("div");
    this.stateWrapper.classList.add("node-state-wrapper");
    this.wrapper.append(this.stateWrapper);
    node2.system.view.nodeContainer.append(this.wrapper);
    const { pos: { x = 0, y = 0 } = {} } = node2.attributes;
    this.x = x;
    this.y = y;
    this.bindEventListeners();
    this.wrapper.style.left = x + "px";
    this.wrapper.style.top = y + "px";
    setTimeout(() => {
      const { width, height } = this.wrapper.getBoundingClientRect();
      this.width = width / this.system.view.s;
      this.height = height / this.system.view.s;
      this.updateViewPosition(x, y);
    }, 10);
  }
  bindEventListeners() {
    this.wrapper.addEventListener("mousedown", (ev) => this.handleMouseDown(ev));
    this._unsubscribeMouseMove = this.system.view.on("mousemove", (ev) => this.handleMouseMove(ev));
    this._unsubscribeMouseUp = this.system.view.on("mouseup", () => this.handleMouseUp());
  }
  removeEventListeners() {
    this._unsubscribeMouseMove();
    this._unsubscribeMouseUp();
    this.wrapper.addEventListener("mousedown", (ev) => this.handleMouseDown(ev));
  }
  set state(s) {
    this.wrapper.classList.remove("node-active", "node-selected", "node-dragging");
    this.wrapper.classList.add("node-" + s);
    this._state = s;
  }
  get state() {
    return this._state;
  }
  handleMouseDown(ev) {
    var _a, _b, _c, _d;
    if (this.system.view.keyMap.space || ev.button === 2)
      return;
    if (ev.target !== ev.currentTarget)
      return;
    ev.stopImmediatePropagation();
    ev.stopPropagation();
    this.node.system.view.setActive(this.node, ev);
    const { rmx: x, rmy: y } = this.system.view;
    this.mDownX = x;
    this.mDownY = y;
    this.downX = ((_b = (_a = this.node.attributes) == null ? void 0 : _a.pos) == null ? void 0 : _b.x) || 0;
    this.downY = ((_d = (_c = this.node.attributes) == null ? void 0 : _c.pos) == null ? void 0 : _d.y) || 0;
    this.active = true;
    if (this.system.view.selectedNodes.length) {
      this.system.view.selectedNodes.forEach((node2) => {
        node2.view.active = true;
        node2.view.mDownX = x;
        node2.view.mDownY = y;
        node2.view.downX = node2.view.x;
        node2.view.downY = node2.view.y;
      });
    }
  }
  handleMouseUp() {
    this.active = false;
    if (this.hoveredConnection) {
      this.hoveredConnection.connection.joinNode(this.node);
      delete this.hoveredConnection;
    }
  }
  handleMouseMove({ mx: _x, my: _y, keys }) {
    if (this.active) {
      this.state = "dragging";
      const precision = keys.ctrlKey ? 0.02 : 1;
      let vx = this.mDownX - _x;
      let vy = this.mDownY - _y;
      if (keys.shiftKey) {
        if (Math.abs(vx) > Math.abs(vy)) {
          vy = 0;
        } else {
          vx = 0;
        }
      }
      const x = Math.round((this.downX - vx / this.system.view.s) * precision) / precision;
      const y = Math.round((this.downY - vy / this.system.view.s) * precision) / precision;
      this.setPosition(x, y);
    }
  }
  updateViewPosition(x = ((_c) => (_c = ((_b) => (_b = ((_a) => (_a = this.node.attributes) == null ? void 0 : _a.pos)()) == null ? void 0 : _b.x)()) != null ? _c : this.x)(), y = ((_f) => (_f = ((_e) => (_e = ((_d) => (_d = this.node.attributes) == null ? void 0 : _d.pos)()) == null ? void 0 : _e.y)()) != null ? _f : this.y)()) {
    this.wrapper.style.left = x + "px";
    this.wrapper.style.top = y + "px";
    Object.values(this.node.states).forEach((s) => {
      var _a2;
      return (_a2 = s == null ? void 0 : s.view) == null ? void 0 : _a2.updatePosition();
    });
    this.node.outputs.forEach((o) => o.view.updatePosition());
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.node.setAttributes({ pos: { x, y } });
    this.updateViewPosition();
  }
  remove() {
    this.removeEventListeners();
    this.wrapper.remove();
  }
};

// src/nodes/Debug.ts
var DebugNode = class extends Node {
  constructor(system, props) {
    super(system, props);
    this.states = {
      input: new NodeState(this, "input", { type: "*" })
    };
    this.outputs = [];
  }
  compute({ input }) {
    return input;
  }
};
var DebugView = class extends NodeView {
  constructor(node2) {
    super(node2);
    const d = document.createElement("div");
    node2.on("computedData", (data) => {
      d.innerHTML = "";
      const p = document.createElement("p");
      p.innerHTML = JSON.stringify(data, null, " ");
      d.append(p);
    });
    this.wrapper.appendChild(d);
  }
};
var Debug_default = {
  title: "Debug",
  meta: {
    description: "Outputs any inputs for debug purposes"
  },
  node: DebugNode,
  view: DebugView
};

// src/nodes/Output.ts
var OutputNode = class extends Node {
  constructor(system, props) {
    super(system, props);
    this.states = {
      input: new NodeState(this, "input", {
        type: "*",
        external: true,
        label: false
      })
    };
    this.outputs = [];
  }
  compute({ input }) {
    return input;
  }
};
var OutputView = class extends NodeView {
  constructor(node2) {
    super(node2);
    const d = document.createElement("p");
    d.style.margin = "0px";
    d.style.padding = "4px";
    d.style.color = "white";
    d.style.fontWeight = "bold";
    node2.on("computedData", (data) => {
      d.innerHTML = JSON.stringify(data, null, 2);
    });
    this.wrapper.appendChild(d);
  }
};
var Output_default = {
  title: "Output",
  meta: {
    description: "Outputs the final value"
  },
  node: OutputNode,
  view: OutputView
};

// src/nodes/index.ts
var types = {
  BooleanNode: Boolean_default,
  MathNode: Math_default,
  NumberNode: Number_default,
  DebugNode: Debug_default,
  OutputNode: Output_default
};
var nodes_default = types;

// src/model/Logger.ts
var longestModuleName = 0;
var Logger = class {
  constructor(module, logLevel = "system" in module ? module.system.log.level : 2) {
    this.isGrouped = false;
    this.output = logger_default("logger");
    this.module = module;
    this.name = module.constructor.name;
    this.length = this.name.length;
    longestModuleName = Math.max(longestModuleName, this.length);
    this.level = logLevel;
    this.output = logger_default(this.getModuleName());
  }
  getModuleName() {
    return this.isGrouped ? "" : `${this.name.padEnd(longestModuleName, " ")}`;
  }
  handle(func, message, args) {
    if (args && args.length) {
      console.groupCollapsed(`${this.getModuleName()} ${message}`);
      func(...args);
      console.groupEnd();
    } else {
      func(`${this.getModuleName()} ${message}`);
    }
  }
  info(message, ...args) {
    if (this.level >= 3) {
      this.output(message, ...args);
    }
  }
  log(message, ...args) {
    if (this.level >= 2) {
      this.output(message, ...args);
    }
  }
  warn(message, ...args) {
    if (this.level >= 1) {
      this.output.warn(message, ...args);
    }
  }
  error(message, ...args) {
    if (this.level >= 0) {
      this.output.error(message);
      this.output(...args);
    }
  }
  group(message) {
    this.output.group(message);
    this.isGrouped = true;
  }
  groupEnd() {
    console.groupEnd();
    this.isGrouped = false;
  }
};

// src/view/AddMenu.ts
var RightClickMenu = class {
  constructor(view) {
    this.x = 0;
    this.y = 0;
    this.view = view;
    this.system = view.system;
    this.log = new Logger(this);
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("context-wrapper");
    this.search = new InputSearch_default({ target: this.wrapper });
    this.search.$on("input", ({ detail: value }) => {
      this.resolve(value);
    });
    this.view.wrapper.append(this.wrapper);
    this.view.system.store.on("types", (types2) => this.updateTypes(types2), 20);
    this.view.on("keydown", ({ key }) => key === "Escape" && this.hide());
  }
  updateTypes(types2) {
    this.search.setItems(types2.map((t) => {
      return {
        value: t.type || t.title,
        title: t.title
      };
    }));
  }
  handleWindowClick(ev) {
    const path = ev.composedPath();
    if (!path.includes(this.wrapper)) {
      this.reject();
    }
  }
  reject() {
    if (this.rej)
      this.rej();
    this.hide();
  }
  resolve(typeName) {
    const type = this.system.store.getByName(typeName);
    const { x: rx, y: ry } = this.view.projectWindowToLocal(this.x, this.y);
    const x = rx - this.view.width / 2;
    const y = ry - this.view.height / 2;
    if (type) {
      this.res({
        attributes: {
          pos: {
            x,
            y
          },
          id: "",
          name: type.title,
          type: type.title,
          refs: []
        },
        state: {
          value: void 0
        }
      });
    } else {
      this.reject();
    }
    this.hide();
  }
  hide() {
    this.search.clear();
    this.wrapper.classList.remove("context-visible");
    this.wrapper.blur();
    this.res = (d) => d;
    this.reject = () => {
      return;
    };
  }
  show({ x, y, socket }) {
    this.x = x;
    this.y = y;
    this.socket = socket;
    this.wrapper.style.left = x + "px";
    this.wrapper.style.top = y + "px";
    setTimeout(() => {
      this.wrapper.classList.add("context-visible");
      this.search.focus();
    }, 10);
    return new Promise((res, rej) => {
      this.res = res;
      this.rej = rej;
    });
  }
};

// src/view/BoxSelection.ts
var BoxSelectionView = class extends EventEmitter {
  constructor(view) {
    super();
    this.mDownX = 0;
    this.mDownY = 0;
    this.downX = 0;
    this.downY = 0;
    this.isShiftKey = false;
    this.view = view;
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("box-selection-wrapper");
    this.view.wrapper.append(this.wrapper);
    this.view.on("mousedown", ({ target, mx, x, my, y, keys }) => {
      var _a;
      if (keys.space || keys.shiftKey || keys.button === 2 || !keys.ctrlKey)
        return;
      if (target && !((_a = target == null ? void 0 : target.className) == null ? void 0 : _a.includes("nodesystem")))
        return;
      this.mDownX = mx;
      this.mDownY = my;
      this.downX = x;
      this.downY = y;
      this.wrapper.style.left = mx + "px";
      this.wrapper.style.top = my + "px";
      this.wrapper.style.width = "0px";
      this.wrapper.style.height = "0px";
      this.isShiftKey = keys.shift;
      this.show();
    });
  }
  show() {
    this.wrapper.classList.add("box-selection-visible");
    const rects = this.view.system.nodes.map((n) => {
      const { width, height } = n.view;
      const { x, y } = n.view;
      const x1 = x + this.view.width / 2;
      const y1 = y + this.view.height / 2;
      const x2 = x1 + width;
      const y2 = y1 + height;
      return {
        n,
        state: n.view.state,
        x1,
        y1,
        x2,
        y2
      };
    });
    let nodes = [];
    const unsubMove = this.view.on("mousemove", ({ mx, my, x, y }) => {
      const { mDownX, mDownY, downX, downY, isShiftKey } = this;
      const box = {
        x1: Math.min(mx, mDownX),
        x2: Math.max(mx, mDownX),
        y1: Math.min(my, mDownY),
        y2: Math.max(my, mDownY)
      };
      this.wrapper.style.left = box.x1 + "px";
      this.wrapper.style.top = box.y1 + "px";
      this.wrapper.style.width = Math.abs(mDownX - mx) + "px";
      this.wrapper.style.height = Math.abs(mDownY - my) + "px";
      const projectedBox = {
        x1: Math.min(x, downX),
        x2: Math.max(x, downX),
        y1: Math.min(y, downY),
        y2: Math.max(y, downY)
      };
      nodes = rects.filter((r) => {
        if (rectanglesIntersect(projectedBox, r)) {
          return true;
        } else {
          if (!isShiftKey) {
            r.state = "normal";
            r.n.view.state = "normal";
          }
          return false;
        }
      }).map(({ n, state }) => {
        if (state !== "active") {
          state = "selected";
          n.view.state = "selected";
        }
        return n;
      });
    }, 5);
    this.view.once("mouseup", () => {
      unsubMove();
      this.hide();
      this.emit("selection", nodes);
    });
  }
  projectBox(b) {
    const { x: x1, y: y1 } = this.view.projectWindowToLocal(b.x1, b.y1);
    const { x: x2, y: y2 } = this.view.projectWindowToLocal(b.x2, b.y2);
    return {
      x1,
      y1,
      x2,
      y2
    };
  }
  hide() {
    this.wrapper.classList.remove("box-selection-visible");
  }
};

// src/view/NodeOutputView.ts
var NodeOutputView = class {
  constructor(output) {
    this.connections = [];
    this.output = output;
    this.node = output.node;
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("node-output-wrapper");
    this.wrapper.classList.add(`socket-type-${output.type}`);
    output.node.view.outputWrapper.appendChild(this.wrapper);
    this.wrapper.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      this.node.system.view.createFloatingConnection(this.output);
    }, false);
    this.node.system.view.colorStore.on(output.type, (color) => {
      const col = window.getComputedStyle(this.wrapper, null).getPropertyValue("background-color");
      this.wrapper.style.backgroundColor = col !== "rgba(0, 0, 0, 0)" && col !== "rgb(0,0,0)" ? col : color;
    });
  }
  remove() {
    this.wrapper.remove();
    this.connections.forEach((c) => c.remove());
  }
  set state(v) {
    this.wrapper.classList.forEach((c) => {
      if (c.includes("socket-state-"))
        this.wrapper.classList.remove(c);
    });
    if (v && v.length)
      this.wrapper.classList.add("socket-state-" + v);
  }
  updatePosition() {
    this.rect = this.wrapper.getBoundingClientRect();
    this.output.connections.forEach((c) => c.view.setPosition({ x1: this.x, y1: this.y }));
  }
  get x() {
    return this.node.view.x + this.node.view.width + 3;
  }
  get y() {
    const system = this.node.system.view;
    return (this.rect.y + this.rect.height / 2 - system.y - system.top) / system.s - system.height / 2;
  }
};

// src/model/NodeOutput.ts
var NodeOutput = class {
  constructor(node2, type) {
    this.connections = [];
    this.node = node2;
    this.type = type;
    if (Array.isArray(type))
      throw new Error("Output can only output one type, not " + type);
  }
  bindView() {
    this.view = new NodeOutputView(this);
  }
  connectTo(input) {
    const indexOut = this.node.outputs.indexOf(this);
    return this.node.connectTo(input.node, indexOut, input.key);
  }
  removeConnection(conn) {
    const index = this.connections.indexOf(conn);
    this.connections.splice(index, 1);
    this.node.disconnectFrom(conn.input.node, conn.indexIn, conn.indexOut);
    if (this.view)
      this.view.connections.splice(index, 1);
  }
  setConnection(conn) {
    this.connections.push(conn);
    if (this.view)
      this.view.connections.push(conn.view);
  }
  remove() {
    this.connections.forEach((c) => c.remove());
  }
};

// src/view/FloatingConnectionView.ts
var FloatingConnectionView = class extends aggregate_default(ConnectionView, EventEmitter) {
  constructor(socket, point = {}) {
    const { system } = socket.node;
    super({}, socket);
    this.view = system.view;
    this.path.style.zIndex = "999";
    const type = Array.isArray(socket.type) ? socket.type[0] : socket.type;
    system.view.colorStore.on(type, (color) => {
      this.path.style.stroke = color;
    });
    socket.view.updatePosition();
    const x1 = socket.view.x;
    const y1 = socket.view.y;
    let x2 = x1;
    let y2 = y1;
    if (point) {
      x2 = point.x - system.view.width / 2;
      y2 = point.y - system.view.height / 2;
    }
    this.setPosition({
      x1,
      y1,
      x2,
      y2
    });
    this.dx2 = this.x2;
    this.dy2 = this.y2;
    this.isInput = socket instanceof NodeInput;
    this.allSockets = socket instanceof NodeInput ? system.getOutputs(socket.type) : system.getInputs(socket.type);
    this.allSockets.forEach((s) => s.view.state = "potential");
    let potentialSockets = this.allSockets.filter((s) => s.node.attributes.id !== socket.node.attributes.id);
    potentialSockets.forEach((s) => s.view.state = "middle");
    const connections = "connection" in socket ? [socket.connection] : socket.connections;
    if (connections && !!connections.length) {
      const connectedSockets = connections.map((c) => [c.input, c.output]).flat();
      potentialSockets = potentialSockets.filter((s) => !connectedSockets.includes(s));
    }
    this.potentialSockets = potentialSockets;
    this.potentialSockets.forEach((s) => s.view.updatePosition());
    this.potentialSockets.forEach((s) => s.view.state = "highlight");
    this._unsubMouseUp = this.view.on("mouseup", this.handleMouseUp.bind(this));
    this._unsubMouseMove = this.view.on("mousemove", this.handleMouseMove.bind(this));
    this.mdx = this.view.mx;
    this.mdy = this.view.my;
    this.socket = socket;
  }
  handleMouseUp(ev) {
    const { x, y, keys } = ev;
    this._unsubMouseUp();
    this._unsubMouseMove();
    this.allSockets.forEach((s) => s.view.state = "");
    let keyIn;
    let indexOut = 0;
    if (this.socket instanceof NodeInput && this.hoveredSocket instanceof NodeOutput) {
      keyIn = this.socket.key;
      indexOut = this.hoveredSocket.node.outputs.indexOf(this.hoveredSocket);
    } else if (this.socket instanceof NodeOutput && this.hoveredSocket instanceof NodeInput) {
      keyIn = this.hoveredSocket.key;
      indexOut = this.socket.node.outputs.indexOf(this.socket);
    }
    if (this.hoveredSocket) {
      this.emit("connection", {
        keyIn,
        indexOut,
        inputNode: this.isInput ? this.socket.node : this.hoveredSocket.node,
        outputNode: this.isInput ? this.hoveredSocket.node : this.socket.node
      });
      this.remove();
    } else if (keys.ctrlKey) {
      this.view.addMenu.show({ x, y, socket: this.socket }).then((props) => this.view.system.createNode(props)).then((node2) => {
        if (this.socket instanceof NodeOutput) {
          this.socket.node.connectTo(node2, indexOut, keyIn);
        } else {
          node2.connectTo(this.socket.node, indexOut, keyIn);
        }
      }).catch(() => {
      }).finally(() => {
        this.remove();
      });
    } else {
      this.remove();
    }
  }
  handleMouseMove(ev) {
    const { x: mx, y: my } = ev;
    if (!this.mdx) {
      this.mdx = mx;
      this.mdy = my;
    }
    const x2 = this.dx2 + (mx - this.mdx);
    const y2 = this.dy2 + (my - this.mdy);
    const distance = 20;
    const p = this.potentialSockets.map((socket) => {
      const { x, y } = socket.view;
      return {
        socket,
        distance: Math.abs(x2 - x) + Math.abs(y2 - y)
      };
    }).filter((s) => {
      return s.distance < distance;
    }).sort((a, b) => {
      return a.distance > b.distance ? -1 : 1;
    }).map((s) => s.socket);
    if (p.length) {
      const { x: _x2, y: _y2 } = p[0].view;
      this.hoveredSocket = p[0];
      this.setPosition({ x2: _x2, y2: _y2 });
    } else {
      this.hoveredSocket = void 0;
      this.setPosition({ x2, y2 });
    }
  }
  remove() {
    super.remove();
  }
};
var FloatingConnectionView_default = FloatingConnectionView;

// src/view/socketColorStore.ts
var COLORS = [
  { color: "#a52a2a", name: "brown" },
  { color: "#008000", name: "green" },
  { color: "#4b0082", name: "indigo" },
  { color: "#f0e68c", name: "khaki" },
  { color: "#add8e6", name: "lightblue" },
  { color: "#e0ffff", name: "lightcyan" },
  { color: "#90ee90", name: "lightgreen" },
  { color: "#d3d3d3", name: "lightgrey" },
  { color: "#ffb6c1", name: "lightpink" },
  { color: "#ffffe0", name: "lightyellow" },
  { color: "#00ff00", name: "lime" },
  { color: "#ff00ff", name: "magenta" },
  { color: "#800000", name: "maroon" },
  { color: "#000080", name: "navy" },
  { color: "#808000", name: "olive" },
  { color: "#ffa500", name: "orange" },
  { color: "#ffc0cb", name: "pink" },
  { color: "#800080", name: "purple" },
  { color: "#800080", name: "violet" },
  { color: "#ff0000", name: "red" },
  { color: "#c0c0c0", name: "silver" },
  { color: "#ffffff", name: "white" }
];
var ColorStore = class extends EventEmitter {
  constructor() {
    super();
    this.colors = {
      boolean: "#f00",
      number: "#fff",
      plant: "#65e2a0",
      vec3: "#6363C7"
    };
    this.index = 0;
  }
  setType(socketType) {
    if (!(socketType in this.colors)) {
      this.colors[socketType] = COLORS[this.index].color;
      this.index++;
    }
    this.emit(socketType, this.colors[socketType]);
  }
  on(socketType, cb) {
    this.setType(socketType);
    cb(this.colors[socketType]);
    return super.on(socketType, cb);
  }
};

// src/view/NodeSystemView.ts
var NodeSystemView = class extends EventEmitter {
  constructor(system) {
    super();
    this.colorStore = new ColorStore();
    this.width = 0;
    this.height = 0;
    this.top = 0;
    this.left = 0;
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.s = 1;
    this.mx = 0;
    this.my = 0;
    this.mdx = 0;
    this.mdy = 0;
    this.rmx = 0;
    this.rmy = 0;
    this.mouseDown = false;
    this.keyMap = {};
    this.selectedNodes = [];
    this.selectedNodesDown = [];
    this.clipboard = [];
    var _a, _b, _c, _d;
    this.system = system;
    this.wrapper = (_b = (_a = system.options) == null ? void 0 : _a.wrapper) != null ? _b : document.createElement("div");
    this.wrapper.classList.add("nodesystem-wrapper");
    if (system.options.parent) {
      system.options.parent.appendChild(this.wrapper);
    }
    this.transformWrapper = document.createElement("div");
    this.transformWrapper.classList.add("nodesystem-transform");
    this.wrapper.appendChild(this.transformWrapper);
    this.nodeContainer = document.createElement("div");
    this.nodeContainer.classList.add("nodes-container");
    this.transformWrapper.append(this.nodeContainer);
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttribute("viewBox", "0 0 1 1");
    this.svg.setAttribute("height", "1");
    this.svg.setAttribute("width", "1");
    this.svg.setAttribute("preserveAspectRatio", "none");
    this.svg.style.transform = `scale(${(_c = window.devicePixelRatio) != null ? _c : 1})`;
    this.transformWrapper.appendChild(this.svg);
    this.addMenu = new RightClickMenu(this);
    this.boxSelection = new BoxSelectionView(this);
    this.boxSelection.on("selection", (nodes) => {
      this.selectedNodes = nodes;
    });
    this.dpr = (_d = window.devicePixelRatio) != null ? _d : 1;
    this.bindEventListeners();
    this.handleResize();
  }
  createFloatingConnection(socket) {
    const floatingConnection = new FloatingConnectionView_default(socket, {
      x: this.mx,
      y: this.my
    });
    floatingConnection.once("connection", ({
      inputNode,
      outputNode,
      keyIn,
      indexOut
    }) => {
      outputNode.connectTo(inputNode, indexOut, keyIn);
    });
  }
  setActive(n, { shiftKey = false, ctrlKey = false } = {}) {
    if (!n) {
      if (this.activeNode) {
        this.activeNode.view.state = "normal";
        this.activeNode = void 0;
      }
      this.selectedNodes.forEach((s) => s.view.state = "normal");
      this.selectedNodes = [];
    } else if (shiftKey && ctrlKey) {
      if (this.activeNode) {
        this.activeNode.view.state = "normal";
        this.activeNode = void 0;
      }
      this.activeNode = n;
      this.activeNode.view.state = "active";
      if (this.activeNode.outputs.length) {
        const debugNode = this.system.createNode({
          state: {},
          attributes: {
            type: "debug",
            id: "0",
            name: "debug",
            refs: [],
            pos: {
              x: this.activeNode.view.x + this.activeNode.view.width + 10,
              y: this.activeNode.view.y
            }
          }
        });
        debugNode.enableUpdates = true;
        this.activeNode.connectTo(debugNode, 0, "input");
      }
    } else if (shiftKey) {
      if (!this.activeNode) {
        this.activeNode = n;
        this.activeNode.view.state = "active";
      } else {
        this.selectedNodes.push(this.activeNode);
        this.activeNode.view.state = "selected";
        this.activeNode = n;
        this.activeNode.view.state = "active";
      }
    } else {
      if (this.activeNode) {
        this.selectedNodes.forEach((s) => s.view.state = "normal");
        this.selectedNodes = [];
        if (this.activeNode !== n) {
          this.activeNode.view.state = "normal";
          this.activeNode = n;
          this.activeNode.view.state = "active";
        }
      } else {
        this.activeNode = n;
        this.activeNode.view.state = "active";
      }
    }
  }
  getSelectedNodes() {
    if (this.activeNode && this.selectedNodes.includes(this.activeNode)) {
      return this.selectedNodes;
    } else {
      if (this.activeNode) {
        return [...this.selectedNodes, this.activeNode];
      } else {
        return [...this.selectedNodes];
      }
    }
  }
  projectLocalToWindow(x, y) {
    const offsetX = x + this.x;
    const offsetY = y + this.y;
    const scaledX = offsetX * this.s;
    const scaledY = offsetY * this.s;
    return { x: scaledX, y: scaledY };
  }
  projectWindowToLocal(x, y) {
    const offsetX = x - this.x;
    const offsetY = y - this.y;
    const scaledX = offsetX / this.s;
    const scaledY = offsetY / this.s;
    return { x: scaledX, y: scaledY };
  }
  setTransform({ x = this.x, y = this.y, s = this.s } = {}) {
    this.x = x;
    this.y = y;
    this.s = s / this.dpr;
    this.panzoom.setTransform(x, y, s / this.dpr);
  }
  bindEventListeners() {
    window.addEventListener("keydown", (ev) => this.handleKeyDown(ev));
    window.addEventListener("keyup", (ev) => this.handleKeyUp(ev));
    this.wrapper.addEventListener("mousemove", (ev) => this.handleMouseMove(ev));
    this.wrapper.addEventListener("contextmenu", (ev) => {
      ev.preventDefault();
      this.addMenu.show({
        x: this.rmx,
        y: this.rmy
      }).then((props) => {
        this.system.createNode(props);
      }).catch();
    });
    this.wrapper.addEventListener("mousedown", (ev) => this.handleMouseDown(ev));
    this.wrapper.addEventListener("touchdown", (ev) => this.handleMouseDown(ev));
    this.wrapper.addEventListener("mouseup", (ev) => this.handleMouseUp(ev));
    window.addEventListener("resize", throttle(() => this.handleResize(), 10));
    this.panzoom = createPanZoom(this.transformWrapper, {
      minZoom: 0.2,
      maxZoom: 5,
      onTransform: ({ x, y, scale: s }) => {
        this.x = x;
        this.y = y;
        this.s = s;
        this.wrapper.style.backgroundPosition = `${x}px ${y}px`;
        this.wrapper.style.backgroundSize = s * this.height * 0.02 + "% " + s * this.width * 0.02 + "%";
        this.wrapper.style.backgroundOrigin = `${x}px ${y}px`;
        window["t"] = { x, y, s };
        this.system.setMetaData({ transform: { x, y, s } });
      }
    });
  }
  handleResize() {
    const { width, height, top, left } = this.wrapper.getBoundingClientRect();
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
    this.emit("resize", { width, height });
  }
  handleMouseMove(ev) {
    this.ev = ev;
    const { clientX, clientY, shiftKey, ctrlKey } = ev;
    this.rmx = clientX - this.left;
    this.rmy = clientY - this.top;
    const { x, y } = this.projectWindowToLocal(this.rmx, this.rmy);
    this.mx = x;
    this.my = y;
    this.emit("mousemove", {
      x,
      y,
      mx: this.rmx,
      my: this.rmy,
      keys: __spreadProps(__spreadValues({}, this.keyMap), { shiftKey, ctrlKey })
    });
  }
  handleMouseDown(ev) {
    const { shiftKey, ctrlKey, clientX, clientY, button, target } = ev;
    if (!shiftKey)
      this.setActive();
    if (![...ev["path"]].includes(this.addMenu.wrapper)) {
      this.addMenu.hide();
      ev.preventDefault();
    }
    this.mouseDown = true;
    this.rmx = clientX - this.left;
    this.rmy = clientY - this.top;
    const { x, y } = this.projectWindowToLocal(this.rmx, this.rmy);
    this.mx = x;
    this.my = y;
    this.selectedNodesDown = this.selectedNodes.map((_n) => [
      _n.view.x,
      _n.view.y
    ]);
    this.emit("mousedown", {
      x,
      y,
      mx: this.rmx,
      my: this.rmy,
      target,
      keys: __spreadProps(__spreadValues({}, this.keyMap), {
        shiftKey,
        ctrlKey,
        button
      })
    });
  }
  handleMouseUp({ clientX, clientY, shiftKey, ctrlKey }) {
    this.mouseDown = false;
    const x = clientX - this.left;
    const y = clientY - this.top;
    this.emit("mouseup", {
      x,
      y,
      keys: __spreadProps(__spreadValues({}, this.keyMap), {
        shiftKey,
        ctrlKey
      })
    });
  }
  handleKeyUp({ key }) {
    if (key === " ")
      key = "space";
    delete this.keyMap[key && key.toLowerCase()];
    this.emit("keyup", { key, keys: this.keyMap });
  }
  handleKeyDown({ key, ctrlKey, shiftKey }) {
    key = key === " " ? "space" : key.toLowerCase();
    this.keyMap[key && key.toLowerCase()] = true;
    if (key === "space") {
      this.ev && this.handleMouseDown(this.ev);
    }
    switch (key) {
      case "escape":
        this.addMenu.hide();
        break;
      case "a":
        if (shiftKey) {
          this.addMenu.show({
            x: this.rmx,
            y: this.rmy
          }).then((props) => {
            this.system.createNode(props);
          }).catch();
        }
        break;
      case "c":
        if (shiftKey && ctrlKey) {
          localStorage.clear();
          window.location.reload();
        } else if (ctrlKey) {
          const s = this.selectedNodes.splice(0);
          if (this.activeNode && !s.includes(this.activeNode))
            s.push(this.activeNode);
          this.clipboard = s.map((n) => n.deserialize());
        } else if (this.selectedNodes.length && this.activeNode) {
          this.selectedNodes[0].connectTo(this.activeNode);
        }
        break;
      case "f":
        this.setTransform({ x: 0, y: 0, s: 1 });
        break;
      case "g":
        if (!this.keyMap.g) {
          this.mdx = this.mx;
          this.mdy = this.my;
          this.selectedNodesDown = this.selectedNodes.map((_n) => [
            _n.view.x,
            _n.view.y
          ]);
        }
        break;
      case "x":
        if (this.activeNode) {
          if (ctrlKey) {
            this.system.spliceNode(this.activeNode);
          } else {
            this.system.removeNode(this.activeNode);
          }
        }
        this.selectedNodes.forEach((n) => n.remove());
        break;
      case "y":
        if (this.system.history) {
          if (ctrlKey) {
            this.system.history.redo();
          }
        }
        break;
      case "z":
        if (this.system.history) {
          if (ctrlKey) {
            this.system.history.undo();
          }
        }
        break;
      case "l":
        if (this.activeNode) {
          console.log(this.activeNode);
          console.log(this.activeNode.deserialize());
        }
        break;
      case "v":
        if (ctrlKey) {
          const sorted = this.clipboard.sort((a, b) => {
            const { pos: { x: x1 = 0, y: y1 = 0 } = {} } = a.attributes;
            const { pos: { x: x2 = 0, y: y2 = 0 } = {} } = b.attributes;
            return x1 + y1 < x2 + y2 ? -1 : 1;
          });
          let { pos: { x: offsetX = 0, y: offsetY = 0 } = {} } = sorted[0].attributes;
          const { x: mx, y: my } = this.projectWindowToLocal(this.mx, this.my);
          offsetX -= mx;
          offsetY -= my;
          this.clipboard.map((prop) => {
            const { pos: { x = 0, y = 0 } = {} } = prop.attributes;
            prop.attributes.pos = {
              x: x - offsetX,
              y: y - offsetY
            };
            return prop;
          }).forEach((c) => this.system.createNode(c));
        }
        break;
    }
    this.emit("keydown", { key, keys: __spreadProps(__spreadValues({}, this.keyMap), { ctrlKey }) });
  }
};

// src/model/NodeFactory.ts
var NodeFactory = class {
  constructor(system) {
    this.id = genId_default();
    this.system = system;
    this.log = new Logger(this);
    this.log.info(`Initialized`);
  }
  reset() {
    this.id.reset();
    this.log.info("Reset id generator");
  }
  create(props) {
    const { attributes } = props;
    const name2 = attributes.type.toLowerCase();
    const type = this.system.store.getByName(name2);
    attributes.id = this.id(+attributes.id);
    const node2 = new type.node(this.system, props);
    if (this.system.options.view && type.view) {
      const view = new type.view(node2);
      node2.bindView(view);
    }
    if (name2 === "output") {
      this.system.setOutputNode(node2);
    }
    this.log.info(`Created node with type ${attributes.type}`, props);
    return node2;
  }
};

// src/model/NodeHistory.ts
var NodeHistory = class {
  constructor(system) {
    this.system = system;
    this.history = [];
    this.historyIndex = -1;
    this.isApplyingChanges = false;
    this.log = new Logger(this);
    this.log.info(`Instantiated`);
    this.addAction = (() => {
      let int;
      const f = () => {
        if (!this.system.isLoaded)
          return;
        if (this.isApplyingChanges)
          return;
        if (int) {
          clearTimeout(int);
        } else {
          this.prevState = this.system.serialize().nodes;
        }
        int = setTimeout(() => {
          this._addAction();
          int = false;
        }, 200);
      };
      return f;
    })().bind(this);
  }
  _addAction() {
    this.log.info("Register History Step");
    if (this.isApplyingChanges)
      return;
    if (this.historyIndex !== this.history.length - 1) {
      this.history.length = this.historyIndex + 1;
    }
    const newState = this.system.serialize().nodes;
    const [next, previous] = diffBoth(this.prevState, newState);
    if (!previous || !next)
      return;
    this.history.push({
      previous,
      next
    });
    if (this.history.length > 60) {
      this.history = this.history.reverse().slice(0, 60).reverse();
    }
    this.historyIndex = this.history.length - 1;
  }
  serialize() {
    return {
      steps: this.history,
      index: this.historyIndex
    };
  }
  deserialize(data) {
    this.historyIndex = data.index;
    this.history = data.steps;
  }
  undo() {
    if (this.isApplyingChanges)
      return;
    this.isApplyingChanges = true;
    if (this.historyIndex < 0) {
      this.log.info("Reached beginning of Stack");
      this.isApplyingChanges = false;
      return;
    }
    const { previous } = this.history[this.historyIndex];
    const d = this.system.serialize();
    const data = mergeObjects(d.nodes, previous);
    d.nodes = data;
    this.system.load(d);
    this.historyIndex--;
    this.isApplyingChanges = false;
  }
  redo() {
    if (this.isApplyingChanges)
      return;
    this.isApplyingChanges = true;
    if (this.historyIndex >= this.history.length - 1) {
      this.log.info("Reached end of Stack");
      this.isApplyingChanges = false;
      return;
    }
    const { next } = this.history[this.historyIndex + 1];
    const d = this.system.serialize();
    const data = mergeObjects(d.nodes, next);
    d.nodes = data;
    this.system.load(d);
    this.historyIndex++;
    this.isApplyingChanges = false;
  }
};

// src/model/NodeParser.ts
var NodeParser = class {
  constructor(system) {
    this.system = system;
  }
  parseSystem(nodeData) {
    const { nodes } = nodeData;
    const nodeStore = new Map();
    const nodeInstances = nodes.map((props) => {
      const n = this.system.factory.create(props);
      n.enableUpdates = false;
      nodeStore.set(n.id, n);
      return n;
    });
    nodeInstances.forEach((n) => {
      if (n.attributes.refs)
        n.attributes.refs.forEach((ref) => {
          const n2 = nodeStore.get(ref.id);
          if (!n2)
            throw new Error(`Failed ref: from ${n.attributes.name || n.attributes.id} to ${ref.id} `);
          n.connectTo(n2, ref.out, ref.in);
        });
    });
    nodeInstances.forEach((n) => {
      n.enableUpdates = true;
      n.update();
    });
    return nodeInstances;
  }
  parseType(typeData) {
    const { compute, meta, outputs, title: name, parameters } = typeData;
    const TempNode = eval(`(outputs, compute) => class ${name} extends Node {
      constructor(system, props) {
        super(system, props);
        if (compute) this.compute = compute;

        if (outputs) {
          const _outputs = Array.isArray(outputs) ? outputs : [outputs];
          this.outputs = _outputs.map((s) => new NodeOutput(this, s));
        }

        Object.entries(parameters).forEach(([key, template]) => {
          this.states[key] = new NodeState(this, key, template);
        });
      }
    }`)(outputs, compute, NodeState, NodeOutput, Node);
    const inputs = Object.values(parameters).filter((p) => p.internal !== true).map((p) => p.type);
    if (this.system.options.view) {
      const V = class TempView extends NodeView {
        constructor(node2) {
          super(node2);
        }
      };
      return __spreadProps(__spreadValues({}, typeData), {
        inputs,
        title: name,
        meta,
        node: TempNode,
        view: V
      });
    }
    return __spreadProps(__spreadValues({
      inputs
    }, typeData), {
      title: name,
      meta,
      node: TempNode
    });
  }
  getData() {
    return {
      meta: this.system.meta,
      nodes: this.system.nodes.map((n) => n.deserialize())
    };
  }
};

// src/model/NodeTypeStore.ts
var log2 = logger_default("NodeTypeStore");
var NodeTypeStore = class extends EventEmitter {
  constructor() {
    super();
    this.types = [];
    this.typeMap = {};
  }
  add(type) {
    log2("register new type " + type.title, type);
    this.types = [
      ...this.types.filter((t) => t.title.toLowerCase() !== type.title.toLowerCase()),
      type
    ];
    this.typeMap[type.title.toLowerCase()] = type;
    this.emit("types", this.types);
    this.emit("type", type);
  }
  getByName(name2) {
    if (name2 in this.typeMap)
      return this.typeMap[name2];
    throw new Error("NodeTypeStore: type " + name2 + " does not exist");
  }
};

// src/model/NodeSystem.ts
var systemID = 0;
var NodeSystem = class extends EventEmitter {
  constructor(options = {}) {
    super();
    this.parser = new NodeParser(this);
    this.meta = { lastSaved: Date.now() };
    this.isLoaded = false;
    this.isPaused = false;
    this.nodes = [];
    this.states = [];
    this.id = systemID++;
    const {
      view = false,
      wrapper,
      defaultNodes = false,
      registerNodes = false,
      logLevel = 5
    } = options;
    this.options = { view, wrapper };
    try {
      this.log = new Logger(this, logLevel);
      this.log.group(`Instantiated id:${this.id}`);
      this.store = new NodeTypeStore();
      this.factory = new NodeFactory(this);
      this.history = new NodeHistory(this);
      if (view) {
        this.view = new NodeSystemView(this);
      }
      if (defaultNodes) {
        const nodesToRegister = [];
        if (defaultNodes === true) {
          nodesToRegister.push(...Object.entries(nodes_default).map((entry) => entry[1]));
        } else if (Array.isArray(defaultNodes) && defaultNodes.length) {
          defaultNodes.forEach((type) => {
            if (typeof type === "string" && type in nodes_default) {
              nodesToRegister.push(nodes_default[type]);
            }
          });
        }
        nodesToRegister.forEach((nodeType) => this.registerNodeType(nodeType));
      }
      if (registerNodes && registerNodes.length) {
        registerNodes.forEach(this.registerNodeType.bind(this));
      }
      this.log.groupEnd();
    } catch (error) {
      this.emit("error", { type: "init", error });
    }
  }
  get result() {
    return this._result;
  }
  set result(res) {
    this._result = res;
    if (this.isLoaded)
      this.emit("result", res);
  }
  setMetaData(data) {
    this.meta = __spreadValues(__spreadValues({}, this.meta), data);
    this.save();
  }
  load(systemData) {
    var _a;
    try {
      this.isLoaded = false;
      this.isPaused = true;
      this.nodes.forEach((n) => n.enableUpdates = false);
      this.nodes.forEach((n) => n.remove());
      this.factory.reset();
      const nodes = this.parser.parseSystem(systemData);
      this.addNodes(nodes);
      this.meta = systemData.meta || { lastSaved: 0 };
      this.meta.lastSaved = Date.now();
      (_a = this == null ? void 0 : this.view) == null ? void 0 : _a.setTransform(this.meta.transform);
      this.log.info(`Loaded NodeSystemData with ${nodes.length} Nodes`, systemData);
      if ("history" in systemData) {
        this.history.deserialize(systemData.history);
      }
      this.isPaused = false;
      this.isLoaded = true;
      this.result = this._result;
      return this;
    } catch (error) {
      this.emit("error", { type: "loading", error });
    }
  }
  serialize() {
    return __spreadProps(__spreadValues({}, this.parser.getData()), {
      history: this.history.serialize(),
      meta: this.meta
    });
  }
  save() {
    if (this.isLoaded) {
      this.meta.lastSaved = Date.now();
      this.log.info("save system", this.serialize());
      this.emit("save", this.serialize());
    }
  }
  setOutputNode(node2) {
    if (this.outputNode) {
      this.outputNode.remove();
    }
    this.outputNode = node2;
    node2.on("computedData", (data) => this.result = data);
  }
  addNodes(nodes) {
    nodes.forEach((n) => this.addNode(n));
  }
  addNode(node2) {
    this.history.addAction();
    this.nodes.push(node2);
    this.save();
  }
  removeNode(node2) {
    this.history.addAction();
    node2.enableUpdates = false;
    node2.view.remove();
    Object.values(node2.states).forEach((i) => i.remove());
    node2.outputs.forEach((o) => o.remove());
    node2.getInputs().forEach((i) => i.remove());
    this.nodes = this.nodes.filter((n) => n !== node2);
    this.save();
    this.log.info(`Removed Node id:${node2.id} type:${node2.attributes.type}`, node2.deserialize());
  }
  spliceNode(node2) {
    const leftSockets = node2.getInputs().map((i) => {
      var _a;
      return (_a = i == null ? void 0 : i.connection) == null ? void 0 : _a.output;
    });
    const rightSockets = node2.outputs.map((o) => o.connections).flat().map((c) => c.input);
    for (let i = 0; i < leftSockets.length; i++) {
      const leftSocket = leftSockets[i];
      const rightSocket = rightSockets[i];
      if (!rightSocket || !leftSocket)
        continue;
      leftSocket.connectTo(rightSocket);
    }
    return this.removeNode(node2);
  }
  getSockets(type) {
    const sockets = this.nodes.map((n) => [...n.getSockets()]).flat();
    if (!type)
      return sockets;
    return sockets.filter((s) => s.type === type);
  }
  getInputs(type) {
    const inputs2 = this.nodes.map((n) => n.getInputs()).flat();
    if (!type || type === "*")
      return inputs2;
    return inputs2.filter((s) => s.type.includes("*") || s.type.includes(type));
  }
  getOutputs(type) {
    const outputs2 = this.nodes.map((n) => n.outputs).flat();
    if (!type || type.includes("*"))
      return outputs2;
    return outputs2.filter((s) => s.type === "*" || type.includes(s.type));
  }
  createNode(props) {
    const node2 = this.factory.create(props);
    this.addNode(node2);
    this.save();
    this.log.info(`Created new node id:${props.attributes.id} type:${props.attributes.type}`, props);
    return node2;
  }
  getNodes() {
    return this.nodes;
  }
  findNodeById(id) {
    return this.nodes.filter((node2) => node2.id === id)[0];
  }
  getNodeTypes() {
    return this.store.types;
  }
  registerNodeType(type) {
    if ("node" in type) {
      this.store.add(type);
    } else {
      const _type = this.parser.parseType(type);
      this.store.add(_type);
    }
    this.log.info(`Registered new nodeType type:${type.title}`, type);
  }
};
__decorateClass([
  Debounce(1e3)
], NodeSystem.prototype, "save", 1);
export {
  Node,
  NodeSystem
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * Convert a series of points to a monotone cubic spline
 * Algorithm based on https://github.com/mbostock/d3
 * https://github.com/yr/monotone-cubic-spline
 * @copyright Yr
 * @license MIT
 */
//# sourceMappingURL=index.esm.js.map
