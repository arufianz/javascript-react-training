import { useState} from 'react';
function TodoTailwind(){
    const [task, setTask] = useState(["Test", "Test2", "Test3",]);
    
    function AddTask(e){
        const newTask = document.getElementById('taskInput').value;
        if (newTask == ''){
            alert('Masukkan Tugas');
            return;
        }
        document.getElementById('taskInput').value =  '';
        setTask(t => [...t, newTask]);
    }

    function DeleteTask(e){
        setTask(task.filter((_, i) => i !== e));
    }
    function MoveTaskUp(index) {
        const updatedTasks = [...task]; 
        if (index > 0) {
            const temp = updatedTasks[index]; 
            updatedTasks[index] = updatedTasks[index - 1]; 
            updatedTasks[index - 1] = temp;
        }
        setTask(updatedTasks);
    }
    function MoveTaskDown(index) {
        const updatedTasks = [...task]; 
        if (index < task.length - 1) {
            const temp = updatedTasks[index]; 
            updatedTasks[index] = updatedTasks[index + 1]; 
            updatedTasks[index + 1] = temp;
        }
        setTask(updatedTasks);
    }

    return(
        <div className='my-8 mx-auto w-[400px] p-4 justify-self-center text-center bg-green-500 rounded-xl shadow-lg flex flex-col shadow-black'>
            <h1 className='text-2xl color-white m-4'> To-Do List</h1>
            <input className='px-1 py-1 mx-2 rounded-lg bg-white shadow-md' type="text" id='taskInput' 
            placeholder='Masukkan Tugas' onKeyDown={(e) => e.key === 'Enter' && AddTask()}
            />
            <button className='p-1 px-2 my-3 mx-auto w-[30%] rounded-lg bg-yellow-400 shadow-md hover:bg-yellow-500' onClick={AddTask}>Tambah</button>
            <div className='m-auto border-solid my-4 bg-white h-2 rounded w-[90%] shadow-md'/>
            <ul>
                {task.map((task, index) =>
                <li className='p-1 m-2 rounded-lg bg-white shadow-md flex'>
                    <p className='text-left'>{task}</p>
                    <div className='flex ml-auto h-8 my-auto'>
                        <button className='px-1 py-1 ml-2 rounded-lg bg-blue-600 hover:bg-blue-500' key={index} onClick={() => MoveTaskUp(index)}>👆</button>
                        <button className='px-1 py-1 ml-2 rounded-lg bg-blue-600 hover:bg-blue-500' key={index} onClick={() => MoveTaskDown(index)}>👇</button>
                        <button className='px-2 py-1 ml-2 rounded-lg bg-red-400 hover:bg-red-500' key={index} onClick={() => DeleteTask(index)}>Delete</button>
                    </div>
                </li>)}
            </ul>
        </div>
    );
}

export default TodoTailwind