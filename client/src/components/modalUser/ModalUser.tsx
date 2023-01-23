import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'; 

interface Form {
    name: string
    password1: string
    password2: string
}

const ModalUser = ( {close}:any ) => {

    const { user, isAuthenticated } = useAuth0();
    const [form, setForm] = useState<Form>({
        name: '',
        password1: '',
        password2: '' 
    })

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    console.log(form)
  return ( 
    <div className='Modal_Overlay'>
        <div className='Modal_Container'>
            <div className='Modal_ProfilePic'>
                <img src={user?.picture} alt="profilePic" />
            </div>
            <div className='Modal_TitleContainer'>
                <h1>Edit Profile</h1>
            </div>

            <div className='Modal_infoSide'>
                <div className='Modal_info1'>
                    <p>Name</p>
                    <input onChange={handlerChange} name='name' type="text" placeholder='name'/>
                    <p>Picture</p>
                    <input type="file" />
                </div>
                <div className='Modal_info2'>
                    <p>Password</p>
                    <input onChange={handlerChange} name='password1' type="password" placeholder='password'/>
                    <p>Confirm Password</p>
                    <input onChange={handlerChange} name='password2' type="password" placeholder='password' />
                </div>
            </div>
            <div className='Modal_SubmitContainer'>
                <button className='Modal_buttonSave'>Save</button>
                <button className='Modal_buttonCancel' onClick={()=> close(false)}>Cancel</button> 
            </div>
        </div>
    </div>
   
  )
}

export default ModalUser;