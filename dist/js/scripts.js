/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(24);
var anObject = __webpack_require__(2);
var toPrimitive = __webpack_require__(14);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var shared = __webpack_require__(29);
var has = __webpack_require__(5);
var uid = __webpack_require__(30);
var NATIVE_SYMBOL = __webpack_require__(34);
var USE_SYMBOL_AS_UID = __webpack_require__(57);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var definePropertyModule = __webpack_require__(7);
var createPropertyDescriptor = __webpack_require__(23);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var getOwnPropertyDescriptor = __webpack_require__(17).f;
var createNonEnumerableProperty = __webpack_require__(9);
var redefine = __webpack_require__(12);
var setGlobal = __webpack_require__(19);
var copyConstructorProperties = __webpack_require__(51);
var isForced = __webpack_require__(33);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(9);
var has = __webpack_require__(5);
var setGlobal = __webpack_require__(19);
var inspectSource = __webpack_require__(26);
var InternalStateModule = __webpack_require__(48);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(45);
var stickyHelpers = __webpack_require__(70);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var propertyIsEnumerableModule = __webpack_require__(47);
var createPropertyDescriptor = __webpack_require__(23);
var toIndexedObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(14);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(24);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(39);
var requireObjectCoercible = __webpack_require__(6);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(9);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(53);
var global = __webpack_require__(0);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(25);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(4);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(27);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var setGlobal = __webpack_require__(19);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(29);
var uid = __webpack_require__(30);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(50);
var store = __webpack_require__(27);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(32);
var enumBugKeys = __webpack_require__(22);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIndexedObject = __webpack_require__(18);
var indexOf = __webpack_require__(40).indexOf;
var hiddenKeys = __webpack_require__(20);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(10);
var exec = __webpack_require__(16);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(35);
var redefine = __webpack_require__(12);
var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(8);
var regexpExec = __webpack_require__(16);
var createNonEnumerableProperty = __webpack_require__(9);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(72).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(11);
var regexpExec = __webpack_require__(16);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(11);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(18);
var toLength = __webpack_require__(13);
var toAbsoluteIndex = __webpack_require__(54);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(11);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(6);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(21);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2);
var defineProperties = __webpack_require__(58);
var enumBugKeys = __webpack_require__(22);
var hiddenKeys = __webpack_require__(20);
var html = __webpack_require__(60);
var documentCreateElement = __webpack_require__(25);
var sharedKey = __webpack_require__(28);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(2);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(49);
var global = __webpack_require__(0);
var isObject = __webpack_require__(4);
var createNonEnumerableProperty = __webpack_require__(9);
var objectHas = __webpack_require__(5);
var sharedKey = __webpack_require__(28);
var hiddenKeys = __webpack_require__(20);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var inspectSource = __webpack_require__(26);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var ownKeys = __webpack_require__(52);
var getOwnPropertyDescriptorModule = __webpack_require__(17);
var definePropertyModule = __webpack_require__(7);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(21);
var getOwnPropertyNamesModule = __webpack_require__(31);
var getOwnPropertySymbolsModule = __webpack_require__(55);
var anObject = __webpack_require__(2);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

