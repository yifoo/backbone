/*
 * @Author: Daniel Hfood 
 * @Date: 2018-03-05 21:58:29 
 * @Last Modified by: Daniel 
 * @Last Modified time: 2018-03-05 21:58:29 
 */
var header = require('./header.art');
define([],function(){
  var Header=Backbone.View.extend({
    initialize:function(){
      this.render();
    },
    render:function(){
      this.$el.html(header);
      return this;
    }
  })
  return Header;
})