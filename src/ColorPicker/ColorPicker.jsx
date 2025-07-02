import styles from './ColorPicker.module.css';
import { useState } from 'react';


function ColorPicker(){
    const [color, setColor] = useState('#000000');

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return( 
    <div className={styles.colorPickerContainer}>
        <h1>Color Picker</h1>
        <div className={styles.colorDisplay} style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Pick a Color</label>
        <input type="color" onChange={handleColorChange}/>
    </div>
    );
}

export default ColorPicker;