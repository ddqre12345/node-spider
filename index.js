var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');
var segmentfault = 'https://segmentfault.com';
var segmentfaultUrl = 'https://segmentfault.com/news?page=';

// 得到一个 eventproxy 的实例
var ep = new eventproxy();

var urls = [];
for(let i = 1; i < 6; i++) {
  urls.push('https://segmentfault.com/news?page=' + i);
}

urls.forEach(function (newUrl, index) {
      superagent.get(newUrl)
        .end(function (err, res) {
          console.log('fetch ' + newUrl + ' successful');
          ep.emit('new_html', [newUrl, res.text]);
        });
    });


ep.after('new_html', urls.length, (news => {
       let newList = [];
       news.forEach(topicPair => {
        let topicUrl = topicPair[0];
        let topicHtml = topicPair[1];
        let $ = cheerio.load(topicHtml);
        $('.news__item.stream__item').each((idx, element) => {
          let $element = $(element);    
          let news2 = {
            num: $element.find('.stream__item-zan-number').text().trim(),
            title: $element.find('.news__item-title a').text().trim(),
            href: url.resolve(segmentfault, $element.find("h4 a").attr('href')),
            author: $element.find('.news__item-meta span a').eq(0).text().trim()
          };
          newList.push(news2);
        });
      });
      console.log('final:');
      console.log(newList);
      process.exit();
    }));
