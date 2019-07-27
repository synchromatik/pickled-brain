import React from 'react'
import ImageList from './ImageList.js'

export default function Images() {

    return (
        <React.Fragment>
            {ImageList.map(image => (
                <galeryitems key={image.src} >
                    {image.url}
                </galeryitems>
            ))}
        </React.Fragment>
    )
}