import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'; // Importar solo el ícono necesario
import { Link } from 'react-router-dom';
//import { useUsers } from "../../contexts/UserContext/useUsers";
import './Register.css'; // Importar el archivo CSS con los estilos

const DEFAULT_FORM = {
  password: '',
  email: '',
  rol: '', // Agregar el campo 'rol'
  dni: '', // Agregar campo 'dni' para Paciente
  matricula: '', // Agregar campo 'matricula' para Médico
};

type FormData = typeof DEFAULT_FORM;

const Register: React.FC = () => {
  // const { signUp } = useUsers();
  const [formData, setFormData] = useState<FormData>(DEFAULT_FORM);
  const [enviandoPeticion, setEnviandoPeticion] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviandoPeticion(true);
    //const response = await signUp(formData);
    // response && setFormData(DEFAULT_FORM);
  };

  return (
    <>
      <div className='div-view'>
        <div className='FormDiv'>
          <form onSubmit={handleSubmit}>
            <h1 className='Title'>Crear Cuenta</h1>

            <label className='Label'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='Input'
            />

            <label className='Label'>Contraseña</label>
            <div className='InputContainer'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Contraseña'
                value={formData.password}
                onChange={handleChange}
                className='Input'
              />
              {showPassword ? (
                <FaRegEye
                  className='IconViewPass'
                  onClick={handleTogglePasswordVisibility}
                />
              ) : (
                <FaRegEyeSlash
                  className='IconViewPass'
                  onClick={handleTogglePasswordVisibility}
                />
              )}
            </div>

            <div className='Label'>Rol</div>
            <label>
              <input
                type='radio'
                name='rol'
                value='Medico'
                checked={formData.rol === 'Medico'}
                onChange={handleChange}
              />{' '}
              Medico
            </label>
            <label>
              <input
                type='radio'
                name='rol'
                value='Paciente'
                checked={formData.rol === 'Paciente'}
                onChange={handleChange}
              />{' '}
              Paciente
            </label>

            {/* Mostrar campo 'Matricula' si se selecciona 'Medico' */}
            {formData.rol === 'Medico' && (
              <>
                <label className='Label'>Matrícula</label>
                <input
                  type='text'
                  name='matricula'
                  placeholder='Matrícula'
                  value={formData.matricula}
                  onChange={handleChange}
                  className='Input'
                />
              </>
            )}

            {/* Mostrar campo 'DNI' si se selecciona 'Paciente' */}
            {formData.rol === 'Paciente' && (
              <>
                <label className='Label'>DNI</label>
                <input
                  type='text'
                  name='dni'
                  placeholder='DNI'
                  value={formData.dni}
                  onChange={handleChange}
                  className='Input'
                />
              </>
            )}

            <button type='submit' disabled={enviandoPeticion} className='Button'>
              Enviar
            </button>
            <Link to='/login' className='LinkButton'>
              Volver
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
