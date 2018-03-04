/*
 * @Author: Daniel Hfood 
 * @Date: 2018-01-30 23:47:00 
 * @Last Modified by: Daniel
 * @Last Modified time: 2018-03-04 23:25:34
 */

var index = require('./index.art');
var header = require('./header.art');
var main = require('./main.art');
define([],function(){
  var Index=Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render:function(){
      this.$el.html(index);
      this.$el.find("#header").html(header);
      this.$el.find("#main").html(main);
    }
  })
  return Index;
})