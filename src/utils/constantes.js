export const validateContact = (input) => {
    let errores = {};
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.email)) {
        errores.email = "Ingrese un mail válido";
    }
    if (input.name.length < 3) {
        errores.name = "Escriba un nombre válido";
    }
    if (input.subject.length < 2) {
        errores.subject = "Escriba un asunto";
    }
    if(input.message.lenght < 10){
        errores.message = 'Escriba una consulta válida'
    }
    if (input.phone.length < 8 || input.phone.length > 13) {
        errores.phone = "Ingrese un teléfono válido (mínimo 8 dígitos)";
    }
    return errores;
}