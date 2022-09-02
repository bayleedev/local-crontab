const notifier = require('node-notifier');
const path = require('path');

// String
notifier.notify('Message');

// Object
notifier.notify({
  title: 'My notification',
  message: 'Hello, there!'
});

notifier.notify({
  title: 'Yubikey Issue',
  message: 'Your Yubikey has been ejected, was this intentional?',
  icon: path.join(__dirname, '..', 'icon.png'),
  sound: true,
  wait: true,
}, function (err, response, metadata) {
  console.log('something')
});

notifier.on('click', function (notifierObject, options, event) {
  console.log('click')
});

notifier.on('timeout', function (notifierObject, options) {
  console.log('timeout')
});
