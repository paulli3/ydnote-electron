if (typeof require !="undefined"){
    var {ipcRenderer} = require('electron')
    ipcRenderer.on("log",(d,e)=>{console.log.apply(this,e);})
    ipcRenderer.on("start",start);
};

// import jq from "jquery"
///<reference path="../../node_modules/jquery/jquery.d.ts" />
$(()=>{
    $("#dirlist").click((e)=>{Data.showDirByParent(e.target.getAttribute("data-id"));});    //事件绑定
    $("#dirlist1").click((e)=>{
        let id = e.target.getAttribute("data-id");
        if (e.target.getAttribute("data-isdir")=="1"){
            Data.showDirByParent(id);
        }else{
            // console.log(".........................");
            Data.showDetail(id);
        }
    });    //事件绑定
//     xml2data.parse(`<?xml version="1.0" encoding="UTF-8" standalone="no"?><note xmlns="http://note.youdao.com" file-version="0" schema-version="1.0.3"><head><list id="6veah1523605812993" type="unordered"/></head><body><para><coId>15ohlq1523605813042</coId><text>客户端地址以及demo</text><inline-styles><color><from>0</from><to>11</to><value>#393939</value></color></inline-styles><styles><line-height>4.285714285714286</line-height></styles></para><para><coId>65tqvv1523606456615</coId><text>https://github.com/rabbitmq/rabbitmq-tutorials</text><inline-styles><underline><from>0</from><to>46</to><value>true</value></underline><color><from>0</from><to>46</to><value>#003884</value></color><href><from>0</from><to>46</to><value>https://github.com/rabbitmq/rabbitmq-tutorials</value></href></inline-styles><styles><line-height>4.285714285714286</line-height></styles></para><para><coId>12zldj1523606443696</coId><text/><inline-styles/><styles><line-height>4.285714285714286</line-height></styles></para><para><coId>88peiy1523606443888</coId><text>RabbitMQ与AMQP协议详解</text><inline-styles><font-family><from>0</from><to>17</to><value>Verdana</value></font-family><font-size><from>0</from><to>17</to><value>28</value></font-size><color><from>0</from><to>17</to><value>#333333</value></color><back-color><from>0</from><to>17</to><value>#ffffff</value></back-color><href><from>0</from><to>17</to><value>http://www.cnblogs.com/frankyou/p/5283539.html</value></href></inline-styles><styles><line-height>4.285714285714286</line-height></styles></para><para><coId>79fspe1523605813042</coId><text>1. 消息队列的历史 </text><inline-styles><bold><from>0</from><to>10</to><value>true</value></bold><font-size><from>0</from><to>11</to><value>15</value></font-size><color><from>0</from><to>11</to><value>#333333</value></color><back-color><from>0</from><to>11</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>14yjmy1523605813042</coId><text>了解一件事情的来龙去脉，将不会对它感到神秘。让我们来看看消息队列（Message Queue）这项技术的发展历史。</text><inline-styles><font-size><from>0</from><to>57</to><value>15</value></font-size><color><from>0</from><to>57</to><value>#333333</value></color><back-color><from>0</from><to>57</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>74hbci1523605813042</coId><text>Message Queue的需求由来已久，80年代最早在金融交易中，高盛等公司采用Teknekron公司的产品，当时的Message queuing软件叫做：the information bus（TIB）。 TIB被电信和通讯公司采用，路透社收购了Teknekron公司。之后，IBM开发了MQSeries，微软开发了Microsoft Message Queue（MSMQ）。这些商业MQ供应商的问题是厂商锁定，价格高昂。2001年，Java Message queuing试图解决锁定和交互性的问题，但对应用来说反而更加麻烦了。</text><inline-styles><font-size><from>0</from><to>267</to><value>15</value></font-size><color><from>0</from><to>267</to><value>#333333</value></color><back-color><from>0</from><to>267</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>91rjnz1523605813042</coId><text>于是2004年，摩根大通和iMatrix开始着手Advanced Message Queuing Protocol （AMQP）开放标准的开发。2006年，AMQP规范发布。2007年，Rabbit技术公司基于AMQP标准开发的RabbitMQ 1.0 发布。</text><inline-styles><font-size><from>0</from><to>130</to><value>15</value></font-size><color><from>0</from><to>130</to><value>#333333</value></color><back-color><from>0</from><to>130</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>50utnt1523605813042</coId><text>目前RabbitMQ的最新版本为3.5.7，基于AMQP 0-9-1。 </text><inline-styles><font-size><from>0</from><to>36</to><value>15</value></font-size><color><from>0</from><to>36</to><value>#333333</value></color><back-color><from>0</from><to>36</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><image><coId>1mdob1523605813042</coId><source>http://note.youdao.com/yws/res/6038/9870590E6DC349F3B453CE8264BF2ACA</source><text>图片描述</text><styles><width>586</width></styles></image><para><coId>27nwzg1523605813042</coId><text> </text><inline-styles><font-size><from>0</from><to>1</to><value>15</value></font-size><color><from>0</from><to>1</to><value>#333333</value></color><back-color><from>0</from><to>1</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>66xxcn1523605813042</coId><text>RabbitMQ采用Erlang语言开发。Erlang语言由Ericson设计，专门为开发concurrent和distribution系统的一种语言，在电信领域使用广泛。OTP（Open Telecom Platform）作为Erlang语言的一部分，包含了很多基于Erlang开发的中间件／库／工具，如mnesia／SASL，极大方便了Erlang应用的开发。OTP就类似于Python语言中众多的module，用户借助这些module可以很方便的开发应用。</text><inline-styles><bold><from>10</from><to>11</to><value>true</value></bold><font-size><from>0</from><to>231</to><value>15</value></font-size><color><from>0</from><to>231</to><value>#333333</value></color><back-color><from>0</from><to>10</to><value>#ffffff</value></back-color><back-color><from>10</from><to>16</to><value>#ff00ff</value></back-color><back-color><from>16</from><to>231</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>3enmy1523605813042</coId><text>2. AMQP messaging 中的基本概念 </text><inline-styles><bold><from>0</from><to>24</to><value>true</value></bold><font-size><from>0</from><to>25</to><value>15</value></font-size><color><from>0</from><to>25</to><value>#333333</value></color><back-color><from>0</from><to>25</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><image><coId>36fhfi1523605813042</coId><source>http://note.youdao.com/yws/res/6042/D9C72D7DCF12481CB9A2A850332AD4A9</source><text>图片描述</text><styles><width>554</width></styles></image><list-item level="1" list-id="6veah1523605812993"><coId>66yofz1523605813042</coId><text>Broker: 接收和分发消息的应用，RabbitMQ Server就是Message Broker。</text><inline-styles><bold><from>0</from><to>6</to><value>true</value></bold><font-size><from>0</from><to>51</to><value>15</value></font-size><color><from>0</from><to>6</to><value>#ff0000</value></color><color><from>6</from><to>51</to><value>#333333</value></color><back-color><from>0</from><to>51</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></list-item><list-item level="1" list-id="6veah1523605812993"><coId>23psou1523605813042</coId><text>Virtual host: 出于多租户和安全因素设计的，把AMQP的基本组件划分到一个虚拟的分组中，类似于网络中的namespace概念。当多个不同的用户使用同一个RabbitMQ server提供的服务时，可以划分出多个vhost，每个用户在自己的vhost创建exchange／queue等。</text><inline-styles><bold><from>0</from><to>12</to><value>true</value></bold><font-size><from>0</from><to>148</to><value>15</value></font-size><color><from>0</from><to>12</to><value>#ff0000</value></color><color><from>12</from><to>148</to><value>#333333</value></color><back-color><from>0</from><to>69</to><value>#ffffff</value></back-color><back-color><from>69</from><to>147</to><value>#ff9900</value></back-color><back-color><from>147</from><to>148</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></list-item><list-item level="1" list-id="6veah1523605812993"><coId>93kajj1523605813042</coId><text>Connection: publisher／consumer和broker之间的TCP连接。断开连接的操作只会在client端进行，Broker不会断开连接，除非出现网络故障或broker服务出现问题。</text><inline-styles><bold><from>0</from><to>10</to><value>true</value></bold><font-size><from>0</from><to>101</to><value>15</value></font-size><color><from>0</from><to>10</to><value>#ff0000</value></color><color><from>10</from><to>101</to><value>#333333</value></color><back-color><from>0</from><to>46</to><value>#ffffff</value></back-color><back-color><from>46</from><to>78</to><value>#ff9900</value></back-color><back-color><from>78</from><to>101</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></list-item><list-item level="1" list-id="6veah1523605812993"><coId>12exhf1523605813042</coId><text>Channel: 如果每一次访问RabbitMQ都建立一个Connection，在消息量大的时候建立TCP Connection的开销将是巨大的，效率也较低。Channel是在connection内部建立的逻辑连接，如果应用程序支持多线程，通常每个thread创建单独的channel进行通讯，AMQP method包含了channel id帮助客户端和message broker识别channel，所以channel之间是完全隔离的。Channel作为轻量级的Connection极大减少了操作系统建立TCP connection的开销。</text><inline-styles><bold><from>0</from><to>7</to><value>true</value></bold><font-size><from>0</from><to>271</to><value>15</value></font-size><color><from>0</from><to>7</to><value>#ff0000</value></color><color><from>7</from><to>271</to><value>#333333</value></color><back-color><from>0</from><to>271</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></list-item><list-item level="1" list-id="6veah1523605812993"><coId>82jkeg1523605813042</coId><text>Exchange: message到达broker的第一站，根据分发规则，匹配查询表中的routing key，分发消息到queue中去。常用的类型有：direct (point-to-point), topic (publish-subscribe) and fanout (multicast)。</text><inline-styles><bold><from>0</from><to>8</to><value>true</value></bold><font-size><from>0</from><to>150</to><value>15</value></font-size><color><from>0</from><to>8</to><value>#ff0000</value></color><color><from>8</from><to>150</to><value>#333333</value></color><back-color><from>0</from><to>150</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></list-item><list-item level="1" list-id="6veah1523605812993"><coId>42wnbk1523605813042</coId><text>Queue: 消息最终被送到这里等待consumer取走。一个message可以被同时拷贝到多个queue中。</text><inline-styles><bold><from>0</from><to>5</to><value>true</value></bold><font-size><from>0</from><to>55</to><value>15</value></font-size><color><from>0</from><to>5</to><value>#ff0000</value></color><color><from>5</from><to>55</to><value>#333333</value></color><back-color><from>0</from><to>55</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></list-item><list-item level="1" list-id="6veah1523605812993"><coId>46fxci1523605813042</coId><text>Binding: exchange和queue之间的虚拟连接，binding中可以包含routing key。Binding信息被保存到exchange中的查询表中，用于message的分发依据。</text><inline-styles><bold><from>0</from><to>7</to><value>true</value></bold><font-size><from>0</from><to>98</to><value>15</value></font-size><color><from>0</from><to>7</to><value>#ff0000</value></color><color><from>7</from><to>98</to><value>#333333</value></color><back-color><from>0</from><to>98</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></list-item><para><coId>4xqsi1523605813042</coId><text>3. 典型的“生产／消费”消息模型 </text><inline-styles><bold><from>0</from><to>17</to><value>true</value></bold><font-size><from>0</from><to>18</to><value>15</value></font-size><color><from>0</from><to>18</to><value>#333333</value></color><back-color><from>0</from><to>18</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><image><coId>2ymct1523605813042</coId><source>http://note.youdao.com/yws/res/6037/A81D177981924A01AC0E981284A01D73</source><text>图片描述</text><styles><width>484</width></styles></image><para><coId>64jast1523605813042</coId><text> </text><inline-styles><font-size><from>0</from><to>1</to><value>15</value></font-size><color><from>0</from><to>1</to><value>#333333</value></color><back-color><from>0</from><to>1</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>48ulnc1523605813042</coId><text>生产者发送消息到broker server（RabbitMQ）。在Broker内部，用户创建Exchange／Queue，通过Binding规则将两者联系在一起。Exchange分发消息，根据类型／binding的不同分发策略有区别。消息最后来到Queue中，等待消费者取走。</text><inline-styles><font-size><from>0</from><to>138</to><value>15</value></font-size><color><from>0</from><to>138</to><value>#333333</value></color><back-color><from>0</from><to>138</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>71ovyj1523605813042</coId><text>4. Exchange类型 </text><inline-styles><bold><from>0</from><to>13</to><value>true</value></bold><font-size><from>0</from><to>14</to><value>15</value></font-size><color><from>0</from><to>14</to><value>#333333</value></color><back-color><from>0</from><to>14</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>97vnuk1523605813042</coId><text>Exchange有多种类型，最常用的是Direct／Fanout／Topic三种类型。</text><inline-styles><font-size><from>0</from><to>43</to><value>15</value></font-size><color><from>0</from><to>43</to><value>#333333</value></color><back-color><from>0</from><to>43</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>22ugyv1523605813042</coId><text>Direct </text><inline-styles><font-size><from>0</from><to>7</to><value>15</value></font-size><color><from>0</from><to>7</to><value>#333333</value></color><back-color><from>0</from><to>7</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><image><coId>66wuth1523605813042</coId><source>http://note.youdao.com/yws/res/6041/B0C90B6A05D64D408502141139C55CB8</source><text>图片描述</text><styles><width>385</width></styles></image><para><coId>8oxdd1523605813042</coId><text> </text><inline-styles><font-size><from>0</from><to>1</to><value>15</value></font-size><color><from>0</from><to>1</to><value>#333333</value></color><back-color><from>0</from><to>1</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>24wnak1523605813042</coId><text>Message中的“routing key”如果和Binding中的“binding key”一致， Direct exchange则将message发到对应的queue中。</text><inline-styles><font-size><from>0</from><to>87</to><value>15</value></font-size><color><from>0</from><to>87</to><value>#333333</value></color><back-color><from>0</from><to>87</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>21nlnc1523605813042</coId><text>Fanout </text><inline-styles><font-size><from>0</from><to>7</to><value>15</value></font-size><color><from>0</from><to>7</to><value>#333333</value></color><back-color><from>0</from><to>7</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><image><coId>11bjrr1523605813042</coId><source>http://note.youdao.com/yws/res/6040/2833398CA5D94B7D89CBB843B8E3B812</source><text>图片描述</text><styles><width>463</width></styles></image><para><coId>13lrhg1523605813042</coId><text> </text><inline-styles><font-size><from>0</from><to>1</to><value>15</value></font-size><color><from>0</from><to>1</to><value>#333333</value></color><back-color><from>0</from><to>1</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>26tfuu1523605813042</coId><text>每个发到Fanout类型Exchange的message都会分到所有绑定的queue上去。</text><inline-styles><font-size><from>0</from><to>45</to><value>15</value></font-size><color><from>0</from><to>45</to><value>#333333</value></color><back-color><from>0</from><to>45</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>30zldh1523605813042</coId><text>Topic </text><inline-styles><font-size><from>0</from><to>6</to><value>15</value></font-size><color><from>0</from><to>6</to><value>#333333</value></color><back-color><from>0</from><to>6</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><image><coId>54regd1523605813042</coId><source>http://note.youdao.com/yws/res/6039/DAA818B394ED4F8BA5E77B6CF7204713</source><text>图片描述</text><styles><width>450</width></styles></image><para><coId>0rhxc1523605813042</coId><text> </text><inline-styles><font-size><from>0</from><to>1</to><value>15</value></font-size><color><from>0</from><to>1</to><value>#333333</value></color><back-color><from>0</from><to>1</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>74zxrf1523605813042</coId><text>根据routing key，及通配规则，Topic exchange将分发到目标queue中。</text><inline-styles><font-size><from>0</from><to>47</to><value>15</value></font-size><color><from>0</from><to>47</to><value>#333333</value></color><back-color><from>0</from><to>47</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>52rpor1523605813042</coId><text>Routing key中可以包含两种通配符，类似于正则表达式：</text><inline-styles><font-size><from>0</from><to>31</to><value>15</value></font-size><color><from>0</from><to>31</to><value>#333333</value></color><back-color><from>0</from><to>31</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>18esxr1523605813042</coId><text>“#”通配任何零个或多个word
// “*”通配任何单个word</text><inline-styles><font-family><from>0</from><to>30</to><value>Courier New</value></font-family><font-size><from>0</from><to>30</to><value>12</value></font-size><color><from>0</from><to>1</to><value>#333333</value></color><color><from>1</from><to>26</to><value>#008000</value></color><color><from>26</from><to>30</to><value>#0000ff</value></color><back-color><from>0</from><to>30</to><value>#f5f5f5</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>79irzu1523605813042</coId><text>这里也推荐给想要了解RabbitMQ的同学一个网站，http://tryrabbitmq.com ，它提供在线RabbitMQ 模拟器，可以帮助理解Exchange／queue／binding概念。 </text><inline-styles><underline><from>26</from><to>48</to><value>true</value></underline><font-size><from>0</from><to>100</to><value>15</value></font-size><color><from>0</from><to>26</to><value>#333333</value></color><color><from>48</from><to>100</to><value>#333333</value></color><back-color><from>0</from><to>100</to><value>#ffffff</value></back-color><href><from>26</from><to>48</to><value>http://tryrabbitmq.com/</value></href></inline-styles><styles><line-height>1.8</line-height></styles></para><image><coId>30hsix1523605813042</coId><source>http://note.youdao.com/yws/res/6036/9E073804BBB84EDDA66206BFFAD5DFF1</source><text/><styles><width>554</width></styles></image><para><coId>40sugh1523605813042</coId><text>至此，我们对于消息队列的发展，RabbitMQ的产生，以及AMQP协议中的重要概念做了一个完整的介绍。</text><inline-styles><font-size><from>0</from><to>51</to><value>15</value></font-size><color><from>0</from><to>51</to><value>#333333</value></color><back-color><from>0</from><to>51</to><value>#ffffff</value></back-color></inline-styles><styles><line-height>1.8</line-height></styles></para><para><coId>40vvlx1523605813042</coId><text>标签: RabbitMQ</text><inline-styles><bold><from>0</from><to>4</to><value>true</value></bold><font-family><from>0</from><to>12</to><value>Verdana</value></font-family><color><from>0</from><to>4</to><value>#7e8c8d</value></color><color><from>4</from><to>12</to><value>#9fa4a4</value></color><back-color><from>0</from><to>12</to><value>#ffffff</value></back-color><href><from>4</from><to>12</to><value>http://www.cnblogs.com/frankyou/tag/RabbitMQ/</value></href></inline-styles><styles/></para></body></note>`);
})

