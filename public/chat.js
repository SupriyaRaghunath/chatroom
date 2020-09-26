$(function(){
    var socket=io.connect('http://localhost:3000')

    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var change_username = $("#change_username")
    var chatroom = $("#chatroom")

    change_username.click(function(){
        console.log(username.val())
        socket.emit('change_username',{username : username.val()})
    })

    send_message.click(function(){
        socket.emit('new_message',{message : message.val()})
    })

    socket.on('new_message', (data)=>{
        chatroom.append("<p class='message'>" + data.username + ' : ' + data.message + "</p>")
    })
})