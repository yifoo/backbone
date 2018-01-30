/*
 * @Author: Daniel Hfood 
 * @Date: 2018-01-30 23:47:00 
 * @Last Modified by: Daniel 
 * @Last Modified time: 2018-01-30 23:47:00 
 */

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