count_friends();

function count_friends(){
    
}

chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{fb:"friends"},function(res){
        $("#total_count").html(res.total);
    });
});