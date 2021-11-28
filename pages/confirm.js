import React from 'react';
import tw from "tailwind-styled-components";
import Map from './components/Map';
import { useEffect, useState } from 'react';
import {useRouter} from "next/router";
import RideSelector from './components/RideSelector';
import Link from 'next/dist/client/link';



const Confirm = () => {

    const router = useRouter();
    const {pickup, dropoff} = router.query

    console.log("Pickup", pickup);
    console.log("Dropoff", dropoff);

    const [pickupCoordinates, setPickupCoordinates ] = useState([0,0]);
    const [dropoffCoordinates, setDropoffCoordinates ] = useState([0,0]);



    const getPickUpCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWxlam9iYXJlaXJvIiwiYSI6ImNrdzZ6MGg2aDE0MGIydW8wc3lvbDUxMnEifQ.5iXVNB_Gb__XEpVhhqXZXQ",
                limit: 1
            })    
        )
                .then(res => res.json())
                .then(data =>{
                    setPickupCoordinates(data.features[0].center)
                })
    }

    const getDropOffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWxlam9iYXJlaXJvIiwiYSI6ImNrdzZ6MGg2aDE0MGIydW8wc3lvbDUxMnEifQ.5iXVNB_Gb__XEpVhhqXZXQ",
                limit: 1
            })    
        )
                .then(res => res.json())
                .then(data =>{

                    setDropoffCoordinates(data.features[0].center)
                })
    }

    useEffect(() => {
        getPickUpCoordinates(pickup);
        getDropOffCoordinates(dropoff);
    },[pickup, dropoff])

    
    
    return (
        <Wrapper>
            
            <Link href="/search">
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
            <Map    
            pickupCoordinates = {pickupCoordinates} 
            dropoffCoordinates = {dropoffCoordinates}
            />

            <RideContainer>

                 <RideSelector 
                     pickupCoordinates = {pickupCoordinates} 
                     dropoffCoordinates = {dropoffCoordinates}
                 />

                 <ConfirmButtonContainer>
                    <ConfirmButton>
                     Confirmar UberX
                     </ConfirmButton>
                    
                 </ConfirmButtonContainer>

            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`

`
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 text-center py-4 text-xl font-medium
`


const BackButton = tw.img`
h-12 w-12 cursor-pointer bg-white z-10 rounded-full absolute ml-2 my-2
`