import styled from "styled-components";
import Colors from "../Colors";

export const ProjectContainer=styled.div`

`

export const Container=styled.div`
 width:100%;
 height:auto;
 padding:2.6rem 2.4rem;

`

export const ProjectContainerHeading=styled.div`

 width:22.2rem;
 height:auto;

`

export const ProjectContainerText=styled.h1`
`

export const ProjectCards=styled.div`
background-color:${Colors.white};
border-radius:0.25rem;
padding:1.8rem 1.4rem;
transition:all 0.3s;
box-shadow:rgba(0,0,0,0.1) 0px 6px 24px 0px;

&:hover{
box-shadow:rgba(0,0,0,0.2) 0px 6px 24px 0px;
cursor:pointer;
}

`
export const ProjectCardsContainer=styled.div`
border-radius:0.3rem;
margin-top:10px;
background-color:${Colors.ghostWhite};
width:100%;
height:auto;
 padding:3.5rem;
 display:flex;
 justify-content:space-around;
 flex-wrap: wrap;
 align-item:center;
 text-align:center;
 gap:6rem;
 grid-template-columns:repeat(3,1fr);
 
`

export const ProjectNameText=styled.h1`
letter-spacing:0.1rem;
`
export const ProjectHiglightText=styled.p`
margin-top:0.5rem;
letter-spacing:0.1rem;
`
export const GitHubButton=styled.button`
margin-top:2.5rem;
width:10rem;
padding:0.9rem 1rem;
background-color:${Colors.buttonColor};
color:${Colors.buttonTextColor};
border:none;
font-size:1.2rem;
letter-spacing:0.1rem;
border-radius:0.25rem;

&:hover{
 
    background-color:${Colors.black};
    box-shadow:${Colors.buttonShadow};
    cursor:pointer;
    
}
`