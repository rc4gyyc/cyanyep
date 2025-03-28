(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{413:function(v,_,a){"use strict";a.r(_);var t=a(14),s=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("JVM")]),v._v(" "),_("h1",{attrs:{id:"jvm体系结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm体系结构"}},[v._v("#")]),v._v(" jvm体系结构")]),v._v(" "),_("p",[v._v("ClassLoader类加载器")]),v._v(" "),_("ul",[_("li",[v._v("Bootstrap启动类加载器")]),v._v(" "),_("li",[v._v("Extension扩展类加载器")]),v._v(" "),_("li",[v._v("application应用程序类加载器")]),v._v(" "),_("li",[v._v("自定义类加载器（重写defineClass）")])]),v._v(" "),_("p",[v._v("运行时数据区(jvm内存模型)")]),v._v(" "),_("ul",[_("li",[v._v("程序计数器")]),v._v(" "),_("li",[v._v("jvm栈")]),v._v(" "),_("li",[v._v("本地方法栈")]),v._v(" "),_("li",[v._v("方法区(jdk7前在永久代中，之后在元空间，元空间内存由操作系统内存决定）")]),v._v(" "),_("li",[v._v("堆")])]),v._v(" "),_("p",[v._v("执行引擎")]),v._v(" "),_("ul",[_("li",[v._v("解释器")]),v._v(" "),_("li",[v._v("即时编译器")]),v._v(" "),_("li",[v._v("垃圾回收")])]),v._v(" "),_("p",[v._v("本地方法接口（JNI）")]),v._v(" "),_("p",[v._v("永久代是JDK 8之前HotSpot对方法区的实现，位于堆中。JDK 8及之后：永久代被完全移除，取而代之的是元空间（Metaspace），元空间使用本地内存（Native Memory），不再属于JVM堆。")]),v._v(" "),_("p",[v._v("jdk7之前字符串常量池在方法区中，jdk7及之后在堆中")]),v._v(" "),_("p",[v._v("JDK 8之前：静态变量存储在方法区（永久代）。")]),v._v(" "),_("p",[v._v("JDK 8及之后：静态变量存储在堆中，元空间仅存储类元数据。")]),v._v(" "),_("h1",{attrs:{id:"双亲委派机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派机制"}},[v._v("#")]),v._v(" 双亲委派机制")]),v._v(" "),_("p",[v._v("打破双亲委派机制：重新loadClass方法")]),v._v(" "),_("h2",{attrs:{id:"方法区的回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法区的回收"}},[v._v("#")]),v._v(" 方法区的回收")]),v._v(" "),_("p",[v._v("满足以下一个条件就会被回收")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("此类所有实例对象都已经被回收，在堆中不存在任何该类的实例对象以及子类对象")])]),v._v(" "),_("li",[_("p",[v._v("加载该类的类加载器已经被回收")])]),v._v(" "),_("li",[_("p",[v._v("该类对应的java.lang.Class对象没有在任何地方被引用")])])]),v._v(" "),_("h1",{attrs:{id:"gc算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gc算法"}},[v._v("#")]),v._v(" GC算法")]),v._v(" "),_("h2",{attrs:{id:"引用计数法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引用计数法"}},[v._v("#")]),v._v(" 引用计数法")]),v._v(" "),_("p",[v._v("缺点")]),v._v(" "),_("ol",[_("li",[v._v("每次引用和取消引用都需要维护计数器，对系统性能会有一定的影响")]),v._v(" "),_("li",[v._v("存在循环引用问题，所谓循环引用就是当A引用B，B同时引用A时会出现对象无法回收的问题。")])]),v._v(" "),_("h3",{attrs:{id:"可达性分析算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析算法"}},[v._v("#")]),v._v(" 可达性分析算法")]),v._v(" "),_("p",[v._v("哪些对象被称之为GC Root对象呢？")]),v._v(" "),_("ul",[_("li",[v._v("线程Thread对象。")]),v._v(" "),_("li",[v._v("系统类加载器加载的java.lang.Class对象，引用类中的静态变量。")]),v._v(" "),_("li",[v._v("监视器对象，用来保存同步锁synchronized关键字持有的对象。")]),v._v(" "),_("li",[v._v("本地方法调用时使用的全局对象。")])]),v._v(" "),_("h2",{attrs:{id:"几种常见的对象引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#几种常见的对象引用"}},[v._v("#")]),v._v(" 几种常见的对象引用")]),v._v(" "),_("p",[v._v("可达性算法中描述的对象引用，一般指的是强引用，即是GCRoot对象对普通对象有引用关系，只要这层关系存在，普通对象就不会被回收。除了强引用之外，Java中还设计了几种其他引用方式：")]),v._v(" "),_("ul",[_("li",[v._v("软引用")]),v._v(" "),_("li",[v._v("弱引用")]),v._v(" "),_("li",[v._v("虚引用")]),v._v(" "),_("li",[v._v("终结器引用")])]),v._v(" "),_("h3",{attrs:{id:"软引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#软引用"}},[v._v("#")]),v._v(" 软引用")]),v._v(" "),_("p",[v._v("软引用的执行过程如下：")]),v._v(" "),_("ol",[_("li",[v._v("将对象使用软引用包装起来，new SoftReference<对象类型>(对象)。")]),v._v(" "),_("li",[v._v("内存不足时，虚拟机尝试进行垃圾回收。")]),v._v(" "),_("li",[v._v("如果垃圾回收仍不能解决内存不足的问题，回收软引用中的对象。")]),v._v(" "),_("li",[v._v("如果依然内存不足，抛出OutOfMemory异常。")])]),v._v(" "),_("h3",{attrs:{id:"弱引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#弱引用"}},[v._v("#")]),v._v(" 弱引用")]),v._v(" "),_("p",[v._v("弱引用的整体机制和软引用基本一致，区别在于弱引用包含的对象在垃圾回收时，不管内存够不够都会直接被回收。在JDK 1.2版之后提供了WeakReference类来实现弱引用，弱引用主要在ThreadLocal中使用。")]),v._v(" "),_("p",[v._v("弱引用对象本身也可以使用引用队列进行回收。")]),v._v(" "),_("h3",{attrs:{id:"虚引用和终结器引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚引用和终结器引用"}},[v._v("#")]),v._v(" 虚引用和终结器引用")]),v._v(" "),_("ul",[_("li",[v._v("这两种引用在常规开发中是不会使用的。")]),v._v(" "),_("li",[v._v("虚引用也叫幽灵引用/幻影引用，不能通过虚引用对象获取到包含的对象。虚引用唯一的用途是当对象被垃圾回收器回收时可以接收到对应的通知。Java中使用PhantomReference实现了虚引用，直接内存中为了及时知道直接内存对象不再使用，从而回收内存，使用了虚引用来实现。")]),v._v(" "),_("li",[v._v("终结器引用指的是在对象需要被回收时，终结器引用会关联对象并放置在Finalizer类中的引用队列中，在稍后由一条由FinalizerThread线程从队列中获取对象，然后执行对象的finalize方法，在对象第二次被回收时，该对象才真正的被回收。在这个过程中可以在finalize方法中再将自身对象使用强引用关联上，但是不建议这样做。")])]),v._v(" "),_("h2",{attrs:{id:"垃圾回收算法-核心思想"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法-核心思想"}},[v._v("#")]),v._v(" 垃圾回收算法-核心思想")]),v._v(" "),_("p",[v._v("Java是如何实现垃圾回收的呢？简单来说，垃圾回收要做的有两件事：1、找到内存中存活的对象2、释放不再存活对象的内存，使得程序能再次利用这部分空间")]),v._v(" "),_("h2",{attrs:{id:"垃圾回收算法的评价标准"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法的评价标准"}},[v._v("#")]),v._v(" 垃圾回收算法的评价标准")]),v._v(" "),_("p",[v._v("1.吞吐量")]),v._v(" "),_("p",[v._v("2.最大暂停时间")]),v._v(" "),_("p",[v._v("3.堆使用效率")]),v._v(" "),_("h2",{attrs:{id:"垃圾回收算法-标记清除算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法-标记清除算法"}},[v._v("#")]),v._v(" 垃圾回收算法-标记清除算法")]),v._v(" "),_("p",[v._v("标记清除算法的核心思想分为两个阶段：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("标记阶段，将所有存活的对象进行标记。Java中使用可达性分析算法，从GC Root开始通过引用链遍历出所有存活对象。")])]),v._v(" "),_("li",[_("p",[v._v("清除阶段，从内存中删除没有被标记也就是非存活对象。")])])]),v._v(" "),_("h1",{attrs:{id:"存储位置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储位置"}},[v._v("#")]),v._v(" 存储位置")]),v._v(" "),_("p",[v._v("static final会放入栈中，大于短整型的会放入常量池中，没有final在堆中")]),v._v(" "),_("h1",{attrs:{id:"执行顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序"}},[v._v("#")]),v._v(" 执行顺序")]),v._v(" "),_("p",[v._v("static中执行顺序上到下")]),v._v(" "),_("p",[v._v("代码块>构造函数")]),v._v(" "),_("h1",{attrs:{id:"java的字节码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java的字节码"}},[v._v("#")]),v._v(" java的字节码")]),v._v(" "),_("p",[v._v("使用jclasslib查看java的字节码")]),v._v(" "),_("p",[v._v("ldc使用常量池")]),v._v(" "),_("p",[_("code",[v._v("dup")]),v._v("指令用于复制栈顶的值。将栈顶的值再次压入栈顶，使得栈顶的值出现两次。")]),v._v(" "),_("p",[v._v("iconst_0，常量0")]),v._v(" "),_("p",[v._v("iload_0，局部表量表第一位，如果是static main方法，第一位为args，如果是实例方法，第一位为this")]),v._v(" "),_("p",[v._v("istore_0，读取局部表量表第一位")]),v._v(" "),_("p",[v._v("putstatic #1 将操作数栈中的值赋值给常量池#1位置")]),v._v(" "),_("h2",{attrs:{id:"五种invoke方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五种invoke方法"}},[v._v("#")]),v._v(" 五种invoke方法")]),v._v(" "),_("ol",[_("li",[v._v("invokestatic，调用静态方法")]),v._v(" "),_("li",[v._v("invokespecial，调用对象的private方法，构造方法，以及使用super关键字调用父类实例的方法，构造方法，以及所实现的接口的默认方法")]),v._v(" "),_("li",[v._v("invokevirtual，调用对象的非private方法（可以重写，实现多态）")]),v._v(" "),_("li",[v._v("invokeinterface，调用接口对象的方法")]),v._v(" "),_("li",[v._v("invokedynamic ， 调用动态方法，用于lambda表达式")])]),v._v(" "),_("h1",{attrs:{id:"构造函数的执行顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构造函数的执行顺序"}},[v._v("#")]),v._v(" 构造函数的执行顺序")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("父类的初始化")]),v._v("：\n"),_("ul",[_("li",[v._v("首先，JVM会确保父类已经初始化。如果当前类有父类，则会递归地初始化父类。")])])]),v._v(" "),_("li",[v._v("**调用父类的构造函数 ("),_("code",[v._v("super()")]),v._v(") **：（对应字节码"),_("code",[v._v("aload_0 invokespecial #1")]),v._v("）\n"),_("ul",[_("li",[v._v("在子类的构造函数中，"),_("code",[v._v("super()")]),v._v(" 调用必须是第一条语句（无论是显式的还是隐式的）。这一步确保父类的部分被正确初始化。")])])]),v._v(" "),_("li",[_("strong",[v._v("实例初始化块")]),v._v("：\n"),_("ul",[_("li",[v._v("实例初始化块会在 "),_("code",[v._v("super()")]),v._v(" 调用之后和当前类构造函数主体执行之前运行。如果有多个实例初始化块，它们按照在类中定义的顺序依次执行。")])])]),v._v(" "),_("li",[_("strong",[v._v("当前类的构造函数主体")]),v._v("：\n"),_("ul",[_("li",[v._v("最后，执行当前类构造函数中的代码。")])])])]),v._v(" "),_("h1",{attrs:{id:"异常捕获"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异常捕获"}},[v._v("#")]),v._v(" 异常捕获")]),v._v(" "),_("p",[v._v("异常捕获的原理\n程序运行中触发异常时，Java虚拟机会从上至下遍历异常表中的所有条目。当触发异常的字节码的索引值在某个异常表条目的监控范围内，Java虚拟机会判断所抛出的异常和该条目想要捕获的异常是否匹配。\n1、如果匹配，跳转到“跳转PC”对应的字节码位置。\n2、如果遍历完都不能匹配，说明异常无法在当前方法执行时被捕获，此方法栈帧直接弹出，在上一层的栈帧中进行异常捕获的查询。")]),v._v(" "),_("p",[v._v("finally的处理方式就相对比较复杂一点了，分为以下几个步骤：\n1、finally中的字节码指令会插入到try和catch代码块中，保证在try和catch执行之后一定会执行finally中的代码。\n2、如果抛出的异常范围"),_("strong",[v._v("超过")]),v._v("了Exception,比如Error或者Throwable,此时也要执行"),_("strong",[v._v("finally")]),v._v(","),_("strong",[v._v("所以异常表中增加了两个条目any,可以捕获任意异常")]),v._v("。覆盖了try和catchi两段字节码指令的范围，any代表可以捕获所有种类的异常。在最后需要将异常继续向外抛出")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://stofu80ry.sabkt.gdipper.com/picture/image-20250306202855859.png",alt:"image-20250306202855859"}})])])}),[],!1,null,null,null);_.default=s.exports}}]);