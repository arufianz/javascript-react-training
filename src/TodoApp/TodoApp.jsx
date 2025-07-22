import { element } from 'prop-types';
import style from './TodoApp.module.css'
import { useState} from 'react';

export function UpdateArrayOfObjectState(){
    const [cars, setCars] = useState([]);
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');

    function AddCarHandle(){

    }
    function BrandHandle(){

    }
    function TypeHandle(){

    }
    function YearHandle(){

    }

    return(
        <div>
        <h3>List/array of car object</h3>
        <ul>
            {cars.map((car, index) => 
            <li key={index}>{car.brand} {car.type} {car.year}</li>)}
        </ul>
        </div>
    )
}
export function UpdateArrayState(){
    const [food, setfood] = useState(['Mie Goreng', 'Nasi Goreng', 'Mie Ayam']);

    function AddFoodHandle(){
        const newFood = document.getElementById('foodInput').value;
        if (newFood == '')
          return;       
        document.getElementById('foodInput').value =  '';

        setfood(f => [...f, newFood]);
    } 
    function RemoveFoodHandle(index){
        setfood(food.filter((_, i) => i !== index));
    }
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {food.map((food, index) =>
                <li key={index} onClick={() => RemoveFoodHandle(index)}>
                    {food}</li>)}
            </ul>
            <input type="text" id='foodInput' 
            placeholder='Masukkan Makanan' onKeyDown={(e) => e.key === 'Enter' && AddFoodHandle()}
            />
            <button onClick={AddFoodHandle}>Add Food</button>
            <hr />
        </div>    
    )
}
      
export function UpdateObjectState(){
    const [car, setCar] = useState({brand: '', type: '', year: '' });
    function UpdateCarBrandHandle(e){
        setCar( c => ({...c, brand: e.target.value}));
    }

    function UpdateCarTypeHandle(e){
        setCar(c => ({...c, type: e.target.value}));
    }

    function UpdateCarYearHandle(e){
        setCar(c => ({...c, year: e.target.value}));
    }
    return(
        <div>
            <input type="text" value={car.brand} onChange={UpdateCarBrandHandle} placeholder='Merk' /> <br />
            <input type="text" value={car.type} onChange={UpdateCarTypeHandle} placeholder='Tipe' /> <br />
            <input type="number" value={car.year} onChange={UpdateCarYearHandle} placeholder='Tahun' /> <br />
            <p>Mobil yang kamu pilih: {car.brand} {car.type} {car.year} </p>
            <hr />
        </div>
    )
}

function TodoApp(){
    const [task, setTask] = useState('');
    
    function AddTask(e){
        
    }

    function DeleteTask(e){
        
    }


    return(
        <div className={style.todoApp}>
            <h1>Todo App</h1>
            <hr />
        </div>
    );
}

export default TodoApp