// fs文件系统模块
// 1. 导入(安装了node.js就自带了fs)
const fs = require('fs');
// 2. 读文件 fs.readFile(path[,options],callback)  
fs.readFile('./files/cmd.txt', 'utf-8', function (err, dataStr) {
    // console.log(err);
    // console.log('---------');
    // console.log(dataStr);

    // 读取成功，err为null；失败err为错误对象，dataStr为undefined
    if (err) {  //true说明不为null
        return console.log('文件读取失败');
    }
    console.log('文件读取成功：', dataStr);
});

// 3. 写文件 fs.writeFile(file,data[,options],callback)
fs.writeFile('./files/output.txt', 'output test', function (err) {
    if (err) {
        console.log('output result:', err);
    }
})