import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import { Header } from "./Components/HeaderCom"
import { Projects } from "./Components/Projects"
import { TechStack } from "./Components/TechStack"
import { TypeWritter } from "./Components/TypeWritter"

export const  App=()=> {


  return (
    <>
    <Header />
    <TypeWritter />
    <About />
    <TechStack />
    <Projects />
    <Contact />
    </>
  )
}


