import { AboutContent, AboutContentContainer, AboutEducation, AboutHeading, AboutTitle, AboutTitleContainer, CompanyTitle, Container, EducationContent, EducationHeading } from "./About.styles"
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

            <div>
                <Container>
                    <AboutTitleContainer>
                        <AboutTitle>{about}</AboutTitle> 
                     <AboutHeading>{whyMe}</AboutHeading>
                    </AboutTitleContainer>
                    <AboutContentContainer>
                        <AboutContent>
                        {introContent}
                        </AboutContent>
                    </AboutContentContainer>

                    <AboutTitleContainer>
                        <AboutTitle>Work Experience</AboutTitle> 
                    </AboutTitleContainer>
                    <AboutContentContainer>
                        <AboutContent>
                        Feb-2022 - June-2023     
                        <CompanyTitle>
                            Galaxy Weblinks Ltd
                        </CompanyTitle>
                        <AboutContent>
                            Junior React Native Engineer
                        </AboutContent>
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
            </div>

    </>)
}