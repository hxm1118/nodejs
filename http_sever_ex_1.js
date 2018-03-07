/**
 * Created by Administrator on 2018/3/2 0002.
 */
var http = require("http");
var server = http.createServer(function(request,response){
    response.end("zhufengpeixun.cm");
})



server.listen(8080);
