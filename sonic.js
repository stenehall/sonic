var Igelkott = require('igelkott');

var Sonic = function Sonic(config) {
  Igelkott.call(this, config);
};


Sonic.prototype = Object.create(Igelkott.prototype, {constructor: {value: Sonic}});

Sonic.prototype.load = function load(pluginName) {
  try {
    Igelkott.prototype.load.call(this, pluginName);
  }
  catch (err) {
    this.log(err)
    try {
      this.plugin.load(pluginName, require('igelkott-'+pluginName).Plugin);
    } catch (err)
    {
      this.log('No such plugin: '+pluginName);
    }
  }
};

var config = {
  "database": {
    "app_id": process.env.APP_ID,
    "js_key": process.env.JS_KEY
  }
};

var sonic = new Sonic(config);
sonic.connect();
