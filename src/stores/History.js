import {observable,action} from 'mobx';
import {Uploader} from '../models';
import {message} from 'antd';

class HistoryStore{
    //写了这么多，总结一下 store 中的监控变量的规律
    //一般监控 action 中传递的参数,然后对这些参数,添加 set get 方法
    //还有一些 ui层需要用到的判断逻辑变量，例如 loadding 等
    @observable page=1;
    @observable limit = 10;  // limit 可以更改，默认为10条吧
    @observable isLoadding = false;
    @observable list = []; //用来存放返回结果
    @observable hasMore = true;  // 是否还有更多数据

   
    // 将新请求的数据 concat 到原来的数据上
    @action append(newList){
        this.list = this.list.concat(newList);
    }

    @action find(){
        this.isLoadding = true;
        Uploader.find({page:this.page,limit:this.limit})
        .then(newList=>{
            this.append(newList);
            this.page++;  // 请求成功后页码++
            // 判断是否还有更多数据,如果请求回来的条数小于limit 则还有
            if(newList.length < this.limit){
                this.hasMore = false;
            }
        }).catch(error=>{
            message.error('加载数据失败')
        }).finally(()=>{
            this.isLoadding = false;
        })
    }


    @action reset(){
        // 或者卸载组件时 清空列表
        this.list = [];
        this.isLoadding = false;
        this.hasMore = true; // 恢复默认
        this.page = 0;
    }
}

export default new HistoryStore();