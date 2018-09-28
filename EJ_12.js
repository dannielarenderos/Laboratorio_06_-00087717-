


var MENU = function (num) {

    var arregloPer = []
    if (num == 1)
    {
    
    var nombre = prompt("INGRESE NOMBRE");
    var apellido  = prompt("INGRESE APELLIDO");
    var fecha = prompt("INGRESE FECHA");
    var telefono = prompt("INGRESE TEL");
    var email = prompt ("INGRESE EMAIL");
    
    objetoCrear(nombre, apellido, fecha, telefono, email);

    arregloPer.push(objetoCrear);
    
    }
    
    
    }
    

    
    
    var objetoCrear = function (nombre, apellido, fecha, telefono, email)
    {
        return {
            Nombre: nombre,
            Apellido: apellido,
            Fecha: fecha,
            Telefono: telefono,
            Email: email,
        }}