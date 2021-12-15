import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const Registro = () => {
	const [registroEnviado, cambiarRegistroEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: ''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

               // Validacion Password
					if(!valores.password){
						errores.password = 'Por favor ingresa un correo electronico'
					} else if(!/^(?=.*\d).{4,8}$/.test(valores.pasword)){
						errores.correo = 'La contraseña debe tener entre 4 y 8 dígitos e incluir al menos un dígito numérico.'
					}



					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Fegistro enviado');
					cambiarRegistroEnviado(true);
					setTimeout(() => cambiarRegistroEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form className="registro">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="escriba su nombre"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>
                  <div>
							<label htmlFor="password">Clave</label>
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
								<option value="mexico">Mexico</option>
								<option value="España">España</option>
								<option value="Argentina">Argentina</option>
							</Field>
						</div>

						<div>
							<label>
								<Field type="radio" name="sexo" value="hombre" /> Hombre
							</label>
							<label>
								<Field type="radio" name="sexo" value="mujer" /> Mujer
							</label>
						</div>

						<div>
							<Field name="mensaje" as="textarea" placeholder="Mensaje" />
						</div>

						<button type="submit">Enviar</button>
						{registroEnviado && <p className="exito">Registro enviado con exito!</p>}
					</Form>
				)}

			</Formik>
		</>
	);
}
 
export default Registro