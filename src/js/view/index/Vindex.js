/*
 * @Author: Daniel Hfood 
 * @Date: 2018-01-30 23:47:00 
 * @Last Modified by: Daniel
 * @Last Modified time: 2018-03-05 21:54:27
 */

var index = require('./index.art');
var header = require('./header.art');
var main = require('./mainBox/main.art');
define(["./mainBox/Vmain"],function(Main){
  var Index=Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render:function(){
      this.$el.html(index);
      this.$el.find("#header").html(header);
      var main=new Main({el:this.$el.find('#main')})
    }
  })
  return Index;
})