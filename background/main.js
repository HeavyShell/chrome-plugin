
// 请求api获取对应用户名密码
$.ajax({
    type: 'get',
    url : `http://mock.ixiewei.com/`,
    headers: {},
}).done(function(res){
    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        if(request.type=="getAccount"){
            sendResponse({data:{username:res[0]['name'],password:res[0]['email']}})
        }
	});
}).fail(function(res){
    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        if(request.type=="getAccount"){
            sendResponse({data:{username:'',password:''}})
        }
	});
});
