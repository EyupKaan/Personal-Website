(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{275:function(t,e,l){"use strict";l.r(e);var r=l(276),n=l.n(r),o={data:function(){return{message:""}},methods:{sendForm:function(t){var e=this,data=new FormData(t.target);n.a.post("https://formspree.io/f/moqbealr",data).then((function(l){e.message="Thank you for getting touch!",t.target.reset()})).then((function(t){console.log(t)}))}}},m=l(23),component=Object(m.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"text-gray-900 border-b pb-11 bg-gray-300"},[e("div",{staticClass:"container max-w-screen-lg min-h-fit mx-auto my-auto md:items-start md:text-left items-center py-32 pb-12 flex flex-col px-5"},[e("h1",{staticClass:"text-left text-3xl font-medium title-font text-gray-900"},[t._v("\n            Contact Me\n        ")]),t._v(" "),e("span",{staticClass:"block mt-1 w-10 h-1 bg-green-700"}),t._v(" "),e("div",{staticClass:"border outline outline-offset-2 outline-green-700 rounded-xl bg-green-500 my-2 px-2 py-4"},[e("form",{staticClass:"w-full",on:{submit:function(e){return e.preventDefault(),t.sendForm.apply(null,arguments)}}},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),e("h3",{staticClass:"text-gray-100 mt-8 font-semibold mb-6"},[t._v(t._s(t.message))])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap -mx-4"},[e("div",{staticClass:"w-full md:w-1/2 px-4 mb-5"},[e("label",{staticClass:"block mb-2",attrs:{for:"fullName"}},[t._v("\n                            Full Name\n                        ")]),t._v(" "),e("input",{staticClass:"block w-full bg-gray-200 border",attrs:{id:"fullName",name:"fullName",type:"text",required:"required",placeholder:"Enter your full name"}})]),t._v(" "),e("div",{staticClass:"w-full md:w-1/2 px-4 mb-5"},[e("label",{staticClass:"block mb-2 text-copy-primary",attrs:{for:"email"}},[t._v("\n                            E-mail\n                        ")]),t._v(" "),e("input",{staticClass:"block w-full bg-gray-200 border",attrs:{id:"email",name:"email",type:"email",placeholder:"Enter your e-mail",required:"required"}})]),t._v(" "),e("div",{staticClass:"w-full px-4 mb-5"},[e("label",{staticClass:"block mb-2",attrs:{for:"message"}},[t._v("\n                            Message\n                        ")]),t._v(" "),e("textarea",{staticClass:"block w-full bg-gray-200",attrs:{id:"message",name:"message",rows:"6",type:"text",placeholder:"Enter your message...",required:"required"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"flex justify-end w-full"},[t("button",{staticClass:"inline-flex shadow text-white bg-green-700 border-0",attrs:{type:"submit"}},[this._v("\n\n                        Send\n                    ")])])}],!1,null,null,null);e.default=component.exports}}]);