import React from 'react';
import './Contact.css';
// import TextField from '@mui/material/TextField';

function Scan() {
  // const [TextFieldValue, setTextFieldValue] = useState("")
  return (
    <div className="Scan">
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <h1 className="ScanTitle">Contact</h1>
        <h3>Notre équipe reste à votre disposition aux coordonnées suivantes:</h3>
        <div className='Contact'>
        <p><strong>Adresse email :</strong></p>
        <p>contact@agrichain.fr</p>
        <p><strong>Adresse</strong></p>
        <p>41 Boulevard Vauban, 59800 Lille CEDEX</p>
        </div>
    </div>
  );
}

export default Scan;