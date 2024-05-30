import iconcal from '../assets/images/icon-calculator.svg'

const Calculator = () => {
  return (
      <div className="flex justify-center items-center mt-4 mb-6 sm:mt-0 sm:mb-0">
        <div className="bg-white border-t-4 border-t-blue-400 rounded-lg p-[10px] shadow-lg font-poppins relative w-[90%] md:w-[100%]">
          <h1 className="font-semibold text-2xl m-4">Calculator</h1>
          <p className="ml-4 ">Uses data from post projects to provide</p>
          <p className="ml-4">better delivery estimates</p>
          <img src={iconcal} alt="" className="mt-12 mb-6 ml-[75%]" />
        </div>
      </div>
  )
}

export default Calculator;
