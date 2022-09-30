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
    const req = new XMLHttpRequest();
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
    req.setRequestHeader('content-type','application/json')
    req.addEventListener('load', function(){
        if(req.status == 200 && req.readyState == 4){
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