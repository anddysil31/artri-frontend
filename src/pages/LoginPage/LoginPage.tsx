import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Poster from '../../components/Poster/Poster'
import './LoginPage.css'
export default function LoginPage() {
  return (
    <div className='login-page'>
        <div className='login-form'>
        <p></p>
        <LoginForm />
        </div>
        <div className='poster'>
        <Poster />
        </div>
    </div>
  )
}
