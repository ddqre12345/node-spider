import Site from '../models/site';
//创建一个插入数据到数据库中的函数
function insert() {
    console.log("进入");
    var site = new Site({
        mum: '1',
        title: '2',
        href: '3',
        author: '4'
    });
    Site.save(function (err, res) {
        if(err){
            console.log("Error: " + err);
        }else{
            console.log("Success Res: " + res)
        }
    });
}
//执行插入操作
insert();