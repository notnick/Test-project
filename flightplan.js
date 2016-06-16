var plan = require('flightplan');

// configuration
plan.target('production', [
  {
    host: 'icodefish.com',
    username: 'icodsvre',
    port: 21098,
    agent: process.env.SSH_AUTH_SOCK
  },
]);

plan.local(function(local) {


  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '~/www/Test-project');
});
