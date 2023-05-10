const form = document.getElementById('form') as HTMLElement;
const btnguardar = document.getElementById('btn-guardar') as HTMLElement;


btnguardar.addEventListener('click', (e) => {
    e.preventDefault();
    //Hago la validación del formulario

    //Obtener los datos de los input
    const tipoDocumento = document.getElementById('tipoIdentificacion') as HTMLInputElement;
    const numeroDocumento = document.getElementById('NumeroIdentificacion') as HTMLInputElement;
    const nombres = document.getElementById('nombres') as HTMLInputElement;
    const apellidos = document.getElementById('apellidos') as HTMLInputElement;
    const celular = document.getElementById('celular') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const linkedin = document.getElementById('linkedin') as HTMLInputElement;
    const github = document.getElementById('github') as HTMLInputElement;

    

});

