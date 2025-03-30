(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{419:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"po、bo、do、vo、dto、dao、pojo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#po、bo、do、vo、dto、dao、pojo"}},[t._v("#")]),t._v(" PO、BO、DO、VO、DTO、DAO、POJO")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("PO（Persistent Object，持久化对象）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义：PO是与"),s("strong",[t._v("数据库表直接映射")]),t._v("的对象，每个字段通常与数据库表的列一一对应。")])]),t._v(" "),s("li",[s("p",[t._v("用途：通常用于ORM（对象关系映射）框架（如Hibernate、MyBatis）中，主要用于数据库操作（增删改查）。")])]),t._v(" "),s("li",[s("p",[t._v("特点：一般不包含业务逻辑。")])])])]),t._v(" "),s("li",[s("p",[t._v("BO（Business Object，业务对象）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义：BO是封装了业务逻辑的对象，通常用于业务逻辑层。")])]),t._v(" "),s("li",[s("p",[t._v("用途：用于处理复杂的业务逻辑。")])]),t._v(" "),s("li",[s("p",[t._v("特点：可能由多个DO或PO组合而成，包含业务逻辑和数据。")])])])]),t._v(" "),s("li",[s("p",[t._v("DO（Data Object / Domain Object，数据对象 / 领域对象）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("阿里巴巴的DO（Data Object）：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义：与数据库表直接映射的对象，与数据库表一一对应，类似于PO。")])]),t._v(" "),s("li",[s("p",[t._v("特点：不包含业务逻辑。")])])])]),t._v(" "),s("li",[s("p",[t._v("DDD的DO（Domain Object）：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义：业务领域中的核心对象，类似于BO。")])]),t._v(" "),s("li",[s("p",[t._v("用途：用于业务逻辑层。")])]),t._v(" "),s("li",[s("p",[t._v("特点：可能由多个PO组成，包含业务逻辑和数据。")])])])])])]),t._v(" "),s("li",[s("p",[t._v("VO（View Object，视图对象）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义：用于"),s("strong",[t._v("展示数据")]),t._v("的对象，通常用于"),s("strong",[t._v("表现层")]),t._v("（如前端页面）。")])]),t._v(" "),s("li",[s("p",[t._v("用途：通常用于返回给前端的数据封装。")])]),t._v(" "),s("li",[s("p",[t._v("特点：字段可以根据展示需求定制，不一定与数据库表或领域对象完全一致。不包含业务逻辑。")])])])]),t._v(" "),s("li",[s("p",[t._v("DAO（Data Access Object，数据访问对象）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义：用于访问数据库的对象，通常封装了对数据库的操作。")])]),t._v(" "),s("li",[s("p",[t._v("用途：提供对数据库的增删改查操作。")])]),t._v(" "),s("li",[s("p",[t._v("特点：不包含业务逻辑。")])])])]),t._v(" "),s("li",[s("p",[t._v("DTO（Data Transfer Object，数据传输对象）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义：用于在"),s("strong",[t._v("不同层之间传输数据的对象")]),t._v("，通常用于服务层与表现层之间的数据传输。")])]),t._v(" "),s("li",[s("p",[t._v("用途：常用于微服务之间的数据传输、远程调用（如RPC）或前后端交互。")])]),t._v(" "),s("li",[s("p",[t._v("特点：不包含业务逻辑，仅用于数据传输。字段可以根据需要定制，不一定与数据库表或领域对象完全一致。")])])])]),t._v(" "),s("li",[s("p",[t._v("POJO（Plain Old Java Object，普通Java对象）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义：一个普通的Java对象，不依赖于任何框架或接口。")]),t._v(" "),s("ul",[s("li",[t._v("用途：通常用于表示简单的数据对象。")])])]),t._v(" "),s("li",[s("p",[t._v("特点：不继承特定的类或实现特定的接口，灵活且通用。")])])])])]),t._v(" "),s("h2",{attrs:{id:"怎么组织上面这些对象的转换-有没有遇到什么挑战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么组织上面这些对象的转换-有没有遇到什么挑战"}},[t._v("#")]),t._v(" 怎么组织上面这些对象的转换，有没有遇到什么挑战")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("手动转换")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义：通过手动编写代码实现对象之间的字段赋值。")])]),t._v(" "),s("li",[s("p",[t._v("优点：灵活性高，完全可控。")])]),t._v(" "),s("li",[s("p",[t._v("缺点：当对象字段较多时，手动编写转换代码会变得繁琐且容易出错。")])])])]),t._v(" "),s("li",[s("p",[t._v("使用工具类（如 Apache Commons BeanUtils）")]),t._v(" "),s("ul",[s("li",[t._v("利用反射机制自动完成对象属性的拷贝。    BeanUtils.copyProperties(userVo, userBo);\n"),s("ul",[s("li",[t._v("优点：简单快捷，适合字段名称一致的情况。")]),t._v(" "),s("li",[t._v("缺点：性能较低，无法处理复杂字段映射（如类型转换）。")])])])])]),t._v(" "),s("li",[s("p",[t._v("使用映射框架⭐")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义：通过映射框架（如MapStruct、ModelMapper、Dozer）自动完成对象之间的转换。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("MapStruct")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("基于注解的代码生成工具")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapper")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserMapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserMapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INSTANCE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mappers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserMapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userEmail"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserVo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toVo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserBo")]),t._v(" userBo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserVo")]),t._v(" userVo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserMapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INSTANCE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toVo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userBo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("性能高（生成的是静态代码，无反射开销）。")]),t._v(" "),s("li",[t._v("支持复杂字段映射和类型转换。")]),t._v(" "),s("li",[t._v("提高代码的可读性和可维护性。")])])]),t._v(" "),s("li",[s("p",[t._v("缺点：需要引入额外的依赖。")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("ModelMapper")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ModelMapper 是一个智能对象映射库，能够自动推断字段映射关系。")])]),t._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelMapper")]),t._v(" modelMapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelMapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserVo")]),t._v(" userVo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" modelMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userBo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserVo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("优点：简单易用，支持复杂映射。")])]),t._v(" "),s("li",[s("p",[t._v("缺点：性能略低于 MapStruct，可能需要额外配置。")])])])])])]),t._v(" "),s("li",[s("p",[t._v("使用Builder工厂模式")]),t._v(" "),s("ul",[s("li",[t._v("定义：通过Builder模式逐步构建目标对象。")]),t._v(" "),s("li",[t._v("优点：\n"),s("ul",[s("li",[t._v("支持复杂的对象构建逻辑。")]),t._v(" "),s("li",[t._v("代码可读性高，适合字段较多的情况。")])])]),t._v(" "),s("li",[t._v("缺点：需要为每个对象编写Builder类。")])])])]),t._v(" "),s("p",[t._v("挑战")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("最大的挑战是在复杂业务场景下，各种对象之间的转换关系变得非常复杂。比如一个VO可能需要组合多个DO的数据，或者需要进行一些业务计算才能得到。")])]),t._v(" "),s("li",[s("p",[t._v("还有一个挑战是性能问题，特别是在高并发场景下，频繁的对象转换会带来一定的性能开销。我们曾经遇到过因为对象转换导致的性能瓶颈。")])]),t._v(" "),s("li",[s("p",[t._v("为了解决这些问题，我们采取了几种策略：")]),t._v(" "),s("ul",[s("li",[t._v("一是优化对象设计，减少不必要的转换；")]),t._v(" "),s("li",[t._v("二是使用缓存机制；")]),t._v(" "),s("li",[t._v("三是在某些关键路径上使用更轻量级的转换方式，比如直接使用Map而不是完整的对象。")])])])]),t._v(" "),s("h1",{attrs:{id:"为什么pojo类布尔类型不要用is开头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么pojo类布尔类型不要用is开头"}},[t._v("#")]),t._v(" 为什么pojo类布尔类型不要用is开头")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Java Bean规范要求getter和setter方法遵循特定的命名规则：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对于布尔类型的字段，getter方法以is或get开头。")])]),t._v(" "),s("li",[s("p",[t._v("setter方法必须以set开头。")])]),t._v(" "),s("li",[s("p",[t._v("比如isActive的getter方法是isActive()，setter方法是setActive()")])])])]),t._v(" "),s("li",[s("p",[t._v("如果布尔字段以"),s("code",[t._v("is")]),t._v("开头，可能会导致字段名与getter方法名看起来过于相似，容易引起混淆。")])]),t._v(" "),s("li",[s("p",[t._v("而且许多序列化框架（如Jackson、Gson、Fastjson等）和工具（如Spring、Hibernate等）依赖于Java Bean规范来访问属性。")]),t._v(" "),s("ul",[s("li",[t._v("比如Jackson、Fastjson序列化时会使用Java Bean规范根据getter方法把字段解析为active而不是isActive")]),t._v(" "),s("li",[t._v("而Gson默认不依赖Java Bean规范，会直接基于字段名序列化为isActive")]),t._v(" "),s("li",[t._v("这时如果我们用Fastjson序列化用Gson反序列化就会出错")])])])]),t._v(" "),s("h1",{attrs:{id:"component和-bean的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component和-bean的区别"}},[t._v("#")]),t._v(" @Component和@Bean的区别")]),t._v(" "),s("p",[t._v("用途：")]),t._v(" "),s("ul",[s("li",[t._v("@Component适用于标注一个普通类")]),t._v(" "),s("li",[t._v("@Bean注解是在配置类的方法上声明和配置一个定制化的Bean对象")])]),t._v(" "),s("p",[t._v("使用方式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("@Component是一个类级别的注解，Spring通过@ComponentScan注解扫描修饰了@Component注解的类并注册到SpringIOC容器中为Bean")])]),t._v(" "),s("li",[s("p",[t._v("@Bean是方法级别的注解，在带有@Configuration注解的配置类中手动声明和配置Bean")])])]),t._v(" "),s("p",[t._v("控制权：")]),t._v(" "),s("ul",[s("li",[t._v("@Component注解修饰的类是由Spring框架来创建和初始化的")]),t._v(" "),s("li",[t._v("@Bean注解允许开发人员手动控制Bean的创建和配置过程")])]),t._v(" "),s("h1",{attrs:{id:"bean-在-component-和-configuration-中的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bean-在-component-和-configuration-中的区别"}},[t._v("#")]),t._v(" @Bean 在 @Component 和 @Configuration 中的区别")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("@Bean")]),t._v(" 在 "),s("code",[t._v("@Component")]),t._v(" 中")]),t._v("`\n"),s("ul",[s("li",[s("code",[t._v("@Bean")]),t._v(" 方法会被当作普通的工厂方法调用，每次调用都会返回一个新的实例。")]),t._v(" "),s("li",[t._v("不支持 "),s("code",[t._v("@Bean")]),t._v(" 方法之间的依赖注入（通过方法调用）。")])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("@Bean")]),t._v(" 在 "),s("code",[t._v("@Configuration")]),t._v(" 中")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("@Bean")]),t._v(" 方法会被 Spring 代理，确保\t每次调用返回的是同一个实例（单例）。")]),t._v(" "),s("li",[t._v("支持 "),s("code",[t._v("@Bean")]),t._v(" 方法之间的依赖注入（通过方法调用）。")])])])]),t._v(" "),s("h1",{attrs:{id:"springboot如何解决跨域问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot如何解决跨域问题"}},[t._v("#")]),t._v(" SpringBoot如何解决跨域问题")]),t._v(" "),s("p",[t._v("跨域问题源于浏览器的同源策略（Same-Origin Policy）。如果前端页面和后端服务的协议、域名或端口不同，则浏览器会阻止跨域请求。")]),t._v(" "),s("p",[t._v("Spring Boot 解决跨域问题的方式")]),t._v(" "),s("ol",[s("li",[t._v("使用 "),s("code",[t._v("@CrossOrigin")]),t._v(" 注解")])]),t._v(" "),s("ul",[s("li",[t._v("它可以作用于控制器类或方法级别。")]),t._v(" "),s("li",[t._v("主要参数\n"),s("ul",[s("li",[s("code",[t._v("origins")]),t._v(" 指定允许访问资源的来源（即域名），默认值："),s("code",[t._v('"*"')]),t._v("，意味着允许所有来源。")]),t._v(" "),s("li",[s("code",[t._v("allowedHeaders")]),t._v("  定义哪些请求头可以通过跨域请求发送到服务器。使用"),s("code",[t._v("*")]),t._v("表示允许所有头部。")]),t._v(" "),s("li",[s("code",[t._v("exposedHeaders")]),t._v(" 指定哪些响应头可以通过跨域请求暴露给前端应用。")]),t._v(" "),s("li",[s("code",[t._v("methods")]),t._v(" 指定允许的HTTP方法（GET, POST, PUT, DELETE等）。使用"),s("code",[t._v("*")]),t._v("表示允许所有方法。")]),t._v(" "),s("li",[s("code",[t._v("allowCredentials")]),t._v(" 指示是否支持用户凭证（Cookies、HTTP认证信息等）包含在跨域请求中。设置为"),s("code",[t._v("true")]),t._v("时，必须同时指定"),s("code",[t._v("origins")]),t._v("不能为"),s("code",[t._v('"*"')]),t._v("（因为出于安全考虑，浏览器不允许这样配置）。")])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("全局跨域配置")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("实现 "),s("code",[t._v("WebMvcConfigurer")]),t._v(" 接口，可以在全局范围内配置跨域规则。")])]),t._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebMvcConfigurer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCorsMappings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsRegistry")]),t._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/**"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定允许跨域的路径")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("allowedOrigins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:3000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许的来源")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("allowedMethods")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DELETE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许的 HTTP 方法")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("allowedHeaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许的请求头")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("allowCredentials")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否允许发送 Cookie")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxAge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 预检请求的缓存时间（秒）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("使用过滤器（Filter）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("通过自定义过滤器，可以拦截所有请求并手动添加 CORS 相关的响应头。")])]),t._v(" "),s("li",[s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsFilter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("corsFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UrlBasedCorsConfigurationSource")]),t._v(" source "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UrlBasedCorsConfigurationSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsConfiguration")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllowCredentials")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许携带凭证")]),t._v("\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAllowedOrigin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:3000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许的源")]),t._v("\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAllowedHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许的请求头")]),t._v("\n        config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAllowedMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许的HTTP方法")]),t._v("\n        source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerCorsConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/**"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对所有路径生效")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),s("li",[s("p",[t._v("使用 Nginx 或反向代理")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在生产环境中，可以通过 Nginx 或其他反向代理服务器解决跨域问题。")])]),t._v(" "),s("li",[s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" example.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /api/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转发到后端服务")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access-Control-Allow-Origin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:3000"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access-Control-Allow-Methods "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET, POST, PUT, DELETE"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access-Control-Allow-Headers "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access-Control-Allow-Credentials "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("优点")]),t._v(" "),s("ul",[s("li",[t._v("将跨域逻辑从应用层移至网关层，减轻后端负担。")]),t._v(" "),s("li",[t._v("更适合微服务架构中的跨域需求。")])])])])])]),t._v(" "),s("h1",{attrs:{id:"如何给bean指定名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何给bean指定名称"}},[t._v("#")]),t._v(" 如何给bean指定名称")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("示例代码")]),t._v(" "),s("th",[t._v("适用场景")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v('@Component("name")')])]),t._v(" "),s("td",[s("code",[t._v('@Component("myBean")')])]),t._v(" "),s("td",[t._v("自动扫描组件时指定名称")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v('@Bean(name = "name")')])]),t._v(" "),s("td",[s("code",[t._v('@Bean(name = "customBean")')])]),t._v(" "),s("td",[t._v("在配置类中手动定义Bean时指定名称")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v('@Qualifier("name")')])]),t._v(" "),s("td",[s("code",[t._v('@Qualifier("primaryService")')])]),t._v(" "),s("td",[t._v("解决多Bean冲突时指定限定符")])]),t._v(" "),s("tr",[s("td",[t._v("XML "),s("code",[t._v('<bean id="name">')])]),t._v(" "),s("td",[s("code",[t._v('<bean id="myBean">')])]),t._v(" "),s("td",[t._v("使用XML配置时指定名称")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v('@Named("name")')])]),t._v(" "),s("td",[s("code",[t._v('@Named("customName")')])]),t._v(" "),s("td",[t._v("使用JSR-330标准时指定名称")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);