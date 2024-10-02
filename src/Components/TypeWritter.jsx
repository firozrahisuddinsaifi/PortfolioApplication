import {  ButtonContainer, Heading, ImageContainer, ImageFigure, MainContainer, ResumeButton,  TextContainer, TypeWritterContainer } from "./TypeWritter.styles";
import ConstantValues from "../ConstantValues/ConstValue";
import { Intro } from "./Intro";
const {
    ima,
    resume,
    unlockMyPotentialWithYou,
    comingSoon

}=ConstantValues

const PDF_FILE_URL='http://localhost:5173/Firoz-CV.pdf';
const RESUME_LINK='https://drive.google.com/file/d/1k2kiXhL5vOzZu8hQRomHNfzoV4wOXfZE/view?usp=sharing';
export const TypeWritter=()=>{

    const downloadFileAtUrl=(url)=>{
        const fileName = url.split('/').pop();
        const aTag=document.createElement("a");
        aTag.href=url;
        aTag.setAttribute('download',fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return(<>

<main>
        <TypeWritterContainer>
            <MainContainer>
                <TextContainer>
                 
                    <Heading>
                        {unlockMyPotentialWithYou} {ima}
                    </Heading>
                  <Intro  newValue={ima}/>
                   
<ButtonContainer>
<ResumeButton onClick={()=>downloadFileAtUrl(PDF_FILE_URL)}>{resume}</ResumeButton>
 
 <ResumeButton onClick={()=>downloadFileAtUrl(RESUME_LINK)}>Resume Link</ResumeButton>
</ButtonContainer>
                </TextContainer>
                <ImageContainer >

                    <ImageFigure>
                    <Heading>{comingSoon}</Heading>
                    {/* use it later */}
                        {/* <ImageView src="#" alt="logo"/> */}
                    </ImageFigure>
                </ImageContainer>
            </MainContainer>
        </TypeWritterContainer>
  
</main>

    </>)
}