const fs = require('fs');

fs.readFile('files/score.txt', 'utf-8', function (err, dataStr) {
    // console.log(err);
    if(err){
        return console.log('读取文件失败');
    }
    console.log(dataStr);

    let arrOld = dataStr.split(' ');
    console.log(arrOld);

    let arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'));
    });
    console.log(arrNew);
    const newStr = arrNew.join('\r\n'); //添加换行
    console.log(newStr);

    fs.writeFile('files/score-output.txt', newStr, 'utf-8', function (err) {
        if(err){
            return console.log('成绩写入失败');
        }
        console.log('成绩写入成功');
    });

});

