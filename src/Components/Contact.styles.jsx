import styled from "styled-components";
import Colors from "../Colors";

export const ContactContainer=styled.div``

export const Container=styled.div`
 width:94%;
 height:auto;
 padding:2.6rem 2.4rem;
 background:${Colors.contactBackgroundColor};
 margin:auto;
 border-radius:0.2rem;
 position:relative;
 z-index:-1;

`
export const ContactTitleContainer=styled.div`
 display:grid;
 align-item:center;
 text-align:center;


`

export const ContactTitle=styled.h2`
letter-spacing:0.1rem;
`
export const ContactHeading=styled.h1`
text-decoration:none;
    font-weight: 400;
    color:${Colors.headingColor};
    text-transform:capitalize;
    display:inline-block;
    position:relative;
    
    &::after{
        content:" ";
        position:absolute;
        bottom:0.2rem;
        left:44%;
        width:13%;
        border-bottom:0.2rem solid ${Colors.mainColor};
     
       
    }

`

export const ContactCardContainer=styled.div`
 padding:3.5rem;
 display:flex;
 flex-direction:row;
 justify-content:space-around;
 align-item:center;
 text-align:center;
 flex-wrap:wrap;
 gap:3rem;

`

export const ContactCard=styled.div`
width:22rem;
background-color:${Colors.contactCardBackgroundColor};
border-radius:0.25rem;
padding:1.8rem 1.4rem;
transition:all 0.3s;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
@media (max-width: 967px) {
   width:100%;
  }
`
export const ContactCardHeading=styled.h3`

margin-bottom:0.4rem;

`

export const ContactCardIcon=styled.span`
color:${Colors.buttonTextColor};
font-size:2rem;

`

export const ContactCardPara=styled.p`
color:${Colors.contactParaColor};
letter-spacing:0.1rem;
`