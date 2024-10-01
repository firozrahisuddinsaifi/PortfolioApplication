import { AboutContent, AboutContentContainer, AboutEducation, AboutHeading, AboutTitle, AboutTitleContainer, Container, EducationContent, EducationHeading } from "./About.styles"
import ConstantValues from "../ConstantValues/ConstValue";


const {
    about,
    whyMe,
    introContent,
    education,
    mDegree,
    mUniversity,
    mseason,
    bDegree,
    bUniversity,
    bseason,
}=ConstantValues
export const About=()=>{
    return(<>

           
                <Container id="about">
                    <AboutTitleContainer>
                        <AboutTitle>{about}</AboutTitle> 
                     <AboutHeading>{whyMe}</AboutHeading>
                    </AboutTitleContainer>
                    <AboutContentContainer>
                        <AboutContent>
                        {introContent}
                        </AboutContent>
                    </AboutContentContainer>

                    <AboutEducation>
                    <EducationHeading>{education}</EducationHeading>
                    <EducationHeading>{mDegree}</EducationHeading>
                    <EducationContent>{mUniversity}</EducationContent>
                    <EducationContent>{mseason}</EducationContent>

                    <EducationHeading>{bDegree}</EducationHeading>
                    <EducationContent>{bUniversity}</EducationContent>
                    <EducationContent>{bseason}</EducationContent>
                    </AboutEducation>
                </Container>
          

    </>)
}