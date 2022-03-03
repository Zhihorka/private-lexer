import { FC } from "react";
import './style.css'

interface Props{
    entries: string[],
    index: number
}


const Row : FC<Props>= ({entries, index}) =>{


    if (entries === null ) return null;


    const entryItems = entries.map((entry, index) =>
        <div className = 'entryValue'>
            {entry}
        </div>
    );

    return(
        <div className='row'>
            <div className='key'>
                {index}
            </div>
            <div className='values'>
                {entryItems}
            </div>
        </div>
    );
}

export default Row;