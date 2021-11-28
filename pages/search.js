import React from 'react';
import tw from "tailwind-styled-components";
import Link  from "next/link";
import { useState } from 'react';

const Search = () => {

    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");

    return (
    <Wrapper>

        <ButtonContainer>
            <Link href="/">
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
        </ButtonContainer>

        <InputContainer>
         <FromToIcons>
            <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
            <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
            <Square src="https://img.icons8.com/windows/64/000000/square-full.png"/>
         </FromToIcons>

         <InputBoxes>
            <Input 
            placeholder="Ingresa el punto de partida" 
            value={pickup}
            onChange={(e)=>setPickup(e.target.value)}
            />
            <Input  
                placeholder="¿A dónde vas?"
                value={dropoff}
                onChange={(e)=>setDropoff(e.target.value)}
            />
         </InputBoxes>

         <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
        
        </InputContainer>

        <SavedPlaces>
            <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
            Lugares Guardados
        </SavedPlaces>

        <ConfirmContainer>
        <Link href={{
            pathname: "/confirm",
            query: {
                pickup: pickup,
                dropoff: dropoff
            }
        }}>
            <ConfirmLocation>
                 Confirmar Viaje
             </ConfirmLocation>
         </Link>
         </ConfirmContainer>
    </Wrapper>
    
    
    )
}

export default Search


const Wrapper = tw.div`
bg-gray-200 h-screen 
`
const ButtonContainer = tw.div`
bg-white px-4 
`
const BackButton = tw.img`
h-12 cursor-pointer
`
const FromToIcons = tw.div`
w-10 flex flex-col items-center 
`
const InputContainer = tw.div`
bg-white flex items-center px-4 
`
const Circle = tw.img`
h-2.5 
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-4
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-200 my-2 mx-2 rounded-2 p-2 outline-none border-none 
`
const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full mr-3
`
const SavedPlaces = tw.div`
flex items-center bg-white mt-2 px-4 py-2 font-medium
`
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmContainer = tw.div`
flex flex-col items-center mx-4 my-4
`

const ConfirmLocation = tw.div`
flex items-center bg-black  py-4  text-white font-medium px-16 text-sm rounded-2xl cursor-pointer
`