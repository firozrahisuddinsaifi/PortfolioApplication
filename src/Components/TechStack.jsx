import { MainContainer, SpanTag, TechCardsContainer, TechHeading, TechImageContainer, TechSkillContainer, TechStax } from "./TechStack.styles"
import ConstantValues from "../ConstantValues/ConstValue";

const {
techStacks,
html,
css,
javaScript,
reactNative,
dsa,
sql,
git,
github,
c,
cpp,
}=ConstantValues;

export const TechStack=()=>{

    return<>
        <>

            <MainContainer>
                <TechSkillContainer>
                    <TechHeading>{techStacks}</TechHeading>
                </TechSkillContainer>

                <TechCardsContainer>
                <TechStax><TechImageContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBIch_Bsl-Ea2qIXbpQh8cqTqsWZOHbhuww&s" alt="html_Image" /><SpanTag>{html}</SpanTag></TechStax>
                <TechStax><TechImageContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkMYb955fj7IRiw-8g6gmn5GoZzKni1Kv8g&s" alt="css_Image" /><SpanTag>{css}</SpanTag></TechStax>
                <TechStax><TechImageContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXaZgOP8Dt5J05vGncrxXkY6VJKoi1_lsFw&s" alt="js_Image" /><SpanTag>{javaScript}</SpanTag></TechStax>
                <TechStax><TechImageContainer src="../../src/Images/Reacts.png" alt="React_Image" /><SpanTag>{reactNative}</SpanTag></TechStax>
                <TechStax><TechImageContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEj_V6_aIHeHJk9LAEq1kk5Bs7bjAzb82qw&s" alt="git_Image" /><SpanTag>{git}</SpanTag></TechStax>
                <TechStax><TechImageContainer src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="gitHub_Image" /><SpanTag>{github}</SpanTag></TechStax>
                <TechStax><TechImageContainer src="../../src/Images/c.png" alt="c/c++_Image" /><SpanTag>{c}</SpanTag></TechStax>
                <TechStax><TechImageContainer src="../../src/Images/c++.png" alt="c/c++_Image" /><SpanTag>{cpp}</SpanTag></TechStax>
                <TechStax><TechImageContainer src="../../src/Images/hierarchical.png" alt="DSA_Image" /><SpanTag>{dsa}</SpanTag></TechStax>
                <TechStax><TechImageContainer src="../../src/Images/sql.png" alt="sql_image" /><SpanTag>{sql}</SpanTag></TechStax>
                </TechCardsContainer>
            </MainContainer>

        </>
    </>
}