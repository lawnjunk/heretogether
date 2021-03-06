'use strict';

const debug = require('debug')('ht:server-ctrl');

module.exports = exports = {};

exports.serverUp = function(server, done){
  if(!server.isRunning){
    server.listen(process.env.PORT, () => {
      server.isRunning = true;
      debug('server is up');
      done();
    });
    return;
  }
  done();
};

exports.serverDown = function(server, done){
  if(server.isRunning){
    server.close(err => {
      if(err) return done(err);
      server.isRunning = false;
      debug('server down');
      done();
    });
    return;
  }
  done();
};
