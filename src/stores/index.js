import React, {createContext,useContext} from 'react';
import authStore from './auth';
import userStore from './user';
import imageStore from './image';
import historyStore from './History';

const storeContext = createContext({
    authStore,
    userStore,
    imageStore,
    historyStore
});

//方便在控制台测试，查看 stores 中的内容
window.stores = {
    authStore,
    userStore,
    imageStore,
    historyStore
};


const useStores = ()=> useContext(storeContext);

export  {useStores};
