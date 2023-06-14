import React from 'react';
import HitungKarakter from './HitungKarakter';
import DaftarBuah from './DaftarBuah';
import CustomButton from './CustomButton.js';
import ImageDisplay from './ImageDisplay.js';
import NamaList from './NamaList';

function App() {
  const daftarNama = ['Budi', 'Andi', 'Citra', 'Dewi', 'Eka'];

  return (
    <div>
      <h1>Contoh Aplikasi React</h1>
      <HitungKarakter />
      <DaftarBuah />
      <NamaList daftarNama={daftarNama} />
      <div>
        <CustomButton label="Klik Saya!" />
        <ImageDisplay imageUrl="https://asset.kompas.com/crops/xjcNbFyx4Sl51KJ4XHYb-lMUCdM=/20x0:770x500/750x500/data/photo/2023/02/07/63e226d5c74bb.jpg" altText="Deskripsi gambar" />
      </div>
    </div>
  );
}

export default App;
