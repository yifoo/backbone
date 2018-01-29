define([
  '../js/frame/Vframe',
],function(Frame){
  var Route=Backbone.Router.extend({
    routes:{
      'index':'js/index/login'
    },
    initialize: function(){
      this.frame = new Frame;
  },
  })
  return Route;
})