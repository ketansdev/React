import Header from "./components/header"
import SectionMain from "./components/SectionMain"
import Section01 from "./components/SectionTop"

const App = () => {
  return (
    <div className="w-full max-w-350 m-auto">
      <Header />
      <Section01 />
      <SectionMain />
    </div>
  )
}

export default App
