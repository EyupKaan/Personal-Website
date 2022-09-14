exports.ids = [6,2];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/contact.vue?vue&type=template&id=6cfd009a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', {
    staticClass: "text-gray-900 border-b pb-16 bg-gray-300"
  }, [_vm._ssrNode("<div class=\"container max-w-screen-lg min-h-screen mx-auto my-auto md:items-start md:text-left items-center py-32 pb-12 flex flex-col px-5\"><h1 class=\"text-left text-3xl font-medium title-font text-gray-900\">\n            Contact Me\n        </h1> <span class=\"block mt-1 w-10 h-1 bg-green-700\"></span> <form action=\"https://formspree.io/f/moqbealr\" method=\"POST\" class=\"w-full\"><div class=\"flex flex-wrap -mx-4\"><div class=\"w-full md:w-1/2 px-4 mb-5\"><label for=\"fullName\" class=\"block mb-2\">\n                        Full Name\n                    </label> <input id=\"fullName\" name=\"fullName\" type=\"text\" required=\"required\" placeholder=\"Enter your full name\" class=\"block w-full bg-gray-200 border\"></div> <div class=\"w-full md:w-1/2 px-4 mb-5\"><label for=\"email\" class=\"block mb-2 text-copy-primary\">\n                        E-mail\n                    </label> <input id=\"email\" name=\"email\" type=\"email\" placeholder=\"Enter your e-mail\" required=\"required\" class=\"block w-full bg-gray-200 border\"></div> <div class=\"w-full px-4 mb-5\"><label for=\"message\" class=\"block mb-2\">\n                        Message\n                    </label> <textarea id=\"message\" name=\"message\" rows=\"6\" type=\"text\" placeholder=\"Enter your message...\" required=\"required\" class=\"block w-full bg-gray-200\"></textarea></div></div> <div class=\"flex justify-end w-full\"><button type=\"submit\" class=\"inline-flex shadow text-white bg-green-700 border-0\">\n\n                    Send\n                </button></div></form></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/contact.vue?vue&type=template&id=6cfd009a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/contact.vue?vue&type=script&lang=js&
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  data() {
    return {
      message: ''
    };
  }

});
// CONCATENATED MODULE: ./components/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/contact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b4a9535e"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=eb0c9dcc&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('Contact');
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=eb0c9dcc&

// EXTERNAL MODULE: ./components/contact.vue + 4 modules
var contact = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&

/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  components: {
    Contact: contact["default"]
  }
});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "77d8a03e"
  
)

/* harmony default export */ var pages_contact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Contact: __webpack_require__(38).default})


/***/ })

};;
//# sourceMappingURL=contact.js.map