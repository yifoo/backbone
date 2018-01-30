define([
],function(){
  var Route=Backbone.Router.extend({
    routes:{
      'login':'js/controller/login',
    },
    route:function(route, name, callback){  //重写route方法,匹配js/controller/login的方法
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
          callback = name;
          name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
          var args = router._extractParameters(route, fragment);
          if (router.execute(callback, args, name) !== false) {
              router.trigger.apply(router, ['route:' + name].concat(args));
              router.trigger('route', name, args);
              try {
                  var nameArr = name.split("/");
                  window.controller = require('../'+ name +'.js');
                  if(window.currentController && window.currentController !== window.controller){
                      window.currentController.onRouteChange && window.currentController.onRouteChange();
                  }
                  window.currentController = window.controller;
                  currentController.apply(null,args);
              }
              catch (e) {
                  console.log('控制器的路径错了',e)
              }
              Backbone.trigger('route');
              Backbone.history.trigger('route', router, name, args);
          }
      });
      return this;
    }
  })
  return Route;
})