import React from 'react'
import { useStateValue } from '../../state';

function Images(props) {
    const [, dispatch] = useStateValue();
    return (
        <div className="item">
            <img 
                src={props.url} 
                className="image" 
                alt={props.url} 
                onClick={() => dispatch({
                    type: 'updateModal',
                    newModal: { showModal: true },
                    newIndex: props.id
                })}
            />
        </div>
    )
}

export default Images