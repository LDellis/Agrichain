import React, { useState } from 'react';
import './Scan.css';
import TextField from '@material-ui/core/TextField';

function Scan() {
  const [TextFieldValue, setTextFieldValue] = useState("")
  return (
    <div className="Scan">
        <h1 className="ScanTitle">Bienvenue sur la page de scan</h1>
        {/* Input EXEMPLE WITH MUI */}
        <div className="InputExemple">
          <TextField id="filled-basic" label="Filled" variant="filled" value={TextFieldValue} onChange={event => setTextFieldValue(event.target.value) /**change la valeur de la variable en direct**/}/>
        </div>
    </div>
  );
}

export default Scan;
