import './App.css'

function Form(){
    return(
          <form className="formulario">
              <h2>FALE CONOSCO</h2>
              <p type="text"><input placeholder="Digite o seu nome..."></input></p>
              <p type="Email"><input placeholder="Digite seu e-mail..."></input></p>
              <p type="Message"><input placeholder="O que você gostaria de nos dizer..."></input></p>
              <button type='submit'>Enviar</button>
          </form>
    );
}

export default Form;