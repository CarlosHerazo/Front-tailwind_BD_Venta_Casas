// obtenemos el valor del boton

document.getElementById("submit_btn").addEventListener("click", function() {
    
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    // Creamos un objeto FormData para enviar los datos
    var formData = new FormData();
    formData.append("name", name);
    formData.append("comment", comment);

    // Realiza la solicitud POST utilizando Fetch API
    fetch("/submit_comment", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la solicitud");
        }
        return response.json();
    })
    .then(data => {
        Swal.fire({
            title: "Excelente, estaremos en contacto contigo!",
            text: data.ok,
            icon: "success"
          });
    })
    .catch(error => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          });
    });
});
