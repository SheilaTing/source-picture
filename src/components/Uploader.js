import React,{useRef} from 'react';
import { observer, useLocalStore } from 'mobx-react';
import { useStores } from '../stores';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';

//样式
// 整个显示结果的容器样式
const Result = styled.div`
    margin-top:30px;
    border:1px dashed #cccResult;
    padding:20px;
`;
//标题样式
const H1 = styled.h1`
    text-align:center;
    margin:20px 0;
`;
// 图片预览样式
const Image = styled.img`
    max-width:300px;
`;


const { Dragger } = Upload;

//该组件实现上传图片ui,并根据用户是否登录做处理
const Component = observer(() => {
    const { userStore, imageStore } = useStores();
    //获取 input 输入的宽高
    const ref1 = useRef();
    const ref2 = useRef();
    // 组件内部构建并使用 store
    // 目的是 当设置宽高的input 内容发生变化时执行一个action 方法改变图片的url
    const store = useLocalStore(() => ({
        width: null,
        setWidth(width) {
            this.width = width;
        },
        get widthStr() {
            return this.width ? `/w/${this.width}` : '';
        },
        height: null,
        setHeight(height) {
            this.height = height;
        },
        get heightStr() {
            return this.height ? `/h/${this.height}` : '';
        },
        get fullStr() {
            return imageStore.serverFile.attributes.file.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr;
        }

    }));

    const bindWidthChange = ()=>{
        // 设置 store 中的 宽度
        store.setWidth(ref1.current.value);
    };

    const bindHeightChange = ()=>{
        store.setHeight(ref2.current.value);
    }

    const props = {
        showUploadList: false,  // 隐藏上传后的文件列表
        beforeUpload: file => {
            //调用 imageStore 中的上传方法
            imageStore.setFile(file);
            imageStore.setFilename(file.name);
            if (userStore.currentUser == null) {
                message.warning('请先登录再上传');
                return false;
            }
            imageStore.upload()
                .then((serverfile) => {
                    console.log('上传成功');
                    console.log(serverfile)
                }).catch(() => {
                    console.log('上传失败')
                })
            //return false 就不会自动上传,
            //然后我们在该方法中定义我们自己的逻辑;
            return false;
        },
    };

    return (
        <div>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>

            {/* 根据imageStore 中是否有 serverFile 来展示上传结果 */}
            {
                imageStore.serverFile ? <Result>
                    <H1>上传结果</H1>
                    <dl>
                        <dt>线上地址</dt>
                        <dd>
                            <a target="_blank" href={imageStore.serverFile.attributes.file.attributes.url}>
                                {imageStore.serverFile.attributes.file.attributes.url}
                            </a>
                        </dd>
                        <dt>文件名</dt>
                        <dd>{imageStore.filename}</dd>
                        <dt>图片预览</dt>
                        <dd>
                            <Image src={imageStore.serverFile.attributes.file.attributes.url}></Image>
                        </dd>
                        <dt>更多尺寸</dt>
                        <dd>
                            <input ref={ref1} onChange={bindWidthChange} placeholder="图片宽度" />
                            <input ref={ref2} onChange={bindHeightChange} placeholder="图片高度" />
                        </dd>
                        {/* 加上宽高后的完整路径 */}
                        <dd>
                            <a target="_blank" href={store.fullStr}>{store.fullStr}</a>
                        </dd>
                    </dl>
                </Result> : null
            }


        </div>
    )
})


export default Component;