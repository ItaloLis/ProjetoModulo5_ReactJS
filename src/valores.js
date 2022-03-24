import './App.css'
import ImgValores1 from './img/conforto.jpg';
import ImgValores2 from './img/parceria.jpg';
import ImgValores3 from './img/tecnologia.jpg';

function Valores(){
    return(
        <div className='valores'>
            <h1>Nossos valores</h1> <br></br>
            <div className='valoresimg'>
                <div className='valoresimg1'>
                    <img src={ImgValores1} alt="Mulher lendo um livro, em um ambiente que remete ao conforto."></img>
                    <h2>Qualidade</h2>
                </div>
                <div className='valoresimg1'>
                    <img src={ImgValores2} alt="Duas mãos se comprimentando."></img>
                    <h2>Parceria Cliente - Empresa</h2>
                </div>
                <div className='valoresimg1'>
                    <img src={ImgValores3} alt="Menina feliz usando um tablet."></img>
                    <h2>Inovação através da Tecnologia</h2>
                </div>
            </div>
        </div>
    )
}

export default Valores;