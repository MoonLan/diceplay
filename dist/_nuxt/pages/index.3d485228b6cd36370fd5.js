webpackJsonp([0],{"+ptz":function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("logo-amc"),e("div",{staticStyle:{width:"700px",height:"auto",float:"right"}},[e("div",{staticStyle:{display:"inline-flex"}},[e("span",{staticStyle:{"margin-top":"30px","font-size":"0.89em","font-weight":"bold"}},[this._v("BTC:")]),e("flip-counter")],1)]),e("h2",{staticClass:"subtitle"},[this._v("\n            "+this._s(this.description)+"\n        ")]),e("div",{staticClass:"links"},[e("nuxt-link",{staticClass:"button--green",attrs:{to:"/play"}},[this._v("Free Play")]),e("nuxt-link",{staticClass:"button--grey",attrs:{to:"/play"}},[this._v("Login Play")])],1)],1)])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("GU2V"),s=i("+ptz"),n=!1;var o=function(t){n||i("iT0m")},r=i("VU/8")(a.a,s.a,!1,o,null,null);r.options.__file="pages/index.vue",e.default=r.exports},"0Syk":function(t,e,i){"use strict";e.a={name:"FlipCounter",methods:{load_fp:function(){}},mounted:function(){this.$nextTick(this.load_fp)}}},"0kYN":function(t,e,i){var a=i("yRq9");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("69dc9b94",a,!1,{sourceMap:!1})},Ayba:function(t,e,i){"use strict";var a=function(){var t=this.$createElement;this._self._c;return this._m(0)};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"circle_32x"},[e("span"),e("span")]),e("a",{staticClass:"mysite",attrs:{href:"http://tystrong.me"}},[this._v("Check out our telegram group.")])])}]};e.a=s},BUX7:function(t,e,i){"use strict";var a=i("ehs+"),s=i("Ayba"),n=!1;var o=function(t){n||i("DGbT")},r=i("VU/8")(a.a,s.a,!1,o,null,null);r.options.__file="components/LogoAmc.vue",e.a=r.exports},DGbT:function(t,e,i){var a=i("TGSJ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("370a770a",a,!1,{sourceMap:!1})},GU2V:function(t,e,i){"use strict";var a=i("BUX7"),s=i("qCxy"),n=i("HyoM");e.a={components:{LogoAmc:a.a,FlipCounter:s.a},data:function(){return{players:0,name:"That is that",description:"The next winner is you!"}},beforeMount:function(){var t=this;n.a.$on("viewcount",function(e){t.players=e}),n.a.$on("betstatus",function(t){})},created:function(){var t=this;t.$nextTick(function(){t.$store.dispatch("wsInit")})},mounted:function(){}}},TGSJ:function(t,e,i){(e=t.exports=i("FZ+f")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);",""]),e.push([t.i,".circle_32x{position:relative;width:700px;height:412px;margin:50px auto;-webkit-transition:all 1s;transition:all 1s}.circle_32x:hover{width:124px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.circle_32x:active{width:412px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.circle_32x span:nth-child(2){right:0;border:6px solid #4fc1e9}.circle_32x span{display:block;width:400px;height:400px;position:absolute;border:6px solid #fc6e51;border-radius:50%}.mysite{font-size:18px;text-decoration:none;color:rgba(0,0,0,.5);border-bottom:1px solid rgba(0,0,0,.5);position:fixed;bottom:10px;right:10px}",""])},"ehs+":function(t,e,i){"use strict";e.a={components:{},data:function(){return{name:"That is that",description:"The next winner is you!"}}}},iT0m:function(t,e,i){var a=i("jIXn");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("f3c20b1c",a,!1,{sourceMap:!1})},jIXn:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},qCxy:function(t,e,i){"use strict";var a=i("0Syk"),s=i("wsOR"),n=!1;var o=function(t){n||i("0kYN")},r=i("VU/8")(a.a,s.a,!1,o,null,null);r.options.__file="components/AutoFlipCounter.vue",e.a=r.exports},wsOR:function(t,e,i){"use strict";var a=function(){var t=this.$createElement;this._self._c;return this._m(0)};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"align-bottom"},[e("div",{staticClass:"flip-clock"},[e("div",{staticClass:"symbol",attrs:{"data-speed":"5"}},[e("div",{staticClass:"value"},[this._v("\n                0\n                "),e("div",{staticClass:"flip flip--next"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--last"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--current-front"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--current-back"},[e("div",{staticClass:"ticker"})])])]),e("div",{staticClass:"symbol",attrs:{"data-speed":"4"}},[e("div",{staticClass:"value"},[this._v("\n                0\n                "),e("div",{staticClass:"flip flip--next"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--last"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--current-front"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--current-back"},[e("div",{staticClass:"ticker"})])])]),e("div",{staticClass:"symbol",attrs:{"data-speed":"3"}},[e("div",{staticClass:"value"},[this._v("\n                0\n                "),e("div",{staticClass:"flip flip--next"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--last"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--current-front"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--current-back"},[e("div",{staticClass:"ticker"})])])]),e("div",{staticClass:"symbol",attrs:{"data-speed":"2"}},[e("div",{staticClass:"value"},[this._v("\n                0\n                "),e("div",{staticClass:"flip flip--next"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--last"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--current-front"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--current-back"},[e("div",{staticClass:"ticker"})])])]),this._v("\n        .\n        "),e("div",{staticClass:"symbol",attrs:{"data-speed":"1"}},[e("div",{staticClass:"value"},[this._v("\n                0\n                "),e("div",{staticClass:"flip flip--next"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--last"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--current-front"},[e("div",{staticClass:"ticker"})]),e("div",{staticClass:"flip flip--current-back"},[e("div",{staticClass:"ticker"})])])])])])}]};e.a=s},yRq9:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,'.flip-clock{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-weight:700;margin:0 auto;position:relative;font-size:50px;-webkit-transform:translateZ(0);transform:translateZ(0)}.flip-clock:after{content:"";display:block}.symbol{position:relative;display:block;padding:5px 10px}.value{color:transparent;-webkit-perspective:200px;perspective:200px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.ticker{position:relative;font-size:1em;height:1em;line-height:1em;text-align:center;overflow:hidden}.flip{-webkit-box-shadow:0 0 8px 0 rgba(53,222,255,.7);box-shadow:0 0 8px 0 rgba(53,222,255,.7);color:#fff;background-color:#145d90;text-shadow:0 0 6px #41c7ff;top:0;left:-5px;right:-5px;position:absolute;outline:1px solid #35deff}.symbol[data-speed="1"] .flip--next{z-index:1;height:.5em;overflow:hidden}.symbol[data-speed="1"] .flip--last{top:.5em;height:.5em;overflow:hidden}.symbol[data-speed="1"] .flip--last .ticker{top:-.5em}.symbol[data-speed="1"] .flip--current-back,.symbol[data-speed="1"] .flip--current-front{overflow:hidden;z-index:2;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;height:.5em}.symbol[data-speed="1"] .flip--current-front{-webkit-box-shadow:0 0 8px 0 rgba(53,222,255,.7);box-shadow:0 0 8px 0 rgba(53,222,255,.7);-webkit-animation:ease-in .3s flip-front infinite;animation:ease-in .3s flip-front infinite}.symbol[data-speed="1"] .flip--current-back{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-animation:ease-out .3s flip-back infinite;animation:ease-out .3s flip-back infinite;-webkit-animation-delay:.3s;animation-delay:.3s}.symbol[data-speed="1"] .flip--current-back .ticker{-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}.symbol[data-speed="1"] .flip .ticker:after{content:"0 \\A   1 \\A   2 \\A   3 \\A   4 \\A   5 \\A   6 \\A   7 \\A   8 \\A   9";position:absolute;top:0;left:0;display:block;-webkit-animation:frame 1.5s steps(10) infinite;animation:frame 1.5s steps(10) infinite;-webkit-animation-duration:3s;animation-duration:3s}.symbol[data-speed="1"] .flip--next .ticker:after{-webkit-animation-delay:-.15s;animation-delay:-.15s}.symbol[data-speed="1"] .flip--last .ticker:after{-webkit-animation-delay:.3s;animation-delay:.3s}.symbol[data-speed="1"] .flip--current-back .ticker:after,.symbol[data-speed="1"] .flip--current-front .ticker:after{-webkit-animation-delay:0;animation-delay:0}.symbol[data-speed="2"] .flip--next{z-index:1;height:.5em;overflow:hidden}.symbol[data-speed="2"] .flip--last{top:.5em;height:.5em;overflow:hidden}.symbol[data-speed="2"] .flip--last .ticker{top:-.5em}.symbol[data-speed="2"] .flip--current-back,.symbol[data-speed="2"] .flip--current-front{overflow:hidden;z-index:2;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;height:.5em}.symbol[data-speed="2"] .flip--current-front{-webkit-box-shadow:0 0 8px 0 rgba(53,222,255,.7);box-shadow:0 0 8px 0 rgba(53,222,255,.7);-webkit-animation:ease-in 1.5s flip-front infinite;animation:ease-in 1.5s flip-front infinite}.symbol[data-speed="2"] .flip--current-back{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-animation:ease-out 1.5s flip-back infinite;animation:ease-out 1.5s flip-back infinite;-webkit-animation-delay:1.5s;animation-delay:1.5s}.symbol[data-speed="2"] .flip--current-back .ticker{-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}.symbol[data-speed="2"] .flip .ticker:after{content:"0 \\A   1 \\A   2 \\A   3 \\A   4 \\A   5 \\A   6 \\A   7 \\A   8 \\A   9";position:absolute;top:0;left:0;display:block;-webkit-animation:frame 1.5s steps(10) infinite;animation:frame 1.5s steps(10) infinite;-webkit-animation-duration:15s;animation-duration:15s}.symbol[data-speed="2"] .flip--next .ticker:after{-webkit-animation-delay:-.75s;animation-delay:-.75s}.symbol[data-speed="2"] .flip--last .ticker:after{-webkit-animation-delay:1.5s;animation-delay:1.5s}.symbol[data-speed="2"] .flip--current-back .ticker:after,.symbol[data-speed="2"] .flip--current-front .ticker:after{-webkit-animation-delay:0;animation-delay:0}.symbol[data-speed="3"] .flip--next{z-index:1;height:.5em;overflow:hidden}.symbol[data-speed="3"] .flip--last{top:.5em;height:.5em;overflow:hidden}.symbol[data-speed="3"] .flip--last .ticker{top:-.5em}.symbol[data-speed="3"] .flip--current-back,.symbol[data-speed="3"] .flip--current-front{overflow:hidden;z-index:2;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;height:.5em}.symbol[data-speed="3"] .flip--current-front{-webkit-box-shadow:0 0 8px 0 rgba(53,222,255,.7);box-shadow:0 0 8px 0 rgba(53,222,255,.7);-webkit-animation:ease-in 3s flip-front infinite;animation:ease-in 3s flip-front infinite}.symbol[data-speed="3"] .flip--current-back{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-animation:ease-out 3s flip-back infinite;animation:ease-out 3s flip-back infinite;-webkit-animation-delay:3s;animation-delay:3s}.symbol[data-speed="3"] .flip--current-back .ticker{-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}.symbol[data-speed="3"] .flip .ticker:after{content:"0 \\A   1 \\A   2 \\A   3 \\A   4 \\A   5 \\A   6 \\A   7 \\A   8 \\A   9";position:absolute;top:0;left:0;display:block;-webkit-animation:frame 1.5s steps(10) infinite;animation:frame 1.5s steps(10) infinite;-webkit-animation-duration:30s;animation-duration:30s}.symbol[data-speed="3"] .flip--next .ticker:after{-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.symbol[data-speed="3"] .flip--last .ticker:after{-webkit-animation-delay:3s;animation-delay:3s}.symbol[data-speed="3"] .flip--current-back .ticker:after,.symbol[data-speed="3"] .flip--current-front .ticker:after{-webkit-animation-delay:0;animation-delay:0}.symbol[data-speed="4"] .flip--next{z-index:1;height:.5em;overflow:hidden}.symbol[data-speed="4"] .flip--last{top:.5em;height:.5em;overflow:hidden}.symbol[data-speed="4"] .flip--last .ticker{top:-.5em}.symbol[data-speed="4"] .flip--current-back,.symbol[data-speed="4"] .flip--current-front{overflow:hidden;z-index:2;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;height:.5em}.symbol[data-speed="4"] .flip--current-front{-webkit-box-shadow:0 0 8px 0 rgba(53,222,255,.7);box-shadow:0 0 8px 0 rgba(53,222,255,.7);-webkit-animation:ease-in 7.5s flip-front infinite;animation:ease-in 7.5s flip-front infinite}.symbol[data-speed="4"] .flip--current-back{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-animation:ease-out 7.5s flip-back infinite;animation:ease-out 7.5s flip-back infinite;-webkit-animation-delay:7.5s;animation-delay:7.5s}.symbol[data-speed="4"] .flip--current-back .ticker{-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}.symbol[data-speed="4"] .flip .ticker:after{content:"0 \\A   1 \\A   2 \\A   3 \\A   4 \\A   5 \\A   6 \\A   7 \\A   8 \\A   9";position:absolute;top:0;left:0;display:block;-webkit-animation:frame 1.5s steps(10) infinite;animation:frame 1.5s steps(10) infinite;-webkit-animation-duration:75s;animation-duration:75s}.symbol[data-speed="4"] .flip--next .ticker:after{-webkit-animation-delay:-3.75s;animation-delay:-3.75s}.symbol[data-speed="4"] .flip--last .ticker:after{-webkit-animation-delay:7.5s;animation-delay:7.5s}.symbol[data-speed="4"] .flip--current-back .ticker:after,.symbol[data-speed="4"] .flip--current-front .ticker:after{-webkit-animation-delay:0;animation-delay:0}.symbol[data-speed="5"] .flip--next{z-index:1;height:.5em;overflow:hidden}.symbol[data-speed="5"] .flip--last{top:.5em;height:.5em;overflow:hidden}.symbol[data-speed="5"] .flip--last .ticker{top:-.5em}.symbol[data-speed="5"] .flip--current-back,.symbol[data-speed="5"] .flip--current-front{overflow:hidden;z-index:2;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;height:.5em}.symbol[data-speed="5"] .flip--current-front{-webkit-box-shadow:0 0 8px 0 rgba(53,222,255,.7);box-shadow:0 0 8px 0 rgba(53,222,255,.7);-webkit-animation:ease-in 8.25s flip-front infinite;animation:ease-in 8.25s flip-front infinite}.symbol[data-speed="5"] .flip--current-back{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-animation:ease-out 8.25s flip-back infinite;animation:ease-out 8.25s flip-back infinite;-webkit-animation-delay:8.25s;animation-delay:8.25s}.symbol[data-speed="5"] .flip--current-back .ticker{-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}.symbol[data-speed="5"] .flip .ticker:after{content:"0 \\A   1 \\A   2 \\A   3 \\A   4 \\A   5 \\A   6 \\A   7 \\A   8 \\A   9";position:absolute;top:0;left:0;display:block;-webkit-animation:frame 1.5s steps(10) infinite;animation:frame 1.5s steps(10) infinite;-webkit-animation-duration:82.5s;animation-duration:82.5s}.symbol[data-speed="5"] .flip--next .ticker:after{-webkit-animation-delay:-4125ms;animation-delay:-4125ms}.symbol[data-speed="5"] .flip--last .ticker:after{-webkit-animation-delay:8.25s;animation-delay:8.25s}.symbol[data-speed="5"] .flip--current-back .ticker:after,.symbol[data-speed="5"] .flip--current-front .ticker:after{-webkit-animation-delay:0;animation-delay:0}@-webkit-keyframes frame{to{-webkit-transform:translateY(-10em);transform:translateY(-10em)}}@keyframes frame{to{-webkit-transform:translateY(-10em);transform:translateY(-10em)}}@-webkit-keyframes flip-front{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}40%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}to{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}}@keyframes flip-front{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}40%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}to{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}}@-webkit-keyframes flip-back{0%{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}60%{-webkit-transform:rotateX(-190deg);transform:rotateX(-190deg)}to{-webkit-transform:rotateX(-190deg);transform:rotateX(-190deg)}}@keyframes flip-back{0%{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}60%{-webkit-transform:rotateX(-190deg);transform:rotateX(-190deg)}to{-webkit-transform:rotateX(-190deg);transform:rotateX(-190deg)}}',""])}});