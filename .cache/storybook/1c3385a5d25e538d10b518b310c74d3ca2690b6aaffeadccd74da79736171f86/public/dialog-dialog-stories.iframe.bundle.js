"use strict";
(self["webpackChunka_peak_test"] = self["webpackChunka_peak_test"] || []).push([["dialog-dialog-stories"],{

/***/ "./src/components/ui/dialog/dialog.stories.tsx":
/*!*****************************************************!*\
  !*** ./src/components/ui/dialog/dialog.stories.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Template: () => (/* binding */ Template),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button/button */ "./src/components/ui/button/button.tsx");
/* harmony import */ var _components_ui_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/dialog/dialog */ "./src/components/ui/dialog/dialog.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var _s = __webpack_require__.$Refresh$.signature();



const meta = {
  title: "ui/Dialog",
  component: _components_ui_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    open: {
      control: "boolean"
    }
  },
  args: {
    open: false
  },
  tags: ["autodocs"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Component = args => {
  _s();
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if ((args === null || args === void 0 ? void 0 : args.open) !== undefined) setOpen(args === null || args === void 0 ? void 0 : args.open);
  }, [args === null || args === void 0 ? void 0 : args.open]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
    open: open,
    onOpenChange: setOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTrigger, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
        children: "Open"
      }, void 0, false, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogHeader, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {
          children: "Are you absolutely sure?"
        }, void 0, false, {
          fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogDescription, {
          children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        }, void 0, false, {
          fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogFooter, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogClose, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Cancel"
            }, void 0, false, {
              fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};
_s(Component, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c = Component;
const Template = {
  decorators: [Story => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-full ml-auto",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Story, {}, void 0, false, {
      fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.stories.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, undefined)],
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
      originalSource: "{\n  decorators: [Story => <div className=\"w-full ml-auto\">\n        <Story />\n      </div>],\n  render: Component\n}",
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

/***/ "./src/components/ui/button/button.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/button/button.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   buttonVariants: () => (/* binding */ buttonVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ "./node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "./src/lib/utils.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot : "button";
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/button/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, undefined);
});
_c1 = Button;
Button.displayName = "Button";

Button.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "Button",
    "props": {
        "asChild": {
            "defaultValue": {
                "value": "false",
                "computed": false
            },
            "required": false
        }
    }
};
var _c, _c1;
__webpack_require__.$Refresh$.register(_c, "Button$React.forwardRef");
__webpack_require__.$Refresh$.register(_c1, "Button");


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

/***/ "./src/components/ui/dialog/dialog.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/dialog/dialog.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogClose: () => (/* binding */ DialogClose),
/* harmony export */   DialogContent: () => (/* binding */ DialogContent),
/* harmony export */   DialogDescription: () => (/* binding */ DialogDescription),
/* harmony export */   DialogFooter: () => (/* binding */ DialogFooter),
/* harmony export */   DialogHeader: () => (/* binding */ DialogHeader),
/* harmony export */   DialogOverlay: () => (/* binding */ DialogOverlay),
/* harmony export */   DialogPortal: () => (/* binding */ DialogPortal),
/* harmony export */   DialogTitle: () => (/* binding */ DialogTitle),
/* harmony export */   DialogTrigger: () => (/* binding */ DialogTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-dialog */ "./node_modules/@radix-ui/react-dialog/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=X!=!lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "./src/lib/utils.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

"use client";





const Dialog = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Root;
const DialogTrigger = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Trigger;
const DialogPortal = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Portal;
const DialogClose = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Close;
const DialogOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Overlay, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, undefined));
_c = DialogOverlay;
DialogOverlay.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Overlay.displayName;
const DialogContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DialogPortal, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DialogOverlay, {}, void 0, false, {
                fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Content, {
                ref: ref,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, undefined));
_c2 = DialogContent;
DialogContent.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Content.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, undefined);
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, undefined);
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Title, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, undefined));
_c6 = DialogTitle;
DialogTitle.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Title.displayName;
const DialogDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Description, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/Users/xelopsys/Desktop/Projects/a-peak-test/src/components/ui/dialog/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, undefined));
_c8 = DialogDescription;
DialogDescription.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Description.displayName;

DialogContent.__docgenInfo = {
    "description": "",
    "methods": []
};
DialogDescription.__docgenInfo = {
    "description": "",
    "methods": []
};
DialogFooter.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "DialogFooter"
};
DialogHeader.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "DialogHeader"
};
DialogOverlay.__docgenInfo = {
    "description": "",
    "methods": []
};
DialogTitle.__docgenInfo = {
    "description": "",
    "methods": []
};
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__webpack_require__.$Refresh$.register(_c, "DialogOverlay");
__webpack_require__.$Refresh$.register(_c1, "DialogContent$React.forwardRef");
__webpack_require__.$Refresh$.register(_c2, "DialogContent");
__webpack_require__.$Refresh$.register(_c3, "DialogHeader");
__webpack_require__.$Refresh$.register(_c4, "DialogFooter");
__webpack_require__.$Refresh$.register(_c5, "DialogTitle$React.forwardRef");
__webpack_require__.$Refresh$.register(_c6, "DialogTitle");
__webpack_require__.$Refresh$.register(_c7, "DialogDescription$React.forwardRef");
__webpack_require__.$Refresh$.register(_c8, "DialogDescription");


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
//# sourceMappingURL=dialog-dialog-stories.iframe.bundle.js.map