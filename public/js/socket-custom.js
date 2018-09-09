var socket = io();
console.log(socket);

socket.on('connect', function(){
   console.log('conectado al servidor')
}); 

socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor')
})

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
},function (res){
    console.log('Respuesta server:', res)
})

socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje)
})