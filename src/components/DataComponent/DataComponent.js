import { useEffect, useState } from 'react';
import './DataComponent.css';

const DataComponent = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("I'm in!");
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            setData(data.results)
            setIsLoading(false);
        })
        .catch(error => console.log('get fucked', error))
    }, []);

    return (
        <div className='data-component'>
            {isLoading ? (<h1>Loading...</h1>) : (data.map(d => (<p>{d.name}</p>)))}
        </div>
    ) 
}

export default DataComponent
