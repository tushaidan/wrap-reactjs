window.jQuery = window.$ =  require("jquery");
window._ =  require("lodash");

require("jquery-ui");
require("bootstrap");
require("fastclick");
require("moment");
require("moment-timezone");
require("fullcalendar");
require("notification");
require("smartwidgets");
require("easy-pie");
require("sparkline");
require('jvectormap');
require('jvectormap-world-mill-en');
require('d3');

window.SMARTADMIN_GLOBALS = require('./config/config');

require.ensure([], function(require){
    require('./Router.jsx');
});
