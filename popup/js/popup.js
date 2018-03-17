count_friends();

function count_friends(){
    
}

chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{fb:"friends"},function(res){
        $("#total_count").html(res.total);
    });
});

// $('#token').on('change',function(e){
//     // e.prevenDefault();
//     $("#total_count").html("up");
// })
// var ids;
// window.onload = function() {

//     var fileInput = document.getElementById('fileinput');
//     var fileDisplayArea = document.getElementById('total_count');
//     fileInput.addEventListener('change', function(e) {
        
//         var file = fileInput.files[0];
//         var textType = /text.*/;

//         if (file.type.match(textType)) {
//             var reader = new FileReader();

//             reader.onload = function(e) {
//                 ids = reader.result.split('|');
//                 ids.pop();
//                 console.log(ids);
//             }

//             reader.readAsText(file);	
//         } else {
//             fileDisplayArea.innerText = "File not supported!"
//         }
//     });
// }

$('#btnBrowse').on('click',()=>{
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{btn:"generate"},function(res){
            
        });
    });
});

$('#unf').on('click',()=>{
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{btn:"unf"},function(res){
            
        });
    });
});
