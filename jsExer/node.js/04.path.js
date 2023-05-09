// 相对路径执行容易出错
// __dirname为当前文件路径
// console.log(__dirname);
// console.log(__filename);

const fs = require('fs');

fs.readFile(__dirname + '/files/score.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        console.log(err);
    }
    // console.log('文件读取成功：', dataStr);
});

// path路径模块
// 导入
const path = require('path');
// 路径拼接
const pathStr = path.join('/a', '/b/c', '../', './d', 'e');
console.log(pathStr);

let pathStr2 = path.join(__dirname, './files/score.txt');
fs.readFile(pathStr2, 'utf-8', function (err, dataStr) {
    if (err) {
        console.log(err);
    }
    console.log('文件读取成功：', dataStr);
});

// 获取路径中的文件名
console.log(path.basename(pathStr2));

let nameWithoutExt=path.basename(pathStr2,'.txt');
console.log(nameWithoutExt);

// 获取路径中的文件扩展名
let ext=path.extname(pathStr2);
console.log(ext);

nameWithoutExt=path.basename(pathStr2,path.extname(pathStr2));
console.log(nameWithoutExt);
