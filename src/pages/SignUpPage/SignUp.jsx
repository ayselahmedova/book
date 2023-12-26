import React from 'react'
import signup from './signup.module.scss'
import AuthBgImg from '../../assets/login2.jpg';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from '../../components/forms/authForm/AuthForm';

const SignUp = () => {
  return (
    <>
    <Navbar darkText={true} />
    <section className={signup.signup_container}>
        <div className={signup.signup_img_container}>
            <img src={AuthBgImg} alt="" />
        </div>
        <div className={signup.signup_content_container}>
            <div className={signup.content_wrapper}>
                <h2>SignUp</h2>
                <p>Create a new account with email and password.</p>

                <AuthForm buttonName= "Sign Up"/>
            </div>

        </div>

    </section>
    </>
  )
}

export default SignUp