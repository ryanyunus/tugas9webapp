import React from 'react';

function NamaList({ daftarNama }) {
  const sortedNames = daftarNama.sort(); // Mengurutkan daftar nama secara alfabetis

  return (
    <ul>
      {sortedNames.map((nama, index) => (
        <li key={index}>{nama}</li>
      ))}
    </ul>
  );
}

export default NamaList;
