const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const http=require("http");
const bodyParser=require("body-parser");
const routerReq = require('../data/router/req_idea');
const ProgressBar = require('progress');

let app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);

//告诉express去使用webpack-dev-middleware和webpack.dev.js,
//将dev作为中间件运行
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
let server = http.createServer(app);
// Serve the files on port 3000.
server.listen(3000, function () {
  console.log('监听3000端口');
});
app.use( bodyParser.urlencoded({extended:false}) );

app.use('/req', routerReq);



/**
 * 输出进度
 */
var bar = new ProgressBar(':percent :bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  console.log("当前进度",bar.curr+"0%");
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);
