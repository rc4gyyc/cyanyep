(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{408:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"项目源代码私有-可不做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目源代码私有-可不做"}},[t._v("#")]),t._v(" 项目源代码私有（可不做）")]),t._v(" "),s("p",[t._v("为了避免项目中的隐私代码泄漏，可以新建一个private仓库放源代码")]),t._v(" "),s("p",[t._v("GitHub上创建一个private仓库blog-code")]),t._v(" "),s("p",[t._v("将代码上传")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#从原来的仓库cyanyep拉取分支pages-code中的源代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --single-branch https://github.com/username/repository.git\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新仓库建立连接")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:username/my-project.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),s("ul",[s("li",[s("p",[t._v("设置新仓库的secret，")]),t._v(" "),s("ul",[s("li",[t._v("setting->secret and variables->action中将之前的"),s("code",[t._v("GITEE_PRIVATE_KEY")]),t._v("、"),s("code",[t._v("GITEE_TOKEN")]),t._v("、"),s("code",[t._v("GITEE_USERNAME")]),t._v("、"),s("code",[t._v("PERSONAL_ACCESS_TOKEN")]),t._v("设置过来")])])]),t._v(" "),s("li",[s("p",[t._v("修改deploy.yml中的代码，")])])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#！！修改为master")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n      \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ！！删除。因为如果有这个同步的是dist静态文件，没什么用，gitee不能部署pages")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制同步工作流syncToGitee 到 dist")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Copy .github to dist\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          mkdir -p ./docs/.vuepress/dist/.github/workflows\n          cp ./.github/workflows/syncToGitee.yml ./docs/.vuepress/dist/.github/workflows/")]),t._v("\n      \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n      \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 GitHub Pages")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy to GitHub Pages\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v3\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ！！这里的github_token修改为personal_token")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("personal_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.PERSONAL_ACCESS_TOKEN  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动提供的 GitHub Token")]),t._v("\n\t\t  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ！！添加external_repository")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external_repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyanyep/cyanyep "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#用户名/仓库名")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./docs/.vuepress/dist "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# VuePress 默认的输出目录")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到的目标分支")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude_assets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])]),s("p",[t._v("最终完整deploy.yml")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy VuePress to GitHub Pages\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当 master 分支有 push 事件时触发")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检出代码")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v3\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetch-depth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取完整的历史记录（包括 .git 文件夹）")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Set timezone\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' echo "TZ=Asia/Shanghai" '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" $GITHUB_ENV "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换为你的时区")]),t._v("\n        \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用action库，安装node")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Set up Node.js  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用action库  actions/setup-node安装node")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v3\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据你的项目需求选择 Node.js 版本")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存 node_modules")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cache node_modules\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("modules\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v3\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_modules "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#表示要缓存项目的 node_modules 文件夹")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("modules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/package-lock.json')")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            node-modules-${{ runner.os }}-")]),t._v("\n\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖（仅在缓存未命中时执行）")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install \n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" steps.cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("modules.outputs.cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hit "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!=")]),t._v(" 'true'\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install \n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建 VuePress 项目，并将workflow拷贝到dist中用于仓库同步到gitee")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build VuePress\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制 CNAME 文件到 dist")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Copy NAME to dist\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cp ./CNAME ./docs/.vuepress/dist/\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 GitHub Pages")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy to GitHub Pages\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v3\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("personal_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.PERSONAL_ACCESS_TOKEN  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动提供的 GitHub Token")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external_repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyanyep/cyanyep "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#用户名/仓库名")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./docs/.vuepress/dist "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# VuePress 默认的输出目录")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到的目标分支")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude_assets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n")])])]),s("p",[t._v("syncToGitee.yml")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" syncToGitee\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改为master触发事件")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repo-sync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mirror the Github organization repos to Gitee.\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Yikun/hub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mirror"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@master\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github/cyanyep'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitee/ciian'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ！！这里添加src_key，使用ssh密钥，一般ssh密钥我们用的同一个，所以GitHub与gitee的一样")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意需要在GitHub上配置ssh公钥才能使用，")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一般与gitee一样，所以直接使用gitee的")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_PRIVATE_KEY  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_PRIVATE_KEY "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dst_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITEE_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blog-code"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ！！你的private仓库")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ！！这里要指定ssh方式，https方式不能用不知道为什么，你们如果能用要告诉我为什么哦，求求了(っ´Ι`)っ")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clone_style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ssh "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 SSH 方式克隆")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("force_update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n")])])]),s("p",[t._v("自己做的时候action库库报错，所以有点乱，不知道有没有漏了什么步骤，步骤也有点省略，哪里看不懂。评论区告诉我(●'◡'●)。（虽然现在还没有做，应该没人看吧）")])])}),[],!1,null,null,null);s.default=e.exports}}]);