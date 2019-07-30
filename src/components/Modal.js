import React from 'react'
import { useStateValue } from '../state'


const Modal = (props) => {
    const [{index}, dispatch] = useStateValue();
    const changeImage = (direction) => {
        console.log(direction)
    }
    return (
        <div>
            <div className="modal">
                {props.children}

                <button
                    type="button"
                    
                >
                    Next
                </button>

                <button
                    onClick={() => dispatch({
                        type: 'updateIndex',
                        newIndex: index - 1
                    })}
                >
                    prev 
                </button>

                <button 
                    type="button"
                    onClick={() => dispatch({
                        type: 'updateModal',
                        newModal: { showModal: false }
                    })}
                >
                    close
                </button>
            </div>
        </div>
    )
}

export default Modal