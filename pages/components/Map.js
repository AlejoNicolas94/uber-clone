import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlam9iYXJlaXJvIiwiYSI6ImNrdzZ6MGg2aDE0MGIydW8wc3lvbDUxMnEifQ.5iXVNB_Gb__XEpVhhqXZXQ';

function Map(props){


    useEffect(() => {
   
        const map = new mapboxgl.Map({
         container: "map",
         style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
         center: [-58.26,-34.36],
         zoom: 5,
         });

         if(props.pickupCoordinates){
             addToMap(map, props.pickupCoordinates)
         }
         if(props.dropoffCoordinates){
             addToMap(map, props.dropoffCoordinates)
         }
         if(props.pickupCoordinates && props.dropoffCoordinates){
             map.fitBounds([
                 props.dropoffCoordinates,
                 props.pickupCoordinates
             ], {
                padding:60
             })
         }
         
         },[props.pickupCoordinates, props.dropoffCoordinates]);

         const addToMap = (map, coordinates) =>{
            const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);

         }
    
    return <Wrapper id="map"></Wrapper>
}

export default Map

const Wrapper = tw.div `
    flex-1 h-1/2
`
