
function List(){

    const fruit = [{id: 1, name : 'jeruk'}, 
                    {id: 2, name : 'mangga'}, 
                    {id: 3, name : 'apel'}, 
                    {id: 4, name : 'melon'}, 
                    {id: 5, name : 'anggur'}];
    
    // fruit.sort((a, b) => a.name.localeCompare(b.name));
    fruit.sort((a, b) => b.name.localeCompare(a.name));
    // fruit.sort((a, b) => a.id - b.id);
    // fruit.sort((a, b) => b.id - a.id);
    
    const listFruit = fruit.map( fruit =>
                 <li key={fruit.id}>{fruit.name}</li>) 
    
    return(
        <ul>
            {listFruit}
        </ul>
    );
}

export default List