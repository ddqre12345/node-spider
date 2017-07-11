// const superagent = require('superagent');     //nodejs里面一个非常方便的客户端代理请求模块，支持get,post,put,delete等
// const cheerio = require('cheerio');         //类似于jQuery的DOM操作模块，可以提取html中想要的信息
// const eventproxy = require('eventproxy');     //控制异步请求并发，可以监听请求，使得某些请求完毕之后在发送请求
// const assert = require('assert');             //异常抛出判断模块，assert.equal(err, null);  如果err不为null,则直接抛出异常
// const url = require('url');             //异常抛出判断模块，assert.equal(err, null);  如果err不为null,则直接抛出异常
// const async = require('async');
// const site = require('./models/site');  
// var segmentfault = 'https://segmentfault.com';
// var segmentfaultUrl = 'https://segmentfault.com/news?page=';

// // 得到一个 eventproxy 的实例
// var ep = new eventproxy();


// var urls = [];
// for(let i = 1; i < 6; i++) {
//   urls.push('https://segmentfault.com/news?page=' + i);
// }

// urls.forEach(function (newUrl, index) {
//       superagent.get(newUrl)
//         .end(function (err, res) {
//           console.log('fetch ' + newUrl + ' successful');
//           ep.emit('new_html', [newUrl, res.text]);
//         });
//     });


// ep.after('new_html', urls.length, (news => {
//        let newList = [];
//        news.forEach(topicPair => {
//         let topicUrl = topicPair[0];
//         let topicHtml = topicPair[1];
//         let $ = cheerio.load(topicHtml);
//         $('.news__item.stream__item').each((idx, element) => {
//           let $element = $(element);    
//           let news2 = {
//             num: $element.find('.stream__item-zan-number').text().trim(),
//             title: $element.find('.news__item-title a').text().trim(),
//             href: url.resolve(segmentfault, $element.find("h4 a").attr('href')),
//             author: $element.find('.news__item-meta span a').eq(0).text().trim()
//           };
//           newList.push(news2);
//         });
//       });
//       Site.findOne((err, data) => {
//         if (!data) {
//             newList.forEach(item => {
//             console.log(item);
//           	Site.create(item)
//           })
//         }
//       })
//       console.log('final:');
//       console.log(newList);

//       process.exit();
//     }));
require('babel-core/register');
require('./routes/index');