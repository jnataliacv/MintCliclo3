// crear ajax request para get post put y delete
//http://127.0.0.1:5500/<your_file_name>

function leerClientes(){
//funcion get
    $.ajax({
        url:'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
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
    //POST function
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
    req.open('POST', 'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client');
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
    //PUT function
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
    req.open('PUT', 'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client');
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
    //DELETE function 
    let idCliente = $("#idCliente").val();
    let myData = {
        id: idCliente
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: 'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
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


// MESSAGES
function traerMensaje(){
$.ajax({
    url:'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
    type:'GET',
    dataType:'json',

    success: function(Mensaje){  //funcion guarda la get data en variable Mensaje
        let cr = Mensaje.items; 
        $("#Messagesl").empty();
        for(i=0;i<cr.length;i++){
            $("#Messagesl").append("<b>"+cr[i].id +' '+cr[i].messagetext+"</br>")
        }  
    },
    error: function(xhr, status){
        alert("ERROR ");
    }
});   
}

function guardarMensaje(){
    let idMensaje = $("#idMensaje").val();  //guardar los atrubitos en la funcion
    let Text = $("#messagetext").val();
    
    let Mensajed = {   //crear json 
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
    req.send(JSON.stringify(Mensajed));
}

function updateMensaje(){
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
        success: function(response){
            traerMensaje();
            alert("se ha eliminado");
        }
    })
};

// TOOL
function getTool(){
    $.ajax({
        url:'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/tool/tool',
        type:'GET',
        dataType:'json',
        success: function(tool){
            let ct = tool.items;
            $("#listaTool").empty();
            for(i=0; i<ct.length;i+=1){
                $("#listaTool").append("<b>"+ct[i].id+''+ct[i].brand+"</b>"+ct[i].model+"</br>")
            }
            console.log()
        },
        error: function(xhr, status){
            alert("ERROR");
        }
    });
}

function saveTool(){
    let Toolid = $("#idTool").val();
    let Toolbrand = $("#brand").val();
    let Toolmod = $("#model").val();
    let Toolcat = $("#category").val();
    let Toolname = $("#name").val();

    let data = {
        id: Toolid,
        brand: Toolbrand,
        model: Toolmod,
        category_id: Toolcat,
        name: Toolname
    }

    const req = new XMLHttpRequest();
    req.open('POST', 'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/tool/tool');
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

function updateTool(){
    let Toolid = $("#idTool").val();
    let Toolbrand = $("#brand").val();
    let Toolmod = $("#model").val();
    let Toolcat = $("#category").val();
    let Toolname = $("#name").val();

    let data = {
        id: Toolid,
        brand: Toolbrand,
        model: Toolmod,
        category_id: Toolcat,
        name: Toolname
    }

    const req = new XMLHttpRequest();
    req.open('PUT', 'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/tool/tool');
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

function deleteTool(){
    let Toolid = $("#idTool").val();
    let data = {
        id:Toolid
    }
    let datatosend = JSON.stringify(data);
    $.ajax({
        url:'https://gba8d2eb10a9b72-dbase1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/tool/tool',
        type:'DELETE',
        data: datatosend,
        contentType: 'application/json',
        dataType:'json',
        success: function(response){
            getTool();
            alert("SE HA ELIMINADO")
        }
    })
}


    

