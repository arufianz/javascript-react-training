import { useState} from 'react';
import style from './TodoTailwind.module.css'
function TodoTailwind(){
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
        <div className='p-4 text-center bg-green-500 m-4 rounded-xl shadow-lg'>
            <h1 className='text-2xl color-white '> Todo App</h1>
            <input type="text" id='taskInput' 
            placeholder='Masukkan Tugas' onKeyDown={(e) => e.key === 'Enter' && AddTask()}
            />
            <button onClick={AddTask}>Tambah</button>
            <hr />
            <ul>
                {task.map((task, index) =>
                <li key={index} onClick={() => DeleteTask(index)}>
                    {task}</li>)}
            </ul>
        </div>
    );
}

export default TodoTailwind