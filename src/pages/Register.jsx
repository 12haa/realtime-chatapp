import React from 'react'
import  Add from '../images/addAvatar.png'
const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatty</span>
            <span className='title'>Register</span>
            <from>
                <input type='text' placeholder='Display Name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Enter Password'/>
                <input style={{display :'none'}} type='file' id='file' />
                <label htmlFor='file'>
                    <img style={{cursor:"pointer" ,height:'50px' , }} src={Add} />
                    <span style={{marginLeft:'12px' , fontFamily:'cursive' , margin:"" , position:'absolute' , marginTop :'13px' ,cursor:'pointer' , color:'#7b96ec'}}>Add File</span>
                </label>
                <button className=''>Sign Up</button>
            </from>
            <p>You Do Have An Account ? Login</p>
        </div>
    </div>
  )
}

export default Register