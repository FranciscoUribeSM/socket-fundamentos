const {io} = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado')

    // client.emit('enviarMensaje', {
    //     usuario: 'Admin',
    //     mensaje: 'Bienvenido a esta aplicacion'
    // });

    client.on('disconnect', () => {
        console.log('usuario se desconecto ')
    })

    // Esccuhar mensaje del cliente
    client.on('enviarMensaje', (data,callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje',data);

        
   
        // if(mensaje.usuario){
        //     callback({
        //         resp:'TODO SALIO BIEN'
        //     });
        // }else{
        //     callback({
        //         resp:'TDO SALIO MAL'
        //     })
        // }
    })
})
