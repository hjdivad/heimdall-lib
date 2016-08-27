module.exports = {
  count: 1000,
  name: 'Start Stop (with own stats + monitor)',
  setup: function() {
    var Heimdall = process.Heimdall;
    var heimdall = new Heimdall();
    function MySchema() {
      this.x = 0;
    }
    function MonitorSchema() {
      this.x = 0;
    }
    heimdall.registerMonitor('mon', MonitorSchema);
  },
  fn: function() {
    var a = heimdall.start('a');
    var b = heimdall.start('b', MySchema);
    b.stats.x++;
    heimdall.statsFor('mon').x++;
    b.stop();
    a.stop();
  }
};