function start()
{
    console.log(typeof require);
    Data.showRootDir();
    // Data.showDirByParent();
}
class Data
{
    static showRootDir()
    {
        Data.call("_app_onGetDataList","/",(d)=>{     
            // console.log(d); 
            let ul = $("#dirlist");
            d.forEach(v => {
                ul.append(`<li>
                    <a href="#" data-id="${v.fileEntry.id}">
                        <i class="ico-folder-close"></i>
                        ${v.fileEntry.name}
                        <strong>${v.fileEntry.dirNum + v.fileEntry.fileNum}</strong>
                    </a>
                </li>`);
            });
            $("#sidebar").scrollBar({
                    barWidth:5, //滚动条的宽度(这里根据需要写数值即可，不设置是10,即默认10px)
                    position: "y", //写“x”代表只出水平滚动条，写“y”表示只出垂直滚动条，写“x,y”则出水平和垂直滚动条（只有在内容超出容器时才出现滚动条）
                    wheelDis:20//滚轮滚动一次向下或向上滚动的距离，默认是15，可根据需要修改数值
            });
        });
    }
    static showDirByParent(id)
    {
        Data.call("_app_onGetDatalistByParent",id,(d)=>{     
            // console.log(d); 
            let ul = $("#dirlist1");
            ul.empty();
            
            d.entries.forEach(v => {
                ul.append(`<li><a href="#" data-id="${v.fileEntry.id}" data-isdir="${v.fileEntry.dir?1:0}"><i class="${v.fileEntry.dir ? 'ico-folder-close' : 'ico-file'}"></i>${v.fileEntry.name.replace(".note","")}</a></li>`)
            });
            <any>$("#sidebar1").scrollBar({
                    barWidth:5, //滚动条的宽度(这里根据需要写数值即可，不设置是10,即默认10px)
                    position: "y", //写“x”代表只出水平滚动条，写“y”表示只出垂直滚动条，写“x,y”则出水平和垂直滚动条（只有在内容超出容器时才出现滚动条）
                    wheelDis: 10 //滚轮滚动一次向下或向上滚动的距离，默认是15，可根据需要修改数值
            });
        });
    }
    /**
     * 查看数据详情
     * @param id 
     */
    static showDetail(id)
    {
        Data.call("_app_onGetDataviewById",id,(d)=>{     
            // console.log(d);
            let html = xml2data.parse(d);
            console.log(d);
            $("#body").html(html);
            // let ul = $("#dirlist1");
            // ul.empty();
            
            // d.entries.forEach(v => {
            //     ul.append(`<li><a href="#" data-id="${v.fileEntry.id}" data-isdir="${v.fileEntry.dir?1:0}"><i class="${v.fileEntry.dir ? 'ico-folder-close' : 'ico-file'}"></i>${v.fileEntry.name.replace(".note","")}</a></li>`)
            // });
            
        });
    }
    static call(msgname,param,cb)
    {
        console.log("call=>",msgname,param);
        ipcRenderer.send(msgname,param);
        ipcRenderer.once(msgname+"_replay",(sender,d)=>{
            let ret = null;
            try {
                ret = JSON.parse(d)
            } catch (error) {
                ret = d;
            }
            cb(ret)
        });
    }
}




