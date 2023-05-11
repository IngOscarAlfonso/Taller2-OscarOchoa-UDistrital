const form = document.getElementById('form') as HTMLElement;
const btnguardar = document.getElementById('btn-guardar') as HTMLElement;


btnguardar.addEventListener('click', (e) => {
    e.preventDefault();
    //Hago la validación del formulario

    //Obtener los datos de los input
    const tipoDocumento = document.getElementById('tipoIdentificacion') as HTMLInputElement;
    const numeroDocumento = document.getElementById('numeroIdentificacion') as HTMLInputElement;
    const nombres = document.getElementById('nombres') as HTMLInputElement;
    const apellidos = document.getElementById('apellidos') as HTMLInputElement;
    const celular = document.getElementById('celular') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const linkedin = document.getElementById('linkedin') as HTMLInputElement;
    const github = document.getElementById('github') as HTMLInputElement;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAyMjM0ODc3NCwiY29ycmVvIjoiZXNhbmNoZXoxOTg4QGdtYWlsLmNvbSIsImlhdCI6MTY4MTYwODM4MCwiZXhwIjoxNjgyMjEzMTgwfQ.q5KH3EX0r_x9nBfPw_Sdlo5Qve9SKNqBq52XFxxsXnQ");

    let raw = JSON.stringify({
      "tipoIdentificacion": tipoDocumento.value,
      "numeroIdentificacion": numeroDocumento.value,
      "nombres": nombres.value,
      "apellidos": apellidos.value,
      "celular": celular.value,
      "correo": email.value,
      "linkedin": linkedin.value,
      "github": github.value
    });

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw
};

fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
.catch(error => console.log('error', error));

});

