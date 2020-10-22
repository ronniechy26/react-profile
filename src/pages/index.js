import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>  setIsOpen(!isOpen);
    //https://www.youtube.com/watch?v=Nl54MJDR2p8
    //1:13:42
    return (
        <>
            <Sidebar 
                isOpen={isOpen} 
                toggle={toggle}
            />
            <Navbar 
                toggle={toggle}
            />
        </>
    )
}

export default Home;
