import React from 'react'
import Images from './Images'
import Modal from './Modal'
import { motion } from 'framer-motion'
import { useStateValue } from '../../state'

import Logo from './Logo'

function Gallery() {
    const [{ modal, index, images, lang }, dispatch] = useStateValue();
    
    return (
        <React.Fragment>
            <div className="galery">
                <Logo verzija={lang} />

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
                    
                    <div 
                        className={modal.showModal ? "modal__wrapper modal__wrapper--active" : "modal__wrapper--active"}
                    > 
                        <div 
                            className="modal__backdrop"
                            onClick={() => dispatch({
                                type: 'updateModal',
                                newModal: {
                                    showModal: false
                                }
                            })}
                        ></div>
                        
                        <Modal> 
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0}}
                                transition={{ duration: 0.5 }}
                               
                            > 
                                <h1>{images[index].name}</h1>
                                <img 
                                    src={images[index].src} 
                                    alt="alt" 
                                    onClick={() => dispatch({
                                        type: 'updateIndex',
                                        newIndex: index + 1
                                    })}
                                />
                            </motion.div>
                        </Modal> 
                    </div> : null}
            </div>
        </React.Fragment>
    )
}

export default Gallery