const url = 'https://pokeapi.co/api/v2/pokemon/1/'



fetch(url)
.then(response => response.json())
.then(data => {


  let element = document.getElementById('elemen')
  element.innerHTML = `
  <p>${data.name}</p>

  <img src='${data.sprites.front_default}'/>
  
  
  `;

  console.log(data)
})
.catch(err=>console.log(err))






//CONTACTO

/*

$(document).ready(function () {
    validarDatosContacto();
});*/


function validarDatosContacto() {
    $("#form-contacto").submit(function (e) {
        if ($("#nombre-contacto").val() == "") {
            e.preventDefault();
            $("#error-nombre-contacto").fadeIn();
            $("#nombre-contacto").change(function () {
                $("#error-nombre-contacto").fadeOut();
            });
        } else if ($("#email-contacto").val() == "") {
            e.preventDefault();
            $("#error-email-contacto").fadeIn();
            $("#email-contacto").change(function () {
                $("#error-email-contacto").fadeOut();
            });
        } else if ($("#telefono-contacto").val() == "") {
            e.preventDefault();
            $("#error-telefono-contacto").fadeIn();
            $("#telefono-contacto").change(function () {
                $("#error-telefono-contacto").fadeOut();
            });
        } else if ($("#mensaje-contacto").val() == "") {
            e.preventDefault();
            $("#error-mensaje-contacto").fadeIn();
            $("#mensaje-contacto").change(function () {
                $("#error-mensaje-contacto").fadeOut();
            });
        } else {
            e.preventDefault();

  
            let datosContacto = [];
            datosContacto.push($("#nombre-contacto").val());
            datosContacto.push($("#email-contacto").val());
            datosContacto.push($("#telefono-contacto").val());
            
            //convierto el array a formato JSON para poder subirlo a la API
            let datosContactoJSON = JSON.stringify(datosContacto);
            enviarDatos(datosContactoJSON);

           
            Swal.fire({
                icon: 'success',
                title: 'Datos enviados con éxito',
                text: 'En unos días vas a recibir nuestro contacto :)',
                confirmButtonColor: "#444444"
            });

          
            $(".entrada-contacto").val('');
        };
    });
};

//funcion para simular la subida de los datos a una API
function enviarDatos(datos) {
    const URLPOST = "https://jsonplaceholder.typicode.com/posts";

    $.post(URLPOST, datos).done(function(respuesta, estado) {
        console.log(respuesta);
        console.log(estado);
    })
}