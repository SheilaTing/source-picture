import React from 'react';
import {useStores} from '../stores';
import {observer} from 'mobx-react';
import Tips from '../components/Tips';
import Uploader from '../components/Uploader';

const Home = observer(()=>{


    return(
        <>
           <Tips>请先登录再上传！！！</Tips>
           <Uploader /> 
        </>
    )
})

export default Home;