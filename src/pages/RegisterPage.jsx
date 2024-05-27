import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  
  const navigate = useNavigate();

  const {name, email, password, onInputChange, onResetForm} = useForm({
    name: '',
    email: '',
    password: '',
  });
  
  const onRegister = (e) => {
    e.preventDefault();
    
    navigate('/dashboard', {
      replace: true,
      state: {
        logged: true,
        name,
      }
    });

    onResetForm()
  }

  return (
    <>
      <div className='wrapper'>
        <form onSubmit={onRegister}>
          <h2>Register</h2>
          
          <div className='input-group'>
            <label htmlFor='name'>Name:</label>
            <input 
              type='text' 
              name='name' 
              id='name' 
              value={name} 
              onChange={onInputChange}
              required
              autoComplete="off"
            />
            <label htmlFor='email'>Email:</label>
            <input 
              type='email' 
              name='email' 
              id='email' 
              value={email} 
              onChange={onInputChange}
              required
              autoComplete="off"
            />
            <label htmlFor='password'>Password:</label>
            <input 
              type='password' 
              name='password' 
              id='password' 
              value={password} 
              onChange={onInputChange}
              required
              autoComplete="off"
            />
          </div>
          <button>
            Register
          </button>
          <button type='reset' onClick={onResetForm}>
            Reset 
          </button>
        </form>

      </div>
      

    </>
    
  )
}