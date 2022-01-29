import React, { Component } from 'react';

class MenuTentang extends Component {
    constructor(props) {
        super();
        this.state = {
            tentang : "Warung Nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara",
    };
}
    
    
    render() {
        return (
            <div>
            <center>
                <p>Tentang Kami </p>{this.state.tentang}
            </center>
        </div>
        )
    }
}
export default MenuTentang;