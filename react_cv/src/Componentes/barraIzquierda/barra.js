import './barra.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

export function Barra(){
    return(
        <div class="col-12 col-md-3 min-vh-100 d-flex flex-column justify-content-evenly align-items-center" id="info" >
        <div id="foto" class="d-flex justify-content-center circle rounded-circle"></div>
            <div id="personalInfo" class="text-break d-flex flex-column justify-content-around " >
            <div id= "data" class="">
                <h3 class="fs-2 fw-bold">Personal Information</h3>
                <div class="fs-3">
                    <div>
                        <FontAwesomeIcon icon={faCircleArrowRight} /> <label class="">Nicolas Gonzalez</label>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCircleArrowRight} /><label>Desarrollador en Software</label>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCircleArrowRight} /><label>19 años</label>
                    </div>
                </div>
                
            </div>

            <div id="skills" class="text-break d-flex flex-column fs-2">
                <h3 class="fw-bold">SKILLS</h3>
                <div class="fs-3">
                    <div>
                        <FontAwesomeIcon icon={faCircleArrowRight} /> <label>Ingles Intermedio</label>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCircleArrowRight} /> <label>Facil Aprendizaje</label>
                    </div>
                </div>
            </div>
        </div>
  </div>
    )
}