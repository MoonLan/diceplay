webpackJsonp([3],{"3JSN":function(t,e,o){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{staticClass:"container-fluid",attrs:{name:"layout",mode:"out-in"}},[e("div",{staticClass:"dark"},[e("Toolbar"),e("nuxt")],1)])},staticRenderFns:[]};e.a=n},"3NMW":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Cr9+"),a=o("3JSN");var i=function(t){o("Bc02")},r=o("VU/8")(n.a,a.a,!1,i,null,null);e.default=r.exports},Bc02:function(t,e,o){var n=o("f/qT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("2684b943",n,!0,{sourceMap:!1})},"Cr9+":function(t,e,o){"use strict";var n=o("djO7");e.a={components:{Toolbar:n.a}}},G1b7:function(t,e,o){var n=o("jqFT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("14ad3114",n,!0,{sourceMap:!1})},JEuM:function(t,e,o){"use strict";var n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"toolbar container-fluid"},[o("div",{staticClass:"flex-column"},[o("span",{staticClass:"username_field"},[t._v(t._s(t.user_id))]),o("span",{staticClass:"money_bank"},[t._v(t._s(t.currency)+" "+t._s(t.display_val))]),o("span",{staticClass:"addcoin",on:{click:t.add_free_coin}},[t._v("free coin")])])])},staticRenderFns:[]};e.a=n},bzsE:function(t,e,o){"use strict";var n=o("Dd8w"),a=o.n(n),i=o("NYxO");e.a={name:"toolbar",mounted:function(){this.display_val=this.bankc},data:function(){return{currency:"BTC",description:"The next winner is you!",display_val:0}},computed:a()({},Object(i.mapState)(["user_id","win","lose"]),{cprofit:{get:function(){return this.$store.state.cprofit},set:function(t){}},bankc:{get:function(){return this.$store.state.bank_amount},set:function(t){}},colorp:{get:function(){var t=this.$store.state.win&&!this.$store.state.lose,e=!this.$store.state.win&&this.$store.state.lose;return t||e},set:function(t){}}}),watch:{bankc:function(t){this.display_val=t},cprofit:function(t){this.bankc,this.bankc}},methods:{add_free_coin:function(){this.$store.dispatch("add_coin")},animateValue:function(t,e,o,n,a){var i=e-t,r=i/1e-4,s=Math.max(Math.abs(Math.floor(o/r)),50),c=(new Date).getTime()+o,l=void 0;function d(){var t=(new Date).getTime(),r=Math.max((c-t)/o,0),s=e-r*i;n(s),s===e&&(clearInterval(l),void 0!=a&&a())}clearInterval(l),l=setInterval(d,s),d()}}}},djO7:function(t,e,o){"use strict";var n=o("bzsE"),a=o("JEuM");var i=function(t){o("G1b7")},r=o("VU/8")(n.a,a.a,!1,i,null,null);e.a=r.exports},"f/qT":function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before,html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},jqFT:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".toolbar{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);position:absolute;width:100%;background-color:rgba(212,255,217,.37)}.username_field{display:inline-block;padding-left:10px;padding-right:10px;font-size:1.2em;font-family:Impact;vertical-align:bottom}.money_bank{background-color:#3b8070;color:#ff0}.addcoin,.money_bank{display:inline-block;padding-left:10px;padding-right:10px;font-size:large}.addcoin{cursor:pointer;text-decoration:none;color:#f1df37;background-color:#b4a329}",""])}});