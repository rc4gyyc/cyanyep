(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{362:function(e,t,n){"use strict";n(43),n(20);var a,i,o,r,l,s,c,d=!1,u=[];"undefined"!=typeof document&&(r=function(e){return d||"interactive"===document.readyState||"complete"===document.readyState?e.call(document):u.push((function(){return e.call(this)})),this},s=function(){for(var e=0,t=u.length;e<t;e++)u[e].apply(document);u=[]},c=function(){d||(d=!0,s.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",c,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",c),window==window.top&&(clearInterval(l),l=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",c,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){/loaded|complete/.test(document.readyState)&&c()})),window==window.top&&(l=setInterval((function(){try{d||document.documentElement.doScroll("left")}catch(e){return}c()}),5)))),a={fetch:function(e,t){var n="BusuanziCallback_"+Math.floor(1099511627776*Math.random());e=e.replace("=BusuanziCallback","="+n),(o=document.createElement("SCRIPT")).type="text/javascript",o.defer=!0,o.src=e,document.getElementsByTagName("HEAD")[0].appendChild(o),window[n]=this.evalCall(t)},evalCall:function(e){return function(t){r((function(){try{e(t),o&&o.parentElement&&o.parentElement.removeChild&&o.parentElement.removeChild(o)}catch(e){console.log(e),i.hides()}}))}}},i={bszs:["site_pv","page_pv","site_uv"],texts:function(e){this.bszs.map((function(t){var n=document.getElementById("busuanzi_value_"+t);n&&(n.innerHTML=e[t])}))},hides:function(){this.bszs.map((function(e){var t=document.getElementById("busuanzi_container_"+e);t&&(t.style.display="none")}))},shows:function(){this.bszs.map((function(e){var t=document.getElementById("busuanzi_container_"+e);t&&(t.style.display="inline")}))}},t.a=()=>{i&&i.hides(),a.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",(function(e){i.texts(e),i.shows()}))}},407:function(e,t,n){"use strict";n.r(t);n(128),n(7),n(21);var a=n(362),i={mounted(){"/"!=this.$route.path&&this.initPageInfo()},watch:{$route(e,t){"/"!==e.path&&e.path!==t.path&&this.$themeConfig.blogInfo&&this.initPageInfo()}},methods:{initPageInfo(){if(null==this.$frontmatter.article||this.$frontmatter.article){const{eachFileWords:e,pageView:t,pageIteration:n,readingTime:a}=this.$themeConfig.blogInfo;if(e)try{e.forEach(e=>{if(e.permalink==this.$frontmatter.permalink)throw this.addPageWordsCount(e.wordsCount),(a||null==a)&&this.addReadTimeCount(e.readingTime),new Error})}catch(e){}(t||null==t)&&(this.addPageView(),this.getPageViewCouter(n))}else;},getPageViewCouter(e=1500){Object(a.a)();let t=0;const n=e=>{const t=this.$frontmatter.permalink||window.location.pathname,n=parseInt(localStorage.getItem("lastPagePv_"+t))||0,a=parseInt(e.innerText)||0,i=Math.max(a-n,0);0!=i&&(e.innerText=`${a}（+${i}）`,localStorage.setItem("lastPagePv_"+t,a),setTimeout(()=>{e.innerText=a},5e3))};setTimeout(()=>{let i=document.querySelector(".view-data");i&&""!==i.innerText?n(i):setTimeout(()=>{let i=document.querySelector(".view-data");if(i&&""==i.innerText){let o=setInterval(()=>{i&&""==i.innerText?(t+=e,t>5*e&&(i.innerText="9999",clearInterval(o)),""==i.innerText?Object(a.a)():(clearInterval(o),n(i))):(clearInterval(o),n(i))},e);this.$once("hook:beforeDestroy",()=>{clearInterval(o),o=null})}else i&&n(i)},e)},1500)},addPageView(){let e=document.querySelector(".page-view");if(e)e.innerHTML='<a style="color: #888; margin-left: 3px" href="javascript:;" id="busuanzi_value_page_pv" class="view-data"><i title="正在获取..." class="loading iconfont icon-loading"></i></a>';else{let e=document.createElement("div");e.title="浏览量",e.className="page-view iconfont icon-view",e.style.float="left",e.style.marginLeft="20px",e.style.fontSize="0.8rem",e.innerHTML='<a style="color: #888; margin-left: 3px" href="javascript:;" id="busuanzi_value_page_pv" class="view-data"><i title="正在获取..." class="loading iconfont icon-loading"></i></a>';let t=document.createElement("style");t.innerHTML="@keyframes turn {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n      .loading {\n        display: inline-block;\n        animation: turn 1s linear infinite;\n        -webkit-animation: turn 1s linear infinite;\n      }",document.head.appendChild(t),this.mountedView(e)}},addPageWordsCount(e=0){let t=document.querySelector(".book-words");if(t)t.innerHTML=`<a href="javascript:;" style="margin-left: 3px; color: #888">${e}</a>`;else{let t=document.createElement("div");t.title="文章字数",t.className="book-words iconfont icon-book",t.style.float="left",t.style.marginLeft="20px",t.style.fontSize="0.8rem",t.innerHTML=`<a href="javascript:;" style="margin-left: 3px; color: #888">${e}</a>`,this.mountedView(t)}},addReadTimeCount(e=0){let t=document.querySelector(".reading-time");if(t)t.innerHTML=`<a href="javascript:;" style="margin-left: 3px; color: #888">${e}</a>`;else{let t=document.createElement("div");t.title="预阅读时长",t.className="reading-time iconfont icon-shijian",t.style.float="left",t.style.marginLeft="20px",t.style.fontSize="0.8rem",t.innerHTML=`<a href="javascript:;" style="margin-left: 3px; color: #888">${e}</a>`,this.mountedView(t)}},mountedView(e,t=100,n=".articleInfo-wrap > .articleInfo > .info"){let a=document.querySelector(n);if(a)this.isMountedView(e,a)||a.appendChild(e);else{let i=setInterval(()=>{a=document.querySelector(n),a&&(this.isMountedView(e,a)||(a.appendChild(e),clearInterval(i)))},t);this.$once("hook:beforeDestroy",()=>{clearInterval(i),i=null})}},removeElement(e){var t=document.querySelector(e);t&&t.parentNode.removeChild(t)},isMountedView:(e,t)=>e.parentNode==t},beforeMount(){clearInterval(this.interval),this.removeElement(".page-view"),this.removeElement(".book-words"),this.removeElement(".reading-time")}},o=n(0),r=Object(o.a)(i,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=r.exports}}]);