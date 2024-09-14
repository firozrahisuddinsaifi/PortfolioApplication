import { ContactCard, ContactCardContainer, ContactCardHeading, ContactCardIcon, ContactCardPara, ContactContainer, ContactHeading, ContactTitle, ContactTitleContainer, Container } from "./Contact.styles"
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import ConstantValues from "../ConstantValues/ConstValue";

const {
contact,
getInTouch,
phone,
number,
email,
firozGmailCom,
address,
newDelhi
}=ConstantValues;

export const Contact=()=>{
    return(<>
            <ContactContainer>

                <Container>
                    <ContactTitleContainer>
                        <ContactTitle>{contact}</ContactTitle>
                        <ContactHeading>{getInTouch}</ContactHeading>
                    </ContactTitleContainer>
        <ContactCardContainer>
                    <ContactCard>
                        <ContactCardIcon>
                        <FaPhone />
                        </ContactCardIcon>
                        <ContactCardHeading>{phone}</ContactCardHeading>
                        <ContactCardPara>{number}</ContactCardPara>
                    </ContactCard>


                    <ContactCard>
                        <ContactCardIcon>
                        <MdEmail />
                        </ContactCardIcon>
                        <ContactCardHeading>{email}</ContactCardHeading>
                        <ContactCardPara>{firozGmailCom}</ContactCardPara>
                    </ContactCard>


                    <ContactCard>
                        <ContactCardIcon>
                        <IoLocationSharp />
                        </ContactCardIcon>
                        <ContactCardHeading>{address}</ContactCardHeading>
                        <ContactCardPara>{newDelhi}</ContactCardPara>
                    </ContactCard>
                    </ContactCardContainer>
                </Container>
            </ContactContainer>

    </>)
}