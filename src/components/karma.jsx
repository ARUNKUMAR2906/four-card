import iconkarma from '../assets/images/icon-karma.svg';

const Karma = () => {
  return (
      <div className="flex justify-center items-center">
        <div className="bg-white border-t-4 border-t-orange-300 rounded-lg p-[10px] shadow-lg font-poppins relative w-[90%] md:w-[100%]">
          <h1 className="font-semibold text-2xl m-4">Karma</h1>
          <p className="ml-4 ">Regularly evaluates our talents to ensure</p>
          <p className="ml-4">quality</p>
          <img src={iconkarma} alt="" className="mt-12 mb-6 ml-[75%]" />
        </div>
      </div>
  )
}

export default Karma
