import { useEffect } from 'react'

const DataComponent = () => {

    useEffect(() => {
        console.log("I'm in!");
    }, []);

    return (
        <div className='data-component'>
            <h1>body</h1>
        </div>
    )
}

export default DataComponent
