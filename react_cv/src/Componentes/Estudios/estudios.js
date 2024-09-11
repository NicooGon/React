import './estudios.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Formulario } from '../Formulario/formulario';


export function Estudios(){
    const [mostrar, setMostrar] = useState(false);

    function botonFormulario()
    {
        setMostrar(true);
        let contactMe= document.getElementById('contactMe');
        contactMe.style.display = 'none';
    }

    function boton()
    {
        window.open("https://github.com/NicooGon/CSS-HTML.git");
    }
    return(
        
    <div class="col-12 col-md-9 min-vh-100 d-flex flex-column justify-content-evenly align-items-center text-break " id="career">
        <div class="fs-3">
            <h3 class="fw-bold fs-2" >Studies</h3>
            <div>
                <FontAwesomeIcon icon={faCircleArrowRight} /><label for="">Colegio Virgen del Santander</label>
            </div>
            <div>
                <FontAwesomeIcon icon={faCircleArrowRight} /><label for="">Liceo Padre Domingo</label>
            </div>
            <div>
                <FontAwesomeIcon icon={faCircleArrowRight} /><label for="">Universidad Catolica del Uruguay</label>
            </div>
        </div>
        <div id="proyects" className="" onClick={boton}></div>

        {
            mostrar===false ? (<button class="col-2 fs-4" id='contactMe' onClick={botonFormulario}>Contact Me</button>) : (<Formulario></Formulario>)
        }
        
    </div>
      )

}

