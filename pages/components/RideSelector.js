import React from 'react';
import tw from "tailwind-styled-components";
import { carList } from '../data/carList';
import { useState, useEffect } from 'react';

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0);

    //Get ride duration from MAPBOX API
    //pickupCoordinates[0] (lat) && pickupCoordinates[1] (long) same with dropoff

    useEffect(()=>{
       
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYWxlam9iYXJlaXJvIiwiYSI6ImNrdzZ6MGg2aDE0MGIydW8wc3lvbDUxMnEifQ.5iXVNB_Gb__XEpVhhqXZXQ`)
                            .then(res => res.json())
                              .then(data => {
                                         setRideDuration(data.routes[0].duration / 3)
                                     })
                }, [pickupCoordinates, dropoffCoordinates])

    return (
        <Wrapper>
            <Title>Elegí un vehiculo o desliza para más opciones</Title>
            <CarList>
                {carList.map((car, index) => (
                    <Car key={index}>
                    <CarImage src={car.imgUrl} />
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>A 5 minutos de ti</Time>
                    </CarDetails>
                    <Price>{'ARS' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))}
               

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-gray-500 text-center text-sm py-2 border-b
`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-4 items-center
`
const CarImage = tw.img`
h-14 mr-6
`
const CarDetails = tw.div`
flex-1`
const Service = tw.div`
font-medium`
const Time = tw.div`
text-sm text-blue-500 font-medium `
const Price = tw.div`
font-medium `
