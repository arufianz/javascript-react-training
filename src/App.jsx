import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Service from './Service.jsx'
import Card from './Card/Card.jsx'
import List from './List.jsx'
import {Counter, UserInput} from './Hook.jsx'
import ColorPicker from './ColorPicker/ColorPicker.jsx'
import TodoApp from './TodoApp/TodoApp.jsx'
import { UpdateObjectState, UpdateArrayState } from './TodoApp/TodoApp.jsx'

function App() {
  return(
    <>
      <UpdateArrayState/>
      <UpdateObjectState/>
      <TodoApp/>
      <ColorPicker/>
    </>
  );
}

export default App
