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
        <ImageDisplay imageUrl="https://cdn.antaranews.com/cache/730x487/2022/10/04/FeJbx1YXwAs15li.jpg" altText="Deskripsi gambar" />
      </div>
    </div>
  );
}

export default App;
