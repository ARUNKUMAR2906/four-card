import iconsuper from '../assets/images/icon-supervisor.svg'

const Supervisor = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white border-t-4 border-t-teal-500 rounded-lg p-[10px] shadow-lg font-poppins relative w-[90%] md:w-[100%]">
        <h1 className="font-semibold text-2xl m-4">Supervisor</h1>
        <p className="ml-4 ">Monitos activity to identify project</p>
        <p className="ml-4">roadblocks</p>
        <img src={iconsuper} alt="" className="mt-12 mb-6 ml-[75%]" />
      </div>
    </div>
  );
};

export default Supervisor;
