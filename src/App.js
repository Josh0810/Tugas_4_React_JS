import React, { Component } from 'react';
import Footer from './Page/Footer';
import Header from './Page/Header';
import MenuKontak from './Page/MenuKontak';
import MenuMakanan from './Page/MenuMakanan';
import MenuTentang from './Page/MenuTentangKami';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuMakanan />
        <MenuTentang />
        <MenuKontak />
        <Footer />
      </div>
    );
  }
}

export default App;
