'use strict';

require('./_status-feed.scss');

module.exports = {
  template: require('./status-feed.html'),
  controller: ['$log', 'statusService','fileService', StatusFeedController],
  controllerAs: 'statusFeedCtrl',
  bindings: {
    status: '<',
  },
};

function StatusFeedController($log) {
  $log.debug('Initializing StatusFeedController');
  $log.log('status feed Ctrl', this.status.fileURI);
  // if(!this.status.fileURI) this.status.fileURI = fileService.fileURI;
}
