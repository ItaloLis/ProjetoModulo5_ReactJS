import './App.css';

function Menu(){
    return(
        <div className='menu'>
              <div className='home'>
                  <p><b>Home</b></p>
              </div>

              <div className="destinos">
                  <p><b>Destinos</b></p>
              </div>
                  
              <div className="promo">
                <p><b>Promoções</b></p>
              </div>
                  
              <div className="contato">
                <p><b>Contato</b></p>
              </div>
              <h1>A melhor viagem da sua vida acontece aqui!</h1>
        </div>
    );
}

export default Menu;