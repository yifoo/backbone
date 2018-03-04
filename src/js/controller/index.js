/*
 * @Author: Daniel Hfood 
 * @Date: 2018-01-30 23:47:23 
 * @Last Modified by: Daniel
 * @Last Modified time: 2018-03-04 22:31:12
 */
define(['../view/index/Vindex'],function(Index){
  var control = function(){
      // 实例化
      var index = new Index({el:$('#root')});
      // 最后路由切换时做一些销毁工作，例如view.undelegateEvents(),view.stopListening();Backbone.off();
      control.onRouteChange = function () {
          index.stopListening();      //停止视图事件监听
          index.undelegateEvents();   //删除视图所有委托事件
      };
  };
  return control;
});