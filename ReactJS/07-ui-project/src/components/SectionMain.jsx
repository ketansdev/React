import SectionMainLeft from "./SectionMainLeft"
import SectionMainRight from "./SectionMainRight"

const SectionMain = () => {
  return (
    <div className="flex gap-5 w-full p-3 mt-5">
      <SectionMainLeft />
      <SectionMainRight />
    </div>
  )
}

export default SectionMain
