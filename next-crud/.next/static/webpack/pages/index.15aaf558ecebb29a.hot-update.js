"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_Tabela__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tabela */ \"./src/components/Tabela.tsx\");\n/* harmony import */ var _core_Cliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Cliente */ \"./core/Cliente.ts\");\n/* harmony import */ var _components_Botao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Botao */ \"./src/components/Botao.tsx\");\n/* harmony import */ var _components_Formulario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Formulario */ \"./src/components/Formulario.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [cliente, setCliente] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(_core_Cliente__WEBPACK_IMPORTED_MODULE_3__[\"default\"].vazio());\n    const [visivel, setVisivel] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    const clientes = [\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Ana\", 34, \"1\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Bia\", 45, \"2\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Carlos\", 23, \"3\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Pedro\", 54, \"4\")\n    ];\n    function clienteSelecionado(cliente) {\n        setCliente(cliente);\n    }\n    function clienteExcluido(cliente) {\n        console.log(\"Excluir... \".concat(cliente.nome));\n    }\n    function salvarCliente(cliente) {\n        console.log(cliente);\n        setVisivel(\"tabela\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\\n            flex justify-center items-center h-screen\\n            bg-gradient-to-r from-blue-500 to-purple-500\\n            text-white\\n        \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            titulo: \"Cadastro Simples\",\n            children: visivel === \"tabela\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Botao__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            cor: \"blue\",\n                            className: \"mb-4\",\n                            onClick: ()=>setVisivel(\"form\"),\n                            children: \"Novo Cliente\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hercu\\\\OneDrive\\\\Documentos\\\\estudos\\\\exercicios-web\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hercu\\\\OneDrive\\\\Documentos\\\\estudos\\\\exercicios-web\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabela__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        clientes: clientes,\n                        clienteSelecionado: clienteSelecionado,\n                        clienteExcluido: clienteExcluido\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hercu\\\\OneDrive\\\\Documentos\\\\estudos\\\\exercicios-web\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Formulario__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                clientes: clientes,\n                clienteMudou: salvarCliente,\n                cancelado: ()=>setVisivel(\"tabela\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hercu\\\\OneDrive\\\\Documentos\\\\estudos\\\\exercicios-web\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 52,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hercu\\\\OneDrive\\\\Documentos\\\\estudos\\\\exercicios-web\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hercu\\\\OneDrive\\\\Documentos\\\\estudos\\\\exercicios-web\\\\next-crud\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"V8mxzYVumyHYz3xrkytup0x/dh0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUwQztBQUNBO0FBQ0Q7QUFDRDtBQUNVO0FBQ2pCO0FBRWxCLFNBQVNNOztJQUVwQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQVVILDJEQUFhO0lBQzdELE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUE7SUFFdEMsTUFBTU8sV0FBVztRQUNiLElBQUlWLHFEQUFPQSxDQUFDLE9BQU8sSUFBSTtRQUN2QixJQUFJQSxxREFBT0EsQ0FBQyxPQUFPLElBQUk7UUFDdkIsSUFBSUEscURBQU9BLENBQUMsVUFBVSxJQUFJO1FBQzFCLElBQUlBLHFEQUFPQSxDQUFDLFNBQVMsSUFBSTtLQUM1QjtJQUVELFNBQVNXLG1CQUFtQk4sT0FBZ0I7UUFDeENDLFdBQVdEO0lBQ2Y7SUFFQSxTQUFTTyxnQkFBZ0JQLE9BQWdCO1FBQ3JDUSxRQUFRQyxHQUFHLENBQUMsY0FBMkIsT0FBYlQsUUFBUVUsSUFBSTtJQUMxQztJQUVBLFNBQVNDLGNBQWNYLE9BQWdCO1FBQ25DUSxRQUFRQyxHQUFHLENBQUNUO1FBQ1pJLFdBQVc7SUFDZjtJQUVBLHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFZO2tCQUtiLDRFQUFDcEIsMERBQU1BO1lBQUNxQixRQUFPO3NCQUNWWCxZQUFZLHlCQUNUOztrQ0FDQSw4REFBQ1M7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNqQix5REFBS0E7NEJBQUNtQixLQUFJOzRCQUFPRixXQUFVOzRCQUFPRyxTQUFTLElBQU1aLFdBQVc7c0NBQVM7Ozs7Ozs7Ozs7O2tDQUUxRSw4REFBQ1YsMERBQU1BO3dCQUFDVyxVQUFVQTt3QkFBVUMsb0JBQW9CQTt3QkFDNUNDLGlCQUFpQkE7Ozs7Ozs7NkNBSXJCLDhEQUFDViw4REFBVUE7Z0JBQUNRLFVBQVVBO2dCQUN0QlksY0FBY047Z0JBQ2JPLFdBQVcsSUFBTWQsV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtHQWxEd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBUYWJlbGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFiZWxhXCI7XHJcbmltcG9ydCBDbGllbnRlIGZyb20gXCIuLi8uLi9jb3JlL0NsaWVudGVcIjtcclxuaW1wb3J0IEJvdGFvIGZyb20gJy4uL2NvbXBvbmVudHMvQm90YW8nO1xyXG5pbXBvcnQgRm9ybXVsYXJpbyBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm11bGFyaW8nO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gICAgY29uc3QgW2NsaWVudGUsIHNldENsaWVudGVdID0gdXNlU3RhdGU8Q2xpZW50ZT4oQ2xpZW50ZS52YXppbygpKVxyXG4gICAgY29uc3QgW3Zpc2l2ZWwsIHNldFZpc2l2ZWxdID0gdXNlU3RhdGU8J3RhYmVsYScgfCAnZm9ybSc+KClcclxuXHJcbiAgICBjb25zdCBjbGllbnRlcyA9IFtcclxuICAgICAgICBuZXcgQ2xpZW50ZSgnQW5hJywgMzQsICcxJyksXHJcbiAgICAgICAgbmV3IENsaWVudGUoJ0JpYScsIDQ1LCAnMicpLFxyXG4gICAgICAgIG5ldyBDbGllbnRlKCdDYXJsb3MnLCAyMywgJzMnKSxcclxuICAgICAgICBuZXcgQ2xpZW50ZSgnUGVkcm8nLCA1NCwgJzQnKSxcclxuICAgIF1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGllbnRlU2VsZWNpb25hZG8oY2xpZW50ZTogQ2xpZW50ZSkge1xyXG4gICAgICAgIHNldENsaWVudGUoY2xpZW50ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGllbnRlRXhjbHVpZG8oY2xpZW50ZTogQ2xpZW50ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBFeGNsdWlyLi4uICR7Y2xpZW50ZS5ub21lfWApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2FsdmFyQ2xpZW50ZShjbGllbnRlOiBDbGllbnRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2xpZW50ZSlcclxuICAgICAgICBzZXRWaXNpdmVsKCd0YWJlbGEnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cclxuICAgICAgICAgICAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHRvLXB1cnBsZS01MDBcclxuICAgICAgICAgICAgdGV4dC13aGl0ZVxyXG4gICAgICAgIGB9PlxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdHVsbz1cIkNhZGFzdHJvIFNpbXBsZXNcIj5cclxuICAgICAgICAgICAgICAgIHt2aXNpdmVsID09PSAndGFiZWxhJyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvIGNvcj1cImJsdWVcIiBjbGFzc05hbWU9J21iLTQnIG9uQ2xpY2s9eygpID0+IHNldFZpc2l2ZWwoJ2Zvcm0nKX0+Tm92byBDbGllbnRlPC9Cb3Rhbz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiZWxhIGNsaWVudGVzPXtjbGllbnRlc30gY2xpZW50ZVNlbGVjaW9uYWRvPXtjbGllbnRlU2VsZWNpb25hZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudGVFeGNsdWlkbz17Y2xpZW50ZUV4Y2x1aWRvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm11bGFyaW8gY2xpZW50ZXM9e2NsaWVudGVzfSBcclxuICAgICAgICAgICAgICAgICAgICBjbGllbnRlTXVkb3U9e3NhbHZhckNsaWVudGV9XHJcbiAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGFkbz17KCkgPT4gc2V0VmlzaXZlbCgndGFiZWxhJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkxheW91dCIsIlRhYmVsYSIsIkNsaWVudGUiLCJCb3RhbyIsIkZvcm11bGFyaW8iLCJ1c2VTdGF0ZSIsIkhvbWUiLCJjbGllbnRlIiwic2V0Q2xpZW50ZSIsInZhemlvIiwidmlzaXZlbCIsInNldFZpc2l2ZWwiLCJjbGllbnRlcyIsImNsaWVudGVTZWxlY2lvbmFkbyIsImNsaWVudGVFeGNsdWlkbyIsImNvbnNvbGUiLCJsb2ciLCJub21lIiwic2FsdmFyQ2xpZW50ZSIsImRpdiIsImNsYXNzTmFtZSIsInRpdHVsbyIsImNvciIsIm9uQ2xpY2siLCJjbGllbnRlTXVkb3UiLCJjYW5jZWxhZG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});