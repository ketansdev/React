import BottomButton from "./components/BottomButton"
import Center from "./components/Center"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="max-w-300 mt-20 bg-white p-20 rounded-4xl flex flex-col justify-between gap-10">
      <Header />
      <Center />
      <BottomButton />
    </div>
  )
}

export default App
