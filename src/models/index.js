// 存放一些请求数据
 import AV,{ Query, User } from 'leancloud-storage';
import resolve from 'resolve';

 AV.init({
    appId: "TfCR5MV0xL388sGuQA7XBDSK-gzGzoHsz",
    appKey: "voR91aKAmhzQP03CzPHr4d9C",
    serverURL: "https://tfcr5mv0.lc-cn-n1-shared.com"
  });

  // 创建一个认证对象，里面包含注册登录等方法
  const Auth = {
      register(username,password){
          let user = new User();
          user.setUsername(username);
          user.setPassword(password);
          return new Promise((resolve,reject)=>{
            // user.signUp().then(
            //     (loginuser)=>{
            //         console.log('注册成功!');
            //         resolve(loginuser);
            //     },(error)=>{
            //         console.log('注册失败!')
            //         reject(error)
            //     }
            // )
            user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
          })
    },
    //登录
    login(username,password){
        return new Promise((resolve,reject)=>{
            // User.logIn(username,).then((user)=>{
            //     resolve('登录成功'+{user})
            // },(error)=>{
            //     reject(error);
            // })
            User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error));
        })
    },
    // 注销
    logOut(){
        User.logOut();
    },

    // AV 提供的
    getCurrentUser(){
        return User.current();
    }
  }

  // 上传文件对象，并添加 add 上传方法
  const Uploader = {
      add(file,filename){
        const item = new AV.Object('Image');
        const avFile = new AV.File(filename, file);
        item.set('file',avFile); // avFile 保存后会生成一个指向它的 url
        item.set('filename',filename);
        item.set('owner',AV.User.current());
        return new Promise((resolve,reject)=>{
            item.save().then(serverFile=> resolve(serverFile),error=> reject(error));
        })
      } ,
      // 查询上传历史,并支持分页 每10条信息一页
      find({page=1,limit=10}){
          // 查询 Image 表中的内容
        const query = new AV.Query('Image');
        query.include('owner');  // 查询包含的字段
        query.limit(limit); //一次查询10条信息
        query.skip((page-1)*limit); // 跳过的条数,其实page可以从1开始
        query.descending('createdAt'); // leanCloud 自动加的字段
        query.equalTo('owner',AV.User.current()); // 只查询当前用户的上传记录
        return new Promise((resolve,reject)=>{
            query.find()
            .then(results=> resolve(results))
            .catch(error=> reject(error))
        })
      }
  }

  export {Auth,Uploader};
