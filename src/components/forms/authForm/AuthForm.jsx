import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import signup from '../../../pages/SignUpPage/signup.module.scss';
import app from '../../../firebase/firebase';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const AuthForm = ({buttonName}) => {

    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     if(e.target.type === "email"){
    //         setEmail(e.target.value);
    //     } else if(e.target.type === "password"){
    //         setPassword(e.target.value);
    //     };
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth(app);

        createUserWithEmailAndPassword(auth,email, password)
        .then((userCredentials) =>{
            userCredentials.user.displayName = username;

            navigate ('/');
        })
        .catch((error) => {
            console.log(error)
        })
    }

  return (
                <form onSubmit={handleSubmit}>
                    <div className={signup.form_group}>
                        <label>Username</label>
                        <input type="text" className={signup.form_input} placeholder='Enter your username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className={signup.form_group}>
                        <label>Email</label>
                        <input type="email" className={signup.form_input} placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className={signup.form_group}>
                        <label>Pasword</label>
                        <input type="password" className={signup.form_input} placeholder='Enter your pasword'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className={signup.form_group}>
                        <input type="submit" className="primary_button" value={buttonName} />
                    </div>
                </form>
  )
}

export default AuthForm