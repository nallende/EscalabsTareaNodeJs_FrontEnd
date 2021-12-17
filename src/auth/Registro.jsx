import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";



 

const Registro = () => {
	const [registroEnviado, cambiarRegistroEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					email: '',
					password: ''
									}}

									
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion email
					if(!valores.email){
						errores.email = 'Por favor ingresa un email valido'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
						errores.email = 'El email solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

                   // Validacion Password
					if(!valores.password){
						errores.password = 'Por favor ingresa una Clave debe tener entre 4 y 8 dígitos e incluir al menos un dígito numérico '
					} else if(!/^(?=.*\d).{4,8}$/.test(valores.password)){
						errores.password = 'La contraseña debe tener entre 4 y 8 dígitos e incluir al menos un dígito numérico.'
					}



					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
				    axios.post(`${process.env.REACT_APP_API}/register`,{...valores})
					console.log('Registro enviado');
					cambiarRegistroEnviado(true);
					setTimeout(() => cambiarRegistroEnviado(false), 5000);
					console.log(valores)
				}}
			>
				{( {errors} ) => (
					<Form className="registro">
						<div className="input-group mb-3">
							<label htmlFor="nombre" class="form-label">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="escriba su nombre"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div className="input-group mb-3">
							<label htmlFor="email"class="form-label">email</label>
							<Field
								type="text" 
								id="email" 
								name="email" 
								placeholder="email@email.com" 
							/>
							<ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
						</div>
						<div className="input-group mb-3">
							<label htmlFor="password" class="form-label">Clave</label>
							<Field
								type="password" 
								id="password" 
								name="password" 
								placeholder="su clave" 
							/>
							<ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
						</div>

						<div>
							<Field name="pais" as="select">
								<option value="Chile">Chile</option>
								<option value="España">España</option>
								<option value="Argentina">Argentina</option>
							</Field>
						</div>

						<div>
							<label>
								<Field type="radio" name="oficio" value="oficio" /> Oficio
							</label>
							<label>
								<Field type="radio" name="propietario" value="propietario" /> Propietario
							</label>
						</div>

						<div>
							<Field name="mensaje" as="textarea" placeholder="Mensaje" />
						</div>

						<button type="submit" class="btn btn-primary">Enviar</button>
						{registroEnviado && <p className="exito">Registro enviado con exito!</p>}
					</Form>
				)}
	
			</Formik>
		</>
	);
}
 
export default Registro