module.exports = global;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(41);
var wellKnownSymbol = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(34);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var definePropertyModule = __webpack_require__(7);
var anObject = __webpack_require__(2);
var objectKeys = __webpack_require__(59);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(32);
var enumBugKeys = __webpack_require__(22);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(21);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var fails = __webpack_require__(1);
var has = __webpack_require__(5);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var defineProperty = __webpack_require__(7).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3);
var global = __webpack_require__(0);
var isForced = __webpack_require__(33);
var redefine = __webpack_require__(12);
var has = __webpack_require__(5);
var classof = __webpack_require__(11);
var inheritIfRequired = __webpack_require__(64);
var toPrimitive = __webpack_require__(14);
var fails = __webpack_require__(1);
var create = __webpack_require__(44);
var getOwnPropertyNames = __webpack_require__(31).f;
var getOwnPropertyDescriptor = __webpack_require__(17).f;
var defineProperty = __webpack_require__(7).f;
var trim = __webpack_require__(67).trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(65);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2);
var aPossiblePrototype = __webpack_require__(66);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(6);
var whitespaces = __webpack_require__(68);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(1);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(36);
var anObject = __webpack_require__(2);
var toLength = __webpack_require__(13);
var requireObjectCoercible = __webpack_require__(6);
var advanceStringIndex = __webpack_require__(37);
var regExpExec = __webpack_require__(38);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var requireObjectCoercible = __webpack_require__(6);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(10);
var global = __webpack_require__(0);
var userAgent = __webpack_require__(43);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var userAgent = __webpack_require__(43);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var classof = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(8);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_14__);
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StartPopupNotifications = /*#__PURE__*/function () {
  function StartPopupNotifications(props) {
    _classCallCheck(this, StartPopupNotifications);

    this.inputCSRF = props.inputCSRF;
    this.popup = document.querySelector(props.selector);
    this.popupId = props.popupId;
    this.validParams = {
      countDisplay: true,
      showDay: true,
      showHour: true,
      showDate: true,
      dayReScreening: true,
      showOnDesktop: true,
      showMore: true,
      showThisPage: true,
      pageViewCount: true
    };
    this.type = props.type;
    this.position = props.position;
    this.animation = props.animation;
    this.mediaWithOutPadding = props.mediaWithOutPadding;
    this.imagePath = props.imagePath;
    this.videoIframe = props.videoIframe;
    this.body = document.querySelector('body');
    this.head = document.querySelector('head');
    this.colorTheme = props.colorTheme;
    this.roundEdges = props.roundEdges;
    this.title = props.title;
    this.text = props.text;
    this.buttonText1 = props.buttonText1;
    this.buttonLink1 = props.buttonLink1;
    this.buttonClass1 = props.buttonClass1;
    this.buttonText2 = props.buttonText2;
    this.buttonLink2 = props.buttonLink2;
    this.buttonClass2 = props.buttonClass2;
    this.aboutActionTitle = props.aboutActionTitle;
    this.aboutAction = props.aboutAction;
    this.vkIdGroup = props.vkIdGroup;
    this.facebookSrc = props.facebookSrc;
    this.odIdGroup = props.odIdGroup;
    this.settingsForm = props.settingsForm;
    this.privacyPolicyLink = props.privacyPolicyLink;
    this.shareSocial = props.shareSocial;
    this.html = props.html;
    this.width = Number(props.width);
    this.height = Number(props.height);
    this.offsetRight = Number(props.offsetRight);
    this.textClose = props.textClose;
    this.supportIE10 = this._checkIE10();
    this.timer = props.timer;
    this.conditions = props.conditions;
    this.tagVideo = '';
    this.tagVideoPreloader = '';
    this.active();
  }

  _createClass(StartPopupNotifications, [{
    key: "createPopup",
    value: function createPopup() {
      var _this = this;

      if (this.type) this.popup.setAttribute('data-type', this.type);
      if (this.animation) this.popup.setAttribute('data-animation', this.animation); // Popup BG

      var tagPopupBg = document.createElement('div');
      tagPopupBg.className = 'startwebsite-popup__bg';
      if (this.colorTheme.popupBackgroundColor) tagPopupBg.style.backgroundColor = this.colorTheme.popupBackgroundColor;
      if (this.colorTheme.popupBackgroundOpacity) tagPopupBg.style.opacity = this.colorTheme.popupBackgroundOpacity;
      this.popup.appendChild(tagPopupBg); // Modal

      var tagModal = document.createElement('div');
      tagModal.className = 'startwebsite-popup__modal';
      if (this.colorTheme.modalBackgroundColor) tagModal.style.backgroundColor = this.colorTheme.modalBackgroundColor;
      if (this.colorTheme.modalBackgroundImage) tagModal.style.background = "url('".concat(this.colorTheme.modalBackgroundImage, "') no-repeat center/cover");
      if (this.position) tagModal.setAttribute('data-position', this.position);
      if (this.roundEdges) tagModal.style.borderRadius = '4px';
      if (this.width) tagModal.style.maxWidth = this.width + 'px';

      if (this.height && this.type.match(/^(image|video)$/)) {
        var heightInPercentages = Math.ceil(this.height / 700 * 100);
        var modalHeightInPercentages = document.documentElement.clientWidth * (heightInPercentages / 100);
        if (modalHeightInPercentages > this.height) modalHeightInPercentages = this.height;
        tagModal.style.height = "".concat(modalHeightInPercentages, "px");
        window.addEventListener('resize', function () {
          var heightInPercentages = Math.ceil(_this.height / 700 * 100);
          var modalHeightInPercentages = document.documentElement.clientWidth * (heightInPercentages / 100);
          if (modalHeightInPercentages > _this.height) modalHeightInPercentages = _this.height;
          tagModal.style.height = "".concat(modalHeightInPercentages, "px");
        });
      }

      if (this.height && this.type.match(/^(action-media-(left|right|top)|action-text|action-text-2|form-bottom|social-vk|social-od|social-fc|form-right|form-left|share-social|html)$/)) tagModal.style.height = this.height + 'px';
      this.popup.appendChild(tagModal); // Header modal

      var tagHeader = document.createElement('div');
      tagHeader.className = 'startwebsite-popup__header';
      if (this.colorTheme.basicColor) tagHeader.style.color = this.colorTheme.basicColor;
      tagModal.appendChild(tagHeader); // Header modal title

      if (this.title && this.type === 'action-text-2') {
        var tagTitle = document.createElement('div');
        tagTitle.className = 'startwebsite-popup__title';
        tagHeader.appendChild(tagTitle);
        var tagTitleText = document.createElement('div');
        tagTitleText.className = 'startwebsite-popup__title_text';
        tagTitleText.innerHTML = 'Title popup';
        tagTitle.appendChild(tagTitleText);
      } // Modal close


      var tagClose = document.createElement('div');
      tagClose.className = 'startwebsite-popup__close';
      tagHeader.appendChild(tagClose);
      var tagCloseIcon = document.createElement('span');
      tagCloseIcon.className = 'startwebsite-popup__close_icon';
      if (this.colorTheme.accentColor) tagCloseIcon.style.color = this.colorTheme.accentColor;
      tagClose.appendChild(tagCloseIcon); // Modal Content

      var tagContent = document.createElement('div');
      tagContent.className = 'startwebsite-popup__content';
      if (this.timer) tagContent.setAttribute('data-timer', true);
      tagModal.appendChild(tagContent); // Heading for form

      if (this.title || this.text) {
        if (this.type.match(/^(form-right|form-left)$/)) {
          var tagFormHeading = document.createElement('div');
          tagFormHeading.className = 'startwebsite-popup__form-heading';
          tagContent.appendChild(tagFormHeading); // Title for form

          if (this.title) {
            var tagFormTitle = document.createElement('div');
            tagFormTitle.className = 'startwebsite-popup__form-title';
            tagFormHeading.appendChild(tagFormTitle);
            var tagFormTitleContent = document.createElement('div');
            tagFormTitleContent.className = 'startwebsite-popup__form-title_content';
            if (this.colorTheme.basicColor) tagFormTitleContent.style.color = this.colorTheme.basicColor;
            tagFormTitleContent.innerHTML = this.title;
            tagFormTitle.appendChild(tagFormTitleContent);
          } // Desc for form


          if (this.text) {
            var tagFormText = document.createElement('div');
            tagFormText.className = 'startwebsite-popup__form-text';
            tagFormHeading.appendChild(tagFormText);
            var tagFormTextContent = document.createElement('div');
            tagFormTextContent.className = 'startwebsite-popup__form-text_content';
            if (this.colorTheme.addColor) tagFormTextContent.style.color = this.colorTheme.addColor;
            tagFormTextContent.innerHTML = this.text;
            tagFormText.appendChild(tagFormTextContent);
          }
        }
      } // Timer for form when more width 850px


      if (this.timer && this.type.match(/^(form-right|form-left)$/)) {
        this._createTimer(tagContent, 'startwebsite-popup__form-timer');
      } // Media


      var tagMedia;

      if (this.type.match(/^(image|video|action-media-(left|right|top)|social-(vk|od|fc)|social-networks|form-bottom|form-right|form-left)$/)) {
        tagMedia = document.createElement('div');
        tagMedia.className = 'startwebsite-popup__media';
        if (this.mediaWithOutPadding) tagMedia.className += ' with-out-padding';
        if (this.offsetRight && this.type.match(/^(action-media-(left|right)|form-right|form-left)$/)) tagMedia.style.width = this.offsetRight + '%'; // Смена мест info и media

        if (!this.type.match(/^(action-media-right|social-(vk|od|fc)|social-networks|form-left)$/)) {
          tagContent.appendChild(tagMedia);
        } // Video


        if (this.videoIframe && this.type.match(/^(video|action-media-(left|right|top)|form-bottom|form-right|form-left)$/)) {
          this.imagePath = false;
          var tagVideo = document.createElement('div');
          tagVideo.className = 'startwebsite-popup__media_video';
          if (this.type !== 'video') tagVideo.innerHTML = this.videoIframe;
          tagMedia.appendChild(tagVideo);
          var tadMediaPreloader = document.createElement('div');
          tadMediaPreloader.className = 'startwebsite-popup__media_preloader';
          if (this.colorTheme.addColor) tadMediaPreloader.style.borderTopColor = this.colorTheme.addColor;
          tagMedia.appendChild(tadMediaPreloader);
          this.tagVideo = tagVideo;
          this.tagVideoPreloader = tadMediaPreloader;

          if (this.type === 'video') {
            return true;
          }
        } // Image


        if (this.imagePath && this.type.match(/^(image|action-media-(left|right|top)|form-bottom|form-right|form-left)$/)) {
          var tagImg = document.createElement('img');
          tagImg.className = 'startwebsite-popup__media_img';
          tagImg.src = this.imagePath;
          tagMedia.appendChild(tagImg);

          if (this.type === 'image') {
            return true;
          }
        }

        var createWidgetVk = function createWidgetVk(widthModal, heightWidget, cssId) {
          if (document.documentElement.clientWidth < 755) widthModal = tagModal.clientWidth - 40;
          if (widthModal > 500) widthModal = 500;
          var tagWidgetScriptApi = document.createElement('script');
          tagWidgetScriptApi.type = 'text/javascript';
          tagWidgetScriptApi.src = 'https://vk.com/js/api/openapi.js?168';

          _this.head.appendChild(tagWidgetScriptApi);

          setTimeout(function () {
            var tagWidgetScript = document.createElement('script');
            tagWidgetScript.type = 'text/javascript';
            tagWidgetScript.innerHTML = "VK.Widgets.Group('".concat(cssId, "', {mode: 3, width: ").concat(widthModal, "}, ").concat(_this.vkIdGroup, ");");

            _this.head.appendChild(tagWidgetScript);
          }, 1000);
          var tagWidgetHtml = document.createElement('div');
          tagWidgetHtml.className = 'startwebsite-popup__widget';
          tagWidgetHtml.innerHTML = "<!-- VK Widget --><div id='".concat(cssId, "'></div>");
          tagMedia.appendChild(tagWidgetHtml);
        };

        var createWidgetFc = function createWidgetFc(widthModal, heightWidget, cssId) {
          if (document.documentElement.clientWidth < 755) widthModal = tagModal.clientWidth - 40;
          if (widthModal > 500) widthModal = 500;
          var tagWidgetHtml = document.createElement('div');
          tagWidgetHtml.className = 'startwebsite-popup__widget';
          tagMedia.appendChild(tagWidgetHtml);
          var tagIframe = document.createElement('iframe');
          tagIframe.src = _this.facebookSrc;
          tagIframe.setAttribute('width', widthModal);
          tagIframe.setAttribute('height', heightWidget);
          tagIframe.setAttribute('scrolling', 'no');
          tagIframe.setAttribute('frameborder', '0');
          tagIframe.setAttribute('allowfullscreen', 'true');
          tagIframe.setAttribute('adapt_container_width', 'true');
          tagIframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share');
          tagIframe.style.border = 'none';
          tagIframe.style.overflow = 'hidden';
          tagWidgetHtml.appendChild(tagIframe);
        };

        var createWidgetOd = function createWidgetOd(widthModal, heightWidget, cssId) {
          if (document.documentElement.clientWidth < 755) widthModal = tagModal.clientWidth - 40;
          if (widthModal > 500) widthModal = 500;
          var tagWidgetScript = document.createElement('script');
          tagWidgetScript.type = 'text/javascript';
          tagWidgetScript.innerHTML = "\n                        !function (d, id, did, st) {\n                            let js = d.createElement(\"script\");\n                            js.src = \"https://connect.ok.ru/connect.js\";\n                            js.onload = js.onreadystatechange = function () {\n                            if (!this.readyState || this.readyState == \"loaded\" || this.readyState == \"complete\") {\n                            if (!this.executed) {\n                                this.executed = true;\n                                setTimeout(function () {\n                                OK.CONNECT.insertGroupWidget(id,did,st);\n                                }, 0);\n                            }\n                            }};\n                            d.documentElement.appendChild(js);\n                        }(document, \"".concat(cssId, "\", ").concat(_this.odIdGroup, ",'{\"width\":").concat(widthModal, ",\"height\":").concat(heightWidget, "}');\n                        ");

          _this.head.appendChild(tagWidgetScript);

          var tagWidgetHtml = document.createElement('div');
          tagWidgetHtml.className = 'startwebsite-popup__widget';
          tagWidgetHtml.innerHTML = "<div id=\"".concat(cssId, "\"></div>");
          tagMedia.appendChild(tagWidgetHtml);
        }; // Widget VK


        if (this.vkIdGroup && this.type === 'social-vk') {
          createWidgetVk(tagModal.clientWidth - 40, 250, 'widget-social-vk');
        } // Widget FC


        if (this.facebookSrc && this.type === 'social-fc') {
          createWidgetFc(tagModal.clientWidth - 40, 250, 'widget-social-fc');
        } // Widget OD


        if (this.odIdGroup && this.type === 'social-od') {
          createWidgetOd(tagModal.clientWidth - 40, 250, 'widget-social-od');
        }

        if (this.type === 'social-networks') {
          var widgetCount = function widgetCount() {
            var count = 0;
            var widgetArr = [_this.vkIdGroup, _this.odIdGroup, _this.facebookSrc];

            for (var _i = 0, _widgetArr = widgetArr; _i < _widgetArr.length; _i++) {
              var value = _widgetArr[_i];

              if (value) {
                count++;
              }
            }

            return count;
          };

          var setModalheightForSocialNetworks = function setModalheightForSocialNetworks() {
            switch (widgetCount()) {
              case 1:
                tagModal.style.height = '400px';
                break;

              case 2:
                tagModal.style.height = '650px';
                break;

              case 3:
                tagModal.style.height = '820px';
                break;
            }
          };

          if (document.documentElement.clientWidth < 755) {
            setModalheightForSocialNetworks();
          }

          window.addEventListener('resize', function () {
            if (document.documentElement.clientWidth < 755) {
              setModalheightForSocialNetworks();
            }
          });

          if (this.vkIdGroup) {
            createWidgetVk(tagModal.clientWidth / widgetCount() - 60 / widgetCount(), 225, 'widget-social-networks-vk');
          }

          if (this.facebookSrc) {
            createWidgetFc(tagModal.clientWidth / widgetCount() - 60 / widgetCount(), 225, 'widget-social-networks-fc');
          }

          if (this.odIdGroup) {
            createWidgetOd(tagModal.clientWidth / widgetCount() - 60 / widgetCount(), 225, 'widget-social-networks-od');
          }
        }
      } // Info


      if (this.type.match(/^(action-media-(left|right|top)|action-text|action-text-2|social-(vk|od|fc)|social-networks|form-bottom|form-right|form-left|share-social|html)$/)) {
        var tagInfo = document.createElement('div');
        tagInfo.className = 'startwebsite-popup__info';
        if (this.offsetRight && this.type.match(/^(action-media-(left|right)|form-right|form-left)$/)) tagInfo.style.width = 100 - this.offsetRight + '%'; // Смена мест info и media

        if (this.type.match(/^(action-media-right|social-(vk|od|fc)|social-networks|form-left)$/)) {
          if (this.type.match(/^(action-media-right|form-left)$/)) {
            if (document.documentElement.clientWidth > 850) {
              tagContent.appendChild(tagInfo);
              tagContent.appendChild(tagMedia);
            } else {
              tagContent.appendChild(tagMedia);
              tagContent.appendChild(tagInfo);
            }

            window.addEventListener('resize', function () {
              if (document.documentElement.clientWidth < 850) {
                tagInfo.parentNode.removeChild(tagInfo);
                tagMedia.parentNode.removeChild(tagMedia);
                tagContent.appendChild(tagMedia);
                tagContent.appendChild(tagInfo);
              } else {
                tagInfo.parentNode.removeChild(tagInfo);
                tagMedia.parentNode.removeChild(tagMedia);
                tagContent.appendChild(tagInfo);
                tagContent.appendChild(tagMedia);
              }
            });
          } else {
            tagContent.appendChild(tagInfo);
            tagContent.appendChild(tagMedia);
          }
        } else {
          tagContent.appendChild(tagInfo);
        }

        var tagInfoContent = document.createElement('div');
        tagInfoContent.className = 'startwebsite-popup__info-content';
        tagInfo.appendChild(tagInfoContent);

        if (this.title && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|social-(vk|od|fc)|social-networks|form-bottom|form-right|form-left|share-social)$/)) {
          var tagInfoTitle = document.createElement('div');
          tagInfoTitle.className = 'startwebsite-popup__info-title';
          tagInfoContent.appendChild(tagInfoTitle);
          var tagInfoTitleContent = document.createElement('div');
          tagInfoTitleContent.className = 'startwebsite-popup__info-title_content';
          if (this.colorTheme.basicColor) tagInfoTitleContent.style.color = this.colorTheme.basicColor;
          tagInfoTitleContent.innerHTML = this.title;
          tagInfoTitle.appendChild(tagInfoTitleContent);
        }

        if (this.text && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2|social-(vk|od|fc)|social-networks|form-bottom|form-right|form-left|share-social)$/)) {
          var tagInfoText = document.createElement('div');
          tagInfoText.className = 'startwebsite-popup__info-text';
          tagInfoContent.appendChild(tagInfoText);
          var tagInfoTextContent = document.createElement('div');
          tagInfoTextContent.className = 'startwebsite-popup__info-text_content';
          if (this.colorTheme.addColor) tagInfoTextContent.style.color = this.colorTheme.addColor;
          tagInfoTextContent.innerHTML = this.text;
          tagInfoText.appendChild(tagInfoTextContent);
        } // Timer


        if (this.timer && this.type.match(/^(action-media-(left|right|top)|action-text|action-text-2|form-bottom|form-right|form-left)$/)) {
          if (this.type.match(/^(action-media-(left|right|top)|action-text|action-text-2|form-bottom)$/)) {
            this._createTimer(tagInfoContent);
          }

          if (this.type.match(/^(form-right|form-left)$/)) {
            this._createTimer(tagInfoContent, 'startwebsite-popup__info-timer');
          }
        }

        var tagButtonsBox;

        if ((this.buttonText1 || this.buttonText2) && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2)$/)) {
          tagButtonsBox = document.createElement('div');
          tagButtonsBox.className = 'startwebsite-popup__buttons-box';
          tagInfoContent.appendChild(tagButtonsBox);
        }

        if (this.buttonText1 && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2)$/)) {
          var tagButton1 = document.createElement('a');
          tagButton1.className = this.buttonClass1 ? "startwebsite-popup__button ".concat(this.buttonClass1) : 'startwebsite-popup__button startwebsite-popup__button_ok';
          tagButton1.href = this.buttonLink1;
          tagButton1.innerHTML = this.buttonText1;
          if (!this.buttonText2) tagButton1.style.marginRight = 0;
          tagButtonsBox.appendChild(tagButton1);
        }

        if (this.buttonText2 && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2)$/)) {
          var tagButton2 = document.createElement('a');
          tagButton2.className = this.buttonClass2 ? "startwebsite-popup__button ".concat(this.buttonClass2) : 'startwebsite-popup__button startwebsite-popup__button_cancel';
          tagButton2.href = this.buttonLink2;
          tagButton2.innerHTML = this.buttonText2;
          tagButtonsBox.appendChild(tagButton2);
        } // Do not show again


        if (this.conditions.showAgainPopup) {
          var tagNotShowAgain = document.createElement('div');
          tagNotShowAgain.className = 'startwebsite-popup__show-again';
          tagInfoContent.appendChild(tagNotShowAgain);
          var tagNotShowAgainInput = document.createElement('input');
          tagNotShowAgainInput.className = 'startwebsite-popup__show-again_input';
          tagNotShowAgainInput.type = 'checkbox';
          tagNotShowAgain.appendChild(tagNotShowAgainInput);
          var tagNotShowAgainText = document.createElement('div');
          tagNotShowAgainText.className = 'startwebsite-popup__show-again_text';
          tagNotShowAgainText.innerHTML = this.conditions.showAgainPopup;
          tagNotShowAgain.appendChild(tagNotShowAgainText);
          tagNotShowAgainInput.addEventListener('change', function () {
            if (tagNotShowAgainInput.checked === true) {
              localStorage.setItem("popupSwsDoNotShowAgainId".concat(_this.popupId), true);
            } else {
              localStorage.removeItem("popupSwsDoNotShowAgainId".concat(_this.popupId));
            }
          });
        } // Text close


        if (this.textClose && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2)$/)) {
          var tagTextClose = document.createElement('div');
          tagTextClose.className = 'startwebsite-popup__text-close';
          tagInfoContent.appendChild(tagTextClose);
          var tagTextCloseContent = document.createElement('span');
          tagTextCloseContent.className = 'startwebsite-popup__text-close_content';
          if (this.colorTheme.basicColor) tagTextCloseContent.style.color = this.colorTheme.basicColor;
          tagTextCloseContent.innerHTML = this.textClose;
          tagTextClose.appendChild(tagTextCloseContent);
        } // Form


        if (this.type.match(/^(form-bottom|form-right|form-left)$/)) {
          var setBoxShadow = function setBoxShadow(elem) {
            function hexToRGBA(h) {
              var r = 0,
                  g = 0,
                  b = 0; // 3 digits

              if (h.length == 4) {
                r = "0x" + h[1] + h[1];
                g = "0x" + h[2] + h[2];
                b = "0x" + h[3] + h[3]; // 6 digits
              } else if (h.length == 7) {
                r = "0x" + h[1] + h[2];
                g = "0x" + h[3] + h[4];
                b = "0x" + h[5] + h[6];
              }

              return "rgba(" + +r + "," + +g + "," + +b + ", 0.25)";
            }

            var rgba = hexToRGBA(_this.colorTheme.formFieldBackground);
            elem.addEventListener('focus', function () {
              elem.style.boxShadow = "0 0 0 3px ".concat(rgba);
            });
            elem.addEventListener('blur', function () {
              elem.style.boxShadow = 'none';
            });
          };

          var tagFormWrap = document.createElement('div');
          tagFormWrap.className = 'startwebsite-popup__form-wrap';
          tagInfoContent.appendChild(tagFormWrap);
          var tagForm = document.createElement('form');
          tagForm.className = 'startwebsite-popup__form';
          tagForm.method = 'POST';
          tagForm.action = '';
          tagFormWrap.appendChild(tagForm);

          if (this.inputCSRF) {
            tagForm.innerHTML = this.inputCSRF;
          }

          if (this.settingsForm.name.show) {
            var tagLabel = document.createElement('label');
            if (this.colorTheme.addColor) tagLabel.style.color = this.colorTheme.addColor;
            if (!this.supportIE10) tagLabel.innerHTML = this.settingsForm.name.name;
            tagForm.appendChild(tagLabel);
            var tagInput = document.createElement('input');
            tagInput.className = 'startwebsite-popup__form_input';
            tagInput.type = 'text';
            tagInput.name = 'name';
            if (this.settingsForm.name.required) tagInput.required = true;

            if (this.colorTheme.formFieldBackground) {
              tagInput.style.backgroundColor = this.colorTheme.formFieldBackground;
              setBoxShadow(tagInput);
            }

            if (this.colorTheme.formTextColor) tagInput.style.color = this.colorTheme.formTextColor;
            if (this.colorTheme.borderColor) tagInput.style.borderColor = this.colorTheme.borderColor;
            if (this.supportIE10) tagInput.placeholder = this.settingsForm.name.name;
            tagInput.addEventListener('focus', function () {
              tagInput.style.boxShadow = _this.colorTheme.formTextColor;
            });
            tagLabel.appendChild(tagInput);
          }

          if (this.settingsForm.tel.show) {
            var _tagLabel = document.createElement('label');

            if (this.colorTheme.addColor) _tagLabel.style.color = this.colorTheme.addColor;
            if (!this.supportIE10) _tagLabel.innerHTML = this.settingsForm.tel.name;
            tagForm.appendChild(_tagLabel);

            var _tagInput = document.createElement('input');

            _tagInput.className = 'startwebsite-popup__form_input';
            _tagInput.type = 'tel';
            _tagInput.name = 'tel';
            if (this.settingsForm.tel.required) _tagInput.required = true;

            if (this.colorTheme.formFieldBackground) {
              _tagInput.style.backgroundColor = this.colorTheme.formFieldBackground;
              setBoxShadow(_tagInput);
            }

            if (this.colorTheme.formTextColor) _tagInput.style.color = this.colorTheme.formTextColor;
            if (this.colorTheme.borderColor) _tagInput.style.borderColor = this.colorTheme.borderColor;
            if (this.supportIE10) _tagInput.placeholder = this.settingsForm.tel.name;

            _tagLabel.appendChild(_tagInput);
          }

          if (this.settingsForm.email.show) {
            var _tagLabel2 = document.createElement('label');

            if (this.colorTheme.addColor) _tagLabel2.style.color = this.colorTheme.addColor;
            if (!this.supportIE10) _tagLabel2.innerHTML = this.settingsForm.email.name;
            tagForm.appendChild(_tagLabel2);

            var _tagInput2 = document.createElement('input');

            _tagInput2.className = 'startwebsite-popup__form_input';
            _tagInput2.type = 'email';
            _tagInput2.name = 'email';
            if (this.settingsForm.email.required) _tagInput2.required = true;

            if (this.colorTheme.formFieldBackground) {
              _tagInput2.style.backgroundColor = this.colorTheme.formFieldBackground;
              setBoxShadow(_tagInput2);
            }

            if (this.colorTheme.formTextColor) _tagInput2.style.color = this.colorTheme.formTextColor;
            if (this.colorTheme.borderColor) _tagInput2.style.borderColor = this.colorTheme.borderColor;
            if (this.supportIE10) _tagInput2.placeholder = this.settingsForm.email.name;

            _tagLabel2.appendChild(_tagInput2);
          }

          if (this.settingsForm.time.show) {
            var _tagLabel3 = document.createElement('label');

            if (this.colorTheme.addColor) _tagLabel3.style.color = this.colorTheme.addColor;
            if (!this.supportIE10) _tagLabel3.innerHTML = this.settingsForm.time.name;
            tagForm.appendChild(_tagLabel3);

            var _tagInput3 = document.createElement('select');

            _tagInput3.className = 'startwebsite-popup__form_input';
            _tagInput3.name = 'time';
            _tagInput3.value = '12:00';

            if (this.colorTheme.formFieldBackground) {
              _tagInput3.style.backgroundColor = this.colorTheme.formFieldBackground;
              setBoxShadow(_tagInput3);
            }

            if (this.colorTheme.formTextColor) _tagInput3.style.color = this.colorTheme.formTextColor;
            if (this.colorTheme.borderColor) _tagInput3.style.borderColor = this.colorTheme.borderColor;

            _tagLabel3.appendChild(_tagInput3);

            var date;

            for (var index = 6; index <= 23; index++) {
              var hours = index.toString();

              if (hours.length === 1) {
                hours = "0".concat(hours);
              }

              for (var j = -10; j < 50;) {
                j += 10;
                var minutes = j.toString();

                if (minutes.length === 1) {
                  minutes = "0".concat(minutes);
                }

                date = hours + ' : ' + minutes;
                var tagOption = document.createElement('option');
                tagOption.innerHTML = date;

                _tagInput3.appendChild(tagOption);
              }
            }
          }

          if (this.settingsForm.textarea.show) {
            var _tagLabel4 = document.createElement('label');

            if (this.colorTheme.addColor) _tagLabel4.style.color = this.colorTheme.addColor;
            if (!this.supportIE10) _tagLabel4.innerHTML = this.settingsForm.textarea.name;
            tagForm.appendChild(_tagLabel4);
            var tagTextarea = document.createElement('textarea');
            tagTextarea.className = 'startwebsite-popup__form_textarea';
            tagTextarea.name = 'message';
            if (this.settingsForm.textarea.required) tagTextarea.required = true;

            if (this.colorTheme.formFieldBackground) {
              tagTextarea.style.backgroundColor = this.colorTheme.formFieldBackground;
              setBoxShadow(tagTextarea);
            }

            if (this.colorTheme.formTextColor) tagTextarea.style.color = this.colorTheme.formTextColor;
            if (this.colorTheme.borderColor) tagTextarea.style.borderColor = this.colorTheme.borderColor;
            if (this.supportIE10) tagTextarea.placeholder = this.settingsForm.textarea.name;

            _tagLabel4.appendChild(tagTextarea);
          }

          var tagFormResponse = document.createElement('div');
          tagFormResponse.className = 'startwebsite-popup__form-response';
          tagFormResponse.innerHTML = this.settingsForm.response;
          if (this.colorTheme.basicColor) tagFormResponse.style.color = this.colorTheme.basicColor;
          tagFormWrap.appendChild(tagFormResponse);
          var tagFormButton = document.createElement('button');
          tagFormButton.className = this.buttonClass1 ? "startwebsite-popup__form_button ".concat(this.buttonClass1) : 'startwebsite-popup__form_button';
          tagFormButton.type = 'submit';
          tagFormButton.innerText = 'Submit';

          this._sendAJAXform(tagForm, tagFormButton, tagFormResponse);

          tagForm.appendChild(tagFormButton);

          if (this.privacyPolicyLink) {
            var tagPrivacy = document.createElement('div');
            tagPrivacy.className = 'startwebsite-popup__privacy';
            if (this.colorTheme.addColor) tagPrivacy.style.color = this.colorTheme.addColor;
            tagForm.appendChild(tagPrivacy);
            var tagInputCheckbox = document.createElement('input');
            tagInputCheckbox.type = 'checkbox';
            tagInputCheckbox.className = 'startwebsite-popup__privacy_input';
            tagInputCheckbox.setAttribute('checked', '');
            tagPrivacy.appendChild(tagInputCheckbox);
            var tagPrivacyText = document.createElement('div');
            tagPrivacyText.className = 'startwebsite-popup__privacy_text';
            tagPrivacyText.innerHTML = "I have read and accept the <a class=\"startwebsite-popup__privacy_link\" href=\"".concat(this.privacyPolicyLink, "\">Privacy Policy</a>");
            tagPrivacy.appendChild(tagPrivacyText);
          }
        } // About action


        if (this.aboutAction && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2)$/)) {
          tagModal.setAttribute('data-details', 'true');
          var tagAboutAction = document.createElement('div');
          tagAboutAction.className = 'startwebsite-popup__details';
          if (this.colorTheme.modalBackgroundColor) tagAboutAction.style.backgroundColor = this.colorTheme.modalBackgroundColor;
          if (this.colorTheme.basicColor) tagAboutAction.style.color = this.colorTheme.basicColor;
          if (this.colorTheme.borderColor) tagAboutAction.style.borderColor = this.colorTheme.borderColor;
          tagContent.appendChild(tagAboutAction);
          var tagAboutHeading = document.createElement('div');
          tagAboutHeading.className = 'startwebsite-popup__details-heading';
          tagAboutHeading.innerHTML = this.aboutActionTitle;
          tagAboutAction.appendChild(tagAboutHeading);
          var tagAboutIcon = document.createElement('div');
          tagAboutIcon.className = 'startwebsite-popup__details-icon';
          tagAboutAction.appendChild(tagAboutIcon);
          var tagAboutBody = document.createElement('div');
          tagAboutBody.className = 'startwebsite-popup__details-body';
          if (this.colorTheme.addColor) tagAboutBody.style.color = this.colorTheme.addColor;
          tagAboutBody.innerHTML = this.aboutAction;
          tagAboutAction.appendChild(tagAboutBody);
          tagAboutAction.addEventListener('click', function () {
            if (tagAboutAction.className.match(/active/gi)) {
              var aboutActionClassWithOutActive = tagAboutAction.className.replace(/(\s)(active(-ie9|))/gi, '');
              tagAboutAction.className = aboutActionClassWithOutActive;
              tagAboutAction.style.transform = '';
            } else {
              tagAboutAction.className += ' active';
              tagAboutAction.style.transform = "translateY(-".concat(tagModal.clientHeight - 50, "px)");

              if (!_this.supportIE10) {
                tagAboutAction.className += ' active-ie9';
              }
            }
          }); // Вставка тега в конец при удаление тегов info и медиа

          window.addEventListener('resize', function () {
            tagAboutAction.parentNode.removeChild(tagAboutAction);
            tagContent.appendChild(tagAboutAction);
          });
        } // Share social


        if (this.shareSocial && this.type === 'share-social') {
          var tagShareScript = document.createElement('script');
          tagShareScript.src = 'https://yastatic.net/share2/share.js';
          this.head.appendChild(tagShareScript);
          var tagShare = document.createElement('div');
          tagShare.className = 'startwebsite-popup__shares';
          tagShare.innerHTML = this.shareSocial;
          tagInfoContent.appendChild(tagShare);
        } // Html


        if (this.html && this.type === 'html') {
          tagInfoContent.innerHTML = this.html;
        }
      }
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      var _this2 = this;

      this.popup.addEventListener('click', function (e) {
        if (e.target.className.match(/(startwebsite-popup__bg|startwebsite-popup__text-close_content|startwebsite-popup__close_icon)/gi)) {
          var popupClassWithOutActive = _this2.popup.className.replace(/(\s|)active/gi, '');

          _this2.popup.className += ' hide';

          var popupRemoveActiveClass = function popupRemoveActiveClass() {
            if (_this2.type === 'video') {
              _this2.tagVideo.innerHTML = '';
              _this2.tagVideoPreloader.style.display = 'none';
            }

            _this2.popup.className = popupClassWithOutActive;
            _this2.body.style.overflow = '';
            _this2.body.style.marginRight = '';

            _this2.popup.removeEventListener('transitionend', popupRemoveActiveClass);
          };

          _this2.popup.addEventListener('transitionend', popupRemoveActiveClass);
          /* fallback for older browsers */


          setTimeout(function () {
            popupRemoveActiveClass();
          }, 1000);
        }
      });
    }
  }, {
    key: "_checkIE10",
    value: function _checkIE10() {
      if ('matchMedia' in window) {
        return true;
      } else {
        this.popup.className += ' ie9';
        return false;
      }
    }
  }, {
    key: "_createTimer",
    value: function _createTimer(elem, addClass) {
      var distanceEndHtml = '<span class="startwebsite-popup__timer_days">' + '00' + '</span>' + '<span class="startwebsite-popup__timer_hours">' + '00' + '</span>' + '<span class="startwebsite-popup__timer_minutes">' + '00' + '</span>' + '<span class="startwebsite-popup__timer_seconds">' + '00';
      var tagTimer = document.createElement('div');
      tagTimer.className = addClass ? "startwebsite-popup__timer ".concat(addClass) : 'startwebsite-popup__timer';
      tagTimer.innerHTML = distanceEndHtml;
      if (this.colorTheme.addColor) tagTimer.style.color = this.colorTheme.addColor;
      elem.appendChild(tagTimer);
      var countDowndate = new Date(this.timer).getTime();
      var countDownFunction = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDowndate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);
        var htmlDays = '<span class="startwebsite-popup__timer_days">' + days + '</span>';
        var htmlHours = '<span class="startwebsite-popup__timer_hours">' + hours + '</span>';
        var htmlMinutes = '<span class="startwebsite-popup__timer_minutes">' + minutes + '</span>';
        var htmlSeconds = '<span class="startwebsite-popup__timer_seconds">' + seconds;
        if (days < 10) htmlDays = '<span class="startwebsite-popup__timer_days">' + '0' + days + '</span>';
        if (hours < 10) htmlHours = '<span class="startwebsite-popup__timer_hours">' + '0' + hours + '</span>';
        if (minutes < 10) htmlMinutes = '<span class="startwebsite-popup__timer_minutes">' + '0' + minutes + '</span>';
        if (seconds < 10) htmlSeconds = '<span class="startwebsite-popup__timer_seconds">' + '0' + seconds;
        tagTimer.innerHTML = htmlDays + htmlHours + htmlMinutes + htmlSeconds;

        if (distance < 0) {
          clearInterval(countDownFunction);
          tagTimer.innerHTML = distanceEndHtml;
        }
      }, 1000);
    }
  }, {
    key: "_sendAJAXform",
    value: function _sendAJAXform(form, button, response) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var url = location.href;
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send(formData);

        xhr.onload = function () {
          if (xhr.status == 200) {
            response.className += ' active';
            form.className += ' form-blur';
            setTimeout(function () {
              form.reset();
              form.className = 'startwebsite-popup__form';
              response.className = 'startwebsite-popup__form-response';
            }, 7000);
          } else {
            console.log("Form error " + xhr.status);
          }
        };

        xhr.timeout = 30000;
      });
    }
  }, {
    key: "active",
    value: function active() {
      var _this3 = this;

      if (this.popup) {
        this.createPopup();
        this.closePopup();

        var checkLocalStorageCountDisplay = function checkLocalStorageCountDisplay() {
          var localStorageCountDisplay = Number(localStorage.getItem("countPopupSwsDisplayIndexOf".concat(_this3.popupId)));

          if (localStorageCountDisplay) {
            if (_this3.conditions.countDisplay !== '' && localStorageCountDisplay >= Number(_this3.conditions.countDisplay)) {
              _this3.validParams.countDisplay = false;
              return false;
            } else {
              _this3.validParams.countDisplay = true;
              return true;
            }
          }
        };

        var checkDevice = function checkDevice() {
          var mobileList = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
          var mobileList2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

          function checkIsMobile(a) {
            if (mobileList.test(a) || mobileList2.test(a.substring(0, 4))) {
              return true;
            }

            return false;
          }

          var isMobile = checkIsMobile(navigator.userAgent || navigator.vendor || window.opera);

          if (!isMobile && _this3.conditions.showOnlyMobile) {
            _this3.validParams.showOnDesktop = false;
          }
        };

        var setCountDisplay = function setCountDisplay() {
          var localStorageCountDisplay = Number(localStorage.getItem("countPopupSwsDisplayIndexOf".concat(_this3.popupId)));

          if (localStorageCountDisplay) {
            localStorage.setItem("countPopupSwsDisplayIndexOf".concat(_this3.popupId), localStorageCountDisplay += 1);
          } else {
            localStorage.setItem("countPopupSwsDisplayIndexOf".concat(_this3.popupId), 1);
          }
        };

        var setReScreeningDay = function setReScreeningDay() {
          var today = new Date();
          var localStorageReScreeningDay = Number(localStorage.getItem("popupSwsReScreeningDayId".concat(_this3.popupId)));

          if (localStorageReScreeningDay) {
            if (today.getDate() === localStorageReScreeningDay) {
              _this3.validParams.dayReScreening = true;
            } else {
              _this3.validParams.dayReScreening = false;
            }
          } else {
            var dayRescreening = today.getDate() + Number(_this3.conditions.reScreening);
            localStorage.setItem("popupSwsReScreeningDayId".concat(_this3.popupId), dayRescreening);
          }
        };

        var checkLocalStorageShowMore = function checkLocalStorageShowMore() {
          var localStorageNotShowAgain = localStorage.getItem("popupSwsDoNotShowAgainId".concat(_this3.popupId));

          if (localStorageNotShowAgain) {
            _this3.validParams.showMore = false;
          } else {
            _this3.validParams.showMore = true;
          }
        };

        var showPopup = function showPopup() {
          checkLocalStorageCountDisplay();
          if (_this3.conditions.showOnlyMobile) checkDevice();
          if (_this3.conditions.showAgainPopup) checkLocalStorageShowMore();

          var checkValidParams = function checkValidParams() {
            for (var param in _this3.validParams) {
              if (_this3.validParams[param] === false) {
                return false;
              }
            }

            return true;
          };

          var canActive = checkValidParams();

          if (canActive) {
            if (_this3.type === 'video') {
              _this3.tagVideoPreloader.style.display = '';
              _this3.tagVideo.innerHTML = _this3.videoIframe;
            }

            setCountDisplay();
            var scrollWidthSize = window.innerWidth - document.documentElement.clientWidth;
            _this3.body.style.overflow = 'hidden';
            _this3.body.style.marginRight = scrollWidthSize + 'px';

            if (_this3.popup.className.match(/hide/gi)) {
              var popupClassWithActive = _this3.popup.className.replace(/hide/gi, 'active');

              _this3.popup.className = popupClassWithActive;
            } else {
              _this3.popup.className += ' active';
            }
          }
        };

        var showPopupInSeconds = function showPopupInSeconds() {
          var secondsTypeString = _this3.conditions.secondsShow + '000';
          var secondsTypeNumber = Number(secondsTypeString);
          setTimeout(function () {
            showPopup();
          }, secondsTypeNumber);
        };

        if (this.conditions.click) {
          document.querySelector(this.conditions.click).addEventListener('click', function () {
            showPopup();
          });
        }

        if (this.conditions.anchor) {
          var showDone = false;
          var anchor = document.querySelector(this.conditions.anchor);
          var windowCenterY = window.innerHeight / 2;
          var anchorOffsetY = anchor.getBoundingClientRect().top + window.pageYOffset;
          var anchorCenterOfVisibility = anchorOffsetY - windowCenterY;
          window.addEventListener('scroll', function () {
            if (anchorCenterOfVisibility <= window.pageYOffset && anchorCenterOfVisibility + 200 >= window.pageYOffset) {
              if (!showDone) {
                showPopup();
                showDone = true;
              }
            }
          });
        }

        if (this.conditions.showSpecificPage) {
          if (location.href !== this.conditions.showSpecificPage) {
            this.validParams.showThisPage = false;
          }
        }

        if (this.conditions.secondsShow) {
          showPopupInSeconds();
        }

        if (this.conditions.showBeforeClosing) {
          var _showDone = false;
          window.addEventListener('mouseout', function (e) {
            if (e.pageY <= 10 && !_showDone) {
              showPopup();
              _showDone = true;
            }
          });
        }

        if (this.conditions.showDays) {
          var today = new Date();
          var showDaysArr = this.conditions.showDays.split(',');

          for (var i = 0; i < showDaysArr.length; i++) {
            var dayShow = showDaysArr[i];

            if (dayShow == today.getDay()) {
              this.validParams.showDay = true;
              break;
            } else {
              this.validParams.showDay = false;
            }
          }
        }

        if (this.conditions.startShowHours) {
          var _today = new Date();

          var startHours = this.conditions.startShowHours;
          var startHoursValid = _today.getHours() - startHours > 0 ? true : false;

          if (startHoursValid) {
            this.validParams.showHour = true;
          } else {
            this.validParams.showHour = false;
          }

          if (this.conditions.endShowHours) {
            var endShowHours = this.conditions.endShowHours;
            var endShowHoursValid = endShowHours - _today.getHours() > 0 ? true : false;

            if (endShowHoursValid) {
              this.validParams.showHour = true;
            } else {
              this.validParams.showHour = false;
            }
          }
        }

        if (this.conditions.startDate) {
          var _today2 = new Date();

          var startDate = new Date(this.conditions.startDate);
          var startDateValid = _today2 - startDate > 0 ? true : false;

          if (startDateValid) {
            this.validParams.showDate = true;
          } else {
            this.validParams.showDate = false;
          }

          if (this.conditions.endDate) {
            var endDate = new Date(this.conditions.endDate);
            var endDateValid = endDate - _today2 > 0 ? true : false;

            if (startDateValid && endDateValid) {
              this.validParams.showDate = true;
            } else {
              this.validParams.showDate = false;
            }
          }
        }

        if (this.conditions.showProcentLoad) {
          var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
          var sizePage = scrollHeight - window.innerHeight;
          var procentOfHeightPage = Math.floor(sizePage * (Number(this.conditions.showProcentLoad) / 100));

          var showPopupOfProcentPage = function showPopupOfProcentPage() {
            if (window.pageYOffset >= procentOfHeightPage) {
              showPopup();
              window.removeEventListener('scroll', showPopupOfProcentPage);
            }
          };

          window.addEventListener('scroll', showPopupOfProcentPage);
        }

        if (this.conditions.pageViewCount) {
          this.validParams.pageViewCount = false;
          var viewedPages = sessionStorage.getItem("viewedPagesPopupIndexOf".concat(this.popupId));

          if (viewedPages) {
            var visitedPagesArray = viewedPages.split(',');
            var visitedPage = visitedPagesArray.includes(location.href);

            if (!visitedPage) {
              sessionStorage.setItem("viewedPagesPopupIndexOf".concat(this.popupId), "".concat(viewedPages, ",").concat(location.href));
            }

            if (visitedPagesArray.length === Number(this.conditions.pageViewCount)) {
              sessionStorage.setItem("viewedPagesPopupIndexOf".concat(this.popupId), "".concat(viewedPages, ",showFalse"));
              this.validParams.pageViewCount = true;
            }
          } else {
            sessionStorage.setItem("viewedPagesPopupIndexOf".concat(this.popupId), location.href);
          }
        }

        if (this.conditions.reScreening) {
          setReScreeningDay();
          showPopupInSeconds();
        }
      }
    }
  }]);

  return StartPopupNotifications;
}();

