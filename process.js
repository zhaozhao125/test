const http = require("http");

const server = http.createServer();
server.listen(3001, () => {
  process.title = "程序员成长指北测试进程";
  console.log("进程id", process.pid);
  console.log("master修改10.06");
});
