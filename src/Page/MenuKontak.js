import React, { Component } from 'react';

class MenuKontak extends Component {
    constructor(props) {
        super();
        this.state = {
            alamat: "JL. Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
            kontak: "0812-1234-1234",
    };
}
    
    
    render() {
        return (
            <div>
            <center>
                <h3>{this.state.alamat}</h3>
                <h4>Kontak Kami : {this.state.kontak}</h4>
            </center>
        </div>
        )
    }
}
export default MenuKontak;