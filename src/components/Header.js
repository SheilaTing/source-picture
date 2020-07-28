import React from 'react';
import LogoUrl from '../icon.jpg';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import {useStores} from '../stores';
import {observer} from 'mobx-react';  // 监控组件中使用的 store 中的数据变动
import {useHistory} from 'react-router-dom';

const Header = styled.header`
display:flex;
align-items:center;
background-color: #02101f;
padding:10px 100px;
color:#fff;
`;

const Logo = styled.img`
    height:30px;
`;
const StyleLink = styled(NavLink)`
    color:#fff;
    margin-left:30px;


    // 给自己加 & 相当于自己，给每个navLink 加
    &.active{
        border-bottom:1px solid #fff;
    }
`;

const StyleButton = styled(Button)`
    margin-left:10px;
`;
const Login = styled.div`
     margin-left:auto;
`;

const Component = observer(()=>{
    const {userStore,authStore} = useStores();
    const history = useHistory();
    // 点击header 登录按钮，跳转到登录页面
    const handleLoginBtn= ()=>{
        //跳转页面
        history.push('/login');
    } 

    // 点击 header 注册按钮，跳转到注册页面
    const handleRegisterBtn = ()=>{
        history.push('/register')
    }
    // 注销
    const handleLogOut = ()=>{
        authStore.logOut();
    }
    
    return (
        <Header>
           <Logo src={LogoUrl} alt="logo"/>
           <nav>
           <StyleLink activeClassName="active" to="/" exact>首页</StyleLink>
           <StyleLink activeClassName="active" to="/history" >历史</StyleLink>
           <StyleLink activeClassName="active" to="/about" >关于</StyleLink>
           </nav>
          <Login>
              {
                  userStore.currentUser ? <>
                    {userStore.currentUser.attributes.username} <StyleButton type="primary" onClick={()=> handleLogOut()}>注销</StyleButton>
                  </> : <>
                  <StyleButton type="primary" onClick={()=> handleLoginBtn()} >登录</StyleButton>
                  <StyleButton type="primary" onClick={()=> handleRegisterBtn()} >注册</StyleButton>
                  </>
              }
         
           
          </Login>
        </Header>
    )
})

export default Component;