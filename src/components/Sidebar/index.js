import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';

const Sidebar = (props) => {

    return (
        <SidebarContainer 
            isOpen={props.isOpen} 
            onClick={props.toggle}
        >
            <Icon onClick={props.toggle} >
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                        to="about" 
                        onClick={props.toggle}
                        whileHover={{ scale: 1.2}} 
                    > 
                        About 
                    </SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink 
                        to="skills" 
                        onClick={props.toggle}
                        whileHover={{ scale: 1.2}}  
                    > 
                        Skills 
                    </SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink 
                        to="contact" 
                        onClick={props.toggle}
                        whileHover={{ scale: 1.2}} 
                    > 
                        Contact 
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
