(function(t){function e(e){for(var n,o,i=e[0],s=e[1],l=e[2],p=0,f=[];p<i.length;p++)o=i[p],a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={1:0},c=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;c.push([0,0]),r()})({0:function(t,e,r){t.exports=r("Vtdi")},Vtdi:function(t,e,r){"use strict";r.r(e);r("VRzm");var n=r("Kw5r"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h3",[t._v(t._s(t.title))]),r("div",{staticClass:"col-md-12"},t._l(t.initial_ids,function(t){return r("Character",{attrs:{id:t}})}))])},c=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-4",on:{click:t.switchCharacter}},[r("div",{staticClass:"character-card"},[r("div",{staticClass:"card-block"},[r("h4",{staticClass:"card-title"},[t._v(t._s(t.character.name))]),r("p",{staticClass:"card-text"},[t._v("Height: "+t._s(t.character.height)+"cm")]),r("p",{staticClass:"card-text"},[t._v("Mass: "+t._s(t.character.mass)+"kg")]),r("p",{staticClass:"card-text"},[t._v("Hair Color: "+t._s(t.character.hair_color))]),r("p",{staticClass:"card-text"},[t._v("Eye Color: "+t._s(t.character.eye_color))])])])])},i=[],s={props:["id"],data:function(){return{character:{}}},methods:{fetchCharacter:function(t){var e=this;fetch("https://swapi.co/api/people/".concat(t),{method:"GET"}).then(function(t){return t.json()}).then(function(t){return e.character=t}).catch(function(t){console.log("Request failed",t)})},switchCharacter:function(){var t=Math.floor(83*Math.random())+1;this.fetchCharacter(t)}},created:function(){this.fetchCharacter(this.id)}},l=s,u=r("KHd+"),p=Object(u["a"])(l,o,i,!1,null,null,null),f=p.exports,h={name:"app",data:function(){return{title:"Click on card to generate random person",initial_ids:[1,13,14,15,33,5]}},methods:{},components:{Character:f}},d=h,v=Object(u["a"])(d,a,c,!1,null,null,null),_=v.exports;n["a"].config.productionTip=!1,new n["a"]({el:"#app",render:function(t){return t(_)}}).$mount("#app")}});
//# sourceMappingURL=app.a46359b6.js.map