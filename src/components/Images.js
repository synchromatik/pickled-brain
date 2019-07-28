import React from 'react'
import { useStateValue } from '../state';

function Images(props) {
    const [, dispatch] = useStateValue();
    return (
        <galeryitems>
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
        </galeryitems>
    )
}

export default Images