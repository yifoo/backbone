var frame = require('./frame.art');
define([],function(){
  var Frame=Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render:function(){
      this.$el.html(frame);
    }
  })
  return Frame;
})