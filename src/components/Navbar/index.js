import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import{
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements';

const Navbar = (props) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const gotoTop = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo 
                        to="/"   
                        animate={iconInitialAnimate}
                        whileHover={{ scale: 2 }}    
                        whileTap={{ scale: 1.5 }} 
                        onClick={gotoTop}
                    >
                        RVC
                    </NavLogo>
                    <MobileIcon onClick={props.toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem
                            animate={iconInitialAnimate}
                            whileHover={{ scale: 2 }} 
                            whileTap={{ scale: 1.5 }} 
                        >
                            <NavLinks  
                                to="about" 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem   
                            animate={iconInitialAnimate}
                            whileHover={{ scale: 2 }} 
                            whileTap={{ scale: 1.5 }} 
                        >
                            <NavLinks 
                                to="skills"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Skills
                            </NavLinks>
                        </NavItem>
                        <NavItem
                            animate={iconInitialAnimate}
                            whileHover={{ scale: 2}} 
                            whileTap={{ scale: 1.5 }} 
                        >
                            <NavLinks 
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
 
const iconInitialAnimate = {
    scale: [1, 2, 2, 1, 1],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
}

