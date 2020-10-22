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
                        to="/about" 
                        onClick={props.toggle}
                    > 
                        About 
                    </SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink 
                        to="/skills" 
                        onClick={props.toggle}
                    > 
                        Skills 
                    </SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink 
                        to="/contact" 
                        onClick={props.toggle}
                    > 
                        Contact 
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
