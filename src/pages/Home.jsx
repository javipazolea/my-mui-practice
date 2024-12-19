import React from 'react';
import Buttons from '../components/Buttons';
import Buttons2 from '../components/Buttons2';
import Grids from '../components/Grids';
import Forms from '../components/Forms';
import EjemploModal from '../components/Modals/EjemploModal';
import EjemploTabla from '../components/Tables/EjemploTabla';
import CardsEjemplo from '../components/Cards/CardsEjemplo';
import Card2 from '../components/Cards/Card2';
import Carousel from '../components/Carousel/Carousel';


const Home = () => {
return (
    <>
        <Forms />
        <br></br>
        <Buttons />  
        <br></br>
        <Buttons2 />
        <br></br>
        <Grids />
        <br></br>
        <EjemploModal />
        <br></br>
        <EjemploTabla />
        <br></br>
        <CardsEjemplo />
        <br></br>
        <Card2 />
        <br></br>
        <Carousel />
        
    </>
);
};

export default Home;
