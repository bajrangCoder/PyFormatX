/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ \"./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js\");\n/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ \"./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plugin.json */ \"./plugin.json\");\nfunction _classPrivateMethodInitSpec(obj,privateSet){_checkPrivateRedeclaration(obj,privateSet);privateSet.add(obj);}function _classPrivateFieldInitSpec(obj,privateMap,value){_checkPrivateRedeclaration(obj,privateMap);privateMap.set(obj,value);}function _checkPrivateRedeclaration(obj,privateCollection){if(privateCollection.has(obj)){throw new TypeError(\"Cannot initialize the same private elements twice on an object\");}}function _classPrivateMethodGet(receiver,privateSet,fn){if(!privateSet.has(receiver)){throw new TypeError(\"attempted to get private field on non-instance\");}return fn;}var appSettings=acode.require('settings');var loader=acode.require('loader');var _worker=/*#__PURE__*/new WeakMap();var _workerOnMessage=/*#__PURE__*/new WeakSet();var PyFormatX=/*#__PURE__*/function(){function PyFormatX(){(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this,PyFormatX);_classPrivateMethodInitSpec(this,_workerOnMessage);_classPrivateFieldInitSpec(this,_worker,{writable:true,value:null});}(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PyFormatX,[{key:\"init\",value:function(){var _init=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2(){var _this=this;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:acode.registerFormatter(_plugin_json__WEBPACK_IMPORTED_MODULE_6__.id,[\"py\"],/*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(){var _editorManager,editor,activeFile,code;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_editorManager=editorManager,editor=_editorManager.editor,activeFile=_editorManager.activeFile;code=editor.getValue();_this.formateCode(code);case 3:case\"end\":return _context.stop();}}},_callee);})));this.initWorker();case 2:case\"end\":return _context2.stop();}}},_callee2,this);}));function init(){return _init.apply(this,arguments);}return init;}()},{key:\"initWorker\",value:function(){var _initWorker=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(!(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this,_worker)){_context3.next=2;break;}return _context3.abrupt(\"return\");case 2:(0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this,_worker,new Worker(this.baseUrl+'worker.js'));(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this,_worker).postMessage({action:'init',baseUrl:this.baseUrl});(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this,_worker).onmessage=_classPrivateMethodGet(this,_workerOnMessage,_workerOnMessage2).bind(this);case 5:case\"end\":return _context3.stop();}}},_callee3,this);}));function initWorker(){return _initWorker.apply(this,arguments);}return initWorker;}()},{key:\"formateCode\",value:function(){var _formateCode=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee4(sourceCode){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return this.initWorker();case 2:(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this,_worker).postMessage({action:\"formatCode\",sourceCode:sourceCode});loader.showTitleLoader();case 4:case\"end\":return _context4.stop();}}},_callee4,this);}));function formateCode(_x){return _formateCode.apply(this,arguments);}return formateCode;}()},{key:\"formattedCode\",value:function(){var _formattedCode=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee5(res){var _editorManager2,activeFile,session;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_editorManager2=editorManager,activeFile=_editorManager2.activeFile;session=activeFile.session;if(res.get(\"formatted\")){this.setValueToEditor(session,res.get(\"formatted\"));}else if(res.get(\"message\")){acode.alert(\"PyFormatX Error\",res.get(\"message\"));}else{acode.alert(\"PyFormatX Error\",\"Something went wrong! Report it Developer.\");}case 3:case\"end\":return _context5.stop();}}},_callee5,this);}));function formattedCode(_x2){return _formattedCode.apply(this,arguments);}return formattedCode;}()},{key:\"setValueToEditor\",value:function setValueToEditor(session,formattedCode){var _Object$assign=Object.assign({},session.getUndoManager()),$undoStack=_Object$assign.$undoStack,$redoStack=_Object$assign.$redoStack,$rev=_Object$assign.$rev,$mark=_Object$assign.$mark;session.setValue(formattedCode);var undoManager=session.getUndoManager();undoManager.$undoStack=$undoStack;undoManager.$redoStack=$redoStack;undoManager.$rev=$rev;undoManager.$mark=$mark;}},{key:\"destroy\",value:function(){var _destroy=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee6(){var _classPrivateFieldGet2;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:acode.unregisterFormatter(_plugin_json__WEBPACK_IMPORTED_MODULE_6__.id);(_classPrivateFieldGet2=(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this,_worker))===null||_classPrivateFieldGet2===void 0?void 0:_classPrivateFieldGet2.terminate();case 2:case\"end\":return _context6.stop();}}},_callee6,this);}));function destroy(){return _destroy.apply(this,arguments);}return destroy;}()}]);return PyFormatX;}();function _workerOnMessage2(_x3){return _workerOnMessage3.apply(this,arguments);}function _workerOnMessage3(){_workerOnMessage3=(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee7(e){var _e$data,action,success,error,output;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_e$data=e.data,action=_e$data.action,success=_e$data.success,error=_e$data.error,output=_e$data.output;_context7.t0=action;_context7.next=_context7.t0==='init'?4:_context7.t0==='formatCode'?6:9;break;case 4:if(success){window.toast(\"loaded required modules 🎉\",3000);}else{acode.alert(\"PyFormatX Error\",error);}return _context7.abrupt(\"break\",11);case 6:if(success){this.formattedCode(output);}else{acode.alert(\"PyFormatX Error\",error);}loader.removeTitleLoader();return _context7.abrupt(\"break\",11);case 9:loader.removeTitleLoader();return _context7.abrupt(\"break\",11);case 11:case\"end\":return _context7.stop();}}},_callee7,this);}));return _workerOnMessage3.apply(this,arguments);}if(window.acode){var acodePlugin=new PyFormatX();acode.setPluginInit(_plugin_json__WEBPACK_IMPORTED_MODULE_6__.id,function(baseUrl,$page,_ref2){var cacheFileUrl=_ref2.cacheFileUrl,cacheFile=_ref2.cacheFile;if(!baseUrl.endsWith(\"/\")){baseUrl+=\"/\";}acodePlugin.baseUrl=baseUrl;acodePlugin.init($page,cacheFile,cacheFileUrl);});acode.setPluginUnmount(_plugin_json__WEBPACK_IMPORTED_MODULE_6__.id,function(){acodePlugin.destroy();});}\n\n//# sourceURL=webpack://PyFormatX/./src/main.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\";\n\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n    Op = Object.prototype,\n    hasOwn = Op.hasOwnProperty,\n    defineProperty = Object.defineProperty || function (obj, key, desc) {\n      obj[key] = desc.value;\n    },\n    $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n    iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n    asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n    toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n      generator = Object.create(protoGenerator.prototype),\n      context = new Context(tryLocsList || []);\n    return defineProperty(generator, \"_invoke\", {\n      value: makeInvokeMethod(innerFn, self, context)\n    }), generator;\n  }\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n    NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n          value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n      reject(record.arg);\n    }\n    var previousPromise;\n    defineProperty(this, \"_invoke\", {\n      value: function value(method, arg) {\n        function callInvokeWithMethodAndArg() {\n          return new PromiseImpl(function (resolve, reject) {\n            invoke(method, arg, resolve, reject);\n          });\n        }\n        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = \"suspendedStart\";\n    return function (method, arg) {\n      if (\"executing\" === state) throw new Error(\"Generator is already running\");\n      if (\"completed\" === state) {\n        if (\"throw\" === method) throw arg;\n        return doneResult();\n      }\n      for (context.method = method, context.arg = arg;;) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n        if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n          if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n          context.dispatchException(context.arg);\n        } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n        state = \"executing\";\n        var record = tryCatch(innerFn, self, context);\n        if (\"normal\" === record.type) {\n          if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        }\n        \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (undefined === method) {\n      if (context.delegate = null, \"throw\" === context.method) {\n        if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel;\n        context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n      return ContinueSentinel;\n    }\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n          next = function next() {\n            for (; ++i < iterable.length;) {\n              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n            }\n            return next.value = undefined, next.done = !0, next;\n          };\n        return next.next = next;\n      }\n    }\n    return {\n      next: doneResult\n    };\n  }\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), defineProperty(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (val) {\n    var object = Object(val),\n      keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {\n        \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n      }\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n          record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n            hasFinally = hasOwn.call(entry, \"finallyLoc\");\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if ((typeof globalThis === \"undefined\" ? \"undefined\" : _typeof(globalThis)) === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _asyncToGenerator; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _classApplyDescriptorGet; }\n/* harmony export */ });\nfunction _classApplyDescriptorGet(receiver, descriptor) {\n  if (descriptor.get) {\n    return descriptor.get.call(receiver);\n  }\n  return descriptor.value;\n}\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _classApplyDescriptorSet; }\n/* harmony export */ });\nfunction _classApplyDescriptorSet(receiver, descriptor, value) {\n  if (descriptor.set) {\n    descriptor.set.call(receiver, value);\n  } else {\n    if (!descriptor.writable) {\n      throw new TypeError(\"attempted to set read only private field\");\n    }\n    descriptor.value = value;\n  }\n}\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _classCallCheck; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _classExtractFieldDescriptor; }\n/* harmony export */ });\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) {\n  if (!privateMap.has(receiver)) {\n    throw new TypeError(\"attempted to \" + action + \" private field on non-instance\");\n  }\n  return privateMap.get(receiver);\n}\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _classPrivateFieldGet; }\n/* harmony export */ });\n/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ \"./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js\");\n/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ \"./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js\");\n\n\nfunction _classPrivateFieldGet(receiver, privateMap) {\n  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(receiver, privateMap, \"get\");\n  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(receiver, descriptor);\n}\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _classPrivateFieldSet; }\n/* harmony export */ });\n/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ \"./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js\");\n/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ \"./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js\");\n\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) {\n  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(receiver, privateMap, \"set\");\n  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(receiver, descriptor, value);\n  return value;\n}\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _createClass; }\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://PyFormatX/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./plugin.json":
/*!*********************!*\
  !*** ./plugin.json ***!
  \*********************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"id\":\"bajrangcoder.pyformatx\",\"name\":\"PyFormatX\",\"main\":\"dist/main.js\",\"version\":\"1.0.0\",\"readme\":\"readme.md\",\"icon\":\"icon.png\",\"files\":[\"worker.js\",\"lib/pyodide.js\",\"lib/pyodide.asm.wasm\",\"lib/pyodide.asm.js\",\"lib/python_stdlib.zip\",\"lib/repodata.json\",\"lib/platformdirs-3.8.1-py3-none-any.whl\",\"lib/click-8.1.3-py3-none-any.whl\",\"lib/black-23.7.0-py3-none-any.whl\",\"lib/mypy_extensions-1.0.0-py3-none-any.whl\",\"lib/pathspec-0.11.1-py3-none-any.whl\",\"lib/packaging-23.0-py3-none-any.whl\"],\"author\":{\"name\":\"Raunak Raj\",\"email\":\"bajrangcoders@gmail.com\",\"github\":\"bajrangCoder\"}}');\n\n//# sourceURL=webpack://PyFormatX/./plugin.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;