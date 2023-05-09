// 相对路径执行容易出错
// __dirname为当前文件路径
console.log(__dirname);
console.log(__filename);

const fs = require('fs');

fs.readFile(__dirname + '/files/score.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        console.log(err);
    }
    console.log('文件读取成功：', dataStr);
});