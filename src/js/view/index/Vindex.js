/*
 * @Author: Daniel Hfood 
 * @Date: 2018-01-30 23:47:00 
 * @Last Modified by: Daniel
 * @Last Modified time: 2018-03-04 22:28:16
 */

var index = require('./index.art');
define([],function(){
  var Index=Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render:function(){
      console.log(this.$el);
      this.$el.html(index);
    }
  })
  return Index;
})