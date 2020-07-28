import { observable, action } from 'mobx';
import { Auth } from '../models';
import userStore from './user';
import historyStore from './History';
import imageStore from './image';


class AuthStore {
    @observable isLogin = false;
    @observable isLoadding = false;
    @observable values = {
        username: 'Tingting',
        password: ''
    };

    @action setIsLogin(isLogin) {
        this.isLogin = isLogin;
    }

    @action setPassword(password) {
        this.values.password = password
    }

    @action setUsername(username) {
        this.values.username = username
    }

    // 之所以不在 model 里面写这些逻辑，是因为想把 model 单独当成一个 获取数据的模型，不污染它里面的内容


    @action login() {
        return new Promise((resolve, reject) => {
            Auth.login(this.values.username, this.values.password).then((user) => {
                console.log('登录成功');
                // 登录成功设置 userStore user 信息
                userStore.pullUser();
                resolve(user);
            }).catch((error) => {
                console.log('登录失败')
                reject(error);
            })
        })
      }

    @action register() {
        // console.log("====="+this.values.username)
        // console.log("----"+this.values.password)
        //当用户调用register 方法时，调用models里面的接口
        return new Promise((resolve, reject) => {
            Auth.register(this.values.username, this.values.password).then((user) => {
                console.log('注册成功')
                //注册成功为什么要 setUser  里面将 获取model 中的user, 赋值给 userStore 里面的 user;
                // 一旦登录成功，model 中的 currentUser就会有值，这是 AV 提供的
                userStore.pullUser();
                resolve(user);
            }).catch((error) => {
                console.log('注册失败')
                //重置 user
                userStore.resetUser();
                reject(error);
            })
        })
    }

    @action logOut() {
        Auth.logOut();
        // 用户注销时清空一切数据
        userStore.resetUser();
        historyStore.reset();
        imageStore.reset();
    }
}



export default new AuthStore();