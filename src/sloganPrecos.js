import './App.css';
import Img2 from './img/precos.jpeg'

function SloganPrecos(){
    return(
        <div className='barra2'>
              <div className='frase2'>
                  <h1>Preços Acessíveis</h1>
              </div>

              <div className='img2'>
                <img src={Img2} alt="Um homem e uma mulher fazendo pagamento em um balcão, com um atendente."></img>
              </div>
        </div>
    );
}

export default SloganPrecos;