class xml2data
{
    static  parse(xmlstring)
    {
        let doc = $.parseXML(xmlstring);
        // console.log(doc);
        let childNodes = $(doc).find("body").get(0).children;
        let ret = "";
        for (let i = 0; i < childNodes.length; i++) {
            const v = childNodes[i];
            let funName = "parse_"+v.tagName.replace("-","_");
            if (xml2data[funName]){
                ret += xml2data[funName](v);
            }
        }
        // document.write(ret);
        return ret;
    }

    // static sort(a)
	//    {
	// 	   let ret = {};
	// 	   for (let k in  a)
	// 	   {
	// 		   let p = 100;
	// 		   let [o1,o2] = k.split("-");
	// 		   for (let j in  a)
	// 		   {
	// 			 let [t1,t2] = j.split("-");	
	// 			 o1<t1 ? ++p : --p;
	// 			 o2>t2 ? ++p : --p;
	// 		   }
	// 		   ret[k] = p;
	// 	   }
	// 	   return Object.values(ret).sort().map((v)=>{
	// 			for(let k in ret){
	// 				if (ret[k]==v){
	// 				delete ret[k];
	// 					let [o1,o2] = k.split("-");
	// 					a[k]["s"] = o1;
	// 					a[k]["e"] = o2;
	// 					return a[k];
	// 				}
	// 			}
	// 	   });
    //    }
    static parse_para(data)
    {
        // console.log(data);
        let arr = {};
        let cfg = {};
        $(data).find("from").each((k,v)=>{
            let sk = $(v).text();
            let ek = $(data).find("to").eq(k).text();
            let key =  `${sk}-${ek}`;
            // console.log(key,v.parentNode.nodeName);
            arr[key] = arr[key] ? arr[key] : {};
            let subkey = v.parentNode.nodeName.replace("-","");
            arr[key][subkey] =  $(data).find("value").eq(k).text();
            cfg[sk] = 1;
            cfg[ek] = 1;
        });
        // if (!arr['0-26'])return;
        let d = {};
        let text = $(data).find("text").text();//.replace(/\n {1,}/,"\n");
        let sort = (arr,cfg)=>{
            // let sk = Object.keys(arr).map(v=>{return v.split("-").shift()}).sort().shift();
            let sk = cfg.shift();
            let ek = cfg[0];
            if (!sk || !ek)return;
            for(let i in arr)
            {
                let [start,end] = i.split("-");
                if (start>sk)continue;
                if (end<ek)continue;
                if (end==sk)continue;
                let k = sk + "-" + ek;
                d[k] = d[k] ? d[k] : {};
                // console.log(d[k],arr[i],i,k,sk,ek,start,end);
                Object.assign(d[k],{text:text.substring(sk,ek)},arr[i]);
            }
            sort(arr,cfg);
        }
        sort(arr,Object.keys(cfg));
        
        // console.log(d,arr);
        
        let replacetext = "";
        for (let key in d){

            let subtext = d[key].text;
            let style = "";
            for (let subkey in d[key]){
                let val = d[key][subkey];
                switch(subkey){
                    case "backcolor":
                        style += `background:${val};`
                        break;
                    case "color":
                        style += `color:${val};`
                        break;
                    case "fontsize":
                        style += `font-size:${val}px;`
                        break;
                    case "underline":
                        style += `text-decoration:underline;`
                        break;
                    case "fontfamily":
                        style += `font-family:${val};`
                        break;
                    case "href":
                        break;
                    case "bold":
                        style += `font-weight:bold;`
                        break;
                }
            }
            // replacetext += `<span style="${style}">${subtext}</span>`;
            
            if (d[key]["href"]){
                replacetext += `<a href="${arr[key]["href"]}" style="${style}">${subtext}</a>`;
            }else{
                replacetext += `<span style="${style}">${subtext}</span>`;
            }
        }   
        replacetext = replacetext ? "<div style=''>"+replacetext+"</div>" : "<br/>";
        // replacetext.replace("\n","<br/>");
        // document.write(replacetext)
        return replacetext;
    }

    static parse_list_item(data)
    {
        return `<ul><li>${xml2data.parse_para(data)}</li></ul>`;
    }
    /**
     * 解析图片
     * @param data 
     */
    static parse_image(data){
        let src = $(data).find("source").text();
        let text = $(data).find("text").text();
        let width = $(data).find("width").text();
        // src = src.substr(0,4)=='http' ? src : "http://note.youdao.com/yws/res/6038/"+src;
        return `<div class="img"><img src="${src}" width="${width}" alt="${text}"</div>`;
    }
}