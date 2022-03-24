import './App.css';
import Img1 from './img/noronha.jpg'

function SloganDestinos(){
    return(
        <div className='barra2'>
              <div className='img1'>
                  <img src={Img1} alt="Imagem paradisíaca do ponto turístico Fernando de Noronha, ilha de Pernambuco."></img>
              </div>
              
              <div className='frase1'>
                  <h1>Destinos Paradisíacos</h1>
              </div>
        </div>
    );
}

export default SloganDestinos;