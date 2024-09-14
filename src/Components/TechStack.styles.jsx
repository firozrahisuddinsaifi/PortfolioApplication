import styled from "styled-components";
import Colors from "../Colors";


export const Section=styled.section``;
export const MainContainer=styled.div`
margin-top:1.5rem;

`
export const TechSkillContainer=styled.h1`
 width:22.2rem;
 height:auto;
 margin-left:3%;
 margin-bottom:1.5rem;
`
export const TechHeading=styled.div`
text-transform:uppercase;

`

export const TechCardsContainer=styled.div`
width:94%;
margin:2.5rem auto;
background:${Colors.white};
display:flex;
flex-wrap: wrap;
flex-direction: row;
align-items:center;
text-align:center;
justify-content: space-around;
border-radius:0.1rem;
position:relative;
z-index:-1;

`

export const TechStax=styled.div`
margin:1rem;
width:5rem;
height:auto;

`

export const TechImageContainer=styled.img`
width:100%;


`

export const SpanTag=styled.span`


padding:8px 16px;
color:${Colors.gradient};
opacity:0.8;
position:relative;
top:5px;


`