import React, { useContext } from "react";
import { StepperContext } from "../../Context/StepperContext";
import { FaUser } from "react-icons/fa";
import image from './image.png';
import document from './document.png';

const IdentificationDetails: React.FC = () => {
  const context = useContext(StepperContext);

  if (!context) {
    return <div>Error: StepperContext not found</div>;
  }

  const { userData, setUserData } = context;

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files) {
      const file = files[0];
      if (name === "imageUpload") {
        console.log("Uploaded image:", file);
      } else if (name === "documentUpload") {
        console.log("Uploaded document:", file);
      }
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  return (
    <div>
      <h2 className="text-black font-bold text-2xl">
        Enter Identification Details
      </h2>

      <div className="flex items-center justify-center lg:justify-start lg:mr-6 lg:ml-32"> 
        <h3 className="text-base sm:text-lg text-gray-400 text-center lg:text-left lg:w-auto">
          Please submit your identification information
        </h3>
      </div>

      <h4 className="mt-4 text-left text-black font-bold">
        Upload a recent passport-size photo for official use
      </h4>

      <div className="flex items-center mt-2">
        <div className="rounded-full bg-customgrayy w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center">
          <FaUser className="text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" />
        </div>

        <div className="ml-4">
          <label
            htmlFor="imageUpload"
            className="w-60 sm:w-72 md:w-96 lg:w-[28rem] xl:w-[30rem] h-20 sm:h-24 bg-white border-2 border-gray-200 rounded-md flex flex-col items-center justify-center cursor-pointer text-gray-400"
          >
            <img src={image} alt="" />
            <div className="inline-flex items-center">
              <span className="text-customblue font-bold mr-1">
                Click or Drop
              </span>
              <span className="text-gray-400">here to upload</span>
            </div>
            <input
              type="file"
              id="imageUpload"
              name="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <form className="mt-6">
        <div className="mb-6 mt-6">
          <label
            className="block text-black text-md font-bold mb-2 text-left"
            htmlFor="identificationType"
          >
            Identification Type
          </label>
          <select
            name="identificationType"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          >
            <option value="">--Select identification type--</option>
            <option value="National Id">National Id</option>
            <option value="Voters Id">Voters Id</option>
          </select>
        </div>

        <div className="mb-6 mt-6">
          <label
            htmlFor="documentUpload"
            className="w-full h-36 border-2 border-dashed border-customblue bg-customGray rounded-md flex flex-col items-center justify-center cursor-pointer text-gray-400"
          >
            <div className="mt-16">
              <img src={document} alt="" />
            </div>
            <div className="text-center mb-14">
              <span className="text-customblue font-bold mr-2">
                Click or Drop
              </span>
              here to upload
              <p className="mt-1 mb-6 text-sm text-gray-500">
                Upload a clear copy of your identification document (PDF or
                image format).
              </p>
            </div>
            <input
              type="file"
              id="documentUpload"
              name="documentUpload"
              accept="application/pdf, image/*"
              className="hidden"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="mb-6 mt-6">
          <label
            className="block text-black text-md font-bold mb-2 text-left"
            htmlFor="role"
          >
            Are you a developer or proprietor?
          </label>
          <select
            name="role"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          >
            <option value="">--Select role--</option>
            <option value="developer">Developer</option>
            <option value="proprietor">Proprietor</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default IdentificationDetails;
