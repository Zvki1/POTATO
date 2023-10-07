import React , {useState} from 'react';
import  './style.css';
import image from  '../../assets/login.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navigate, useNavigate} from 'react-router-dom';


const LoginPage = () => {
        
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      /* const history = useHistory(); */
      const navigate = useNavigate();
      // Function to handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Make an HTTP POST request to your server to authenticate
          const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          if (response.ok) {
            const data = await response.json();
            const token = data.access_token; 
            localStorage.setItem('token', token);
           /*  history.push('/'); */
             navigate("/");
           
          } else {
            console.error('Authentication failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <div className='login-container'>
        <div className='login-image'>
            <img src={image} style={{width: '60vw', height: '100vh'}}/> 
        </div>
        <div className='login-form'>
              <h2>Sign in</h2>
              <form onSubmit={handleSubmit}>
             
                     <Box
                        component="form"
                        sx={{
                          '& > :not(style)': { m: 1, width: '25ch', display: 'flex', flexDirection: 'column'},
                        }}
                        noValidate
                        autoComplete="off"
              
                      >
                        <TextField label="User" color="primary" focused
                          value={username}
                          onChange={(e) => setUsername(e.target.value)} />
                        <TextField label="Password" color="primary" focused sx={{width: '100px'}}
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value) }/>

                      </Box>
               
                    <Button variant="contained"  type="submit">Sign In</Button>
               
              </form>
    
        </div> 
    
    </div>
  );
};

export default LoginPage;