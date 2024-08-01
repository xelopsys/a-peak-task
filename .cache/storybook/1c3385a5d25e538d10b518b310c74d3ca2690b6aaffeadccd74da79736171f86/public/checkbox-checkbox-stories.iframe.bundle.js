"use strict";
(self["webpackChunka_peak_test"] = self["webpackChunka_peak_test"] || []).push([["checkbox-checkbox-stories"],{

/***/ "./src/components/ui/checkbox/checkbox.stories.tsx":
/*!*********************************************************!*\
  !*** ./src/components/ui/checkbox/checkbox.stories.tsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Template: () => (/* binding */ Template),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _components_ui_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/checkbox/checkbox */ "./src/components/ui/checkbox/checkbox.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const meta = {
  title: "ui/Checkbox",
  component: _components_ui_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_1__.Checkbox,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    withText: {
      control: "boolean"
    }
  },
  tags: ["autodocs"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Component = args => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex items-center space-x-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
      id: "terms"
    }, void 0, false, {
      fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/checkbox/checkbox.stories.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, undefined), args.withText && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: "terms",
      className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      children: "Accept terms and conditions"
    }, void 0, false, {
      fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/checkbox/checkbox.stories.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/checkbox/checkbox.stories.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};
_c = Component;
const Template = {
  args: {
    withText: true
  },
  render: Component
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Component");
;
const __namedExportsOrder = ["Template"];
Template.parameters = {
  ...Template.parameters,
  docs: {
    ...Template.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    withText: true\n  },\n  render: Component\n}",
      ...Template.parameters?.docs?.source
    }
  }
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/ui/checkbox/checkbox.tsx":
/*!*************************************************!*\
  !*** ./src/components/ui/checkbox/checkbox.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-checkbox */ "./node_modules/@radix-ui/react-checkbox/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Check!=!lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "./src/lib/utils.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

"use client";





const Checkbox = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Root, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Indicator, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/checkbox/checkbox.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, undefined)
        }, void 0, false, {
            fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/checkbox/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/checkbox/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, undefined));
_c1 = Checkbox;
Checkbox.displayName = _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;

Checkbox.__docgenInfo = {
    "description": "",
    "methods": []
};
var _c, _c1;
__webpack_require__.$Refresh$.register(_c, "Checkbox$React.forwardRef");
__webpack_require__.$Refresh$.register(_c1, "Checkbox");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   wait: () => (/* binding */ wait)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)(inputs));
}
function wait({ ms, data }) {
    return new Promise((resolve)=>setTimeout(()=>resolve(data), ms));
}


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=checkbox-checkbox-stories.iframe.bundle.js.map