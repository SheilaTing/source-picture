import {observable,action} from 'mobx';
import {Uploader} from '../models';

class ImageStore{
    @observable filename="";
    @observable file = null;
    @observable isUploading=false;
    @observable serverFile = null;


    //设置文件名称
    @action setFilename(newFilename){
        this.filename = newFilename;
    }

    //设置文件对象
    @action setFile(newFile){
        this.file = newFile;
    }

    @action upload(){
        this.isUploading = true;
        // 使用 promise 封装
        return new Promise((resolve,reject)=>{
            Uploader.add(this.file,this.filename)
            .then(serverFile=>{
                // 将服务器返回的文件对象赋值给 serverFile
                this.serverFile = serverFile;
                resolve(serverFile);
            }).catch(err=>{
                console.log('上传失败');
                reject(err);
            }).finally(()=>{
                this.isUploading = false;
            })
        })
    }

    @action reset(){
        this.isUploading =false;
        this.serverFile=null;
    }
}

export default new ImageStore();