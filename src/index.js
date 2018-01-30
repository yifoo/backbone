import './css/style.css';


$("<div>测试:  这是jquery生成的</div>").appendTo("body")

require([
    './routes/router',
],function(Route) {
    window.route = new Route;
    Backbone.history.start();
});
