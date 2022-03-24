import './App.css';
import Destino1 from './img/maldivas.jpg'
import Destino2 from './img/amazonas.jpeg'
import Destino3 from './img/niagara.jpg'
import Emoji1 from './img/emojiestrelanosolhos.png'
import Emoji2 from './img/emojiexplodindo.png'
import Emoji3 from './img/emojisusto.png'

function Pacotes(){
    return(
        <div>
              <div className='anuncio'>
                    <div className='img3'>
                        <img src={Destino1} alt="Imagem paradisíaca de um local nas Ilhas Maldivas."></img>
                    </div>
                    <h2>Lua de Mel?! <br></br> Que tal Ilhas Maldivas?</h2>
                    <img className='Emoji' src={Emoji1} alt="Emoji com estrelas saltando dos olhos."/>
                    <div className='botao'>
                            <h4>Pacotes a partir de:</h4>
                            <h2 className='valor'>R$3.500</h2>
                    </div>
              </div>

              <div className='anuncio'>
                    <div className='img3'>
                        <img src={Destino2} alt="Barco em um dos rios do estado do Amazonas."></img>
                    </div>
                    <h2>Descubra os encantos da Amazônia!</h2>
                    <img className='Emoji' src={Emoji2} alt="Emoji simulando uma explosão na cabeça."></img>
                    <div className='botao'>
                            <h4>Pacotes a partir de:</h4>
                            <h2 className='valor'>R$973</h2>
                    </div>
              </div>
              <div className='anuncio2'>
                    <div className='img3'>
                        <img src={Destino3} alt="Imagem das cataratas do rio Niágara."></img>
                    </div>
                    <h2>Cataratas do Niágara, <br></br>bora?</h2>
                    <img className='Emoji' src={Emoji3} alt="Emoji espantado."></img>
                    <div className='botao'>
                            <h4>Pacotes a partir de:</h4>
                            <h2>R$2.700</h2>
                    </div>
              </div>
        </div>
    );
}

export default Pacotes;