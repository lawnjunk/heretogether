'use strict';

require('./_status-feed.scss');

module.exports = {
  template: require('./status-feed.html'),
  controller: ['$log', 'statusService', 'fileService', StatusFeedController],
  controllerAs: 'statusFeedCtrl',
  bindings: {
    status: '<',
  },
};

function StatusFeedController($log) {
  $log.debug('Initializing StatusFeedController');

  this.showEditStatus = false;


}
