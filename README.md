# 简介
这是一个仿常见电子商务商城的网站，提供基于后端Firestore数据的商品展示、商品购物车、用户登录注册、基于stripe的模拟支付等常见电商商城功能。
# 安装与启动
## 安装
### NPM
    npm i
## 启动
### NPM
    npm run dev
完整启动前端client和一个用于模拟支付的简易express服务器
# 常见问题说明
## 快速预览
    https://weifeng-shop.herokuapp.com/
基于Heroku服务器
## 由于需要个人秘钥等导致的无法启动
若希望本地启动可能会因没有更新软件中密钥等信息发生错误。
### FireStore
https://firebase.google.com/
由于有基于firestore的登录、信息存储功能，因此若本地启动需要先注册firestore账户，从firestore网站中获得账户配置信息，并把配置信息更新到firebase.utils.js文件中的config变量中
### Stripe
    https://stripe.com/zh-cn-hk
由于测试支付功能的Stripe组件需要提供个人密钥，因此需要注册stripe账户后从stripe网站获取个人test模式下的publishableKey并更新到stripe-button.component中的publishableKey变量下。此外还需获取test模式下的STRIPE_SECRET_KEY并更新到.env文件中（若缺少.env文件则需要在src目录下新建）
### 联系我
邮箱：wwf410918701@126.com
微信：wwf410918701
电话：15920133903