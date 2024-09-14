
import { NavBarContainer,GlobalStyle,HeaderContainer, ImageContainer, ListContainer, UnorderedList, List, NavLink, HeaderText } from "./HeaderCom.styles"
import ConstantValues from "../ConstantValues/ConstValue";
const {
 
    firozsoftwaredevelopmentengineer,
    home,
    about,
    skills,
    projects,
    contact,
}=ConstantValues;

export const Header =()=>{
 
    return(<>

        <GlobalStyle />
              <NavBarContainer>
                   <HeaderContainer>
                   <ImageContainer>
                       <HeaderText>{firozsoftwaredevelopmentengineer}</HeaderText>
                 </ImageContainer>

                  <ListContainer>
                        
                        <UnorderedList>
                    <List><NavLink href="#">{home}</NavLink></List>
                    <List><NavLink href="#">{about}</NavLink></List>
                    {/* <List><NavLink href="#">{services}</NavLink></List>
                    <List><NavLink href="#">{resume}</NavLink></List> */}
                    <List><NavLink href="#">{skills}</NavLink></List>
                    <List><NavLink href="#">{projects}</NavLink></List>
                    <List><NavLink href="#">{contact}</NavLink></List>
                    </UnorderedList>

                  </ListContainer>
                </HeaderContainer>
            
        </NavBarContainer>
   </>)
}