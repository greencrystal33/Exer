// html文件拆分出css、js、html文件
// 用正则表达式匹配style和script标签里的内容
const fs = require('fs');
const path = require('path');

// 其中\s 表示空白字符， S 表示非空白字符;*表示匹配任意次
let regStyle = /<style>[\s\S]*<\/style>/;
let regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, './day1/素材/index.html'), 'utf-8', function (err, dataStr) {
    if (err) {
        console.log('读取文件失败：', err.message);
    }
    // console.log(dataStr);
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
});

function resolveCSS(htmlStr) {
    let result = regStyle.exec(htmlStr);
    // console.log(result[0]);
    // 去掉style标签
    const newCSS = result[0].replace('<style>', '').replace('</style>', '');
    // 保存css
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, 'utf-8', function (err) {
        if (err) {
            console.log('写入css文件失败：', err.message);
        }
        console.log('写入css文件成功');
    });
}

function resolveJS(htmlStr) {
    let result = regScript.exec(htmlStr);
    // console.log(result[0]);
    // 去掉style标签
    const newJS = result[0].replace('<script>', '').replace('</script>', '');
    // 保存js
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, 'utf-8', function (err) {
        if (err) {
            console.log('写入js文件失败：', err.message);
        }
        console.log('写入js文件成功');
    });
}

function resolveHTML(htmlStr) {
    let newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script src="./index.js"></script>');

    // 保存html
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHtml, 'utf-8', function (err) {
        if (err) {
            console.log('写入html文件失败：', err.message);
        }
        console.log('写入html文件成功');
    });
}
