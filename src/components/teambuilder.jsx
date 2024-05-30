import iconteam from "../assets/images/icon-team-builder.svg";

const Teambuilder = () => {
  return (
      <div className="flex justify-center items-center mt-7 sm:mt-0">
        <div className="bg-white border-t-4 border-t-red-500 rounded-lg p-[10px] shadow-lg font-poppins relative w-[90%] md:w-[100%]">
          <h1 className="font-semibold text-2xl m-4">Team Builder</h1>
          <p className="ml-4 ">Scans our talent network to create the</p>
          <p className="ml-4">optimal team for your project</p>
          <img src={iconteam} alt="" className="mt-12 mb-6 ml-[75%]" />
        </div>
      </div>
  );
};

export default Teambuilder;
