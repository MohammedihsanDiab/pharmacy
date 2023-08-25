(self["webpackChunk"] = self["webpackChunk"] || []).push([
    ["resources_js_Components_addProduct_vue"], {

        /***/
        "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/addProduct.vue?vue&type=script&lang=js&":
        /*!*****************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/addProduct.vue?vue&type=script&lang=js& ***!
          \*****************************************************************************************************************************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
            /* harmony import */
            var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //

            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = ({
                name: "add_product",
                created: function created() {},
                data: function data() {
                    return {
                        data: {
                            model: '',
                            price: '',
                            brand: '',
                            category: '',
                            rating: '',
                            discount_price: ''
                        },
                        errors: []
                    };
                },
                methods: {
                    chooseimge: function chooseimge(event) {
                        this.data.image = event.target.files[0];
                    },
                    add: function add() {
                        var t = this;
                        var data = new FormData();
                        data.append('model', t.data.model);
                        data.append('price', t.data.price);
                        data.append('brand', t.data.brand);

                        data.append('category', t.data.category);
                        data.append('image', t.data.image);
                        data.append('rating', t.data.rating);
                        data.append('discount_price', t.data.discount_price);
                        axios.post('/api/add', data).then(function(response) {
                            console.log(response.data);

                            if (response.data.data.errors) {
                                t.errors = response.data.data.errors;
                                console.log(t.errors);
                            } else {
                                Toast.fire({
                                    icon: 'success',
                                    title: response.data.message
                                });
                                t.$router.push({
                                    path: '/'
                                });
                            }
                        })["catch"](function(error) {
                            Toast.fire({
                                icon: 'error',
                                title: 'medicine created failed'
                            });
                            console.log(error);
                        });
                    }
                }
            });

            /***/
        }),

        /***/
        "./resources/js/Components/addProduct.vue":
        /*!************************************************!*\
          !*** ./resources/js/Components/addProduct.vue ***!
          \************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _addProduct_vue_vue_type_template_id_0d6f2e79___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./addProduct.vue?vue&type=template&id=0d6f2e79& */ "./resources/js/Components/addProduct.vue?vue&type=template&id=0d6f2e79&");
            /* harmony import */
            var _addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./addProduct.vue?vue&type=script&lang=js& */ "./resources/js/Components/addProduct.vue?vue&type=script&lang=js&");
            /* harmony import */
            var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





            /* normalize component */
            ;
            var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
                _addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
                _addProduct_vue_vue_type_template_id_0d6f2e79___WEBPACK_IMPORTED_MODULE_0__.render,
                _addProduct_vue_vue_type_template_id_0d6f2e79___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
                false,
                null,
                null,
                null

            )

            /* hot reload */
            if (false) { var api; }
            component.options.__file = "resources/js/Components/addProduct.vue"
                /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

            /***/
        }),

        /***/
        "./resources/js/Components/addProduct.vue?vue&type=script&lang=js&":
        /*!*************************************************************************!*\
          !*** ./resources/js/Components/addProduct.vue?vue&type=script&lang=js& ***!
          \*************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/addProduct.vue?vue&type=script&lang=js&");
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

            /***/
        }),

        /***/
        "./resources/js/Components/addProduct.vue?vue&type=template&id=0d6f2e79&":
        /*!*******************************************************************************!*\
          !*** ./resources/js/Components/addProduct.vue?vue&type=template&id=0d6f2e79& ***!
          \*******************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "render": () => ( /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_template_id_0d6f2e79___WEBPACK_IMPORTED_MODULE_0__.render),
                /* harmony export */
                "staticRenderFns": () => ( /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_template_id_0d6f2e79___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_template_id_0d6f2e79___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addProduct.vue?vue&type=template&id=0d6f2e79& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/addProduct.vue?vue&type=template&id=0d6f2e79&");


            /***/
        }),

        /***/
        "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/addProduct.vue?vue&type=template&id=0d6f2e79&":
        /*!**********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/addProduct.vue?vue&type=template&id=0d6f2e79& ***!
          \**********************************************************************************************************************************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "render": () => ( /* binding */ render),
                /* harmony export */
                "staticRenderFns": () => ( /* binding */ staticRenderFns)
                    /* harmony export */
            });
            var render = function() {
                var _vm = this
                var _h = _vm.$createElement
                var _c = _vm._self._c || _h
                return _c("div", { staticClass: "crm_body_bg" }, [
                    _c("section", { staticClass: "main_content dashboard_part" }, [
                        _c("div", { staticClass: "container " }, [
                            _vm._m(0),
                            _vm._v(" "),
                            _c("div", [
                                _c("div", { staticClass: "bg container" }, [
                                    _vm._m(1),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                        _c("div", { staticClass: "col-sm-8" }, [
                                            _c("div", { staticClass: "contact-form" }, [
                                                _c("div", {
                                                    staticClass: "status alert alert-success",
                                                    staticStyle: { display: "none" }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                    "form", {
                                                        staticClass: "contact-form row",
                                                        attrs: {
                                                            id: "main-contact-form",
                                                            method: "post",
                                                            name: "contact-form",
                                                            enctype: "multipart/form-data"
                                                        }
                                                    }, [
                                                        _c("div", { staticClass: "form-group col-md-6 mb-3" }, [
                                                            _c("input", {
                                                                directives: [{
                                                                    name: "model",
                                                                    rawName: "v-model",
                                                                    value: _vm.data.brand,
                                                                    expression: "data.brand"
                                                                }],
                                                                class: [
                                                                    "form-control",
                                                                    _vm.errors.brand ? "is-invalid" : ""
                                                                ],
                                                                attrs: {
                                                                    type: "text",
                                                                    name: "brand",
                                                                    required: "",
                                                                    placeholder: "brand"
                                                                },
                                                                domProps: { value: _vm.data.brand },
                                                                on: {
                                                                    input: function($event) {
                                                                        if ($event.target.composing) {
                                                                            return
                                                                        }
                                                                        _vm.$set(_vm.data, "brand", $event.target.value)
                                                                    }
                                                                }
                                                            }),
                                                            _vm._v(" "),
                                                            _vm.errors.brand ?
                                                            _c(
                                                                "span", {
                                                                    staticClass: "bg-danger text-white p-1 rounded d-inline-block my-1 "
                                                                }, [_vm._v(_vm._s(_vm.errors.brand[0]))]
                                                            ) :
                                                            _vm._e()
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("div", { staticClass: "form-group col-md-6 mb-3" }, [
                                                            _c("input", {
                                                                directives: [{
                                                                    name: "model",
                                                                    rawName: "v-model",
                                                                    value: _vm.data.model,
                                                                    expression: "data.model"
                                                                }],
                                                                class: [
                                                                    "form-control",
                                                                    _vm.errors.model ? "is-invalid" : ""
                                                                ],
                                                                attrs: {
                                                                    type: "text",
                                                                    name: "model",
                                                                    required: "",
                                                                    placeholder: "model"
                                                                },
                                                                domProps: { value: _vm.data.model },
                                                                on: {
                                                                    input: function($event) {
                                                                        if ($event.target.composing) {
                                                                            return
                                                                        }
                                                                        _vm.$set(_vm.data, "model", $event.target.value)
                                                                    }
                                                                }
                                                            }),
                                                            _vm._v(" "),
                                                            _vm.errors.model ?
                                                            _c(
                                                                "span", {
                                                                    staticClass: "bg-danger text-white p-1 rounded d-inline-block my-1 "
                                                                }, [_vm._v(_vm._s(_vm.errors.model[0]))]
                                                            ) :
                                                            _vm._e()
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("div", { staticClass: "form-group col-md-6 mb-3" }, [
                                                            _c("input", {
                                                                directives: [{
                                                                    name: "model",
                                                                    rawName: "v-model",
                                                                    value: _vm.data.price,
                                                                    expression: "data.price"
                                                                }],
                                                                class: [
                                                                    "form-control",
                                                                    _vm.errors.price ? "is-invalid" : ""
                                                                ],
                                                                attrs: {
                                                                    type: "number",
                                                                    name: "price",
                                                                    required: "",
                                                                    placeholder: "price"
                                                                },
                                                                domProps: { value: _vm.data.price },
                                                                on: {
                                                                    input: function($event) {
                                                                        if ($event.target.composing) {
                                                                            return
                                                                        }
                                                                        _vm.$set(_vm.data, "price", $event.target.value)
                                                                    }
                                                                }
                                                            }),
                                                            _vm._v(" "),
                                                            _vm.errors.price ?
                                                            _c(
                                                                "span", {
                                                                    staticClass: "bg-danger text-white p-1 rounded d-inline-block my-2 "
                                                                }, [_vm._v(_vm._s(_vm.errors.price[0]))]
                                                            ) :
                                                            _vm._e()
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("div", { staticClass: "form-group col-md-6 mb-3" }, [
                                                            _c("input", {
                                                                class: [
                                                                    "form-control",
                                                                    _vm.errors.image ? "is-invalid" : ""
                                                                ],
                                                                attrs: {
                                                                    type: "file",
                                                                    name: "image",
                                                                    required: "",
                                                                    placeholder: "image"
                                                                },
                                                                on: { change: _vm.chooseimge }
                                                            }),
                                                            _vm._v(" "),
                                                            _vm.errors.image ?
                                                            _c(
                                                                "span", {
                                                                    staticClass: "bg-danger text-white p-1 rounded d-inline-block my-2 "
                                                                }, [_vm._v(_vm._s(_vm.errors.image[0]))]
                                                            ) :
                                                            _vm._e()
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("div", { staticClass: "form-group col-md-6 mb-3" }, [
                                                            _c("input", {
                                                                directives: [{
                                                                    name: "model",
                                                                    rawName: "v-model",
                                                                    value: _vm.data.rating,
                                                                    expression: "data.rating"
                                                                }],
                                                                class: [
                                                                    "form-control",
                                                                    _vm.errors.rating ? "is-invalid" : ""
                                                                ],
                                                                attrs: {
                                                                    type: "number",
                                                                    name: "rating",
                                                                    required: "",
                                                                    placeholder: "rating"
                                                                },
                                                                domProps: { value: _vm.data.rating },
                                                                on: {
                                                                    input: function($event) {
                                                                        if ($event.target.composing) {
                                                                            return
                                                                        }
                                                                        _vm.$set(_vm.data, "rating", $event.target.value)
                                                                    }
                                                                }
                                                            }),
                                                            _vm._v(" "),
                                                            _vm.errors.rating ?
                                                            _c(
                                                                "span", {
                                                                    staticClass: "bg-danger text-white p-1 rounded d-inline-block my-2 "
                                                                }, [_vm._v(_vm._s(_vm.errors.rating[0]))]
                                                            ) :
                                                            _vm._e()
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("div", { staticClass: "form-group col-md-6 mb-3" }, [
                                                            _c("input", {
                                                                directives: [{
                                                                    name: "model",
                                                                    rawName: "v-model",
                                                                    value: _vm.data.discount_price,
                                                                    expression: "data.discount_price"
                                                                }],
                                                                class: [
                                                                    "form-control",
                                                                    _vm.errors.discount_price ? "is-invalid" : ""
                                                                ],
                                                                attrs: {
                                                                    type: "number",
                                                                    name: "discount_price",
                                                                    required: "",
                                                                    placeholder: "discount_price"
                                                                },
                                                                domProps: { value: _vm.data.discount_price },
                                                                on: {
                                                                    input: function($event) {
                                                                        if ($event.target.composing) {
                                                                            return
                                                                        }
                                                                        _vm.$set(
                                                                            _vm.data,
                                                                            "discount_price",
                                                                            $event.target.value
                                                                        )
                                                                    }
                                                                }
                                                            }),
                                                            _vm._v(" "),
                                                            _vm.errors.discount_price ?
                                                            _c(
                                                                "span", {
                                                                    staticClass: "bg-danger text-white p-1 rounded d-inline-block my-2 "
                                                                }, [_vm._v(_vm._s(_vm.errors.discount_price[0]))]
                                                            ) :
                                                            _vm._e()
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("div", { staticClass: "form-group col-md-6 mb-3" }, [
                                                            _c("input", {
                                                                directives: [{
                                                                    name: "model",
                                                                    rawName: "v-model",
                                                                    value: _vm.data.discount,
                                                                    expression: "data.discount"
                                                                }],
                                                                class: [
                                                                    "form-control",
                                                                    _vm.errors.discount ? "is-invalid" : ""
                                                                ],
                                                                attrs: {
                                                                    type: "number",
                                                                    name: "discount",
                                                                    required: "",
                                                                    placeholder: "discount"
                                                                },
                                                                domProps: { value: _vm.data.discount },
                                                                on: {
                                                                    input: function($event) {
                                                                        if ($event.target.composing) {
                                                                            return
                                                                        }
                                                                        _vm.$set(
                                                                            _vm.data,
                                                                            "discount",
                                                                            $event.target.value
                                                                        )
                                                                    }
                                                                }
                                                            }),
                                                            _vm._v(" "),
                                                            _vm.errors.discount ?
                                                            _c(
                                                                "span", {
                                                                    staticClass: "bg-danger text-white p-1 rounded d-inline-block my-2 "
                                                                }, [_vm._v(_vm._s(_vm.errors.discount[0]))]
                                                            ) :
                                                            _vm._e()
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("div", { staticClass: "form-group col-md-6 my-3" }, [
                                                            _c(
                                                                "select", {
                                                                    directives: [{
                                                                        name: "model",
                                                                        rawName: "v-model",
                                                                        value: _vm.data.category,
                                                                        expression: "data.category"
                                                                    }],
                                                                    class: [
                                                                        "form-control",
                                                                        _vm.errors.category ? "is-invalid" : ""
                                                                    ],
                                                                    attrs: { name: "subject" },
                                                                    on: {
                                                                        change: function($event) {
                                                                            var $$selectedVal = Array.prototype.filter
                                                                                .call($event.target.options, function(o) {
                                                                                    return o.selected
                                                                                })
                                                                                .map(function(o) {
                                                                                    var val = "_value" in o ? o._value : o.value
                                                                                    return val
                                                                                })
                                                                            _vm.$set(
                                                                                _vm.data,
                                                                                "category",
                                                                                $event.target.multiple ?
                                                                                $$selectedVal :
                                                                                $$selectedVal[0]
                                                                            )
                                                                        }
                                                                    }
                                                                }, [
                                                                    _c("option", [_vm._v("Mobile")]),
                                                                    _vm._v(" "),
                                                                    _c("option", [_vm._v("Watch")]),
                                                                    _vm._v(" "),
                                                                    _c("option", [_vm._v("Tab")])
                                                                ]
                                                            ),
                                                            _vm._v(" "),
                                                            _vm.errors.category ?
                                                            _c(
                                                                "span", {
                                                                    staticClass: "bg-danger text-white p-1 rounded d-inline-block my-2 "
                                                                }, [_vm._v(_vm._s(_vm.errors.category[0]))]
                                                            ) :
                                                            _vm._e()
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("div", { staticClass: "form-group col-md-12 my-4" }, [
                                                            _c("input", {
                                                                staticClass: "btn btn-primary pull-right",
                                                                attrs: {
                                                                    type: "button",
                                                                    name: "submit",
                                                                    value: "Add a product"
                                                                },
                                                                on: {
                                                                    click: function($event) {
                                                                        return _vm.add()
                                                                    }
                                                                }
                                                            })
                                                        ])
                                                    ]
                                                )
                                            ])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                        _vm._v(" "),
                        _vm._m(2)
                    ])
                ])
            }
            var staticRenderFns = [
                function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c("div", { staticClass: "row " }, [
                        _c("div", { staticClass: "col-lg-12 p-0" }, [
                            _c(
                                "div", {
                                    staticClass: "header_iner d-flex justify-content-between align-items-center"
                                }, [
                                    _c("div", { staticClass: "sidebar_icon d-lg-none" }, [
                                        _c("i", { staticClass: "ti-menu" })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "serach_field-area" }, [
                                        _c("div", { staticClass: "box_right d-flex lms_block " }, [
                                            _c("div", { staticClass: "serach_field-area2" }, [
                                                _c("div", { staticClass: "search_inner" }, [
                                                    _c("form", { attrs: { Active: "#" } }, [
                                                        _c("div", { staticClass: "search_field" }, [
                                                            _c("input", {
                                                                attrs: { type: "text", placeholder: "Search here..." }
                                                            })
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("button", { attrs: { type: "submit" } }, [
                                                            _c("i", { staticClass: "ti-search" })
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                        "div", {
                                            staticClass: "header_right d-flex justify-content-between align-items-center"
                                        }, [
                                            _c(
                                                "div", {
                                                    staticClass: "header_notification_warp d-flex align-items-center"
                                                }, [
                                                    _c("li", [
                                                        _c("a", { attrs: { href: "#" } }, [
                                                            _c("img", {
                                                                attrs: { src: "assets/images/icon/bell.svg", alt: "" }
                                                            })
                                                        ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                        _c("a", { attrs: { href: "#" } }, [
                                                            _c("img", {
                                                                attrs: { src: "assets/images/icon/msg.svg", alt: "" }
                                                            })
                                                        ])
                                                    ])
                                                ]
                                            ),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "profile_info" }, [
                                                _c("img", {
                                                    attrs: { src: "assets/images/client_img.png", alt: "#" }
                                                }),
                                                _vm._v(" "),
                                                _c("div", { staticClass: "profile_info_iner" }, [
                                                    _c("p", [_vm._v("Neurologist ")]),
                                                    _vm._v(" "),
                                                    _c("h5", [_vm._v("Dr. Jassa")]),
                                                    _vm._v(" "),
                                                    _c("div", { staticClass: "profile_info_details" }, [
                                                        _c("a", { attrs: { href: "#" } }, [
                                                            _vm._v("My Profile "),
                                                            _c("i", { staticClass: "ti-user" })
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("a", { attrs: { href: "#" } }, [
                                                            _vm._v("Settings "),
                                                            _c("i", { staticClass: "ti-settings" })
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("a", { attrs: { href: "#" } }, [
                                                            _vm._v("Log Out "),
                                                            _c("i", { staticClass: "ti-shift-left" })
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ]
                                    )
                                ]
                            )
                        ])
                    ])
                },
                function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", { staticClass: "row", staticStyle: { "margin-bottom": "30px" } }, [
                            _c("div", { staticClass: "col-sm-12" }, [
                                _c("h2", { staticClass: "title text-center my-5 text-dark " }, [
                                    _vm._v("Add a new "),
                                    _c("span", { staticStyle: { color: "#75b239" } }, [
                                        _vm._v("product")
                                    ])
                                ])
                            ])
                        ]
                    )
                },
                function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", { staticClass: "footer_part", staticStyle: { "margin-bottom": "-30px" } }, [
                            _c("div", { staticClass: "container" }, [
                                _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-lg-12" }, [
                                        _c("div", { staticClass: "footer_iner text-center" }, [
                                            _c("p", [
                                                _vm._v(
                                                    "2023 © Influence - Designed by\r\n                                "
                                                ),
                                                _c("a", { attrs: { href: "#" } }, [
                                                    _c("i", { staticClass: "ti-heart" })
                                                ]),
                                                _c("a", { attrs: { href: "#" } }, [_vm._v(" Dashboard")])
                                            ])
                                        ])
                                    ])
                                ])
                            ])
                        ]
                    )
                }
            ]
            render._withStripped = true



            /***/
        })

    }
]);