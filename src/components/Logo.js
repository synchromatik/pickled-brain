import React from 'react'
import { ReactComponent as Sogo } from '../images/logo.svg'
import { motion } from 'framer-motion'

 const Logo = () => {
    return (
        <div className="brand">
            <div className="logo">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}

                > 
                    <Sogo className="svg"/>
                </motion.div>
                {/* <div className="tagline">
                    <h1>Pickled Brain Tattoo Studio</h1>
                    <h5>Belgrade, Serbia</h5>
                </div> */}
            </div>
            
        </div>
    )
 }

export default Logo