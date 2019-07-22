const waitTime = 3000;
let currentTime = 0;
let waitInterval = 10;
let percent = 0;

function writeWaitingPercentage(percentage) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting ... ${percentage}%`);
}
const counting = setInterval(function() {
  currentTime += waitInterval;
  percent = Math.floor((currentTime / waitTime) * 100);
  writeWaitingPercentage(percent);
}, waitInterval);

setTimeout(function() {
  clearInterval(counting);
  writeWaitingPercentage(100);
  process.stdout.write("\n\n\n\n");
}, waitTime);

writeWaitingPercentage(percent);
