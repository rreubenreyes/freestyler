/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\nclass Controller {\n    constructor() {\n        this.gamepad = null;\n        this.isCapturing = false;\n        this.deadzone = 0;\n        this.attach = (gamepad) => {\n            this.gamepad = gamepad;\n            console.log(`Gamepad attached: ${this.gamepad.id}`);\n        };\n        this.detach = () => {\n            console.log('Gamepad detached');\n            this.gamepad = null;\n        };\n        this.setDeadzone = (deadzone) => {\n            this.deadzone = deadzone;\n            console.log(`Deadzone set to ${deadzone}`);\n        };\n        this.startCapture = () => {\n            this.isCapturing = true;\n            return this.isCapturing;\n        };\n        this.stopCapture = () => {\n            this.isCapturing = false;\n            return this.isCapturing;\n        };\n        this.startPoll = (frequency) => {\n            this.interval = window.setInterval(this.handleInput, 1000 / frequency);\n            console.log(`Polling at ${frequency}Hz`);\n        };\n        this.stopPoll = () => {\n            window.clearInterval(this.interval);\n        };\n        this.handleInput = () => {\n            if (!(this.gamepad instanceof Gamepad)) {\n                return null;\n            }\n            const lastGamepadState = navigator.getGamepads()[this.gamepad.index];\n            if (!lastGamepadState) {\n                return null;\n            }\n            const { axes, buttons } = lastGamepadState;\n            const axisLogOutputLabels = ['leftX', 'leftY', 'rightX', 'rightY'];\n            const buttonLogOutputLabels = [\n                'cross',\n                'circle',\n                'square',\n                'triangle',\n                'l1',\n                'r1',\n                'l2',\n                'r2'\n            ];\n            const axisLogOutput = axes\n                .map((axis, index) => ({\n                label: axisLogOutputLabels[index],\n                value: Number(axis.toFixed(3))\n            }))\n                .filter(axis => Math.abs(axis.value) >= Math.abs(this.deadzone))\n                .map(axis => `${axis.label}: ${axis.value}`)\n                .join(' ');\n            const buttonLogOutput = buttons\n                .map((button, index) => ({ value: button.value, label: buttonLogOutputLabels[index] }))\n                .filter(button => button.value)\n                .map(button => button.label)\n                .join(' ');\n            const logOutput = `${axisLogOutput} ${buttonLogOutput}`.trim();\n            if (logOutput) {\n                console.log(logOutput);\n            }\n            return lastGamepadState;\n        };\n    }\n}\n\n\n//# sourceURL=webpack://freestyler/./src/controller.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.ts\");\n// import * as Three from 'three'\n// const scene = new Three.Scene()\n// const camera = new Three.PerspectiveCamera(110, window.innerWidth / window.innerHeight)\n// const renderer = new Three.WebGLRenderer()\n// console.log('Scene built')\n// renderer.setSize(window.innerWidth, window.innerHeight)\n// document.body.appendChild(renderer.domElement)\n// console.log('Scene appended to DOM')\n// const geometry = new Three.BoxGeometry()\n// const material = new Three.MeshBasicMaterial( { color: 0x00ff00 } )\n// const cube = new Three.Mesh( geometry, material )\n// console.log('3D mesh built')\n// scene.add(cube)\n// console.log('3D mesh rendered')\n// camera.position.z = 5\n// function animate(): void {\n//   requestAnimationFrame(animate)\n//   renderer.render(scene, camera)\n// }\n// animate()\n\nconst controller = new _controller__WEBPACK_IMPORTED_MODULE_0__.default();\ncontroller.setDeadzone(0.1);\nwindow.addEventListener('gamepadconnected', e => {\n    if (e instanceof GamepadEvent) {\n        controller.attach(e.gamepad);\n    }\n});\nwindow.addEventListener('gamepadisconnected', controller.detach);\ncontroller.startPoll(100);\n\n\n//# sourceURL=webpack://freestyler/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;