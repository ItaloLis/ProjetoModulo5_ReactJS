import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css'
import Titulo from './titulo';
import Menu from './menu';
import SloganDestinos from './sloganDestinos';
import SloganPrecos from './sloganPrecos';
import Ofertas from './ofertas';
import Pacotes from './pacotes';
import MaisPacotes from './maisPacotes';
import Feedback from './feedbackTitulo';
import Form from './form';
import Sobre from './sobre';
import Valores from './valores';

class App extends Component {
  render() {

    const {newValue} = this.props;

    return(
      <div>

        {/* Título: */}
        <Titulo></Titulo>

        {/* Menu: */}
        <Menu></Menu>

        {/* Parte1: */}
        <SloganDestinos></SloganDestinos>

        {/* Parte2: */}
        <SloganPrecos></SloganPrecos>

        {/* Ofertas: */}
        <Ofertas></Ofertas>

        {/* Pacotes: */}
        <Pacotes></Pacotes>

        {/* MaisPacotes: */}
        <MaisPacotes></MaisPacotes>

        {/* Sobre: */}
        <Sobre></Sobre>

        {/* Valores: */}
        <Valores></Valores>

        {/* Feedback: */}
        <Feedback></Feedback>

        {/* Form: */}
        <Form>{newValue}</Form>

      </div>
    );

  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps) (App);
