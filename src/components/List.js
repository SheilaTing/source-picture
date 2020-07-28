import React,{useEffect} from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../stores';
import styled from 'styled-components';
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

// 设置图片大小
const Img = styled.img`
    width:100px;
    height:120px;
    object-fit :contain;
    border:1px solid #eee;
`;

const Component = observer(() => {
    const { historyStore } = useStores();

    //加载更多方法
    const loadMore = ()=>{
        historyStore.find();
    };

    // 使用 useEffect 在组件挂载时重新加载，卸载时把数据清空

    useEffect(()=>{
        console.log('进入组件');
        return()=>{
            console.log('卸载');
            historyStore.reset();
        }
    },[]);  // 第二个参数为空数组,不监控任何state值，只执行一次

    return (
        <div>
            <InfiniteScroll
                initialLoad={true}
                pageStart={1}
                loadMore={loadMore}
                hasMore={!historyStore.isLoadding && historyStore.hasMore}
                useWindow={true}
            >
                <List
                    dataSource={historyStore.list}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <div>
                                <Img src = {item.attributes.file.attributes.url}/>
                            </div>
                            <div>
                             <h5>{item.attributes.filename}</h5>
                            </div>
                            <div>
                    <a target="_blank" href={item.attributes.file.attributes.url}>{item.attributes.file.attributes.url}</a>
                            </div>
                          
                        </List.Item>
                    )}
                >
                    {historyStore.isLoadding && historyStore.hasMore && (
                        <div className="demo-loading-container">
                            <Spin tip="加载中"/>
                        </div>
                    )}
                </List>
            </InfiniteScroll>
        </div>
    )
})

export default Component;