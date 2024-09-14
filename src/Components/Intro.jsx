import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FirstText, MainContainer, RunningText, SecondText } from "./Intro.styles";
import Colors from '../Colors';



export const Intro=()=>{
  
    const [text]=useTypewriter({

        words: ['React/React Native', 'Html5/CSS3', 'JavaScript ECMA-6', 'Git/Github', 'C/C++','Data Structure And Algorithms','DBMS(SQL)','Operating System'],
        loop:{},
        typeSpeed:20,
        deleteSpeed:20,
    })
    return(<>

<MainContainer>
<RunningText>
<FirstText>{text}</FirstText>
<SecondText> 
<Cursor  cursorColor= {Colors.black} cursorStyle={'<'}/>
</SecondText>
</RunningText>

</MainContainer>

    </>)
}