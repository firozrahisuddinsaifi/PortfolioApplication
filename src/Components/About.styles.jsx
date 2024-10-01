import styled from "styled-components";
import Colors from "../Colors";

export const Container=styled.div`

display:flex;
flex-direction: column;
align-items:center;
justify-content:space-between;
padding:2rem;
letter-spacing:0.1rem;
`
export const AboutTitleContainer=styled.div`
width:50%;
@media (max-width: 767px) {
   width:100%;
  }

`
export const AboutTitle=styled.h2`
font-weight:600;

`
export const AboutHeading=styled.h1`
    font-weight: 400;
    color:${Colors.black};
    text-transform:capitalize;
    display:inline-block;
    position:relative;
    z-index:-1;

&::after{
    content:" ";
        position:absolute;
        bottom:-0.3rem;
        left:0;
        width:62%;
        border-bottom:0.2rem solid ${Colors.mainColor};
}
`

export const AboutContentContainer=styled.div`
width:50%;
height:auto;
margin:2.5rem;
@media (max-width: 767px) {
   width:100%;
  }



`
export const AboutContent=styled.p`


`

export const AboutEducation=styled.div`
width:50%;
height:auto;
@media (max-width: 767px) {
   width:100%;
  }

`
export const CompanyTitle=styled.h3`
`

export const EducationHeading=styled.h2`
margin-top:1rem;
font-weight:600;
`

export const EducationContent=styled.p`
color:${Colors.gradient};
opacity:0.8;
position:relative;
z-index:-1;
`

