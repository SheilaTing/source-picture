import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import {useStores} from '../stores';
import {useHistory} from 'react-router-dom';


const Wrapper = styled.div`
max-width:600px;
margin:30px auto;
border:1px solid #ccc;
box-shadow:2px 2px 4px 0 rgba(0,0,0.2);
border-radies:4px;
padding:20px;
`;
const Title = styled.h1`
text-align:center;  
`;


const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

const Component = () => {
  const {authStore} = useStores();
  // 获取 react-router-dom 中的 history 对象
  const history = useHistory();
  const onFinish = values => {
   // 设置值
    authStore.setUsername(values.username);
    authStore.setPassword(values.password);
    authStore.login().then((user)=>{
      //跳转到首页
     history.push('/');
    }).catch((error)=>{
      console.log(error)
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  // 给 rule 里面的 validator 指定一个函数
  const validateUsername = (rule,value) =>{
    //如果不是字母数字下划线 提醒
    if(/\W/.test(value)) return Promise.reject('只能是字母数字下划线');
    if(value.length < 4 || value.length > 10) return Promise.reject('长度为4-10个字符');
    return Promise.resolve();
  }

  //直接在 rule 里面写一个函数
  const validateConfirm = ({getFieldValue}) =>({
    validator(rule,value){
      if(getFieldValue('password') === value) return Promise.resolve();
      return Promise.reject('两次密码不一致')
    }
  })

  return (
    <Wrapper>
      <Title>登录</Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名" },{
            validator: validateUsername
          }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' },{
            min:4,
            message:'最少4个字符'
          },{
            max:10,
            message:'最大10个字符'
          }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
        </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};
export default Component;