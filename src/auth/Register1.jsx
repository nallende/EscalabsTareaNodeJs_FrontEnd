import {useSate} from 'react'



const Register = () => {
  const [name, setName]= useSate('')
  const [email, setEmail]= useSate('')
  const [password, setPassword]= useSate('')

  // Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

  return (
    <>
    <div className="container-fluid bg-secondary p-5 text-center">
      
    <h1>Registro</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {registerForm()}
        </div>
      </div>

    </div>

</>
  );
};

export default Register;
