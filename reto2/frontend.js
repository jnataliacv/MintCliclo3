// crear ajax request para get post put y delete

//CLIENTES 
function leerClientes(){
//funcion get
    $.ajax({
        url:'....',
        type:'GET',
        dataType:'json',

        success: function(cliente){  //funcion guarda la get data en variable cliente
            let cs = cliente.items; 
            $("#listaClientes").empty();
            for(i=0;i<cs.length;i++){
                $("#listaClientes").append("<b>"+cs[i].id +' '+cs[i].name+"</b> "+cs[i].email+"</br>")
            }  
            console.log()
        },
        error: function(xhr, status){
            alert("ERROR ");
        }
    });   
}

function guardarCliente(){
    //Funcion POST 
    let idCliente = $("#idCliente").val();
    let nombreCliente = $("#nombreCliente").val();
    let emailCliente = $("#emailCliente").val();
    let edadCLiente = $("#edadCliente").val();

    let Cliente = {
        id : idCliente,
        name: nombreCliente,
        email: emailCliente,
        age:  edadCLiente
    }
    const req = new XMLHttpRequest();  // constante nuevo objeto tipo request
    req.open('POST', '......');
    req.setRequestHeader('Content-Type','application/json')
    req.addEventListener('load', function(){
        if(req.status == 201 && req.readyState == 4){
            const res = JSON.parse(req.responseText);
            console.log(res);
        }else{
            throw new Error("Bad POST Request");
        }
    })
    req.send(JSON.stringify(Cliente));
}

function updateCliente(){
    //funcion PUT 
    let idCliente = $("#idCliente").val();
    let nombreCliente = $("#nombreCliente").val();
    let emailCliente = $("#emailCliente").val();
    let edadCLiente = $("#edadCliente").val();

    let Cliente = {
        id : idCliente,
        name: nombreCliente,
        email: emailCliente,
        age:  edadCLiente
    }
    // create a new httpxml request object 
    const req = new XMLHttpRequest();
    req.open('PUT', '.......');
    req.setRequestHeader('content-type','application/json');
    req.addEventListener('load', function(){
        if(req.status == 201 && req.readyState == 4){
            const res = JSON.parse(req.responseText);
            console.log(res);
        }else{
            throw new Error("Bad PUT Request");
        }
    })
    req.send(JSON.stringify(Cliente));
    
}

function deleteCliente(){
    //funcion DELETE  
    let idCliente = $("#idCliente").val();
    let myData = {
        id: idCliente
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: '........',
        type: 'DELETE',
        data: dataToSend,
        contentType: 'application/JSON',
        dataType: 'JSON',
        success: function(respuesta){
            leerClientes();      // es necesario volver a llamar a l a funcion GET para obtener los datos y borrarlos
            alert("se ha eliminado");  //ordenar los resultados en una lista 
        }

    })
};


// MENSAJES
function traerMensaje(){
    //funcion GET 
$.ajax({
    url:'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
    type:'GET',
    dataType:'json',

    success: function(Mensaje){  //funcion guarda la get data en variable Mensaje
        let cr = Mensaje.items; 
        $("#Listamensajes").empty();
        for(i=0;i<cr.length;i++){
            $("#Listamesajes").append("<b>"+cr[i].id +' '+cr[i].messagetext+"</br>")
        }  
    },
    error: function(xhr, status){
        alert("ERROR ");
    }
});   
}

function guardarMensaje(){
    //funcion POST
    let idMensaje = $("#idMensaje").val();  //guardar los atrubitos en la funcion
    let Text = $("#messagetext").val();
    
    let Mensajes = {   //crear json 
        id : idMensaje,
        messagetext : Text
    };
    const req = new XMLHttpRequest();
    req.open('POST', 'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message');
    req.setRequestHeader('Content-Type','application/json');
    req.addEventListener('load', function(){
        if(req.status == 201){  //si el estatus del rquest es exitoso 
            console.log(req.status)
        }else{  // de lo contario lance error 
            throw new Error("BAD POST REQUEST");
        }
    });
    req.send(JSON.stringify(Mensajes));
}

