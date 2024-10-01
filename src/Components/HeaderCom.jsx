
import { NavBarContainer,GlobalStyle,HeaderContainer, ImageContainer, ListContainer, UnorderedList, List, NavLink, HeaderText } from "./HeaderCom.styles"
import ConstantValues from "../ConstantValues/ConstValue";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const {
 
    firozsoftwaredevelopmentengineer,
    home,
    about,
    skills,
    projects,
    contact,
}=ConstantValues;

export const Header =()=>{

    const[menu,setMenu]=useState("home");
 
    return(<>

        <GlobalStyle />
              <NavBarContainer>
                   <HeaderContainer>
                   <ImageContainer>
                       <HeaderText>{firozsoftwaredevelopmentengineer}</HeaderText>
                 </ImageContainer>

                  <ListContainer>
                        
                        <UnorderedList>
                    <List><AnchorLink offset={60} href="#home"> <NavLink><p onClick={()=>setMenu("home")}>{home}</p></NavLink></AnchorLink>{menu==="home"? <img src="../../src/Images/nav_underline.svg" alt="" />:<></>}</List>
                    <List><AnchorLink offset={80} href="#about"><NavLink><p onClick={()=>setMenu("about")}>{about}</p></NavLink> </AnchorLink>{menu==="about"? <img src="../../src/Images/nav_underline.svg" alt="" />:<></>}</List>
                    <List><AnchorLink offset={100} href="#skills"><NavLink><p onClick={()=>setMenu("skills")}>{skills}</p></NavLink> </AnchorLink>{menu==="skills"? <img src="../../src/Images/nav_underline.svg" alt="" />:<></>}</List>
                    <List><AnchorLink offset={60} href="#project"><NavLink><p onClick={()=>setMenu("project")}>{projects}</p></NavLink> </AnchorLink>{menu==="project"? <img src="../../src/Images/nav_underline.svg" alt="" />:<></>}</List>
                    <List><AnchorLink offset={80} href="#contact"><NavLink><p onClick={()=>setMenu("contact")}>{contact}</p></NavLink> </AnchorLink>{menu==="contact"? <img src="../../src/Images/nav_underline.svg" alt="" />:<></>}</List>
                    </UnorderedList>

                  </ListContainer>
                </HeaderContainer>
            
        </NavBarContainer>
   </>)
}