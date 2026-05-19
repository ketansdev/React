import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

const Section01 = () => {
  return (
    <div className="flex justify-between pt-14 p-3 border-t-2 border-gray-200 rounded-3xl">
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default Section01
