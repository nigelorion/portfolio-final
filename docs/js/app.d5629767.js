(function(t){function e(e){for(var i,r,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3601:function(t,e,a){},5692:function(t,e,a){"use strict";var i=a("3601"),n=a.n(i);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"title sections"},[a("button",{attrs:{type:"button",name:"button"},on:{click:function(e){return t.aboutToggle()}}},[t._v("about")]),a("button",{attrs:{type:"button",name:"button"},on:{click:function(e){return t.portfolioToggle()}}},[t._v("portfolio")]),a("h1",[t._v("nigel orion")]),a("p",[t._v("web developer")]),a("p",[t._v("pdx")])]),a("div",{staticClass:"center sections"},[a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[t.portfolioState?a("Portfolio",{on:{portfolioLink:function(e){return t.portfolioToggle()}}}):t._e(),t.aboutState?a("About"):t._e()],1)],1),t._m(0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact sections"},[a("a",{attrs:{target:"_blank",href:"https://github.com/nigelorion"}},[t._v("github")]),a("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/nigelorion/"}},[t._v("linkedin")]),a("a",{attrs:{target:"_blank",href:"Resume - Nigel Orion.pdf"}},[t._v("resume")])])}],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"projects"},[a("div",{staticClass:"projectWrapper wideWrapper"},[a("div",{staticClass:"show"},[a("a",{staticClass:"projectName",attrs:{target:"_blank",href:"http://hbailey.boutique"}},[t._v("H.Bailey")]),a("p",[t._v("VueJS")])]),a("div",[a("p",{staticClass:"aboutProject"},[t._v("A custom built project for a Seattle based mens resale clothing boutique. Utilizes VueJS transitions and animations. Custom built image sliders.")])]),a("div",{staticClass:"hidden"},[a("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://github.com/nigelorion/hbailey"}},[t._v("code")]),a("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"http://hbailey.boutique"}},[t._v("live")])])]),a("div",{staticClass:"projectWrapper"},[a("div",{staticClass:"show"},[a("a",{staticClass:"projectName",attrs:{target:"_blank",href:"https://current-aqi.herokuapp.com"}},[t._v("AQI App")]),a("p",[t._v("ReactJS")])]),a("div",[a("p",{staticClass:"aboutProject"},[t._v("A simple widget utilizing multiple APIs to display air quality and weather data.")])]),a("div",{staticClass:"hidden"},[a("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://github.com/nigelorion/air-quality-app"}},[t._v("code")]),a("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://current-aqi.herokuapp.com"}},[t._v("live")])])]),a("div",{staticClass:"projectWrapper"},[a("div",{staticClass:"show"},[a("a",{staticClass:"projectName",attrs:{target:"_blank",href:"https://nigelorion.github.io/star-wars-vue"}},[t._v("Star Wars API")]),a("p",[t._v("VueJS")])]),a("div",[a("p",{staticClass:"aboutProject"},[t._v("App that pulls data from the Star Wars API. Randomly or search for characters and display specific data points. Utilizes Vuex for state data management.")])]),a("div",{staticClass:"hidden"},[a("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://github.com/nigelorion/star-wars-vue"}},[t._v("code")]),a("a",{staticClass:"hiddenLinks",attrs:{target:"_blank",href:"https://nigelorion.github.io/star-wars-vue"}},[t._v("live")])])])])])}],c={name:"Center"},l=c,u=(a("5692"),a("2877")),p=Object(u["a"])(l,r,s,!1,null,"1c90e7ea",null),d=p.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"aboutBox"},[a("div",{staticClass:"colorBoxes"},[a("div",{staticClass:"colorLeft"},[a("img",{attrs:{src:"https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/41382349_957106404500012_6675097343760531456_o.jpg?_nc_cat=104&_nc_sid=174925&_nc_ohc=0Pz1FfUf72UAX_K5eql&_nc_ht=scontent-sea1-1.xx&oh=3a3374ca2db9cc08ee224c9632f7cda9&oe=5F018D69",alt:"Photo of Nigel and is dog, Hudson"}})]),a("div",{staticClass:"colorRight"},[a("ul",{staticClass:"list"},[a("li",[t._v("builder")]),a("li",[t._v("innovator")]),a("li",[t._v("creator")]),a("li",[t._v("teacher")])])])]),a("div",{staticClass:"aboutText"},[a("p",[t._v("A technical creative problem solver with a unique perspective to bring ideas and solutions with an empathetic approach. As a teacher and mentor, communicating effectively complex ideas as a simple solution is a passion, finding enjoyment in creating and improving processes, while educating at a high and low-level capacity. I love the ‘ah ha’ moments. If I can get someone non-technical to understand the technical, my work is done. I’m looking for a career that allows me to take my technical knowledge and apply it in a creative, consultative environment.")])])])])}],v={name:"About",data(){return{}},methods:{}},b=v,_=(a("a33c"),Object(u["a"])(b,h,f,!1,null,"178d4a62",null)),g=_.exports,m={name:"app",components:{Portfolio:d,About:g},data(){return{aboutState:!0,portfolioState:!1}},methods:{aboutToggle:function(){this.aboutState=!0,this.portfolioState=!1},portfolioToggle:function(){this.aboutState=!1,this.portfolioState=!0}}},C=m,y=(a("5c0b"),Object(u["a"])(C,n,o,!1,null,null,null)),k=y.exports;i["a"].config.productionTip=!1,new i["a"]({render:t=>t(k)}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),n=a.n(i);n.a},"9c0c":function(t,e,a){},a33c:function(t,e,a){"use strict";var i=a("eb37"),n=a.n(i);n.a},eb37:function(t,e,a){}});
//# sourceMappingURL=app.d5629767.js.map