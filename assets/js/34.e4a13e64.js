(window.webpackJsonp=window.webpackJsonp||[]).push([[34,35],{295:function(t,e,s){},323:function(t,e,s){"use strict";s(295)},339:function(t,e,s){"use strict";s.r(e);s(6),s(15);var r={name:"UpdateArticle",props:{length:{type:[String,Number],default:3},moreArticle:String},data:()=>({posts:[],currentPath:""}),created(){this.posts=this.$site.pages,this.currentPath=this.$page.path},computed:{topPublishPosts(){return this.$sortPostsByDate?this.$sortPostsByDate.filter(t=>{const{path:e}=t;return e!==this.currentPath}).slice(0,this.length):[]},isShowArticle(){const{frontmatter:t}=this.$page;return!(!1!==t.article)}},methods:{getNum:t=>t<9?"0"+(t+1):t+1,getDate:t=>t.frontmatter.date?t.frontmatter.date.split(" ")[0].slice(5,10):""},watch:{$route(){this.currentPath=this.$page.path}}},i=(s(323),s(14)),a=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:["article-list",{"no-article-list":t.isShowArticle}]},[e("div",{staticClass:"article-title"},[e("router-link",{staticClass:"iconfont icon-bi",attrs:{to:t.moreArticle||"/archives/"}},[t._v("最近更新")])],1),t._v(" "),e("div",{staticClass:"article-wrapper"},[t._l(t.topPublishPosts,(function(s,r){return e("dl",{key:r},[e("dd",[t._v(t._s(t.getNum(r)))]),t._v(" "),e("dt",[e("router-link",{attrs:{to:s.path}},[e("div",[t._v("\n            "+t._s(s.title)+"\n            "),s.frontmatter.titleTag?e("span",{staticClass:"title-tag"},[t._v("\n              "+t._s(s.frontmatter.titleTag)+"\n            ")]):t._e()])]),t._v(" "),e("span",{staticClass:"date"},[t._v(t._s(t.getDate(s)))])],1)])})),t._v(" "),e("dl",[e("dd"),t._v(" "),e("dt",[e("router-link",{staticClass:"more",attrs:{to:t.moreArticle||"/archives/"}},[t._v("更多文章>")])],1)])],2)])}),[],!1,null,null,null);e.default=a.exports}}]);