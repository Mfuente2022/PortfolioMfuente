export function validar(input) {
  const inputType = input.dataset.type;

  if (input.validity.valid) {
    input.parentElement
      .querySelector(".contacto__formulario__label")
      .classList.remove("error");
    input.parentElement.querySelector(".error__mensaje").innerHTML = "";
  } else {
    input.parentElement
      .querySelector(".contacto__formulario__label")
      .classList.add("error");
    input.parentElement.querySelector(".error__mensaje").innerHTML =
      mostrarMensajeError(inputType, input);
  }
}

const errorTypes = ["valueMissing", "typeMismatch", "patternMismatch"];

const mensajesError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío.",
    patternMismatch: "Ingrese al menos 3 letras, no se permiten números",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío.",
    typeMismatch: "El correo no es válido.",
    patternMismatch: "Indique un correo válido.",
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacío.",
    patternMismatch: "Ingrese al menos 5 caracteres",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío.",
    patternMismatch: "Ingrese al menos 5 caracteres",
  },
};

function mostrarMensajeError(inputType, input) {
  let mensaje = "";
  errorTypes.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesError[inputType][error];
    }
  });
  return mensaje;
}
