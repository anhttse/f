var totalFriends=()=>{
    return $('a[data-tab-key="friends"]>span:first').html();
}
$.getJSON('https://www.facebook.com/anhttse/friends?lst=100001030139024%3A100001030139024%3A1520935920&source_ref=pb_friends_tl',function(data){
    console.log("data");
});
chrome.runtime.onMessage.addListener(function(req,sender,res){
    if(req.fb=="friends"){
        var total_count = totalFriends();
        res({total:total_count});
    }
    
});

