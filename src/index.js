/*
 * @Author: Daniel Hfood 
 * @Date: 2018-01-30 23:47:28 
 * @Last Modified by: Daniel 
 * @Last Modified time: 2018-01-30 23:47:28 
 */
import './css/style.css';


$("<div>测试:  这是jquery生成的</div>").appendTo("body")

require([
    './routes/router',
],function(Route) {
    window.route = new Route;
    Backbone.history.start();
});
