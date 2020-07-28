import React from 'react';
import {useStores} from '../stores';
import styled from 'styled-components';
import {observer} from 'mobx-react';


// 给 div 加样式
const Tips = styled.div`
    padding:10px;
    margin:30px 0;
    color:#fff;
    border-radius:5px;
    background: orange;
`;


// {children} 可以获取到该组件中间的子元素
// <component>{children}</component>
//该组件中，我们判断用户是否登录,如果未登录给出提示
const Component = observer(({children})=>{
    const {userStore} = useStores();
    return (
        <>
            {
                userStore.currentUser ? null : <Tips>{children}</Tips>
            }
        </>
    )
})

export default Component;