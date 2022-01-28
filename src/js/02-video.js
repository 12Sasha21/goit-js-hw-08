const _ = require('lodash');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
};

player.on('timeupdate', _.throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
