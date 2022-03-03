import React, {FC, useState} from "react";
import HighlightedText from "../highlightedText/HighlightedText";
import './style.css'


const SecondTask: FC = () =>{

    const [code, updateCode] = useState('');

    return(
        <div className="wrapper">
            <textarea
                className="textarea"
                name="Text1"
                cols={45}
                rows={20}
                value={code}
                onChange={(e)=>updateCode(e.target.value)}
            />
            <div className='highlightedText'>
                <HighlightedText code={code}/>
            </div>
        </div>
    )
}

export default SecondTask;