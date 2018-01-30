var login = require('./login.art');
define([],function(){
  var Login=Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render:function(){
      this.$el.html(login);
    }
  })
  return Login;
})