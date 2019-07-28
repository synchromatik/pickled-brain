import React from 'react'
import Images from './Images'
import Modal from './Modal'

import { useStateValue } from '../state';

function Gallery() {
    const [{ modal, index, images }, dispatch] = useStateValue();
    
    
    return (
        <React.Fragment>
            <galery className="galery">
                <logo>
                    logo
                </logo>

                {images.map(image => (
                    <Images
                        key={image.id}
                        id={image.id}
                        src={image.src}
                        url={image.url}
                        alt={image.name}
                    />
                ))}
                
                {modal.showModal ? 
                    <div className="modal__wrapper"> 
                        <Modal> 
                            <img 
                                src={images[index].src} 
                                alt="alt" 
                                onClick={() => dispatch({
                                    type: 'updateIndex',
                                    newIndex: index
                                })}
                            />
                        </Modal> 
                    </div> : null}

            </galery>
        </React.Fragment>
    )
}

export default Gallery