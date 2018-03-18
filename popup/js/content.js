var totalFriends = () => {
    return $('a[data-tab-key="friends"]>span:first').html();
}
chrome.runtime.onMessage.addListener(function (req, sender, res) {
    if (req.fb == "friends") {
        var total_count = totalFriends();
        res({ total: total_count });
    }
    console.log(req.btn)
    if (req.btn == "generate") {
        var ids = req.ids.split('|');
        ids.pop();
        var skip = req.skip.split('|');
        var target = ids.filter(e => !skip.includes(e));
        console.log("ids: " + ids.length);
        console.log("skip: " + skip.length);
        console.log("target: " + target.length);
        var tags = '';
        for (var id of target) {
            tags += `<li style="width:80px;display:inline-block" class="uiMenuItem FriendListUnfriend selected" data-label="Hủy kết bạn"><a id="${id}" class="itemAnchor" role="menuitem" tabindex="1000"
            ajaxify="/ajax/profile/removefriendconfirm.php?uid=${id}&amp;unref=bd_friends_tab&amp;floc=friends_tab" href="#" rel="async-post"><span class="itemLabel fsm">Hủy kết bạn</span></a></li>`;
        }
        var div = `<ul id="custom" style="
                    top: 0px;
                    margin-bottom: 5px;
                    width: 100%;
                    right: 0px;
                    height: 100%;
                    background: red;
                    z-index: 100000000 !IMPORTANT;
                    margin-right: 20px;
                    ">${tags}</ul>`
        // console.log(div);
        console.log($('._5h60 ._30f [role="tabpanel"]'));

        $('._5h60 ._30f [role="tabpanel"]').prepend(div);
    }

    if (req.btn == "unf") {
        var target = $('#custom a');
        var i =0;
        target.each(function(index){
            this.click();
            this.remove();
            var id = $(this).attr('id');
            console.log(`${id} is removed!`);
            pause(3000);
        })
        // for (var a of target) {
        //     i++;
        //     remove(a);
            
        //     pause(3000);
        //     if(i==10)break;
        // }
        alert('DONE');
    }

});

function remove(a) {
   

}

function pause(milliseconds) {
    var dt = new Date();
    while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}