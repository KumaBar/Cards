(function(e){function t(t){for(var r,s,a=t[0],c=t[1],u=t[2],l=0,d=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cards/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Grid")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid"},[e._l(e.itemsRan,(function(t){return n("Item",{key:t.id,attrs:{item:t,openCard:e.openCard}})})),n("div",{class:{start:e.startGame}},[n("div",{staticClass:"start-btn",on:{click:e.start}},[e._v("START")])])],2)},a=[],c=(n("7db0"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{card:!0,completed:e.item.completed}},[n("div",{class:{front:!0,active:e.item.open,completed:e.item.completed},on:{click:function(t){return e.openCard(e.item.id)}}}),n("div",{class:{back:!0,active:e.item.open,completed:e.item.completed},on:{click:function(t){return e.openCard(e.item.id)}}},[e._v(" "+e._s(e.item.value)+" ")])])}),u=[],p={name:"Item",props:{item:Object,openCard:Function}},l=p,d=(n("9894"),n("2877")),f=Object(d["a"])(l,c,u,!1,null,null,null),m=f.exports,h={name:"Grid",data:function(){return{startGame:!0,currentOpenCards:[],maxOpenCards:2,items:[{id:1,value:1,open:!1,completed:!1},{id:2,value:2,open:!1,completed:!1},{id:3,value:3,open:!1,completed:!1},{id:4,value:4,open:!1,completed:!1},{id:5,value:5,open:!1,completed:!1},{id:6,value:6,open:!1,completed:!1},{id:7,value:1,open:!1,completed:!1},{id:8,value:2,open:!1,completed:!1},{id:9,value:3,open:!1,completed:!1},{id:10,value:4,open:!1,completed:!1},{id:11,value:5,open:!1,completed:!1},{id:12,value:6,open:!1,completed:!1}],itemsRan:[]}},methods:{openCard:function(e){var t=this;void 0===this.items.find((function(t){if(t.id===e&&(!0===t.open||!0===t.completed))return!0}))&&(this.currentOpenCards.length<this.maxOpenCards?this.currentOpenCards.push(this.items.find((function(t){if(t.id===e)return t.open=!t.open,!0}))):(this.currentOpenCards[0].open=!this.currentOpenCards[0].open,this.currentOpenCards[0]=this.items.find((function(t){if(t.id===e)return t.open=!t.open,!0})),this.currentOpenCards.reverse()),2===this.currentOpenCards.length&&this.items.find((function(e){e.value===t.currentOpenCards[0].value&&e.value===t.currentOpenCards[1].value&&(e.completed=!0)})))},shuffle:function(){for(var e=this.items.length-1;e>=0;e--){var t=Math.floor(Math.random()*(e+1)),n=[this.items[t],this.items[e]];this.items[e]=n[0],this.items[t]=n[1],this.itemsRan.push(this.items[e])}},start:function(){this.startGame=!1,this.items.forEach((function(e){e.completed=!1,e.open=!1})),this.itemsRan=[],this.currentOpenCards=[];for(var e=this.items.length-1;e>=0;e--){var t=Math.floor(Math.random()*(e+1)),n=[this.items[t],this.items[e]];this.items[e]=n[0],this.items[t]=n[1],this.itemsRan.push(this.items[e])}}},watch:{currentOpenCards:function(){void 0===this.items.find((function(e){if(!1===e.completed)return!0}))&&(this.startGame=!0)}},mounted:function(){this.shuffle()},components:{Item:m}},v=h,b=(n("9f4b"),Object(d["a"])(v,s,a,!1,null,null,null)),O=b.exports,C={name:"App",components:{Grid:O}},y=C,g=Object(d["a"])(y,i,o,!1,null,null,null),_=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#app")},9894:function(e,t,n){"use strict";n("d434")},"9f4b":function(e,t,n){"use strict";n("c48a")},c48a:function(e,t,n){},d434:function(e,t,n){}});
//# sourceMappingURL=app.fe13320d.js.map