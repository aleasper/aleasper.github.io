(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"59eb5b69","chunk-404e63c5":"830bd8a2","chunk-6c26a988":"10f20d1d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-404e63c5":1,"chunk-6c26a988":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-404e63c5":"cc0fd042","chunk-6c26a988":"045e20cf"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2d69":function(e,t,n){},"475e":function(e,t,n){"use strict";var r=n("8f33"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",{attrs:{transition:"slide-x-transition"}},[n("NavigationBar"),n("router-view")],1)],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-toolbar",{attrs:{color:"#ebac0c",fixed:""}},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-app-bar-nav-icon",e._g({},r))]}}])},[n("v-list",e._l(e.items,(function(t,r){return n("v-list-item",{key:r,on:{click:function(n){return e.openTitle(t.title)}}},[n("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1),n("v-toolbar-title",[e._v("Adgame")]),n("v-spacer"),""==this.$store.state.token?n("v-btn",{attrs:{text:""},on:{click:e.openLogin}},[e._v("Войти")]):e._e(),""!=this.$store.state.token?n("v-btn",{attrs:{text:""},on:{click:e.logout}},[e._v("Выйти")]):e._e(),n("v-btn",{attrs:{color:"#ebac0c"},on:{click:e.openRegister}},[e._v("Регистрация")])],1),e.registration?n("RegModal",{on:{openLogin:e.openLogin,closeRegister:e.closeRegister}}):e._e(),e.login?n("LogModal",{on:{closeLogin:e.closeLogin,loginAccept:e.loginAccept}}):e._e()],1)},i=[],c=n("62f8"),l=n("a33d"),u={name:"NavigationBar",components:{RegModal:c["a"],LogModal:l["a"]},data:function(){return{items:[{title:"О проекте"},{title:"К игре"}],registration:!1,login:!1,token:""}},methods:{logout:function(){this.$store.commit("setToken","")},openTitle:function(e){"О проекте"==e?this.$router.push({name:"about"}):"К игре"==e&&this.$router.push({name:"game-start"})},openLogin:function(){this.registration=!1,this.login=!0},openRegister:function(){this.login=!1,this.registration=!0},closeRegister:function(){this.registration=!1,this.login=!1},closeLogin:function(){this.registration=!1,this.login=!1},loginAccept:function(e){this.registration=!1,this.login=!1,this.token=e,this.$store.commit("setToken",this.token)}}},d=u,p=n("2877"),f=n("6544"),m=n.n(f),h=n("5bc1"),g=n("8336"),v=n("a523"),b=n("8860"),k=n("da13"),w=n("5d23"),y=n("e449"),_=n("2fa4"),x=n("71d9"),C=n("2a7f"),V=Object(p["a"])(d,s,i,!1,null,"13f0cb77",null),L=V.exports;m()(V,{VAppBarNavIcon:h["a"],VBtn:g["a"],VContainer:v["a"],VList:b["a"],VListItem:k["a"],VListItemTitle:w["a"],VMenu:y["a"],VSpacer:_["a"],VToolbar:x["a"],VToolbarTitle:C["a"]});var O={name:"App",data:function(){return{token:""}},components:{NavigationBar:L},methods:{},computed:{getToken:function(){return this.$store.state.token}}},j=O,T=n("7496"),S=n("a75b"),$=Object(p["a"])(j,o,a,!1,null,null,null),A=$.exports;m()($,{VApp:T["a"],VContent:S["a"]});n("d3b7");var R=n("8c4f"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Greeting",{attrs:{actualVersion:e.actualVersion}})],1)},E=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{"max-width":"70vw"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card",{staticClass:"headline",attrs:{outlined:""}},[e._v("Adgame actual version: "+e._s(e.actualVersion))]),n("v-spacer"),n("v-card-title",{attrs:{outlined:"",margin:"10px"}},[n("v-col",[n("v-row",[n("h3",[e._v("Adgame - игра про рекламу")])]),n("v-row",[e._v(" На данный момент зарегистрированные пользователи не хранятся в базе данных"),n("br"),e._v(' Выбирайте опцию "Продолжить без входа" ')])],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{block:""},on:{click:e.startGame}},[e._v(" Окей, погнали ")])],1)],1)],1)],1)],1)},N=[],B={name:"Greeting",props:{actualVersion:String},data:function(){return{dialog:!0}},methods:{startGame:function(){this.dialog=!1,this.$router.push({name:"game-start"})}}},U=B,q=n("b0af"),I=n("99d9"),G=n("62ad"),J=n("169a"),D=n("a722"),F=n("0fd9"),H=Object(p["a"])(U,M,N,!1,null,null,null),X=H.exports;m()(H,{VBtn:g["a"],VCard:q["a"],VCardActions:I["a"],VCardTitle:I["b"],VCol:G["a"],VContainer:v["a"],VDialog:J["a"],VLayout:D["a"],VRow:F["a"],VSpacer:_["a"]});var K={name:"home",components:{Greeting:X},data:function(){return{actualVersion:"Alpha 0.1"}}},z=K,Q=Object(p["a"])(z,P,E,!1,null,null,null),W=Q.exports;r["a"].use(R["a"]);var Y=[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/game-start/",name:"game-start",component:function(){return n.e("chunk-404e63c5").then(n.bind(null,"ea8c"))}},{path:"/level/:level/",name:"level",component:function(){return n.e("chunk-6c26a988").then(n.bind(null,"73e0"))}}],Z=new R["a"]({mode:"history",base:"/",routes:Y}),ee=Z,te=n("2f62");r["a"].use(te["a"]);var ne=new te["a"].Store({state:{token:""},mutations:{setToken:function(e,t){e.token=t}},actions:{},modules:{}}),re=n("f309");r["a"].use(re["a"]);var oe=new re["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ee,store:ne,vuetify:oe,render:function(e){return e(A)}}).$mount("#app")},"62f8":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal"},[n("header",{staticClass:"modal-header"},[e._v(" Регистрация "),n("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:e.closeReg}},[e._v("X")])]),n("section",{staticClass:"modal-body"},[e._t("body",[n("v-text-field",{attrs:{label:"Username",placeholder:"Username",outlined:"",rules:[e.rules.required]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{label:"Password",placeholder:"Password",outlined:"",rules:[e.rules.required]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("h4",{staticClass:"error-msg"},[e._v(e._s(e.msg))])])],2),n("footer",{staticClass:"modal-footer"},[n("button",{staticClass:"btn-func",attrs:{type:"button"},on:{click:e.registerUser}},[e._v(" Зарегистрировать ")])])])])},o=[],a=(n("d3b7"),n("96cf"),n("1da1")),s={name:"RegModal",data:function(){return{password:"",username:"",email:"ex@ex.com",token:"",rules:{required:function(e){return!!e||"Заполните поле"},min:function(e){return e.length>=8||"Минимум 8 символов"}},msg:""}},methods:{closeReg:function(){this.$emit("closeRegister")},openLogin:function(){this.$emit("openLogin")},registerUser:function(){this.msg="",""!=this.username&&""!=this.password?this.register():this.msg="Заполните поля"},register:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.registrationSucces=!1,t={username:this.username,password:this.password,email:"ex@ex.com"},n="https://morning-thicket-20719.herokuapp.com",e.next=5,fetch(n+"/api/users/",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify(t)});case 5:r=e.sent,r.ok?this.openLogin():this.msg="Похоже, на сервере ошибка - обратитесь к разработчику";case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},i=s,c=(n("475e"),n("2877")),l=n("6544"),u=n.n(l),d=n("8654"),p=Object(c["a"])(i,r,o,!1,null,null,null);t["a"]=p.exports;u()(p,{VTextField:d["a"]})},8382:function(e,t,n){"use strict";var r=n("2d69"),o=n.n(r);o.a},"8f33":function(e,t,n){},a33d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal"},[n("header",{staticClass:"modal-header"},[e._v(" Вход в учетную запись "),n("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:e.closeLog}},[e._v("X")])]),n("section",{staticClass:"modal-body"},[e._t("body",[n("v-text-field",{attrs:{label:"Username",placeholder:"Username",outlined:"",rules:[e.rules.required]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{label:"Password",placeholder:"Password",outlined:"",rules:[e.rules.required]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("h4",{staticClass:"error-msg"},[e._v(e._s(e.msg))])])],2),n("footer",{staticClass:"modal-footer"},[n("button",{staticClass:"btn-func",attrs:{type:"button"},on:{click:e.loginUser}},[e._v(" Войти ")])])])])},o=[],a=(n("d3b7"),n("96cf"),n("1da1")),s={name:"LogModal",data:function(){return{password:"",username:"",email:"ex@ex.com",token:"",rules:{required:function(e){return!!e||"Заполните поле"},min:function(e){return e.length>=8||"Минимум 8 символов"}},msg:""}},methods:{closeLog:function(){this.$emit("closeLogin")},loginUser:function(){this.msg="",""!=this.username&&""!=this.password?this.loginIn():this.msg="Заполните поля"},loginIn:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={username:this.username,password:this.password},n="https://morning-thicket-20719.herokuapp.com",e.next=4,fetch(n+"/api/login/",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify(t)});case 4:if(r=e.sent,!r.ok){e.next=16;break}return e.next=8,r.json();case 8:o=e.sent,this.token=o.token,this.$emit("loginAccept",this.token),this.notRegLog=!1,this.login=!1,this.registration=!1,e.next=17;break;case 16:this.msg="Неверный username или password";case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},i=s,c=(n("8382"),n("2877")),l=n("6544"),u=n.n(l),d=n("8654"),p=Object(c["a"])(i,r,o,!1,null,null,null);t["a"]=p.exports;u()(p,{VTextField:d["a"]})}});
//# sourceMappingURL=app.5a7321d7.js.map