(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"4e7f":function(t,e,a){"use strict";a("c92d")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"title sections"},[e("button",{attrs:{type:"button",name:"button"},on:{click:function(e){return t.aboutToggle()}}},[t._v("about")]),e("button",{attrs:{type:"button",name:"button"},on:{click:function(e){return t.portfolioToggle()}}},[t._v("portfolio")]),e("h1",[t._v("nigel orion")]),e("p",[t._v("engineer")]),e("p",[t._v("st petersburg, fl")])]),e("div",{staticClass:"center sections"},[e("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[t.portfolioState?e("Portfolio",{on:{portfolioLink:function(e){return t.portfolioToggle()}}}):t._e(),t.aboutState?e("About"):t._e()],1)],1),t._m(0)])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact sections"},[e("a",{attrs:{target:"_blank",href:"https://github.com/nigelorion"}},[t._v("github")]),e("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/nigelorion/"}},[t._v("linkedin")]),e("a",{attrs:{target:"_blank",href:"https://docs.google.com/document/d/e/2PACX-1vQuuuf72PWus1M4b8yJmThf7NNjK9cuXr2ECNiJUkxB4CWzNpF5cO2n1e20_JDvN-p9JJiEGyKlPeEC/pub"}},[t._v("resume")])])}],s=function(){var t=this;t._self._c;return t._m(0)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",{staticClass:"projects"},[e("div",{staticClass:"projectWrapper wideWrapper"},[e("div",{staticClass:"show"},[e("a",{staticClass:"projectName",attrs:{target:"_blank",href:"http://hbailey.boutique"}},[t._v("H.Bailey")]),e("p",[t._v("VueJS")])]),e("div",[e("p",{staticClass:"aboutProject"},[t._v("A custom built project for a Seattle based mens resale clothing boutique. Utilizes VueJS transitions and animations. Custom built image sliders.")])]),e("div",{staticClass:"hidden"},[e("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://github.com/nigelorion/hbailey"}},[t._v("code")]),e("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://nigelorion.github.io/hbailey/"}},[t._v("live")])])]),e("div",{staticClass:"projectWrapper"},[e("div",{staticClass:"show"},[e("a",{staticClass:"projectName",attrs:{target:"_blank",href:"https://current-aqi.herokuapp.com"}},[t._v("AQI App")]),e("p",[t._v("ReactJS")])]),e("div",[e("p",{staticStyle:{color:"red","font-style":"italic","font-size":".8em"}},[t._v("Currently down due to API issues")]),e("p",{staticClass:"aboutProject"},[t._v("A simple widget utilizing multiple APIs to display air quality and weather data.")])]),e("div",{staticClass:"hidden"},[e("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://github.com/nigelorion/air-quality-app"}},[t._v("code")]),e("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://current-aqi.herokuapp.com"}},[t._v("live")])])]),e("div",{staticClass:"projectWrapper"},[e("div",{staticClass:"show"},[e("a",{staticClass:"projectName",attrs:{target:"_blank",href:"https://nigelorion.github.io/star-wars-vue"}},[t._v("Star Wars API")]),e("p",[t._v("VueJS")])]),e("div",[e("p",{staticClass:"aboutProject"},[t._v("App that pulls data from the Star Wars API. Randomly or search for characters and display specific data points. Utilizes Vuex for state data management.")])]),e("div",{staticClass:"hidden"},[e("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://github.com/nigelorion/star-wars-vue"}},[t._v("code")]),e("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://nigelorion.github.io/star-wars-vue"}},[t._v("live")])])])])])}],l={name:"Center"},c=l,u=(a("6e03"),a("2877")),p=Object(u["a"])(c,s,r,!1,null,"9a18be10",null),d=p.exports,h=function(){var t=this;t._self._c;return t._m(0)},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",{staticClass:"aboutBox"},[e("div",{staticClass:"colorBoxes"},[e("div",{staticClass:"colorLeft"},[e("img",{attrs:{src:"/nigelhudson.jpeg"}})]),e("div",{staticClass:"colorRight"},[e("ul",{staticClass:"list"},[e("li",[t._v("builder")]),e("li",[t._v("innovator")]),e("li",[t._v("creator")]),e("li",[t._v("teacher")])])])]),e("div",{staticClass:"aboutText"},[e("p",[t._v("A technical creative problem solver with a unique perspective to bring ideas and solutions with an empathetic approach. As a teacher and mentor, communicating effectively complex ideas as a simple solution is a passion, finding enjoyment in creating and improving processes, while educating at a high and low-level capacity. I love the ‘ah ha’ moments. If I can get someone non-technical to understand the technical, my work is done. I’m looking for a career that allows me to take my technical knowledge and apply it in a creative, consultative environment.")])])])])}],v={name:"About",data(){return{}},methods:{}},b=v,g=(a("bc86"),Object(u["a"])(b,h,f,!1,null,"fe850420",null)),m=g.exports,_={name:"app",components:{Portfolio:d,About:m},data(){return{aboutState:!0,portfolioState:!1}},methods:{aboutToggle:function(){this.aboutState=!0,this.portfolioState=!1},portfolioToggle:function(){this.aboutState=!1,this.portfolioState=!0}}},C=_,y=(a("4e7f"),Object(u["a"])(C,n,o,!1,null,null,null)),k=y.exports;i["a"].config.productionTip=!1,new i["a"]({render:t=>t(k)}).$mount("#app")},"6e03":function(t,e,a){"use strict";a("6f13")},"6f13":function(t,e,a){},ba3e:function(t,e,a){},bc86:function(t,e,a){"use strict";a("ba3e")},c92d:function(t,e,a){}});
//# sourceMappingURL=app.30a263ed.js.map