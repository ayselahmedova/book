import React from 'react'
import signup from '../SignUpPage/signup.module.scss'
import AuthBgImg from '../../assets/login.jpg';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from '../../components/forms/authForm/AuthForm';

const Login = () => {
  return (
    <>
    <Navbar darkText={true} />
    <section className={signup.signup_container}>
        <div className={signup.signup_img_container}>
            <img src={AuthBgImg} alt="" />
        </div>
        <div className={signup.signup_content_container}>
            <div className={signup.content_wrapper}>
                <h2>Login</h2>
                <p>Login your account with email and password.</p>

                <AuthForm buttonName ="Login"/>
            </div>

        </div>

    </section>
    </>
  )
}

export default Login