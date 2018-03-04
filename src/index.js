/*
 * @Author: Daniel Hfood 
 * @Date: 2018-01-30 23:47:28 
 * @Last Modified by: Daniel
 * @Last Modified time: 2018-03-04 22:32:59
 */
import "./css/normalize.css";
import "./css/main.less";
import utils from './common/utils';

window.onresize =function(){  
  utils.changeRootSize();
}  
window.onload=function(){
  utils.changeRootSize();
}


require([
    './routes/router',
],function(Route) {
    window.route = new Route;
    Backbone.history.start();
});
