import moment from "moment"
import logo from "../assets/logo.png"
function Header() {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 mt-5">
      <div className="w-[400px]">
        <img src={logo} alt="" />
      </div>
      <h2 className="text-gray-300">Journalism Without Fear or Favour</h2>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  )
}

export default Header