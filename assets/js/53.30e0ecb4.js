(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{422:function(v,_,e){"use strict";e.r(_);var a=e(0),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"_1-spring框架中的单例bean是线程安全的吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring框架中的单例bean是线程安全的吗"}},[v._v("#")]),v._v(" 1. Spring框架中的单例bean是线程安全的吗？")]),v._v(" "),_("p",[v._v("不是线程安全的。当多用户同时请求一个服务时，容器会给每个请求分配一个线程，这些线程会并发执行业务逻辑。如果处理逻辑中包含对单例状态的修改，比如修改单例的成员属性，就必须考虑线程同步问题。Spring框架本身并不对单例bean进行线程安全封装，线程安全和并发问题需要开发者自行处理。")]),v._v(" "),_("p",[v._v("通常在项目中使用的Spring bean是不可变状态（如Service类和DAO类），因此在某种程度上可以说Spring的单例bean是线程安全的。如果bean有多种状态（如View Model对象），就需要自行保证线程安全。最简单的解决办法是将单例bean的作用域由“singleton”变更为“prototype”。")]),v._v(" "),_("h2",{attrs:{id:"_2-什么是aop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是aop"}},[v._v("#")]),v._v(" 2. 什么是AOP？")]),v._v(" "),_("p",[v._v("AOP，即面向切面编程，在Spring中用于将那些与业务无关但对多个对象产生影响的公共行为和逻辑抽取出来，实现公共模块复用，降低耦合。常见的应用场景包括公共日志保存和事务处理。")]),v._v(" "),_("h3",{attrs:{id:"_3-你们项目中有没有使用到aop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-你们项目中有没有使用到aop"}},[v._v("#")]),v._v(" 3. 你们项目中有没有使用到AOP？")]),v._v(" "),_("p",[v._v("我们之前在后台管理系统中使用AOP来记录系统操作日志。主要思路是使用AOP的环绕通知和切点表达式，找到需要记录日志的方法，然后通过环绕通知的参数获取请求方法的参数，例如类信息、方法信息、注解、请求方式等，并将这些参数保存到数据库。")]),v._v(" "),_("h3",{attrs:{id:"_4-spring中的事务是如何实现的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-spring中的事务是如何实现的"}},[v._v("#")]),v._v(" 4. Spring中的事务是如何实现的？")]),v._v(" "),_("p",[v._v("Spring实现事务的本质是利用AOP完成的。它对方法前后进行拦截，在执行方法前开启事务，在执行完目标方法后根据执行情况提交或回滚事务。")]),v._v(" "),_("h3",{attrs:{id:"_5-spring中事务失效的场景有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-spring中事务失效的场景有哪些"}},[v._v("#")]),v._v(" 5. Spring中事务失效的场景有哪些？")]),v._v(" "),_("p",[v._v("在项目中，我遇到过几种导致事务失效的场景：")]),v._v(" "),_("ol",[_("li",[v._v("如果方法内部捕获并处理了异常，没有将异常抛出，会导致事务失效。因此，处理异常后应该确保异常能够被抛出。")]),v._v(" "),_("li",[v._v("如果方法抛出非RuntimeException/Error，即检查型异常（checked exception），并且没有在"),_("code",[v._v("@Transactional")]),v._v("注解上配置"),_("code",[v._v("rollbackFor")]),v._v("属性为"),_("code",[v._v("Exception")]),v._v("，那么异常发生时事务可能不会回滚。")]),v._v(" "),_("li",[v._v("如果事务注解的方法不是公开（public）修饰的，也可能导致事务失效。")]),v._v(" "),_("li",[v._v("自调用：如果在类内部方法直接调用带@Transaction的方法，会绕过AOP代理，导致事务失效")])]),v._v(" "),_("h2",{attrs:{id:"_6-spring的bean的生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-spring的bean的生命周期"}},[v._v("#")]),v._v(" 6. Spring的bean的生命周期？")]),v._v(" "),_("p",[v._v("Spring的Bean生命周期主要分为五大步")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("实例化")]),v._v(" "),_("ol",[_("li",[v._v("通过"),_("code",[v._v("BeanDefinition")]),v._v("获取bean的定义信息(beanClassName、initMethodName、propertyValues、scope、lazyInit)。")]),v._v(" "),_("li",[v._v("通过反射调用构造函数或工厂方法创建Bean对象。")])])]),v._v(" "),_("li",[_("p",[v._v("属性赋值")])]),v._v(" "),_("li",[_("p",[v._v("进行bean的依赖注入：通过Setter方法、字段注入（如"),_("code",[v._v("@Autowired")]),v._v("）或构造器注入完成属性赋值")])]),v._v(" "),_("li",[_("p",[v._v("处理循环依赖")])]),v._v(" "),_("li",[_("p",[v._v("Aware接口回调")]),v._v(" "),_("ol",[_("li",[v._v("若Bean实现了"),_("code",[v._v("Aware")]),v._v("接口(BeanNameAware、BeanFactoryAware、ApplicationContextA ware)，会调用相关的Aware注入BeanName、容器等底层资源")])])]),v._v(" "),_("li",[_("p",[v._v("初始化")]),v._v(" "),_("ol",[_("li",[v._v("BeanPostProcessor前置处理")]),v._v(" "),_("li",[v._v("调用初始化生命周期回调（@PostConstruct、InitializingBean#afterPropertiesSet()、init-method）")]),v._v(" "),_("li",[v._v("BeanPostProcessor后置处理 "),_("strong",[v._v("可能在这里产生代理对象")]),v._v("（JDK、CGLIB动态代理）")])])]),v._v(" "),_("li",[_("p",[v._v("销毁")]),v._v(" "),_("ol",[_("li",[v._v("调用销毁生命周期回调（PreDestroy(常用) 、destroy() 、destroy-method）")])])])]),v._v(" "),_("h2",{attrs:{id:"_7-spring中的循环引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-spring中的循环引用"}},[v._v("#")]),v._v(" 7. Spring中的循环引用？")]),v._v(" "),_("p",[v._v("循环依赖发生在两个或两个以上的bean互相持有对方，形成闭环。Spring框架允许循环依赖存在，并通过三级缓存解决大部分循环依赖问题：")]),v._v(" "),_("ol",[_("li",[v._v("一级缓存：单例池，缓存已完成初始化的bean对象。")]),v._v(" "),_("li",[v._v("二级缓存：缓存尚未完成生命周期的早期bean对象。")]),v._v(" "),_("li",[v._v("三级缓存：缓存"),_("code",[v._v("ObjectFactory")]),v._v("，用于创建bean对象。")])]),v._v(" "),_("p",[v._v("构造器注入的循环依赖三级缓存无法解决，需使用注解@Lazy")]),v._v(" "),_("h3",{attrs:{id:"_8-那具体解决流程清楚吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-那具体解决流程清楚吗"}},[v._v("#")]),v._v(" 8. 那具体解决流程清楚吗？")]),v._v(" "),_("p",[v._v("解决循环依赖的流程如下：")]),v._v(" "),_("ol",[_("li",[v._v("实例化A对象，并创建"),_("code",[v._v("ObjectFactory")]),v._v("存入三级缓存。")]),v._v(" "),_("li",[v._v("A在初始化时需要B对象，开始B的创建逻辑。")]),v._v(" "),_("li",[v._v("B实例化完成，也创建"),_("code",[v._v("ObjectFactory")]),v._v("存入三级缓存。")]),v._v(" "),_("li",[v._v("B需要注入A，通过三级缓存获取"),_("code",[v._v("ObjectFactory")]),v._v("生成A对象，存入二级缓存。")]),v._v(" "),_("li",[v._v("B通过二级缓存获得A对象后，B创建成功，存入一级缓存。")]),v._v(" "),_("li",[v._v("A对象初始化时，由于B已创建完成，可以直接注入B，A创建成功存入一级缓存。")]),v._v(" "),_("li",[v._v("清除二级缓存中的临时对象A。")])]),v._v(" "),_("h3",{attrs:{id:"_9-构造方法出现了循环依赖怎么解决"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-构造方法出现了循环依赖怎么解决"}},[v._v("#")]),v._v(" 9. 构造方法出现了循环依赖怎么解决？")]),v._v(" "),_("p",[v._v("由于构造函数是bean生命周期中最先执行的，Spring框架无法解决构造方法的循环依赖问题。可以使用"),_("code",[v._v("@Lazy")]),v._v("懒加载注解，延迟bean的创建直到实际需要时。")]),v._v(" "),_("h2",{attrs:{id:"_10-springmvc的执行流程-视图阶段-jsp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-springmvc的执行流程-视图阶段-jsp"}},[v._v("#")]),v._v(" 10. SpringMVC的执行流程？视图阶段（JSP）")]),v._v(" "),_("p",[v._v("SpringMVC的执行流程包括以下步骤：、")]),v._v(" "),_("p",[_("img",{attrs:{src:"C:/Users/86157/Desktop/blog-img/img/image-20250405003249905.png",alt:"image-20250405003249905"}})]),v._v(" "),_("ol",[_("li",[v._v("用户发送出请求到前端控制器DispatcherServlet（DispatcherServlet是一个调度中心，负责调用其他的组件来完成用户的请求）")]),v._v(" "),_("li",[v._v("DispatcherServlet收到请求调用HandlerMapping(处理器映射器)")]),v._v(" "),_("li",[v._v("HandlerMapping找到具体的处理器，生成处理器对像及处理器拦截器（如果有），再一起返回给DispatcherServlet。")]),v._v(" "),_("li",[v._v("DispatcherServlet调用HandlerAdapter(处理器适配器)")]),v._v(" "),_("li",[v._v("HandlerAdapter经过适配调用具体的处理器(Handler/Controller)，Controller中的方法")]),v._v(" "),_("li",[v._v("Controller执行完成返回ModelAndView对象")]),v._v(" "),_("li",[v._v("HandlerAdapter将Controller执行结果ModelAndView返回给DispatcherServlet")]),v._v(" "),_("li",[v._v("DispatcherServlet将ModelAndView传给ViewReslover(视图解析器)")]),v._v(" "),_("li",[v._v("ViewReslover解析后返回具体View(视图)")]),v._v(" "),_("li",[v._v("DispatcherServlet根据View进行渲染视图（即将模型数据填充至视图中）")]),v._v(" "),_("li",[v._v("DispatcherServlet响应用户")])]),v._v(" "),_("h3",{attrs:{id:"springmvc的四大核心组件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#springmvc的四大核心组件"}},[v._v("#")]),v._v(" SpringMVC的四大核心组件")]),v._v(" "),_("ol",[_("li",[v._v("DispatcherServlet前端控制器，负责接收前端发来的所有请求，然后调用其他的三个组件处理用户请求")]),v._v(" "),_("li",[v._v("HandlerMapping处理器映射器，生成并返回handler处理器")]),v._v(" "),_("li",[v._v("HandlerAdapter处理器适配器，处理handler的参数和返回值")]),v._v(" "),_("li",[v._v("HandlerResolver处理器解析器，将逻辑视图解析为具体视图，")])]),v._v(" "),_("h3",{attrs:{id:"springmvc的执行流程-前后端分离阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#springmvc的执行流程-前后端分离阶段"}},[v._v("#")]),v._v(" SpringMVC的执行流程（前后端分离阶段）")]),v._v(" "),_("p",[_("img",{attrs:{src:"C:/Users/86157/Desktop/blog-img/img/image-20250405142844276.png",alt:"image-20250405142844276"}})]),v._v(" "),_("ol",[_("li",[v._v("用户发送出请求到前端控制器DispatcherServlet")]),v._v(" "),_("li",[v._v("DispatcherServlet收到请求调用HandlerMapping(处理器映射器)")]),v._v(" "),_("li",[v._v("HandlerMapping找到具体的处理器，生成处理器对象及处理器拦截器（如果有），再一起返回给DispatcherServlet。")]),v._v(" "),_("li",[v._v("DispatcherServlet调用HandlerAdapter(处理器适配器)")]),v._v(" "),_("li",[v._v("HandlerAdapter经过适配调用具体的处理器(Handler/Controller)")]),v._v(" "),_("li",[v._v("由于方法上添加了@ResponseBody")]),v._v(" "),_("li",[v._v("处理器会通过HttpMessageConverter将返回结果转换为JSON并响应给用户")])]),v._v(" "),_("h2",{attrs:{id:"_12-spring-的常见注解有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-spring-的常见注解有哪些"}},[v._v("#")]),v._v(" 12. Spring 的常见注解有哪些？")]),v._v(" "),_("p",[v._v("Spring的常见注解包括：")]),v._v(" "),_("ol",[_("li",[v._v("声明Bean的注解："),_("code",[v._v("@Component")]),v._v("、"),_("code",[v._v("@Service")]),v._v("、"),_("code",[v._v("@Repository")]),v._v("、"),_("code",[v._v("@Controller")]),v._v("。")]),v._v(" "),_("li",[v._v("依赖注入相关注解："),_("code",[v._v("@Autowired")]),v._v("、"),_("code",[v._v("@Qualifier")]),v._v("。")]),v._v(" "),_("li",[v._v("设置作用域的注解："),_("code",[v._v("@Scope")]),v._v("。")]),v._v(" "),_("li",[v._v("配置相关注解："),_("code",[v._v("@Configuration")]),v._v("、"),_("code",[v._v("@ComponentScan")]),v._v("、"),_("code",[v._v("@Bean")]),v._v("。")]),v._v(" "),_("li",[v._v("AOP相关注解："),_("code",[v._v("@Aspect")]),v._v("、"),_("code",[v._v("@Before")]),v._v("、"),_("code",[v._v("@After")]),v._v("、"),_("code",[v._v("@Around")]),v._v("、"),_("code",[v._v("@Pointcut")]),v._v("。")])]),v._v(" "),_("h3",{attrs:{id:"autowired和-resource的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#autowired和-resource的区别"}},[v._v("#")]),v._v(" @Autowired和@Resource的区别")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("@Autowired是Spring提供的注解，默认根据类型注入，")])]),v._v(" "),_("li",[_("p",[v._v("@Autowired有一个属性required，默认为true，表示强制要求bean实例的注入，在项目启动时，如果在IOC容器中没有对应类型的Bean就会报错，如果不想要自动注入，也可以设置为false。")])]),v._v(" "),_("li",[_("p",[v._v("但IOC容器中有多个相同类型的Bean，由于@Autowired注解时根据类型注入bean的，所以会报错，可以用@Primary、@Qualifier注解解决，")]),v._v(" "),_("ul",[_("li",[v._v("@Primary是指定主要的bean，当有多个相同类型的bean时，会优先使用声明了@Primary注解的bean。")]),v._v(" "),_("li",[v._v("而使用@Qualifier可以根据bean的名字去装配")])])]),v._v(" "),_("li",[_("p",[v._v("@Resource是JDK提供的注解，Spring提供了对这个注解的支持，")])]),v._v(" "),_("li",[_("p",[v._v("@Resource可以通过属性name和type指定注入bean的方式，使用name可以根据bean的名字注入，type可以根据类型注入，如果都不指定，默认是根据名字注入，如果没有匹配成功，再通过类型注入，如果两个都没有匹配到的话，就会报错。")])]),v._v(" "),_("li",[_("p",[v._v("总结：")]),v._v(" "),_("ul",[_("li",[v._v("@Autowired是spring提供的注解。@Resource是jdk提供的注解，只是spring提供了对这个注解的支持。")]),v._v(" "),_("li",[v._v("@Autowired默认根据类型注入bean，如果有多个相同类型的bean，可以通过@Primary、@Qualifier注解来解决。而@Resource可以指定通过名字或者类型来注入bean。默认是根据bean的名字注入，如果没有匹配到，再根据类型注入。")])])])]),v._v(" "),_("h3",{attrs:{id:"component和-bean的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#component和-bean的区别"}},[v._v("#")]),v._v(" @Component和@Bean的区别")]),v._v(" "),_("p",[v._v("用途：")]),v._v(" "),_("ul",[_("li",[v._v("@Component适用于标注一个普通类")]),v._v(" "),_("li",[v._v("@Bean注解是在配置类的方法上声明和配置一个定制化的Bean对象")])]),v._v(" "),_("p",[v._v("使用方式：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("@Component是一个类级别的注解，Spring通过@ComponentScan注解扫描修饰了@Component注解的类并注册到SpringIOC容器中为Bean")])]),v._v(" "),_("li",[_("p",[v._v("@Bean是方法级别的注解，在带有@Configuration注解的配置类中手动声明和配置Bean")])])]),v._v(" "),_("p",[v._v("控制权：")]),v._v(" "),_("ul",[_("li",[v._v("@Component注解修饰的类是由Spring框架来创建和初始化的")]),v._v(" "),_("li",[v._v("@Bean注解允许开发人员手动控制Bean的创建和配置过程")])]),v._v(" "),_("h3",{attrs:{id:"bean-在-component-和-configuration-中的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bean-在-component-和-configuration-中的区别"}},[v._v("#")]),v._v(" @Bean 在 @Component 和 @Configuration 中的区别")]),v._v(" "),_("ul",[_("li",[_("strong",[_("code",[v._v("@Bean")]),v._v(" 在 "),_("code",[v._v("@Component")]),v._v(" 中")]),v._v("`\n"),_("ul",[_("li",[_("code",[v._v("@Bean")]),v._v(" 方法会被当作普通的工厂方法调用，每次调用都会返回一个新的实例。")]),v._v(" "),_("li",[v._v("不支持 "),_("code",[v._v("@Bean")]),v._v(" 方法之间的依赖注入（通过方法调用）。")])])]),v._v(" "),_("li",[_("strong",[_("code",[v._v("@Bean")]),v._v(" 在 "),_("code",[v._v("@Configuration")]),v._v(" 中")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("@Bean")]),v._v(" 方法会被 Spring 代理，确保\t每次调用返回的是同一个实例（单例）。")]),v._v(" "),_("li",[v._v("支持 "),_("code",[v._v("@Bean")]),v._v(" 方法之间的依赖注入（通过方法调用）。")])])])]),v._v(" "),_("h3",{attrs:{id:"如何给bean指定名称"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何给bean指定名称"}},[v._v("#")]),v._v(" 如何给bean指定名称")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("方法")]),v._v(" "),_("th",[v._v("示例代码")]),v._v(" "),_("th",[v._v("适用场景")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[_("code",[v._v('@Component("name")')])]),v._v(" "),_("td",[_("code",[v._v('@Component("myBean")')])]),v._v(" "),_("td",[v._v("自动扫描组件时指定名称")])]),v._v(" "),_("tr",[_("td",[_("code",[v._v('@Bean(name = "name")')])]),v._v(" "),_("td",[_("code",[v._v('@Bean(name = "customBean")')])]),v._v(" "),_("td",[v._v("在配置类中手动定义Bean时指定名称")])]),v._v(" "),_("tr",[_("td",[_("code",[v._v('@Qualifier("name")')])]),v._v(" "),_("td",[_("code",[v._v('@Qualifier("primaryService")')])]),v._v(" "),_("td",[v._v("解决多Bean冲突时指定限定符")])]),v._v(" "),_("tr",[_("td",[v._v("XML "),_("code",[v._v('<bean id="name">')])]),v._v(" "),_("td",[_("code",[v._v('<bean id="myBean">')])]),v._v(" "),_("td",[v._v("使用XML配置时指定名称")])]),v._v(" "),_("tr",[_("td",[_("code",[v._v('@Named("name")')])]),v._v(" "),_("td",[_("code",[v._v('@Named("customName")')])]),v._v(" "),_("td",[v._v("使用JSR-330标准时指定名称")])])])]),v._v(" "),_("h2",{attrs:{id:"_13-springmvc常见的注解有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-springmvc常见的注解有哪些"}},[v._v("#")]),v._v(" 13. SpringMVC常见的注解有哪些？")]),v._v(" "),_("p",[v._v("SpringMVC的常见注解有：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("@RequestMapping")]),v._v("：映射请求路径，用于类上，表示类中所有的方法都是以该地址为父路径。")]),v._v(" "),_("li",[_("code",[v._v("@RequestBody")]),v._v("：接收HTTP请求的JSON数据，将JSON转换为Java对象。")]),v._v(" "),_("li",[_("code",[v._v("@RequestParam")]),v._v("：指定请求路径的查询参数名称。")]),v._v(" "),_("li",[_("code",[v._v("@PathVariable")]),v._v("：从请求路径中获取参数。")]),v._v(" "),_("li",[_("code",[v._v("@ResponseBody")]),v._v("：将Controller方法返回的对象转化为JSON。")]),v._v(" "),_("li",[_("code",[v._v("@RequestHeader")]),v._v("：获取请求头数据。")]),v._v(" "),_("li",[_("code",[v._v("@RestController")]),v._v("="),_("code",[v._v("@ResponseBody")]),v._v(" + "),_("code",[v._v("@Controller")]),v._v("等。")])]),v._v(" "),_("h2",{attrs:{id:"_14-springboot常见注解有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_14-springboot常见注解有哪些"}},[v._v("#")]),v._v(" 14. Springboot常见注解有哪些？")]),v._v(" "),_("p",[v._v("Spring Boot的常见注解包括：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("@SpringBootApplication")]),v._v("：由"),_("code",[v._v("@SpringBootConfiguration")]),v._v("、"),_("code",[v._v("@EnableAutoConfiguration")]),v._v("和"),_("code",[v._v("@ComponentScan")]),v._v("组成。")]),v._v(" "),_("li",[_("code",[v._v("@SpringBootConfiguration")]),v._v("是组合了"),_("code",[v._v("@Configuration")])]),v._v(" "),_("li",[_("code",[v._v("@EnableAutoConfiguration")]),v._v("打开自动配置功能")])]),v._v(" "),_("h2",{attrs:{id:"_15-mybatis执行流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_15-mybatis执行流程"}},[v._v("#")]),v._v(" 15. MyBatis执行流程？")]),v._v(" "),_("p",[v._v("MyBatis的执行流程如下：")]),v._v(" "),_("ol",[_("li",[v._v("读取MyBatis"),_("strong",[v._v("全局配置文件"),_("code",[v._v("mybatis-config.xml")]),v._v("和配置文件")]),v._v("。")]),v._v(" "),_("li",[v._v("构造会话工厂"),_("code",[v._v("SqlSessionFactory")]),v._v("。")]),v._v(" "),_("li",[v._v("会话工厂创建"),_("code",[v._v("SqlSession")]),v._v("对象。")]),v._v(" "),_("li",[v._v("创建操作数据库的接口，"),_("code",[v._v("Executor")]),v._v("执行器。")]),v._v(" "),_("li",[v._v("获取Mapper代理对象")]),v._v(" "),_("li",[_("code",[v._v("Executor")]),v._v("执行方法中的"),_("code",[v._v("MappedStatement")]),v._v("类型的参数。")]),v._v(" "),_("li",[v._v("输入参数映射，从Java类型->JDBC类型。")]),v._v(" "),_("li",[v._v("执行SQL")]),v._v(" "),_("li",[v._v("输出结果映射，从JDBC类型->Java类型。")])]),v._v(" "),_("h2",{attrs:{id:"_16-mybatis是否支持延迟加载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_16-mybatis是否支持延迟加载"}},[v._v("#")]),v._v(" 16. Mybatis是否支持延迟加载？")]),v._v(" "),_("p",[v._v("MyBatis支持延迟加载，即在需要用到数据时才加载。主要用于处理 "),_("strong",[v._v("关联数据")]),v._v("，即那些不是主查询直接返回，而是通过额外 SQL 查询获取的数据。可以通过配置文件中的"),_("code",[v._v("lazyLoadingEnabled")]),v._v("配置启用或禁用延迟加载。")]),v._v(" "),_("h2",{attrs:{id:"_17-延迟加载的底层原理知道吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_17-延迟加载的底层原理知道吗"}},[v._v("#")]),v._v(" 17. 延迟加载的底层原理知道吗？")]),v._v(" "),_("p",[v._v("延迟加载的底层原理主要使用CGLIB动态代理实现：")]),v._v(" "),_("ol",[_("li",[v._v("当你查询数据时，Mybatis会使用CGLIB创建目标对象的代理对象，这个代理对象的关联属性（需要关联其他表的字段）是空的。")]),v._v(" "),_("li",[v._v("调用目标方法时，代理对象会拦截这个方法，如果发现查询的目标属性是null值，则先执行SQL查询。")]),v._v(" "),_("li",[v._v("获取数据后，设置属性值再继续执行目标方法。")])]),v._v(" "),_("h2",{attrs:{id:"_18-mybatis的一级、二级缓存用过吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_18-mybatis的一级、二级缓存用过吗"}},[v._v("#")]),v._v(" 18. Mybatis的一级、二级缓存用过吗？")]),v._v(" "),_("p",[v._v("一级缓存：基于PerpetualCache的HashMap本地缓存，其存储作用域为Session,当Sessioni进行flush或close之后，该Session中的所有Cache就将清空，默认打开一级缓存\n二级缓存需要单独开启，作用域为Namespace或mapper，不是依赖于SQL session,默认也是采用PerpetualCache的HashMap存储。通过在核心配置文件和mapper映射文件配置来开启")]),v._v(" "),_("h2",{attrs:{id:"_19-mybatis的二级缓存什么时候会清理缓存中的数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_19-mybatis的二级缓存什么时候会清理缓存中的数据"}},[v._v("#")]),v._v(" 19. Mybatis的二级缓存什么时候会清理缓存中的数据？")]),v._v(" "),_("p",[v._v("当作用域（一级缓存Session/二级缓存Namespaces）进行了"),_("strong",[v._v("新增、修改、删除操作")]),v._v("后，默认该作用域下所有select中的缓存将被清空。")]),v._v(" "),_("h2",{attrs:{id:"依赖注入时推荐使用构造函数注入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入时推荐使用构造函数注入"}},[v._v("#")]),v._v(" 依赖注入时推荐使用构造函数注入")]),v._v(" "),_("p",[v._v("依赖注入的三种方式")]),v._v(" "),_("ol",[_("li",[v._v("使用"),_("code",[v._v("@Autowired")]),v._v("注解：将"),_("code",[v._v("@Autowired")]),v._v("注解直接标记在字段上，Spring会自动注入依赖。")]),v._v(" "),_("li",[v._v("Setter注入：使用"),_("code",[v._v("@Autowired")]),v._v("注解标记Setter方法，Spring会自动调用Setter方法注入依赖。")]),v._v(" "),_("li",[v._v("构造函数注入：如果有构造函数，Spring会自动调用构造函数并注入所需的依赖。")])]),v._v(" "),_("p",[v._v("为什么推荐使用构造函数注入？")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("不可变性（Immutability）")]),v._v(" "),_("ul",[_("li",[v._v("构造函数注入允许将依赖字段声明为"),_("code",[v._v("final")]),v._v("，确保依赖在对象创建后不可变。")])])]),v._v(" "),_("li",[_("p",[v._v("确保依赖项不为null")]),v._v(" "),_("p",[v._v("构造函数注入强制要求在创建对象时提供所有依赖，如果依赖项不存在，编译器会报错")])]),v._v(" "),_("li",[_("p",[v._v("避免循环依赖")]),v._v(" "),_("p",[v._v("构造函数注入可以帮助发现循环依赖问题，因为Spring在启动时会检查构造函数注入的循环依赖。可以通过 "),_("code",[v._v("@Lazy")]),v._v("解决")])]),v._v(" "),_("li",[_("p",[v._v("符合单一职责原则")]),v._v(" "),_("p",[v._v("构造函数注入强制要求类的依赖在构造函数中明确声明，有助于遵循单一职责原则（SRP）。")])])]),v._v(" "),_("p",[v._v("使用构造函数时，当一个类只有一个构造函数时，Spring 会自动选择它进行注入，无需额外注解。如果有多个构造函数，需要使用 "),_("code",[v._v("@Autowired")]),v._v(" 或 "),_("code",[v._v("@Primary")]),v._v(" 明确指定。")]),v._v(" "),_("p",[v._v("如果需要添加注入的依赖，还需要修改构造函数，这时可以使用lombok工具的RequiredArgsConstructor，会自动注入被final修饰的字段")]),v._v(" "),_("h2",{attrs:{id:"spring通知有哪些类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spring通知有哪些类型"}},[v._v("#")]),v._v(" Spring通知有哪些类型？")]),v._v(" "),_("h2",{attrs:{id:"解释基于xml-schema方式的切面实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解释基于xml-schema方式的切面实现"}},[v._v("#")]),v._v(" 解释基于XML Schema方式的切面实现")]),v._v(" "),_("h2",{attrs:{id:"解释基于注解的切面实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解释基于注解的切面实现"}},[v._v("#")]),v._v(" 解释基于注解的切面实现")]),v._v(" "),_("h2",{attrs:{id:"spring-aop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop"}},[v._v("#")]),v._v(" Spring AOP")]),v._v(" "),_("h3",{attrs:{id:"jdk和cglib动态代理的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jdk和cglib动态代理的区别"}},[v._v("#")]),v._v(" "),_("a",{attrs:{href:"https://www.bilibili.com/video/BV1LK421e7HD",target:"_blank",rel:"noopener noreferrer"}},[v._v("JDK和CGLIB动态代理的区别"),_("OutboundLink")],1)]),v._v(" "),_("ol",[_("li",[v._v("JDK动态代理只提供接口的代理，不支持类的代理。而CGLIB不用实现接口。当被代理的类实现了接口会默认使用jdk代理")]),v._v(" "),_("li",[v._v("JDK动态代理是通过字节码的方式生成的动态代理类，而CGLIB是用ASM的开源字节码生成库生成的代理类（还有其他的相关的类）")]),v._v(" "),_("li",[v._v("JDK动态代理是实现了目标类的接口，而CGLIB是将目标类作为父类进行继承，并重写父类的所有方法")]),v._v(" "),_("li",[v._v("调用时，JDK动态代理是通过反射调用的目标方法，而CGLIB是通过直接子类调用父类的方式调用目标方法")])]),v._v(" "),_("p",[v._v("其他")]),v._v(" "),_("ul",[_("li",[v._v("CGLIB是通过继承做的动态代理，所有如果类被标记为final，那么它是无法使用CGLIB做动态代理的。")]),v._v(" "),_("li",[v._v("CGLIB除了生成目标子类代理类，还有一个FastClass(路由类)，可以（但spring为了和jdk统一，默认没有使用）让本类方法调用进行增强（通过路由类回调代理类来实现方法的增强），而不会像jdk代理那样调用本类方法，增强会失效")]),v._v(" "),_("li",[v._v("JDK和CGLIB的性能：JDK动态代理生成类速度快调用慢，CGLIB生成类速度慢但后续调用快，在老版本CGLIB的速度是JDK速度的10倍左右，但是实际上JDK的速度在版本升级的时候每次都提高很多性能，而CGLIB仍止步不前。在对JDK动态代理与CGib动态代理的代码实验中看，1W次执行下，JDK7及8的动态代理性能比CG引ib要好20%左右。")]),v._v(" "),_("li",[v._v("实现了接口的bean不能用实现类的class对象来获取bean，只能通过其接口的class对象来获取bean（因为实现类不在IOC容器中，被代理拦截了）或者实现类名字（需要用接口接收）\n"),_("ul",[_("li",[v._v("IUserService bean = ioc.getBean(IUserService.class):")]),v._v(" "),_("li",[v._v('IUserService bean = (IUserService) ioc.getBean("userServiceImpl")；')])])])]),v._v(" "),_("h2",{attrs:{id:"spring事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spring事务"}},[v._v("#")]),v._v(" Spring事务")]),v._v(" "),_("h3",{attrs:{id:"spring事务的实现方式和实现原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spring事务的实现方式和实现原理"}},[v._v("#")]),v._v(" Spring事务的实现方式和实现原理")]),v._v(" "),_("h3",{attrs:{id:"spring的事务传播行为"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spring的事务传播行为"}},[v._v("#")]),v._v(" Spring的事务传播行为")]),v._v(" "),_("h3",{attrs:{id:"spring的事务隔离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spring的事务隔离"}},[v._v("#")]),v._v(" spring的事务隔离？")]),v._v(" "),_("h3",{attrs:{id:"spring框架的事务管理有哪些优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spring框架的事务管理有哪些优点"}},[v._v("#")]),v._v(" Spring框架的事务管理有哪些优点？")])])}),[],!1,null,null,null);_.default=r.exports}}]);