function updateMensaje(){
    //funcion PUT
    let idMensaje = $("#idMensaje").val();
    let Text = $("#messagetext").val();

    let info = {
        id : idMensaje,
        messagetext : Text 
    };

    const req = new XMLHttpRequest();
    req.open('PUT', 'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message');
    req.setRequestHeader('content-type', 'application/json');
    req.addEventListener('load', function(){
        if(req.status == 200 ){
            console.log(req.status);
        }else{
            throw new Error("BAD PUT REQUEST")
        }
    });
    req.send(JSON.stringify(info));
}

function deleteMensaje(){
    //funcion delete

    let idMensaje = $("#idMensaje").val();
    let info = {
        id: idMensaje
    };
    let datatosend = JSON.stringify(info);
    $.ajax({
        url:'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        type:'DELETE',
        data: datatosend,
        contentType:'application/json',  
        dataType: 'json',
        success: function(respuesta){
            traerMensaje();
            alert("se ha eliminado");
        }
    })
};

// HERRAMIENTAS 
function getHerramientas(){
    //FUNCION GET
    $.ajax({
        url:'.....',
        type:'GET',
        dataType:'json',
        success: function(Herramientas){
            let ct = Herramientas.items;
            $("#listaHerramientas").empty();
            for(i=0; i<ct.length;i+=1){
                $("#listaHerramientas").append("<b>"+ct[i].id+''+ct[i].marca+"</b>"+ct[i].modelo+"</br>")
            }
            console.log()
        },
        error: function(xhr, status){
            alert("ERROR");
        }
    });
}
//FUNCION POST
function guardasHerramientas(){
    let idHerramientas = $("#idHerramientas").val();
    let marcaHerramientas = $("#marca").val();
    let modeloHerramientas = $("#modelo").val();
    let categoriaHerramientas = $("#categoria").val();
    let nombreHerramientas = $("#nombre").val();

    let data = {
        id: idHerramientas,
        marca: marcaHerramientas,
        modelo: modeloHerramientas,
        categoria: categoriaHerramientas,
        nombre: nombreHerramientas
    }

    const req = new XMLHttpRequest();
    req.open('POST', '.......');
    req.setRequestHeader('Content-Type', 'application/json')
    req.addEventListener('load', function(){
        if(req.status == 201){
            console.log(req.status);
        }else{
            throw new Error("BAD POST REQUEST")
        }
    })
    req.send(JSON.stringify(data));
}

function updateHerramientas(){
    //FUNCION PUT
    let idHerramientas = $("#idHerramientas").val();
    let marcaHerramientas = $("#marca").val();
    let modeloHerramientas = $("#modelo").val();
    let categoriaHerramientas = $("#categoria").val();
    let nombreHerramientas = $("#nombre").val();

    let data = {
        id: idHerramientas,
        marca: marcaHerramientas,
        modelo: modeloHerramientas,
        categoria: categoriaHerramientas,
        nombre: nombreHerramientas
    }

    const req = new XMLHttpRequest();
    req.open('PUT', '......');
    req.setRequestHeader('Content-Type', 'application/json')
    req.addEventListener('load', function(){
        if(req.status == 201){
            console.log(req.status);
        }else{
            throw new Error("BAD PUT REQUEST")
        }
    })
    req.send(JSON.stringify(data));
}

function deleteHerramientas(){
    //FUNCIOn DELETE
    let idHerramientas = $("#idHerramientas").val();
    let data = {
        id:idHerramientas
    }
    let datatosend = JSON.stringify(data);
    $.ajax({
        url:'',
        type:'DELETE',
        data: datatosend,
        contentType: 'application/json',
        dataType:'json',
        success: function(respuesta){
            getHerramientas();
            alert("SE HA ELIMINADO")
        }
    })
};

// RESERVACION
function traerRerserva(){
    //funcion GET 
$.ajax({
    url:'......',
    type:'GET',
    dataType:'json',

    success: function(Reservacion){  //funcion guarda la get data en variable Mensaje
        let cv = Reservacion.items; 
        $("#ListaReservacion").empty();
        for(i=0;i<cv.length;i++){
            $("#listaReservacion").append("<b>"+cv[i].id +' '+cv[i].fechainicio+"</b> "+cv[i].fechadevolucion+"</br>")
        }  
    },
    error: function(xhr, status){
        alert("ERROR ");
    }
});   
}

