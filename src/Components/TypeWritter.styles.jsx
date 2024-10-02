import styled from "styled-components";
import Colors from "../Colors";

export const TypeWritterContainer=styled.div`
overflow:hidden;
`
export const MainContainer=styled.div`
max-width:100rem;
margin:0 auto;
padding:2.6rem 2.4rem;
display:grid;
grid-template-columns:repeat(2,1fr);
gap:2.6rem;
align-items:center;
@media screen and (min-width:481px) and (max-width:968px) 
       {
          grid-template-columns: repeat(1,1fr);
        }
`
export const TextContainer=styled.div`
overflow:hidden;
`
export const RunningText=styled.span`
   position: relative;
    color: #4070Fa;
    font-size: 30px;
    font-weight: 600;

`
export const SupportingText=styled.span`
&::after{
content:"";
color:blue;
}

&::before{
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    background:red;
}
`
export const Heading=styled.h1`
font-size:4vw;

`
export const ButtonContainer=styled.div`
margin-top:1rem;
display:flex;
flex-direction:row;
justify-content:space-around;

`
export const ResumeButton=styled.button`
background-color: ${Colors.buttonColor};
color:${Colors.buttonTextColor};
padding:0.8rem 3rem;
display:inline-block;
border-radius:0.3rem;
text-decoration:none;
letter-spacing:0.1rem;
font-weight:500;
border:none;
font-size:22px;

&:hover{
    background-color:${Colors.black};
    box-shadow:${Colors.buttonShadow};
    cursor:pointer;
}
`
export const ImageFigure=styled.figure`

`
export const ImageContainer=styled.div`

`
export const ImageView=styled.img`
width:100%;
height:auto;

`


