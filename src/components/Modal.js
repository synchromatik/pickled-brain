import React from 'react'
import { useStateValue } from '../state'


const Modal = (props) => {
    const [{index}, dispatch] = useStateValue();
    
    return (
        <div>
            <div className="modal">
                {props.children}

                <button
                    type="button"
                    onClick={() => dispatch({
                        type:'updateIndex',
                        newIndex: index + 1
                    })}
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