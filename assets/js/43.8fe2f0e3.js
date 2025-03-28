(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{408:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"通过github-action自动构建并部署项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过github-action自动构建并部署项目"}},[t._v("#")]),t._v(" 通过Github Action自动构建并部署项目")]),t._v(" "),s("p",[t._v("每次修改博客后都需要执行脚本deploy.sh，重新构建才能上传的github。")]),t._v(" "),s("p",[t._v("了解到GitHub的Action后，我想是否可以直接把整个项目上传到github的一个分支"),s("code",[t._v("pages-code")]),t._v("（从main分支新建一个分支）上，再通过workflow自动将项目的代码构建并部署到指定GitHub Page的分支"),s("code",[t._v("cy-pages")]),t._v("上，(如果有自己的服务器也可以部署到服务器上，可以参考"),s("a",{attrs:{href:"https://www.peterjxl.com/Blog/Deploy/#%E4%BD%BF%E7%94%A8-github-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("p",[t._v("而且如果Action执行失败还会发qq邮箱通知，不用担心构建失败不知道。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在项目根目录创建文件.gitignore，推送时忽略node_modules目录，因为node_modules是一些三方依赖很大，而且可以在workflow中安装")]),t._v(" "),s("div",{staticClass:"language-.gitignore extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("node_modules/\n")])])])]),t._v(" "),s("li",[s("p",[t._v("仍然在.github/woorkflows/目录中创建新的workflow脚本deploy.yml")])])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy VuePress to GitHub Pages\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当 pages-code 分支有 push 事件时触发")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("code\n      \n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检出代码")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v3\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用action库，安装node")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Set up Node.js  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用action库  actions/setup-node安装node")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v3\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据你的项目需求选择 Node.js 版本")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install \n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install \n    \n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建 VuePress 项目，并将workflow拷贝到dist中用于仓库同步到gitee")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build VuePress\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制 CNAME 文件到 dist")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Copy NAME to dist\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cp ./CNAME ./docs/.vuepress/dist/\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制同步工作流syncToGitee 到 dist")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Copy .github to dist\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          mkdir -p ./docs/.vuepress/dist/.github/workflows\n          cp ./.github/workflows/syncToGitee.yml ./docs/.vuepress/dist/.github/workflows/")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 GitHub Pages")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy to GitHub Pages\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v3\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.PERSONAL_ACCESS_TOKEN  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在github生成PERSONAL_ACCESS_TOKEN")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./docs/.vuepress/dist "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# VuePress 默认的输出目录")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到的目标分支")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude_assets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#      #部署到服务器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#      - name: Deploy to Staging My server")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        uses: easingthemes/ssh-deploy@v2.1.6")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        env:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          # 使用GitHub仓库里的secret设置的值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          SSH_PRIVATE_KEY: ${{ secrets.MY_SERVER_PRIVATE_KEY }} ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          # 源目录，编译后生成的文件目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          SOURCE: './docs/.vuepress/dist/'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          #服务器公网地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          REMOTE_HOST: ${{ secrets.MY_SERVER_IP }}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          #服务器用户名-一般默认root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          REMOTE_USER: 'root'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          #服务器中，代码部署的位置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          TARGET: '/opt/myblog'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          #去除的文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#          EXCLUDE: "/dist/, /node_modules/" ')]),t._v("\n")])])]),s("p",[t._v("这里简单说明下文件的内容")]),t._v(" "),s("ul",[s("li",[t._v("第一行：本次workflow的名字，可自行更换")]),t._v(" "),s("li",[t._v("第 3~6 行：说明只有当 pages-code分支有提交到远程库（push）的时候，执行本次workflow")]),t._v(" "),s("li",[t._v("第 8 行：jobs，本次我们只用了一个 job，也就是第 9 行的 job")]),t._v(" "),s("li",[t._v("第 10 行：指定要在哪个操作系统的环境下编译出包（一般是 Linux）")]),t._v(" "),s("li",[t._v("接下来就是 deploy 这个 job 的 steps，每个 step 做了不同的事情，例如安装 node，然后安装依赖和执行构建命令")]),t._v(" "),s("li",[t._v("第 31 行开始就是一些环境变量的设置，例如读取我们上一小节设置的 IP 和私钥信息")])]),t._v(" "),s("p",[t._v("注意：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("因为workflow需要放在对应分支下才能被触发，pages-code分支触发事件push时，GitHub Actions 会检查该分支当前提交中是否存在对应的 YAML 文件，才会执行，所以需要把syncToGitee.yml文件复制到 dist目录")])]),t._v(" "),s("li",[s("p",[t._v("github_token：")]),t._v(" "),s("ol",[s("li",[t._v("生成个人访问令牌 (PAT)：\n"),s("ul",[s("li",[t._v("在GitHub的 "),s("strong",[t._v("Settings > Developer settings > Personal access tokens")]),t._v("->token classic。")]),t._v(" "),s("li",[t._v("创建一个新的 token (classic)，确保选中了 "),s("code",[t._v("repo")]),t._v(" 和 "),s("code",[t._v("workflow")]),t._v(" 权限。")]),t._v(" "),s("li",[t._v("复制生成的令牌。")])])]),t._v(" "),s("li",[t._v("将 token 添加到 Secrets：\n"),s("ul",[s("li",[t._v("在你的 GitHub 仓库中，进入 "),s("strong",[t._v("Settings > Secrets and variables > Actions")]),t._v("。")]),t._v(" "),s("li",[t._v("添加一个新的 Repository Secret，名称为 "),s("code",[t._v("PERSONAL_ACCESS_TOKEN")]),t._v("，值为刚刚生成的 PAT。")])])])])]),t._v(" "),s("li",[s("p",[t._v("publish_dir: 就是你要复制到目标分支cy-pages的目录")])]),t._v(" "),s("li",[s("p",[t._v("exclude_assets: 指定哪些文件或目录不推送到目标分支，exclude_assets的值默认有**"),s("code",[t._v(".github")]),t._v("**")])])]),t._v(" "),s("h2",{attrs:{id:"优化自动部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化自动部署"}},[t._v("#")]),t._v(" 优化自动部署")]),t._v(" "),s("p",[t._v("每次等待构建并部署都需要等2分钟甚至更久，这是因为每次执行workflow都需要重新搭建环境"),s("code",[t._v("npm install")]),t._v("，GitHub Action 提供了缓存机制，可以不用每次都搭建环境。修改deploy.yml文件")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n      \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加缓存 ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存 node_modules")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cache node_modules\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("modules\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v3\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_modules\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("modules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/package-lock.json')")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            node-modules-${{ runner.os }}-")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖（仅在缓存未命中时执行）")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install \n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" steps.cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("modules.outputs.cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hit "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!=")]),t._v(" 'true'\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install \n    \n\t  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n\t  \n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("解释（由于带${{ }}部署项目时会被node解析，所以写在代码块里）\npath: node_modules \n\t表示要缓存项目的 node_modules 文件夹\nkey: node-modules-${{ runner.os }}-${{ hashFiles('\\**/package-lock.json') }}\n\tnode-modules-: 这是一个固定的前缀，用来标识缓存的内容是 `node_modules`。\n\t${{ runner.os }}: 表示当前运行的操作系统（如 `ubuntu-latest`, `windows-latest`, `macos-latest`）。\n\t${{ hashFiles('**/package-lock.json') }}: 基于 `package-lock.json` 文件的内容生成一个哈希值。如果 `package-lock.json 发生变化（例如添加或更新依赖），哈希值也会变化，从而触发新的缓存。\n\t\nrestore-keys: | \n\tnode-modules-${{ runner.os }}-\n\t作用： 提供一组备用的缓存键（`restore-keys`），用于在主键（key）未命中时尝试部分匹配。\n\t分解解释：\n\t\t|：YAML 的多行字符串语法，表示后面的每一行是一个独立的 restore-key。\n\t\tnode-modules-${{ runner.os }}-: 这是一个“模糊匹配”的键，只包含固定前缀和操作系统信息，而不包含 `package-lock.json 的哈希值。如果主键（key）未命中，GitHub Actions 会依次尝试包含这些前缀的缓存：\n")])])]),s("p",[t._v("可以看到workflow的运行时间，因为命中缓存跳过了执行"),s("code",[t._v("npm install")]),t._v("的40秒")]),t._v(" "),s("p",[t._v("但是项目build的时间才是重头，运行了2min多，所以我们要通过缓存优化项目构建")]),t._v(" "),s("p",[t._v("在config.ts文件中添加Webpack 缓存配置")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改 babel-loader 的选项")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加缓存配置")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'filesystem'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样deploy.sh脚本就没用了，以后都是由GitHub Action自动帮我们部署")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.peterjxl.com/Blog/Deploy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("从零开始搭建博客系列——部署"),s("OutboundLink")],1)]),t._v(" "),s("hr")])}),[],!1,null,null,null);s.default=e.exports}}]);