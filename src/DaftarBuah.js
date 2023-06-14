import React from 'react';

function DaftarBuah() {
  const buahBuahan = ['apel', 'pisang', 'jeruk'];

  return (
    <ul>
      {buahBuahan.map((buah, index) => (
        <li key={index}>{buah}</li>
      ))}
    </ul>
  );
}

export default DaftarBuah;
