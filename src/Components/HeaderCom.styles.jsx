import {styled,createGlobalStyle} from "styled-components";
import Colors from "../Colors";

export const GlobalStyle=createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight:400;
    font-family: "Jost", sans-serif;
}
`
export const NavBarContainer=styled.div`
width:100%;
box-shadow:rgba(0,0,0,0.1) 0px 6px 24px 0px;
position:sticky;
top:0;
background-color:${Colors.white};

`

export const HeaderContainer=styled.div`
 display: flex;
    justify-content: space-between;
    align-items: center;
margin:0 auto;
padding:1.8rem;
max-width:70rem;


`
export const ImageContainer=styled.div`

`
export const ImageLink=styled.a`

`
export const ImageView=styled.img`

`
export const HeaderText=styled.h3`
letter-spacing:0.1rem;
font-family: "Great Vibes", cursive;
  font-weight: 600;
  
`
export const ListContainer=styled.div`


`

export const UnorderedList=styled.ul`
display:flex;
gap:1.2rem;
@media (max-width:710px){
   display:grid;
}
`
export const List=styled.li`
list-style-type: none;
    font-weight: 400;
    letter-spacing:0.1rem;

`
export const NavLink=styled.a`
text-decoration:none;
    font-weight: 400;
    color:${Colors.headingColor};
    text-transform:capitalize;
    display:inline-block;
    position:relative;
    
    &::after{
        content:" ";
        position:absolute;
        bottom:-0.2rem;
        left:0;
        width:0%;
        border-bottom:0.2rem solid ${Colors.mainColor};
        transition:all 0.3s linear;
       
    }
 &:hover::after{
    width:100%;
 }


    
`
