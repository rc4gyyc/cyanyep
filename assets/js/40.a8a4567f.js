(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{404:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"购买域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#购买域名"}},[t._v("#")]),t._v(" 购买域名")]),t._v(" "),s("p",[t._v("如果是新用户，可以在阿里云购买域名，一些域名（如.top）首年只需要1元， 如果后面要续费应该是三十多/年")]),t._v(" "),s("p",[t._v("购买域名后，可以设置域名解析，通过你购买的域名解析到你的个人博客网页xxx.github.io。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.gitmirror.com/cyanyep/blog-img/master/img/image-20250327175501771.png",alt:"image-20250327175501771"}})]),t._v(" "),s("h2",{attrs:{id:"域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名解析"}},[t._v("#")]),t._v(" 域名解析")]),t._v(" "),s("p",[t._v("在github设置的setting->pages中设置你的域名")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.gitmirror.com/cyanyep/blog-img/master/img/image-20250327202925641.png",alt:"image-20250327202925641"}})]),t._v(" "),s("p",[t._v("在阿里云中设置解析到你的gitHub.io")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.gitmirror.com/cyanyep/blog-img/master/img/image-20250329223936175.png",alt:"image-20250329223936175"}})]),t._v(" "),s("p",[t._v("就可以通过你的域名cyanyep.top访问github.io了")]),t._v(" "),s("ul",[s("li",[t._v("访问你的域名后会发现css样式没了")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.gitmirror.com/cyanyep/blog-img/master/img/image-20250327205312348.png",alt:""}})]),t._v(" "),s("p",[t._v("这是因为之前 GitHub Pages 将项目部署在子路径 "),s("code",[t._v("https://cyanyep.github.io/cyanyep/")]),t._v("下。")]),t._v(" "),s("p",[t._v("而我们设置的config.ts文件中 VuePress 是根据网站部署在 /cyanyep/ 目录下设置页面的，")]),t._v(" "),s("p",[t._v("所以需要"),s("strong",[t._v("修改config.ts文件的base路径配置：将原来的/cyanyep/ 改为 /")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 路径名为 "/<REPO>/"')]),t._v("\n    base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"域名解析完善"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名解析完善"}},[t._v("#")]),t._v(" 域名解析完善")]),t._v(" "),s("p",[t._v("我们在setting->pages->custom domain设置的自定义域名.")]),t._v(" "),s("ul",[s("li",[t._v("本质上是在我们的page分支"),s("code",[t._v("cy-pages")]),t._v("中创建CNAME文件，并在文件中添加我们的域名"),s("code",[t._v("cyanyep.top")])]),t._v(" "),s("li",[t._v("而我们每次执行构建命令"),s("code",[t._v("npm run docs:build")]),t._v("时，都是重新构建项目并生成dist文件夹，然后推送到github上，Github Pages会根据dist文件夹中的内容构建页面，每次dist文件夹和远程分支cy-pages都会被覆盖，")]),t._v(" "),s("li",[t._v("所以我们可以先创建好文件，然后通过"),s("code",[t._v("deploy.sh")]),t._v("脚本将文件放在dist文件夹中")])]),t._v(" "),s("p",[s("strong",[t._v("在项目根目录vuepress-starter创建文件CNAME，内容为你的域名"),s("code",[t._v("cyanyep.top")])])]),t._v(" "),s("p",[t._v("修改"),s("code",[t._v("deploy.sh")]),t._v("脚本")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###添加###")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将CNAME放入dist")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/CNAME ./\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" git@github.com:cyanyep/cyanyep.git master:cy-pages\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),s("hr"),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cyanyep.top/Blog/DN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("我自己（/≥▿≤/）"),s("OutboundLink")],1)]),t._v(" "),s("hr")])}),[],!1,null,null,null);s.default=e.exports}}]);