(this.webpackJsonpepic=this.webpackJsonpepic||[]).push([[11],{345:function(e,a,n){"use strict";n.r(a);var t=n(17),r=n(0),s=n.n(r),l=n(347),i=n(350),o=n(172),c=n(18),u=n(62),m=n(3);function p(){var e=Object(t.a)(["\ntext-align:center;  \n"]);return p=function(){return e},e}function d(){var e=Object(t.a)(["\nmax-width:600px;\nmargin:30px auto;\nborder:1px solid #ccc;\nbox-shadow:2px 2px 4px 0 rgba(0,0,0.2);\nborder-radies:4px;\npadding:20px;\n"]);return d=function(){return e},e}var b=c.a.div(d()),f=c.a.h1(p()),h={labelCol:{span:6},wrapperCol:{span:16}},g={wrapperCol:{offset:6,span:18}};a.default=function(){var e=Object(u.a)().authStore,a=Object(m.f)();return s.a.createElement(b,null,s.a.createElement(f,null,"\u767b\u5f55"),s.a.createElement(l.a,Object.assign({},h,{name:"basic",initialValues:{remember:!0},onFinish:function(n){e.setUsername(n.username),e.setPassword(n.password),e.login().then((function(e){a.push("/")})).catch((function(e){console.log(e)}))},onFinishFailed:function(e){console.log("Failed:",e)}}),s.a.createElement(l.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,a){return/\W/.test(a)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):a.length<4||a.length>10?Promise.reject("\u957f\u5ea6\u4e3a4-10\u4e2a\u5b57\u7b26"):Promise.resolve()}}]},s.a.createElement(i.a,null)),s.a.createElement(l.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u592710\u4e2a\u5b57\u7b26"}]},s.a.createElement(i.a.Password,null)),s.a.createElement(l.a.Item,g,s.a.createElement(o.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))}}}]);
//# sourceMappingURL=11.64fd1d67.chunk.js.map