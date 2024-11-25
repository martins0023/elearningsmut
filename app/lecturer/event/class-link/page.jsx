"use client";

import Sidebar from "../../../../components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Modal from "react-modal";
import DashboardNav from "../../../../components/DashboardNav";
import { useState } from "react";

const Page = () => {
  const router = useRouter();

  const [convertmodalIsOpen, setConvertModalIsOpen] = useState(false);

  const convertopenModal = () => {
    //navigate("/");
    setConvertModalIsOpen(true);
  };

  const convertcloseModal = () => {
    setConvertModalIsOpen(false);
  };
  // State to track class link input
  const [classLink, setClassLink] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setClassLink(e.target.value);
  };

  const HandleNavigate = () => {
    convertopenModal();
    router.push("/dashboard/event/class-link");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60 w-full">
        {/* Dashboard Navigation */}
        <div className="bg-white w-full h-[128px]">
          <DashboardNav />
        </div>

        {/* Event Creation Section */}
        <div className="flex flex-col items-center w-full mt-8">
          <p className="text-black font-bold text-[32px]">Create Class link</p>
          <div className="mt-7">
            <p className="text-[20px] text-black font-semibold">
              You can schedule a meeting using:
            </p>
          </div>

          <div className="flex flex-row mt-4 gap-10">
            <Image
              src="/assets/google-meet.png"
              width={91.28}
              height={100}
              alt="google meet"
            />
            <Image
              src="/assets/zoom.png"
              width={115.14}
              height={100}
              alt="zoom"
            />
          </div>

          <div className="flex mt-8">
            <form className="flex flex-col gap-[26px]">
              <div>
                <select className="bg-[#EEEFF4] max-w-4xl h-[56px] w-[709px] p-3">
                  <option>Zoom</option>
                  <option>Google Meet</option>
                </select>
              </div>

              <div>
                <input
                  type="url"
                  name="code link"
                  value={classLink}
                  onChange={handleInputChange}
                  placeholder="Enter Code Link"
                  className="placeholder:text-black p-3 w-[709px] text-black text-[14px] font-normal border-black border"
                />
              </div>

              {/* Cancel and Done Buttons */}
              <div className="flex gap-8 items-center justify-center mt-6 mb-20">
                <button
                  onClick={() => router.push("/dashboard")}
                  className="px-6 py-2 h-[53px] bg-white items-center border w-[163px] border-primary text-primary rounded-full"
                >
                  Cancel
                </button>
                <button
                  onClick={HandleNavigate}
                  className={`px-6 py-2 h-[53px] items-center rounded-full w-[163px] ${
                    classLink
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-gray-500"
                  }`}
                  disabled={!classLink}
                >
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <Modal
          isOpen={convertmodalIsOpen}
          onRequestClose={convertcloseModal}
          contentLabel="success"
          className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-10"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-7 flex flex-col items-center m-3">
            <div className="p-3 mt-9 flex justify-center items-center">
              <img
                src="/assets/success-icon.png"
                alt="success"
                width={100}
                height={100}
                className="w-full h-auto items-center"
              />
            </div>
            <div className="mb-4">
              <p className="font-semibold text-[26px] text-[#000000]">
                SUCCESSFULL
              </p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-medium text-center text-[16px] text-[#000000]">
                Your event IS SUCCESSFULLY CREATED
              </p>
            </div>
            <button
              onClick={convertcloseModal}
              className="mt-6 bg-[#ffff] font-montserrat py-3 px-20 text-[#8E1011] border-[1.5px] border-[#8E1011] rounded-full uppercase w-full h-[60px]"
            >
              done
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Page;
