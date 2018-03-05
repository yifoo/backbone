/*
 * @Author: Daniel Hfood 
 * @Date: 2018-01-30 23:47:00 
 * @Last Modified by: Daniel
 * @Last Modified time: 2018-03-05 22:00:31
 */

var index = require('./index.art');
var main = require('./mainBox/main.art');
define([
  "./headerBox/Vheader",
  "./mainBox/Vmain",
],function(Header,Main){
  var Index=Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render:function(){
      this.$el.html(index);
      var header=new Header({el:this.$el.find("#header")})
      var main=new Main({el:this.$el.find('#main')})
    }
  })
  return Index;
})