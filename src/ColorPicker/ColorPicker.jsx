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
            <p className={styles.smallText}>Selected Color: {color}</p>
        </div>
        <label className={styles.text}>Pick a Color</label>
        <input className={styles.colorInput} type="color" onChange={handleColorChange}/>
    </div>
    );
}

export default ColorPicker;