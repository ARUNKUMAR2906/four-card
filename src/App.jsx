import Supervisor from "./components/supervisor";
import Teambuilder from "./components/teambuilder";
import Karma from "./components/karma";
import "./index.css";
import Calculator from "./components/calculator";

export default function App() {
  return (
    <div className="">
      <div className="flex flex-col items-center mt-[12%] sm:mt-[5%] mb-[5%] font-poppins">
        <h1 className="text-2xl sm:text-4xl text-slate-400 ">Reliable,efficient delivery</h1>
        <h1 className="text-2xl sm:text-4xl font-bold mt-2">Powered by Technology</h1>
        <div className="mt-6 text-justify sm:text-center text-sm sm:text-xl text-slate-400 pl-[40px] pr-[40px] mb-6">
        <p>Our Artificial intelligence powered tools use millions of project data <span className="sm:hidden">points to ensure that your project is successful</span></p>
        <p className="hidden sm:block">points to ensure that your project is successful</p>
        </div>
      </div>
      <div className="sm:flex items-center justify-center sm:gap-8 ">
        <Supervisor />
        <div className="grid grid-rows-2 gap-4 sm:gap-8">
          <Teambuilder />
          <Karma />
        </div>
        <Calculator />
      </div>
    </div>
  );
}
