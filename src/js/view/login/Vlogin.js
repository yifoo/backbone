var login = require('./login.art');
define([],function(){
  var Login=Backbone.View.extend({
    initialize: function(){
      el:'#id',
      this.render();
    },
    render:function(){
      this.$el.html(login);
    }
  })
  return Login;
})