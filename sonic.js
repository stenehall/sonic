var Igelkott = require('igelkott');

var Sonic = function Sonic() {
  Igelkott.call(this);
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

var sonic = new Sonic({
  "database": {
    "app_id": process.env.APP_ID,
    "js_key": process.env.JS_KEY
  }
});
sonic.connect();
