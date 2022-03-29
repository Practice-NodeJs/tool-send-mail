var cronJob = require("cron").CronJob;
var main = require("./sendmail");

var job = new cronJob(
  "*/10 * * * * *",
  () => {
    main()
      .then(() => {
        console.log("Gửi mail thành công !");
      })
      .catch(console.error);
  },
  null,
  false,
  "Asia/Ho_Chi_Minh"
);

module.exports = job;
