(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{416:function(t,a,_){"use strict";_.r(a);var v=_(0),i=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-rabbitmq如何保证消息不丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-rabbitmq如何保证消息不丢失"}},[t._v("#")]),t._v(" 1. RabbitMQ如何保证消息不丢失？")]),t._v(" "),a("p",[t._v("我们使用RabbitMQ来确保MySQL和Redis间数据双写的一致性，这要求我们实现消息的高可用性，具体措施包括：")]),t._v(" "),a("ol",[a("li",[t._v("开启生产者确认机制，确保消息能被送达队列，如有错误则记录日志并修复数据。")]),t._v(" "),a("li",[t._v("启用持久化功能，保证消息在未消费前不会在队列中丢失，需要对交换机、队列和消息本身都进行持久化。")]),t._v(" "),a("li",[t._v("对消费者开启自动确认机制，并设置重试次数。例如，我们设置了3次重试，若失败则将消息发送至异常交换机，由人工处理。")])]),t._v(" "),a("h2",{attrs:{id:"_2-rabbitmq消息的重复消费问题如何解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-rabbitmq消息的重复消费问题如何解决"}},[t._v("#")]),t._v(" 2. RabbitMQ消息的重复消费问题如何解决？")]),t._v(" "),a("p",[t._v("我们遇到过消息重复消费的问题，处理方法是：")]),t._v(" "),a("ul",[a("li",[t._v("设置消费者为自动确认模式，如果服务在确认前宕机，重启后可能会再次消费同一消息。")]),t._v(" "),a("li",[t._v("通过业务唯一标识检查数据库中数据是否存在，若不存在则处理消息，若存在则忽略，避免重复消费。")])]),t._v(" "),a("h2",{attrs:{id:"_3-那你还知道其他的解决方案吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-那你还知道其他的解决方案吗"}},[t._v("#")]),t._v(" 3. 那你还知道其他的解决方案吗？")]),t._v(" "),a("p",[t._v("是的，这属于幂等性问题，可以通过以下方法解决：")]),t._v(" "),a("ul",[a("li",[t._v("使用Redis分布式锁或数据库锁来确保操作的幂等性。")])]),t._v(" "),a("h2",{attrs:{id:"_4-rabbitmq中死信交换机了解吗-rabbitmq延迟队列有了解过吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-rabbitmq中死信交换机了解吗-rabbitmq延迟队列有了解过吗"}},[t._v("#")]),t._v(" 4. RabbitMQ中死信交换机了解吗？（RabbitMQ延迟队列有了解过吗？）")]),t._v(" "),a("p",[t._v("了解。我们项目中使用RabbitMQ实现延迟队列，主要通过死信交换机和TTL（消息存活时间）来实现。")]),t._v(" "),a("ul",[a("li",[t._v("消息若超时未消费则变为死信，队列可绑定死信交换机，实现延迟功能。")]),t._v(" "),a("li",[t._v("另一种方法是安装RabbitMQ的死信插件，简化配置，在声明交换机时指定为死信交换机，并设置消息超时时间。")])]),t._v(" "),a("h2",{attrs:{id:"_5-如果有100万消息堆积在mq-如何解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-如果有100万消息堆积在mq-如何解决"}},[t._v("#")]),t._v(" 5. 如果有100万消息堆积在MQ，如何解决？")]),t._v(" "),a("p",[t._v("若出现消息堆积，可采取以下措施：")]),t._v(" "),a("ol",[a("li",[t._v("提高消费者消费能力，如使用多线程。")]),t._v(" "),a("li",[t._v("增加消费者数量，采用工作队列模式，让多个消费者并行消费同一队列。")]),t._v(" "),a("li",[t._v("扩大队列容量，使用RabbitMQ的惰性队列，支持数百万条消息存储，直接存盘而非内存。")])]),t._v(" "),a("h2",{attrs:{id:"_6-rabbitmq的高可用机制了解吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-rabbitmq的高可用机制了解吗"}},[t._v("#")]),t._v(" 6. RabbitMQ的高可用机制了解吗？")]),t._v(" "),a("p",[t._v("我们项目在生产环境使用RabbitMQ集群，采用镜像队列模式，一主多从结构。")]),t._v(" "),a("ul",[a("li",[t._v("主节点处理所有操作并同步给从节点，若主节点宕机，从节点可接替为主节点，但需注意数据同步的完整性。")])]),t._v(" "),a("h2",{attrs:{id:"_7-那出现丢数据怎么解决呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-那出现丢数据怎么解决呢"}},[t._v("#")]),t._v(" 7. 那出现丢数据怎么解决呢？")]),t._v(" "),a("p",[t._v("使用仲裁队列，主从模式，基于Raft协议实现强一致性数据同步，简化配置，提高数据安全性。")])])}),[],!1,null,null,null);a.default=i.exports}}]);