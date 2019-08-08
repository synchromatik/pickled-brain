import React, { useState } from 'react'
import MapGL, { Marker, GeolocateControl } from 'react-map-gl'


import 'mapbox-gl/dist/mapbox-gl.css'
import mapicon from '../images/map-icon.png'
const TOKEN = 'pk.eyJ1Ijoic3luY2hyb21hdGlrIiwiYSI6ImZFT3lpWTQifQ.tbfmNm3pK7VtS-kwMNUCTA'

const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10
};

const InitialState = {
    viewport: {
        latitude: 44.819406,
        longitude: 20.452809,
        zoom: 17.8,
        width: '100%',
        height: 500
    }
}
function Mapa() {

    const [gdesam, setGdeSam] = useState(InitialState)
    //const _onViewportChange = viewportNew => console.log(viewportNew)
    const _onViewportChange = viewportNew => setGdeSam({ 
        viewport: { 
            ...gdesam.viewport, 
            latitude: viewportNew.latitude, 
            longitude: viewportNew.longitude,
            zoom: 13.8
        }  
    })

    return (
        <div>
            <MapGL
                {...gdesam.viewport}
                mapboxApiAccessToken={TOKEN}
                onViewportChange={_onViewportChange}
            >
                <Marker latitude={44.819406} longitude={20.452809} offsetLeft={0} offsetTop={-110}>
                    <div>
                        <img src={mapicon} alt="Marker" />
                    </div>
                </Marker>
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
            </MapGL>
                <button onClick={() => 
                    setGdeSam({
                            viewport: { ...gdesam.viewport, zoom: gdesam.viewport.zoom + 1}
                        })
                }>
                    Zoom in here
                </button>
                <button onClick={() =>
                    setGdeSam({
                        viewport: { ...gdesam.viewport, zoom: gdesam.viewport.zoom - 1 }
                    })
                }>
                    Zoom out
                </button>
                <button onClick={() => 
                    setGdeSam(InitialState)}>
                        Move me back to pb
                </button>
        </div>
    )
}

export default Mapa