var startPopupNotification1 = new StartPopupNotifications({
  selector: '[data-popup-number="1"]',
  popupId: '1',
  type: 'action-media-left',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'scale-center',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  mediaWithOutPadding: '',
  imagePath: './images/2.jpg',
  //
  //videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HR9UXIWUqmw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', //
  roundEdges: false,
  title: 'Action',
  //
  text: 'Place your order within 20 minutes and get <b>10% discount!</b>',
  //
  textClose: 'Close popup',
  buttonText1: 'Button',
  buttonLink1: '#link1',
  buttonClass1: 'startwebsite-popup__button_ok',
  buttonText2: 'Button 2',
  buttonLink2: '#link2',
  buttonClass2: '',
  aboutActionTitle: 'More details',
  aboutAction: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimosodio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusa',
  // 
  vkIdGroup: '71641093',
  //
  odIdGroup: '50582132228315',
  //
  facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812',
  // в url parametre width должно быть 500
  settingsForm: {
    name: {
      name: 'Name',
      required: true,
      show: true
    },
    tel: {
      name: 'Telephone',
      required: true,
      show: true
    },
    email: {
      name: 'E-mail',
      required: true,
      show: true
    },
    textarea: {
      name: 'Message',
      required: true,
      show: true
    },
    time: {
      name: 'Time',
      required: true,
      show: true
    },
    response: 'Thank You! We will contact you shortly.'
  },
  privacyPolicyLink: 'http://privacy-policy/',
  shareSocial: '<div class="ya-share2" data-curtain data-shape="round" data-color-scheme="whiteblack" data-services="messenger,vkontakte,facebook,odnoklassniki,telegram,twitter"></div>',
  html: 'sss',
  width: '600',
  height: '360',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: '#ccc'
  },
  conditions: {
    click: '#popup1',
    anchor: '#anchor',
    countDisplay: '—',
    // — (бесконечно)
    secondsShow: '',
    showSpecificPage: '',
    //http://localhost:3000/2.html
    showBeforeClosing: false,
    showDays: '0,1,2,3,4,5,6',
    //0,1,2,3,4,5,6
    startShowHours: '13',
    // 12, 11, 4
    endShowHours: '24',
    // 12, 3, 4, не включительно
    startDate: '2020-12-08',
    //2020-12-07 (не работает в IE)
    endDate: '2021-12-10',
    //2021-12-07  (не работает в IE), не включительно
    showProcentLoad: '',
    pageViewCount: '',
    reScreening: '',
    // 3
    showOnlyMobile: false,
    showAgainPopup: 'Don\'t show this notification again'
  }
});
var startPopupNotification2 = new StartPopupNotifications({
  selector: '[data-popup-number="2"]',
  popupId: '1',
  type: 'action-media-right',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'scale-center',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  link: '#',
  imagePath: './images/2.jpg',
  //
  mediaWithOutPadding: false,
  videoIframe: '',
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  roundEdges: false,
  title: 'Action',
  //
  text: 'Place your order within 20 minutes and get <b>10% discount!</b>',
  //
  textClose: 'Close popup',
  buttonText1: 'Button',
  buttonLink1: '#link1',
  buttonClass1: 'startwebsite-popup__button_ok',
  buttonText2: 'Button 2',
  buttonLink2: '#link2',
  buttonClass2: '',
  aboutActionTitle: 'More details',
  aboutAction: 'muLorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  // 
  width: '600',
  height: '380',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '2021-12-04 23:55',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: '#ccc'
  },
  conditions: {
    click: '#popup2'
  }
});
var startPopupNotification3 = new StartPopupNotifications({
  selector: '[data-popup-number="3"]',
  popupId: '1',
  type: 'action-media-top',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'scale-center',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  mediaWithOutPadding: true,
  link: '#',
  imagePath: './images/1.jpg',
  //
  videoIframe: '',
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  roundEdges: false,
  title: 'Action',
  //
  text: 'Place your order within 20 minutes and get <b>10% discount!</b>',
  //
  textClose: 'Close popup',
  buttonText1: 'Button',
  buttonLink1: '#link1',
  buttonClass1: 'startwebsite-popup__button_ok',
  buttonText2: 'Button 2',
  buttonLink2: '#link2',
  buttonClass2: '',
  aboutActionTitle: 'More details',
  aboutAction: '',
  // 
  vkIdGroup: '71641093',
  //
  odIdGroup: '50582132228315',
  //
  facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812',
  // в url parametre width должно быть 500
  settingsForm: {
    name: {
      name: 'Name',
      required: true,
      show: true
    },
    tel: {
      name: 'Telephone',
      required: true,
      show: true
    },
    email: {
      name: 'E-mail',
      required: true,
      show: true
    },
    textarea: {
      name: 'Message',
      required: true,
      show: true
    },
    time: {
      name: 'Time',
      required: true,
      show: true
    },
    response: 'Thank You! We will contact you shortly.'
  },
  privacyPolicyLink: 'http://privacy-policy/',
  shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
  html: 'sss',
  width: '400',
  height: '580',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: 'red'
  },
  conditions: {
    click: '#popup3'
  }
});
var startPopupNotification4 = new StartPopupNotifications({
  selector: '[data-popup-number="4"]',
  popupId: '1',
  type: 'action-text',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'rotate-diag',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  link: '#',
  imagePath: './images/1.jpg',
  //
  videoIframe: '',
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  roundEdges: false,
  title: 'Action',
  //
  text: 'Place your order within 20 minutes and get <b>10% discount!</b>',
  //
  textClose: 'Close popup',
  buttonText1: 'Button',
  buttonLink1: '#link1',
  buttonClass1: 'startwebsite-popup__button_ok',
  buttonText2: 'Button 2',
  buttonLink2: '#link2',
  buttonClass2: '',
  aboutActionTitle: 'More details',
  aboutAction: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimosodio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  // 
  width: '600',
  height: '360',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: ''
  },
  conditions: {
    click: '#popup4'
  }
});
var startPopupNotification5 = new StartPopupNotifications({
  selector: '[data-popup-number="5"]',
  popupId: '1',
  type: 'action-text-2',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'swirl-fwd',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  link: '#',
  imagePath: './images/1.jpg',
  //
  videoIframe: '',
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  roundEdges: false,
  title: 'Action',
  //
  text: 'Place your order within 20 minutes and get <b>10% discount!</b>',
  //
  textClose: 'Close popup',
  buttonText1: 'Button',
  buttonLink1: '#link1',
  buttonClass1: 'startwebsite-popup__button_ok',
  buttonText2: '',
  buttonLink2: '',
  buttonClass2: '',
  aboutActionTitle: 'More details',
  aboutAction: '',
  // 
  vkIdGroup: '71641093',
  //
  odIdGroup: '50582132228315',
  //
  facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812',
  // в url parametre width должно быть 500
  settingsForm: {
    name: {
      name: 'Name',
      required: true,
      show: true
    },
    tel: {
      name: 'Telephone',
      required: true,
      show: true
    },
    email: {
      name: 'E-mail',
      required: true,
      show: true
    },
    textarea: {
      name: 'Message',
      required: true,
      show: true
    },
    time: {
      name: 'Time',
      required: true,
      show: true
    },
    response: 'Thank You! We will contact you shortly.'
  },
  privacyPolicyLink: 'http://privacy-policy/',
  shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
  html: 'sss',
  width: '600',
  height: '320',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: '#ccc'
  },
  conditions: {
    click: '#popup5'
  }
});
var startPopupNotification6 = new StartPopupNotifications({
  selector: '[data-popup-number="6"]',
  popupId: '1',
  type: 'social-vk',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'right',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'slide-right',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  link: '#',
  title: 'Our group in vkontakte',
  //
  text: 'Subscribe to us!',
  //
  imagePath: './images/1.jpg',
  //
  videoIframe: '',
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  roundEdges: false,
  vkIdGroup: '22822305',
  //
  width: '500',
  height: '350',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: '#ccc'
  },
  conditions: {
    click: '#popup6'
  }
});
var startPopupNotification7 = new StartPopupNotifications({
  selector: '[data-popup-number="7"]',
  popupId: '1',
  type: 'social-od',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'left',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'slide-left',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  link: '#',
  imagePath: './images/1.jpg',
  //
  videoIframe: '',
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  roundEdges: false,
  title: 'Our group in OK.RU',
  //
  text: 'Subscribe to us!',
  //
  vkIdGroup: '71641093',
  //
  odIdGroup: '50582132228315',
  //
  facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812',
  // в url parametre width должно быть 500
  privacyPolicyLink: 'http://privacy-policy/',
  shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
  html: 'sss',
  width: '500',
  height: '390',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: '#ccc'
  },
  conditions: {
    click: '#popup7',
    anchor: '#anchor',
    countDisplay: '—',
    // — (бесконечно)
    secondsShow: '',
    showSpecificPage: '',
    //http://localhost:3000/2.html
    showBeforeClosing: false,
    showDays: '0,1,2,3,4,5,6',
    //0,1,2,3,4,5,6
    startShowHours: '13',
    // 12, 11, 4
    endShowHours: '24',
    // 12, 3, 4, не включительно
    startDate: '2020-12-08',
    //2020-12-07 (не работает в IE)
    endDate: '2021-12-10',
    //2021-12-07  (не работает в IE), не включительно
    showProcentLoad: '',
    pageViewCount: '3',
    reScreening: '',
    // 3
    showOnlyMobile: false
  }
});
var startPopupNotification8 = new StartPopupNotifications({
  selector: '[data-popup-number="8"]',
  popupId: '1',
  type: 'social-fc',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'bottom',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'slide-bottom',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  link: '#',
  imagePath: './images/1.jpg',
  //
  videoIframe: '',
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  roundEdges: false,
  title: 'Our group in Facebook',
  //
  text: 'Subscribe to us!',
  //
  vkIdGroup: '71641093',
  //
  odIdGroup: '50582132228315',
  //
  facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812',
  // в url parametre width должно быть 500
  privacyPolicyLink: 'http://privacy-policy/',
  shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
  html: 'sss',
  width: '500',
  height: '400',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: '#ccc'
  },
  conditions: {
    click: '#popup8',
    anchor: '#anchor',
    countDisplay: '—',
    // — (бесконечно)
    secondsShow: '',
    showSpecificPage: '',
    //http://localhost:3000/2.html
    showBeforeClosing: false,
    showDays: '0,1,2,3,4,5,6',
    //0,1,2,3,4,5,6
    startShowHours: '13',
    // 12, 11, 4
    endShowHours: '24',
    // 12, 3, 4, не включительно
    startDate: '2020-12-08',
    //2020-12-07 (не работает в IE)
    endDate: '2021-12-10',
    //2021-12-07  (не работает в IE), не включительно
    showProcentLoad: '',
    pageViewCount: '3',
    reScreening: '',
    // 3
    showOnlyMobile: false
  }
});
var startPopupNotification9 = new StartPopupNotifications({
  selector: '[data-popup-number="9"]',
  popupId: '1',
  type: 'social-networks',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'flicker',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  link: '#',
  imagePath: './images/1.jpg',
  //
  videoIframe: '',
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  roundEdges: false,
  title: 'Our social networks',
  //
  text: 'Subscribe to us!',
  //
  textClose: 'Close popup',
  buttonText1: 'Button',
  buttonLink1: '#link1',
  buttonClass1: 'startwebsite-popup__button_ok',
  buttonText2: 'Button 2',
  buttonLink2: '#link2',
  buttonClass2: '',
  aboutActionTitle: 'More details',
  aboutAction: '',
  // 
  vkIdGroup: '71641093',
  //
  odIdGroup: '50582132228315',
  //
  facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812',
  // в url parametre width должно быть 500
  width: '600',
  height: '400',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: '#ccc'
  },
  conditions: {
    click: '#popup9'
  }
});
var startPopupNotification10 = new StartPopupNotifications({
  selector: '[data-popup-number="10"]',
  popupId: '1',
  type: 'image',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'fade',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  link: '#',
  imagePath: './images/1.jpg',
  //
  videoIframe: '',
  //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  roundEdges: false,
  width: '600',
  height: '400',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  colorTheme: {
    basicColor: '#fff',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: '#ccc'
  },
  conditions: {
    click: '#popup10'
  }
});
var startPopupNotification11 = new StartPopupNotifications({
  selector: '[data-popup-number="11"]',
  popupId: '1',
  type: 'video',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'fade',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  link: '#',
  imagePath: './images/1.jpg',
  //
  videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/au3-3BJmLAg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //
  width: '600',
  height: '400',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#fff',
    addColor: '#000',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#fff',
    formFieldBackground: '#1C09ED',
    // only hex format
    borderColor: '#ccc'
  },
  conditions: {
    click: '#popup11'
  }
});
var startPopupNotification12 = new StartPopupNotifications({
  selector: '[data-popup-number="12"]',
  popupId: '1',
  type: 'form-bottom',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'scale-ver-center',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  mediaWithOutPadding: true,
  link: '#',
  imagePath: './images/1.jpg',
  //
  //videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HR9UXIWUqmw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', //
  roundEdges: true,
  title: 'Our form',
  //
  text: 'Write us',
  //
  textClose: 'Close popup',
  buttonText1: 'Button',
  buttonLink1: '#link1',
  buttonClass1: 'startwebsite-popup__button_ok',
  buttonText2: 'Button 2',
  buttonLink2: '#link2',
  buttonClass2: '',
  aboutActionTitle: 'More details',
  aboutAction: '',
  // 
  vkIdGroup: '71641093',
  //
  odIdGroup: '50582132228315',
  //
  facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812',
  // в url parametre width должно быть 500
  settingsForm: {
    name: {
      name: 'Name',
      required: true,
      show: true
    },
    tel: {
      name: 'Telephone',
      required: true,
      show: true
    },
    email: {
      name: 'E-mail',
      required: true,
      show: true
    },
    textarea: {
      name: 'Message',
      required: true,
      show: true
    },
    time: {
      name: 'Time',
      required: true,
      show: true
    },
    response: 'Thank You! We will contact you shortly.'
  },
  privacyPolicyLink: 'http://privacy-policy/',
  shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
  html: 'sss',
  width: '450',
  height: '860',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '',
    formFieldBackground: '',
    // only hex format
    borderColor: ''
  },
  conditions: {
    click: '#popup12'
  }
});
var startPopupNotification13 = new StartPopupNotifications({
  selector: '[data-popup-number="13"]',
  popupId: '1',
  type: 'form-right',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'scale-center',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  mediaWithOutPadding: false,
  link: '#',
  imagePath: './images/2.jpg',
  //
  //videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HR9UXIWUqmw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', //
  roundEdges: false,
  title: 'Our form',
  //
  text: 'Write us',
  //
  textClose: 'Close popup',
  buttonText1: 'Button',
  buttonLink1: '#link1',
  buttonClass1: 'startwebsite-popup__button_ok',
  buttonText2: 'Button 2',
  buttonLink2: '#link2',
  settingsForm: {
    name: {
      name: 'Name',
      required: true,
      show: true
    },
    tel: {
      name: 'Telephone',
      required: true,
      show: true
    },
    email: {
      name: 'E-mail',
      required: true,
      show: true
    },
    textarea: {
      name: 'Message',
      required: true,
      show: true
    },
    time: {
      name: 'Time',
      required: true,
      show: true
    },
    response: 'Thank You! We will contact you shortly.'
  },
  privacyPolicyLink: 'http://privacy-policy/',
  shareSocial: '<div class="ya-share2" data-curtain data-shape="round" data-color-scheme="whiteblack" data-services="messenger,vkontakte,facebook,odnoklassniki,telegram,twitter"></div>',
  html: 'sss',
  width: '850',
  height: '550',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '#000',
    formFieldBackground: '',
    // only hex format
    borderColor: ''
  },
  conditions: {
    click: '#popup13'
  }
});
var startPopupNotification14 = new StartPopupNotifications({
  selector: '[data-popup-number="14"]',
  popupId: '1',
  type: 'form-left',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'scale-center',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  mediaWithOutPadding: false,
  link: '#',
  imagePath: './images/2.jpg',
  //
  //videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HR9UXIWUqmw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  roundEdges: false,
  title: 'Our form',
  //
  text: 'Write us',
  //
  textClose: 'Close popup',
  buttonText1: 'Button',
  buttonLink1: '#link1',
  buttonClass1: 'startwebsite-popup__button_ok',
  settingsForm: {
    name: {
      name: 'Name',
      required: true,
      show: true
    },
    tel: {
      name: 'Telephone',
      required: true,
      show: true
    },
    email: {
      name: 'E-mail',
      required: true,
      show: true
    },
    textarea: {
      name: 'Message',
      required: true,
      show: true
    },
    time: {
      name: 'Time',
      required: true,
      show: true
    },
    response: 'Thank You! We will contact you shortly.'
  },
  privacyPolicyLink: 'http://privacy-policy/',
  shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
  html: 'sss',
  width: '850',
  height: '550',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '',
    formFieldBackground: '',
    // only hex format
    borderColor: ''
  },
  conditions: {
    click: '#popup14'
  }
});
var startPopupNotification15 = new StartPopupNotifications({
  selector: '[data-popup-number="15"]',
  popupId: '1',
  type: 'share-social',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'left-bottom',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'slide-bottom-left',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  link: '#',
  imagePath: './images/1.jpg',
  //
  videoIframe: '',
  //
  roundEdges: false,
  title: 'Follow us',
  //
  text: 'Our social networks',
  //
  shareSocial: '<div class="ya-share2" data-curtain data-shape="round" data-color-scheme="whiteblack" data-services="messenger,vkontakte,facebook,odnoklassniki,telegram,twitter"></div>',
  html: 'sss',
  width: '380',
  height: '220',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '',
    formFieldBackground: '',
    // only hex format
    borderColor: ''
  },
  conditions: {
    click: '#popup15'
  }
});
var startPopupNotification16 = new StartPopupNotifications({
  selector: '[data-popup-number="16"]',
  popupId: '1',
  type: 'html',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
  position: 'center',
  // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
  animation: 'fade',
  // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
  html: 'Your html code',
  width: '550',
  height: '350',
  // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
  offsetRight: '30',
  timer: '',
  //2021-12-04 23:55
  colorTheme: {
    basicColor: '#000',
    addColor: '#444',
    //accentColor: 'yellow',
    popupBackgroundColor: 'black',
    popupBackgroundOpacity: '0.7',
    modalBackgroundColor: '#fff',
    modalBackgroundImage: '',
    //./images/4.jpg
    formTextColor: '',
    formFieldBackground: '',
    // only hex format
    borderColor: ''
  },
  conditions: {
    click: '#popup16'
  }
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(10);
var fails = __webpack_require__(1);
var isArray = __webpack_require__(41);
var isObject = __webpack_require__(4);
var toObject = __webpack_require__(42);
var toLength = __webpack_require__(13);
var createProperty = __webpack_require__(80);
var arraySpeciesCreate = __webpack_require__(56);
var arrayMethodHasSpeciesSupport = __webpack_require__(81);
var wellKnownSymbol = __webpack_require__(8);
var V8_VERSION = __webpack_require__(75);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(14);
var definePropertyModule = __webpack_require__(7);
var createPropertyDescriptor = __webpack_require__(23);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(8);
var V8_VERSION = __webpack_require__(75);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(10);
var $includes = __webpack_require__(40).includes;
var addToUnscopables = __webpack_require__(83);
var arrayMethodUsesToLength = __webpack_require__(61);

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);
var create = __webpack_require__(44);
var definePropertyModule = __webpack_require__(7);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(12);

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(3);
var objectDefinePropertyModile = __webpack_require__(7);

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(69);
var redefine = __webpack_require__(12);
var toString = __webpack_require__(87);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(69);
var classof = __webpack_require__(88);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(69);
var classofRaw = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(8);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(12);
var anObject = __webpack_require__(2);
var fails = __webpack_require__(1);
var flags = __webpack_require__(45);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(10);
var notARegExp = __webpack_require__(91);
var requireObjectCoercible = __webpack_require__(6);
var correctIsRegExpLogic = __webpack_require__(92);

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(76);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(36);
var anObject = __webpack_require__(2);
var toObject = __webpack_require__(42);
var toLength = __webpack_require__(13);
var toInteger = __webpack_require__(15);
var requireObjectCoercible = __webpack_require__(6);
var advanceStringIndex = __webpack_require__(37);
var regExpExec = __webpack_require__(38);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(36);
var isRegExp = __webpack_require__(76);
var anObject = __webpack_require__(2);
var requireObjectCoercible = __webpack_require__(6);
var speciesConstructor = __webpack_require__(95);
var advanceStringIndex = __webpack_require__(37);
var toLength = __webpack_require__(13);
var callRegExpExec = __webpack_require__(38);
var regexpExec = __webpack_require__(16);
var fails = __webpack_require__(1);

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2);
var aFunction = __webpack_require__(73);
var wellKnownSymbol = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(10);
var createHTML = __webpack_require__(97);
var forcedStringHTMLMethod = __webpack_require__(98);

// `String.prototype.anchor` method
// https://tc39.github.io/ecma262/#sec-string.prototype.anchor
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
  anchor: function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  }
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(6);

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ })
/******/ ]);