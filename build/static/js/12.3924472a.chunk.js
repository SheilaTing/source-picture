(this.webpackJsonpepic=this.webpackJsonpepic||[]).push([[12],{346:function(e,a,n){"use strict";n.r(a);var r=n(17),t=n(0),s=n.n(t),l=n(347),o=n(350),i=n(172),c=n(18),u=n(62),m=n(3);function p(){var e=Object(r.a)(["\ntext-align:center;  \n"]);return p=function(){return e},e}function d(){var e=Object(r.a)(["\nmax-width:600px;\nmargin:30px auto;\nborder:1px solid #ccc;\nbox-shadow:2px 2px 4px 0 rgba(0,0,0.2);\nborder-radies:4px;\npadding:20px;\n"]);return d=function(){return e},e}var b=c.a.div(d()),f=c.a.h1(p()),g={labelCol:{span:6},wrapperCol:{span:16}},h={wrapperCol:{offset:6,span:18}};a.default=function(){var e=Object(u.a)().authStore,a=Object(m.f)();return s.a.createElement(b,null,s.a.createElement(f,null,"\u6ce8\u518c"),s.a.createElement(l.a,Object.assign({},g,{name:"basic",initialValues:{remember:!0},onFinish:function(n){e.setUsername(n.username),e.setPassword(n.password),e.register().then((function(e){console.log("\u6ce8\u518c\u6210\u529f\uff0c\u8df3\u8f6c\u5230\u767b\u5f55\u9875"),a.push("/")})).catch((function(e){console.log(e)}))},onFinishFailed:function(e){console.log("Failed:",e)}}),s.a.createElement(l.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,a){return/\W/.test(a)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):a.length<4||a.length>10?Promise.reject("\u957f\u5ea6\u4e3a4-10\u4e2a\u5b57\u7b26"):Promise.resolve()}}]},s.a.createElement(o.a,null)),s.a.createElement(l.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u592710\u4e2a\u5b57\u7b26"}]},s.a.createElement(o.a.Password,null)),s.a.createElement(l.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801"},function(e){var a=e.getFieldValue;return{validator:function(e,n){return a("password")===n?Promise.resolve():Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4")}}}]},s.a.createElement(o.a.Password,null)),s.a.createElement(l.a.Item,h,s.a.createElement(i.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))}}}]);
//# sourceMappingURL=12.3924472a.chunk.js.map