
import axios from "axios";
import {login } from "../actions/auth";
import React from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'

export const Login = () => {
  const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: Yup.object({
      login: Yup.string().email().max(40, 'Correo Login debe ser menor a 40 caracteres').required('Required').strict(true),
      password: Yup.string().strict(true)
      .required("Por Favor Ingrese Clave").strict(true)
      .min(4, "Clave muy Corta").strict(true)
      .max(8, "Excede Maximo Caracteres").strict(true)
      .test("isValidPass", " is not valid", (value, context) => {
        const tieneMayuscula = /[A-Z]/.test(value);
        const tieneMiuscula = /[a-z]/.test(value);
        const tieneNumero = /[0-9]/.test(value);
        const tieneSimbolo = /[!@#%&]/.test(value);
        let condicionesValidas = 0;
        const numerValidaciones = 3;
        const conditions = [tieneMiuscula, tieneMayuscula, tieneNumero, tieneSimbolo];
        conditions.forEach((condition) =>
          condition ? condicionesValidas++ : null
        );
        if (condicionesValidas >= numerValidaciones) {
          return true;
        }
        return false;
      })
    }),
    onSubmit: ({login, password}) => {
      alert(`Login: ${login}, exisitoso`);
      		axios.post(`${process.env.REACT_APP_API}/login`,{login, password})
					console.log('login enviado');
					console.log(login, password)
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <header>
       </header>
      <label htmlFor="login">Login</label>
      <input
        value={values.login}
        onChange={handleChange}
        onBlur={handleBlur}
        id="login"
        name="login"
        type="text"
      />
      {touched.login && errors.login ? (
        <div>{errors.login}</div>
      ): null}
      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        type="password"
      />
      {touched.password && errors.password ? (
        <div>{errors.password}</div>
      ): null}
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login