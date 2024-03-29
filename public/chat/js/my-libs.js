function paramsUserConnectServer($elmInputUsername, $elmInputAvatar){
    return {
        username: $elmInputUsername.val(),
        avatar  : $elmInputAvatar.val()
    }
}

function paramsUserSendRequestAddFriend($elmInputUsername, $elmInputAvatar, toUsername, toAvatar){
    return {
        fromUsername: $elmInputUsername.val(),
        fromAvatar  : $elmInputAvatar.val(),
        toUsername  : toUsername,
        toAvatar    : toAvatar
    }
}

function paramsClientSendAddFriend($elmInputUsername, $elmInputAvatar, toSocketID){

    return {
        fromUsername: $elmInputUsername.val(),
        fromAvatar  : $elmInputAvatar.val(),
        toSocketID  : toSocketID
    }
}

function showNotify(content) {
    $.notify({
        message: content
    },{
        type: 'success',
        allow_dismiss: true,
        placement: {
            from: "bottom",
            align: "right"
        }
    });
}

function paramsUserConnectRoom($elmInputUsername, $elmInputAvatar, $elmInputRoom){
    return {
        username: $elmInputUsername.val(),
        avatar  : $elmInputAvatar.val(),
        room    : $elmInputRoom.val()
    }
}

function paramsUserSendAllMessage($elmInputMessage, $elmInputUsername, $elmInputAvatar){
    return {
        content: $elmInputMessage.val(),
        username: $elmInputUsername.val(),
        avatar: $elmInputAvatar.val()
    }
}

function paramsUserSendAllMessageFromRoom($elmInputMessage, $elmInputUsername, $elmInputAvatar, $elmInputRoom){
    return {
        content: $elmInputMessage.val(),
        username: $elmInputUsername.val(),
        avatar: $elmInputAvatar.val(),
        room    : $elmInputRoom.val()
    }
}


function paramsUserTyping($elmInputUsername, showTyping){
    return { 
        username: $elmInputUsername.val(), 
        showTyping: showTyping 
    }
}

function paramsUserTypingFromRoom($elmInputUsername, showTyping, $elmInputRoom){
    return { 
        username: $elmInputUsername.val(), 
        showTyping: showTyping ,
        room    : $elmInputRoom.val()
    }
}

function showListMessage(data, $elmInputUsername, $tmplMessageChat, $elmListMessage){
    let typeShow = "";
    let classUsername = "pull-left";
    let classCreated = "pull-right";

    if($elmInputUsername.val() == data.username ){
        typeShow        = "right";
        classUsername   = "pull-right";
        classCreated    = "pull-left";
    }
    let template = $tmplMessageChat.html();
    Mustache.parse(template); 
    $elmListMessage.append(Mustache.render(template, { typeShow, classUsername, classCreated, data }));
}

function showError(data, $tmplNotifyError, $elmFormChat){
    let template = $tmplNotifyError.html();
    Mustache.parse(template); 
    $(Mustache.render(template, { data })).insertBefore($elmFormChat );
}

function showTyping(data, $tmplUserTyping, $elmFormChat){
    if(data.showTyping) {
        let template = $tmplUserTyping.html();
        Mustache.parse(template); 
        $(Mustache.render(template, { data })).insertBefore($elmFormChat );
    }else {
        $("p.show-typing").remove();
    }
}

function showListUserOnline(data, $elmInputUsername, $tmplUserOnline, $elmListUsers, $elmTotalUser){
    let template = $tmplUserOnline.html();
    let xhtml    = '';
    Mustache.parse(template); 

    for (let i = 0; i < data.length; i++) {
        let user = data[i];
        if($elmInputUsername.val() === user.username) continue;
        xhtml += Mustache.render(template, { user });
    }
    $elmListUsers.html(xhtml);
    $elmTotalUser.html(data.length - 1);
}

$(function () {
    var pathname = window.location.pathname
    var $elmNav=$('#navbar-collapse .navbar-nav a');
    $elmNav.each(function () {
        var link = $(this).attr('href');
        if (pathname === link) {
            $(this).parent('li').addClass('active');
        }
    });
});