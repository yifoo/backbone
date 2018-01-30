define(['../view/login/Vlogin'],function(Login){
  var control = function(){
      // 结构
      //   $('body').html('<div class="indexWrap"></div>');
      // 实例化
      var login = new Login({el:$('#root')});
      // 最后路由切换时做一些销毁工作，例如view.undelegateEvents(),view.stopListening();Backbone.off();
      control.onRouteChange = function () {
          login.stopListening();      //停止视图事件监听
          login.undelegateEvents();   //删除视图所有委托事件
      };
  };
  return control;
});