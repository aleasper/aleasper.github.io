(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],s=0,d=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f376559e","chunk-bc52b4c0":"4808c98a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-bc52b4c0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-bc52b4c0":"2da893d1"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",{attrs:{transition:"slide-x-transition"}},[n("router-view")],1)],1)},o=[],u={name:"App"},i=u,c=n("2877"),l=n("6544"),s=n.n(l),d=n("7496"),p=n("a75b"),f=Object(c["a"])(i,a,o,!1,null,null,null),h=f.exports;s()(f,{VApp:d["a"],VContent:p["a"]});n("d3b7");var m=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Greeting",{attrs:{actualVersion:e.actualVersion}})],1)},b=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{"max-width":"70vw"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card",{staticClass:"headline",attrs:{outlined:""}},[e._v("Adgame actual version: "+e._s(e.actualVersion))]),n("v-spacer"),n("v-card-title",{attrs:{outlined:"",margin:"10px"}},[n("h3",[e._v("Adgame - игра про рекламу")])]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{block:""},on:{click:e.startGame}},[e._v(" Окей, погнали ")])],1)],1)],1)],1)],1)},y=[],w={name:"Greeting",props:{actualVersion:String},data:function(){return{dialog:!0}},methods:{startGame:function(){this.dialog=!1,this.$router.push({name:"game-start"})}}},_=w,j=n("8336"),k=n("b0af"),O=n("99d9"),V=n("a523"),x=n("169a"),C=n("a722"),A=n("2fa4"),E=Object(c["a"])(_,g,y,!1,null,null,null),S=E.exports;s()(E,{VBtn:j["a"],VCard:k["a"],VCardActions:O["a"],VCardTitle:O["b"],VContainer:V["a"],VDialog:x["a"],VLayout:C["a"],VSpacer:A["a"]});var P={name:"home",components:{Greeting:S},data:function(){return{actualVersion:"Alpha 0.1"}}},T=P,L=Object(c["a"])(T,v,b,!1,null,null,null),G=L.exports;r["a"].use(m["a"]);var N=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/game-start/",name:"game-start",component:function(){return n.e("chunk-bc52b4c0").then(n.bind(null,"ea8c"))}}],$=new m["a"]({mode:"history",base:"/",routes:N}),B=$,M=n("2f62");r["a"].use(M["a"]);var D=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=n("f309");r["a"].use(q["a"]);var J=new q["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:B,store:D,vuetify:J,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.7c83430e.js.map