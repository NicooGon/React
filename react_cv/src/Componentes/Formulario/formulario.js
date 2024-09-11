import { useState } from "react";

export function Formulario(){

    const [nombre,setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState(0);

    function inputNull()
        {
            let emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            let textRegex = /^[a-zA-Z\s]*$/;
         
            if(!textRegex.test(nombre) || !textRegex.test(apellido))
            {
                alert('El nombre y apellido solo puede contener letras')
            }

            if(!emailRegex.test(email))
            {
                alert('Se introdujo el mail de manera incorrecta');
            }
        }

        return (
            <div class="d-flex flex-column text-break">
                <div class="fw-bold -fs-3">
                    <label>Contact Me</label>
                </div>
                <form onSubmit={inputNull} className="d-flex flex-column">
                    <input type="text" placeholder="Nombre" className="input" id="nombreFormulario" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <input type="text" placeholder="Apellido" className="input" id="apellidoFormulario" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    <input type="text" placeholder="Email" className="input" id="emailFormulario" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="number" placeholder="Telefono" className="input" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    <button> Enviar</button>
                </form>
            </div>
        );
}