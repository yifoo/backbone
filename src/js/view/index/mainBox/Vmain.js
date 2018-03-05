
/*
 * @Author: Daniel Hfood 
 * @Date: 2018-03-4 21:40:00 
 * @Last Modified by: Daniel
 * @Last Modified time: 2018-03-05 21:54:48
 */
var main = require('./main.art');
define([],function(){
  var Main=Backbone.View.extend({
    initialize:function(){
      this.render();
    },
    render:function(){
      this.$el.html(main);
      return this;
    }
  })
  return Main;
})