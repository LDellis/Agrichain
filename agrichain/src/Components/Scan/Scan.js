import React from 'react';
import QrReader from 'react-qr-reader';

function Scan() {
  const handleScan = (data) => {
    if (data) {
      console.log(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  );
}

export default Scan;
