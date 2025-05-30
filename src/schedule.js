const schedule = require('node-schedule');

const date = new Date(2025, 30, 5, 14, 47, 0); // 7th Nov 2023 at 5:30pm

//valid schedule
var job = schedule.scheduleJob(date, function () {
  console.log('Time for tea!');
});

const scheduleJob = () => {
  schedule.scheduleJob('* * * * *', function () {
    console.log('This job runs every 2 minutes');
  });
}


module.exports = {
  scheduleJob
}; 