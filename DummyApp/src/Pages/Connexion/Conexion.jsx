import React, { useState } from 'react'

export default function Conexion() {

    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");

    
  return (
    <section className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
      
        <form className='p-5 border bg-primary rounded'  method="post">
            <div>
                <label className='form-label text-white' htmlFor="Pseudo">
                    Pseudo
                </label>
                <input 
                    className='form-control' 
                    type="text"
                    id='Pseudo'
                    name='Pseudo'
                    onChange={(e)=>{setPseudo(e.target.value)}} 
                />
            </div>
            <div>

                <label className='text-white' htmlFor="Password">
                    Mot de passe
                </label>

                <input 
                    className='form-control'
                    type="password" 
                    id="Password" 
                    name="Password" 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
            </div>
                <div className='col-auto'>
                    <button className='btn btn-success mt-3' type="submit">Ce connecter</button>
                </div>
        </form>
    </section>
  )
}
