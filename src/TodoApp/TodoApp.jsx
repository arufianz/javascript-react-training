import { element } from 'prop-types';
import style from './TodoApp.module.css'
import { useState} from 'react';

export function UpdateArrayOfObjectState(){
    const [cars, setCars] = useState([]);
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');

    function AddCarHandle(){
        const newCar = {brand: brand, type: type, year: year};
        setCars(c => [...c, newCar])
        setBrand(''); setType(''); setYear('');
    }

    function BrandHandle(e){
        setBrand(e.target.value);
    }
    function TypeHandle(e){
        setType(e.target.value);
    }
    function YearHandle(e){
        setYear(e.target.value);
    }

    return(
        <div>
        <h3>List/array of car object</h3>
        <ul>
            {cars.map((car, index) => 
            <li key={index}>{car.brand} {car.type} {car.year}</li>)}
        </ul>
        <input type="text" id='brandInput' value={brand} onChange={BrandHandle}/>
        <input type="text" id='typeInput' value={type} onChange={TypeHandle} />
        <input type="number" id='yearInput' value={year} onChange={YearHandle} />
        <button onClick={AddCarHandle}>Add Car</button>
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
    const [task, setTask] = useState([]);
    
    function AddTask(e){
        const newTask = document.getElementById('taskInput').value;
        if (newTask == '')
            return;
        document.getElementById('taskInput').value =  '';
        setTask(t => [...t, newTask]);
    }

    function DeleteTask(e){
        setTask(task.filter((_, i) => i !== e));
    }
    return(
        <div className={style.todoApp}>
            <h1>Todo App</h1>
            <ul>
                {task.map((task, index) =>
                <li key={index} onClick={() => DeleteTask(index)}>
                    {task}</li>)}
            </ul>
            <input type="text" id='taskInput' 
            placeholder='Masukkan Tugas' onKeyDown={(e) => e.key === 'Enter' && AddTask()}
            />
            <button onClick={AddTask}>Add Task</button>
            <hr />
        </div>
    );
}

export default TodoApp