function guardarReservacion(){
    //funcion POST
    let idReservacion = $("#idReservacion").val();  //guardar los atrubitos en la funcion
    let Fechainicio = $("#fechainicio").val();
    let fechadevolucion = $("#fechadevolucion").val();
  
    let Reservacion = {   //crear json 
        id : idReservacion,
        fecha_inicio: fechainicio,
        fecha_devolucion: fechadevolucion,
    };
    const req = new XMLHttpRequest();
    req.open('POST', '......');
    req.setRequestHeader('Content-Type','application/json');
    req.addEventListener('load', function(){
        if(req.status == 201){  //si el estatus del rquest es exitoso 
            console.log(req.status)
        }else{  // de lo contario lance error 
            throw new Error("BAD POST REQUEST");
        }
    });
    req.send(JSON.stringify(Reservacion));
}

function updateReservacion(){
    //funcion PUT
    let idReservacion = $("#idReservacion").val();  //actualiza los atributos 
    let fechainicio = $("#fechainicio").val();
    let fechadevolucion = $("#fechadevolucion").val();

    let Reserva = {
        id : idReservacion,
        fecha_inicio: fechainicio,
        fecha_devolucion: fechadevolucion,
    };

    const req = new XMLHttpRequest();
    req.open('PUT', '.....');
    req.setRequestHeader('content-type', 'application/json');
    req.addEventListener('load', function(){
        if(req.status == 200 ){
            console.log(req.status);
        }else{
            throw new Error("BAD PUT REQUEST")
        }
    });
    req.send(JSON.stringify(info));
}

function deleteReservacion(){
    //funcion delete

    let idReservacion = $("#idReservacion").val();
    let Reserva = {
        id: idReservacion
    };
    let datatosend = JSON.stringify(info);
    $.ajax({
        url:'........',
        type:'DELETE',
        data: datatosend,
        contentType:'application/json',  
        dataType: 'json',
        success: function(response){
            traerRerserva();
            alert("se ha eliminado");
        }
    })
};

//CATEGORIA 
function traerCategoria(){
    //funcion GET 
$.ajax({
    url:'......',
    type:'GET',
    dataType:'json',

    success: function(Categoria){  //funcion guarda la get data
        let ca = Categoria.items; 
        $("#ListaCategoria").empty();
        for(i=0;i<ca.length;i++){
            $("#listaCategoria").append("<b>"+ca[i].id +' '+ca[i].descripcion+"</b> "+ca[i].nombrecategoria+"</br>")
        }  
    },
    error: function(xhr, status){
        alert("ERROR ");
    }
});   
}

function guardarCategoria(){
    //funcion POST
    let idCategoria = $("#idCategoria").val();  //guardar los atrubitos en la funcion
    let descripcion = $("#descripcion").val();
    let nombrecategoria = $("#nombrecategoria").val();
  
    let Categoria = {   //crear json 
        id : idCategoria,
        descripcion: descripcion,
        nombre_categoria: nombrecategoria,
    };
    const req = new XMLHttpRequest();
    req.open('POST', '......');
    req.setRequestHeader('Content-Type','application/json');
    req.addEventListener('load', function(){
        if(req.status == 201){  //si el estatus del rquest es exitoso 
            console.log(req.status)
        }else{  // de lo contario lance error 
            throw new Error("BAD POST REQUEST");
        }
    });
    req.send(JSON.stringify(Categoria));
}

function updateCategoria(){
    //funcion PUT
    let idCategoria = $("#idCategoria").val();  //Actualizar los atrubitos en la funcion
    let descripcion = $("#descripcion").val();
    let nombrecategoria = $("#nombrecategoria").val();
  
    let Categoria = {   //crear json 
        id : idCategoria,
        descripcion: descripcion,
        nombre_categoria: nombrecategoria,
    };

    const req = new XMLHttpRequest();
    req.open('PUT', '.....');
    req.setRequestHeader('content-type', 'application/json');
    req.addEventListener('load', function(){
        if(req.status == 200 ){
            console.log(req.status);
        }else{
            throw new Error("BAD PUT REQUEST")
        }
    });
    req.send(JSON.stringify(Categoria));
}

function deleteCategoria(){
    //funcion delete

    let idCategoria = $("#idCategoria").val();
    let Cate = {
        id: idCategoria
    };
    let datatosend = JSON.stringify(Cate);
    $.ajax({
        url:'........',
        type:'DELETE',
        data: datatosend,
        contentType:'application/json',  
        dataType: 'json',
        success: function(respuesta){
            traerCategoria();
            alert("se ha eliminado");
        }
    })
}
    

