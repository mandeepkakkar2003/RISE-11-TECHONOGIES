import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineDollarCircle,
  AiOutlineEnvironment,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Dropzone from "react-dropzone";

export default function ClaimForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [uploadedFiles, setUploadedFiles] = useState({
    contract: null,
    arbitration: null,
    additional: [],
  });

  const validateFileSize = (file) => {
    if (file && file.size > 2 * 1024 * 1024) {
      return "File size cannot exceed 2MB";
    }
    return true;
  };

  const [fileErrors, setFileErrors] = useState({});

  const handleFileDrop = (name, acceptedFiles) => {
    const validFiles = [];
    const errors = {};

    acceptedFiles.forEach((file, index) => {
      const validationMessage = validateFileSize(file);
      if (validationMessage === true) {
        validFiles.push(file);
      } else {
        errors[index] = validationMessage;
      }
    });

    setFileErrors((prev) => ({ ...prev, [name]: errors }));
    if (name === "additional") {
      setUploadedFiles((prev) => ({
        ...prev,
        additional: [...prev.additional, ...validFiles],
      }));
    } else {
      setUploadedFiles((prev) => ({ ...prev, [name]: validFiles[0] }));
    }
  };

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form Submitted Successfully:", data, uploadedFiles);
    alert("Claim Form Submitted Successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        File Your Claim{" "}
        <span className="text-gray-500 text-base md:text-xl">(Approx 5 Minutes)</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Claim Value Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <AiOutlineDollarCircle className="mr-2 text-lg" /> Contract Value (USD)
            </label>
            <input
              type="number"
              placeholder="10,000.00"
              {...register("contractValue", {
                required: "Contract value is required",
                pattern: {
                  value: /^[0-9]+(\.[0-9]{1,2})?$/,
                  message: "Enter a valid numeric value",
                },
              })}
              className={`w-full p-3 border rounded-md ${
                errors.contractValue ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.contractValue && (
              <span className="text-red-500 text-xs">
                {errors.contractValue.message}
              </span>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <AiOutlineDollarCircle className="mr-2 text-lg" /> Claim Value (USD)
            </label>
            <input
              type="number"
              placeholder="15,000.00"
              {...register("claimValue", {
                required: "Claim value is required",
                pattern: {
                  value: /^[0-9]+(\.[0-9]{1,2})?$/,
                  message: "Enter a valid numeric value",
                },
              })}
              className={`w-full p-3 border rounded-md ${
                errors.claimValue ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.claimValue && (
              <span className="text-red-500 text-xs">
                {errors.claimValue.message}
              </span>
            )}
          </div>
        </div>

        {/* Place and Language Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <AiOutlineEnvironment className="mr-2 text-lg" /> Place
            </label>
            <input
              type="text"
              placeholder="Select Place for proceedings"
              {...register("place", {
                required: "Place is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only alphabets are allowed",
                },
              })}
              className={`w-full p-3 border rounded-md ${
                errors.place ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.place && (
              <span className="text-red-500 text-xs">
                {errors.place.message}
              </span>
            )}

            <p className="text-gray-600 text-sm mt-4">
              Is the place for the proceedings mentioned in the agreement?
            </p>
            <div className="mt-2 flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="yes"
                  {...register("placeAgreement", {
                    required: "Select Yes or No",
                  })}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="no"
                  {...register("placeAgreement", {
                    required: "Select Yes or No",
                  })}
                />
                <span className="ml-2">No</span>
              </label>
              {errors.placeAgreement && (
                <span className="text-red-500 text-xs block">
                  {errors.placeAgreement.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <BiWorld className="mr-2 text-lg" /> Language
            </label>
            <input
              type="text"
              placeholder="Select Language for proceedings"
              {...register("language", {
                required: "Language is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only alphabets are allowed",
                },
              })}
              className={`w-full p-3 border rounded-md ${
                errors.language ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.language && (
              <span className="text-red-500 text-xs">
                {errors.language.message}
              </span>
            )}

            <p className="text-gray-600 text-sm mt-4">
              Is the language for the proceedings mentioned in the agreement?
            </p>
            <div className="mt-2 flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="yes"
                  {...register("languageAgreement", {
                    required: "Select Yes or No",
                  })}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="no"
                  {...register("languageAgreement", {
                    required: "Select Yes or No",
                  })}
                />
                <span className="ml-2">No</span>
              </label>
              {errors.languageAgreement && (
                <span className="text-red-500 text-xs block">
                  {errors.languageAgreement.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Upload Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Agreement under Dispute */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <AiOutlineCloudUpload className="mr-2 text-lg" /> Agreement under Disputes
            </label>
            <Dropzone onDrop={(files) => handleFileDrop("contract", files)}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50"
                >
                  <input {...getInputProps()} />
                  <p className="text-gray-500">Click or drag a file</p>
                </div>
              )}
            </Dropzone>
            {fileErrors["contract"] &&
              Object.values(fileErrors["contract"]).map((error, index) => (
                <p key={index} className="text-red-500 text-xs mt-1">
                  {error}
                </p>
              ))}
          </div>

          {/* Arbitration Upload */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <AiOutlineCloudUpload className="mr-2 text-lg" /> Arbitration Agreement
            </label>
            <Dropzone onDrop={(files) => handleFileDrop("arbitration", files)}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50"
                >
                  <input {...getInputProps()} />
                  <p className="text-gray-500">Click or drag a file</p>
                </div>
              )}
            </Dropzone>
            {fileErrors["arbitration"] &&
              Object.values(fileErrors["arbitration"]).map((error, index) => (
                <p key={index} className="text-red-500 text-xs mt-1">
                  {error}
                </p>
              ))}
          </div>

          {/* Additional Documents */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <AiOutlineCloudUpload className="mr-2 text-lg" /> Additional Documentation
            </label>
            <Dropzone onDrop={(files) => handleFileDrop("additional", files)}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50"
                >
                  <input {...getInputProps()} />
                  <p className="text-gray-500">Click or drag files</p>
                </div>
              )}
            </Dropzone>
            {fileErrors["additional"] &&
              Object.values(fileErrors["additional"]).map((error, index) => (
                <p key={index} className="text-red-500 text-xs mt-1">
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-5 py-3 rounded-md text-white transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
