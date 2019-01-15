# 1.express.js 跨域CORS中间件
## 支持前端使用axios
## 默认对option请求拦截，并返回空字符串
 
# 2.安装
```
  npm i ice-cors
```
# 3.使用方法
```javascript
 let app = express();
 let cors=require('ice-cors');
 app.use(cors());
```
### 配置cors
```javascript

app.use(cors({
    optionIntercept: false,//关闭option请求拦截
    customAllowHeaders:['token'],//添加自定义的Access-Control-Allow-Headers
}));
```