export function Formulario(){

    function inputNull()
        {
            let inputs = document.getElementsByClassName('input');
            let nombreFormulario = document.getElementById('nombreFormulario');
            let apellidoFormulario = document.getElementById('apellidoFormulario');
            let emailFormulario = document.getElementById('emailFormulario');
            let emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            let textRegex = /^[a-zA-Z\s]*$/;

            for (var i = 0; i<inputs.length; i++)
            {
                if(inputs[i].value === '')
                {
                    alert('Los campos tienen que estar completos');
                    return;
                }
            }
                    
            if(!textRegex.test(nombreFormulario.value) || !textRegex.test(apellidoFormulario.value))
            {
                alert('El nombre y apellido solo puede contener letras')
            }

            if(!emailRegex.test(emailFormulario.value))
            {
                alert('Se introdujo el mail de manera incorrecta');
            }
        }

    return (
        <div class="col-3 d-flex flex-column text-break" id="info">
            <input type="text" placeholder="Nombre" className="input" id="nombreFormulario" />
            <input type="text" placeholder="Apellido" className="input" id="apellidoFormulario" />
            <input type="text" placeholder="Email" className="input" id="emailFormulario" />
            <input type="number" placeholder="Telefono" className="input" />
            <button onClick={inputNull}>Enviar</button>
        </div>
    );
}