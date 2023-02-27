(function(){var t={3308:function(t,a,o){"use strict";var e=o(9242),n=o(1020),c=o(3396);const s={class:"app__wrapper"},r={class:"main"};function i(t,a,o,e,n,i){const d=(0,c.up)("Dashboard"),u=(0,c.up)("Footer");return(0,c.wg)(),(0,c.iD)("div",s,[(0,c._)("main",r,[(0,c.Wm)(d)]),(0,c.Wm)(u)])}const d={class:"footer"},u=(0,c._)("div",{class:"attribution"},[(0,c.Uk)(" Challenge by "),(0,c._)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor"),(0,c.Uk)(". Coded by "),(0,c._)("a",{href:"https://github.com/settings/profile"},"EvgiSs"),(0,c.Uk)(". ")],-1),l=[u];function _(t,a){return(0,c.wg)(),(0,c.iD)("footer",d,l)}var h=o(89);const f={},v=(0,h.Z)(f,[["render",_]]);var p=v,g=o(4870),m=o(7139);const w=["id"],b={class:"total-card__content"},y={class:"total-card__address"},k={class:"total-card__network"},O=["src","alt"],j={class:"total-card__nickname"},C={class:"total-card__body"},D={class:"total-card__count"},x={class:"total-card__info"};var N={__name:"SocmediaTotalCard",props:{card:Object},setup(t){return(a,e)=>((0,c.wg)(),(0,c.iD)("div",{class:"total-card",id:t.card.networkName},[(0,c._)("div",{class:"total-card__decor",style:(0,m.j5)({background:`var(--${t.card.networkName})`})},null,4),(0,c._)("div",b,[(0,c._)("div",y,[(0,c._)("span",k,[(0,c._)("img",{src:o(990)(`./${t.card.icon}`),alt:t.card.networkName},null,8,O)]),(0,c._)("span",j,(0,m.zw)(t.card.nickname),1)]),(0,c._)("div",C,[(0,c._)("div",D,(0,m.zw)(t.card.total.count>=1e4?String(t.card.total.count).slice(0,2)+"k":t.card.total.count),1),(0,c._)("p",x,(0,m.zw)(t.card.total.info),1),(0,c._)("div",{class:(0,m.C_)(["total-card__changes",{up:"up"==t.card.total.status,down:"down"==t.card.total.status}])},[(0,c._)("span",null,(0,m.zw)(t.card.total.changes)+" Today",1)],2)])])],8,w))}};const T=(0,h.Z)(N,[["__scopeId","data-v-1b962780"]]);var F=T;const S={class:"today-card"},z={class:"today-card__content"},A={class:"today-card__head"},U={class:"today-card__title"},M={class:"today-card__icon"},E=["src","alt"],L={class:"today-card__body"},P={class:"today-card__count"};var Z={__name:"SocmediaTodayCard",props:{card:Object},setup(t){return(a,e)=>((0,c.wg)(),(0,c.iD)("div",S,[(0,c._)("div",z,[(0,c._)("div",A,[(0,c._)("p",U,(0,m.zw)(t.card.title),1),(0,c._)("div",M,[(0,c._)("img",{src:o(990)(`./${t.card.icon}`),alt:t.card.networkName},null,8,E)])]),(0,c._)("div",L,[(0,c._)("div",P,(0,m.zw)(t.card.count>=1e4?String(t.card.count).slice(0,2)+"k":t.card.count),1),(0,c._)("div",{class:(0,m.C_)(["today-card__changes",{up:"up"==t.card.status,down:"down"==t.card.status}])},[(0,c._)("span",null,(0,m.zw)(t.card.changes)+"%",1)],2)])])]))}};const H=(0,h.Z)(Z,[["__scopeId","data-v-befc643a"]]);var V=H,W=(o(7658),[{networkName:"facebook",icon:"icon-facebook.svg",nickname:"@nathanf",total:{count:1987,info:"Followers",status:"up",changes:12},today:[{title:"Page Views",count:87,status:"up",changes:3},{title:"Likes",count:52,status:"down",changes:2}]},{networkName:"twitter",icon:"icon-twitter.svg",nickname:"@nathanf",total:{count:1044,info:"Followers",status:"up",changes:99},today:[{title:"Retweets",count:117,status:"up",changes:303},{title:"Likes",count:507,status:"up",changes:553}]},{networkName:"instagram",icon:"icon-instagram.svg",nickname:"@realnathanf",total:{count:"11090",info:"Followers",status:"up",changes:"1099"},today:[{title:"Likes",count:5462,status:"up",changes:32257},{title:"Profile Views",count:52e3,status:"up",changes:1375}]},{networkName:"youtube",icon:"icon-youtube.svg",nickname:"Nathan F.",total:{count:"8239",info:"Subscribers",status:"down",changes:"144"},today:[{title:"Likes",count:107,status:"down",changes:19},{title:"Total Views",count:1407,status:"down",changes:12}]}]);const $=(0,n.Q_)("cards",(()=>{const t=(0,g.iH)(null);function a(){return t.value=W,t.value}function o(){let a=[];for(let o of t.value)o.today&&Array.isArray(o.today)&&o.today.forEach((t=>{a.push({icon:o.icon,networkName:o.networkName,title:t.title,count:t.count,status:t.status,changes:t.changes})}));return a}return{cards:t,getCards:a,getTodayCards:o}})),I={class:"dashboard"},K=(0,c._)("div",{class:"dashboard__header_left"},[(0,c._)("h1",{class:"dashboard__title"},"Social Media Dashboard"),(0,c._)("p",{class:"dashboard__info"},"Total Followers: 23,004")],-1),Y=(0,c._)("span",{class:"theme-switcher__text"},"Dark Mode",-1),q=(0,c._)("span",{class:"theme-switcher__slider"},null,-1),B={class:"dashboard__socmedia socmedia"},Q={class:"socmedia__total socmedia-total"},R={class:"socmedia-total__cards"},G={class:"socmedia__today socmedia-today"},J=(0,c._)("h2",{class:"socmedia-today__title"},"Overview - Today",-1),X={class:"socmedia-today__cards"};var tt={__name:"Dashboard",setup(t){const a=$(),o=a.getCards(),e=a.getTodayCards();(0,c.bv)((()=>{let t=window.matchMedia("(prefers-color-scheme: dark)").matches,a=document.querySelector(".theme-switcher__switch input");t?(document.body.setAttribute("dark",""),a.checked=!0):document.body.removeAttribute("dark")}));const n=t=>{t.target.checked?document.body.setAttribute("dark",""):document.body.removeAttribute("dark")};return(t,a)=>((0,c.wg)(),(0,c.iD)("div",I,[(0,c._)("div",{class:"dashboard__header"},[K,(0,c._)("div",{class:"dashboard__header_right"},[(0,c._)("div",{class:"dashboard__theme-switcher theme-switcher"},[Y,(0,c._)("label",{class:"theme-switcher__switch"},[(0,c._)("input",{type:"checkbox",onClick:n}),q])])])]),(0,c._)("div",B,[(0,c._)("div",Q,[(0,c._)("div",R,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,g.SU)(o),((t,a)=>((0,c.wg)(),(0,c.j4)(F,{key:a,card:t,class:"socmedia-total__card"},null,8,["card"])))),128))])]),(0,c._)("div",G,[J,(0,c._)("div",X,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,g.SU)(e),((t,a)=>((0,c.wg)(),(0,c.j4)(V,{key:a,card:t,class:"socmedia-today__card"},null,8,["card"])))),128))])])])]))}};const at=tt;var ot=at,et={name:"App",components:{Footer:p,Dashboard:ot}};const nt=(0,h.Z)(et,[["render",i]]);var ct=nt;const st=(0,e.ri)(ct),rt=(0,n.WB)();st.use(rt),st.mount("#app")},990:function(t,a,o){var e={"./icon-down.svg":2207,"./icon-facebook.svg":982,"./icon-instagram.svg":8688,"./icon-twitter.svg":3989,"./icon-up.svg":629,"./icon-youtube.svg":254};function n(t){var a=c(t);return o(a)}function c(t){if(!o.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}n.keys=function(){return Object.keys(e)},n.resolve=c,t.exports=n,n.id=990},2207:function(t,a,o){"use strict";t.exports=o.p+"img/icon-down.32961796.svg"},982:function(t,a,o){"use strict";t.exports=o.p+"img/icon-facebook.af234c29.svg"},8688:function(t,a,o){"use strict";t.exports=o.p+"img/icon-instagram.858ce94e.svg"},3989:function(t,a,o){"use strict";t.exports=o.p+"img/icon-twitter.1979e29b.svg"},629:function(t,a,o){"use strict";t.exports=o.p+"img/icon-up.13280fce.svg"},254:function(t,a,o){"use strict";t.exports=o.p+"img/icon-youtube.a9b5985f.svg"}},a={};function o(e){var n=a[e];if(void 0!==n)return n.exports;var c=a[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.m=t,function(){var t=[];o.O=function(a,e,n,c){if(!e){var s=1/0;for(u=0;u<t.length;u++){e=t[u][0],n=t[u][1],c=t[u][2];for(var r=!0,i=0;i<e.length;i++)(!1&c||s>=c)&&Object.keys(o.O).every((function(t){return o.O[t](e[i])}))?e.splice(i--,1):(r=!1,c<s&&(s=c));if(r){t.splice(u--,1);var d=n();void 0!==d&&(a=d)}}return a}c=c||0;for(var u=t.length;u>0&&t[u-1][2]>c;u--)t[u]=t[u-1];t[u]=[e,n,c]}}(),function(){o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,{a:a}),a}}(),function(){o.d=function(t,a){for(var e in a)o.o(a,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){o.p="/social-media-dashboard-with-theme-switcher/"}(),function(){var t={143:0};o.O.j=function(a){return 0===t[a]};var a=function(a,e){var n,c,s=e[0],r=e[1],i=e[2],d=0;if(s.some((function(a){return 0!==t[a]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(i)var u=i(o)}for(a&&a(e);d<s.length;d++)c=s[d],o.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return o.O(u)},e=self["webpackChunkproject"]=self["webpackChunkproject"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(3308)}));e=o.O(e)})();
//# sourceMappingURL=app.336348d6.js.map