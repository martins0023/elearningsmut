"use client";

// import Sidebar from "../../../components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DashboardNav from "../../../../components/DashboardNav";
import Sidebar from "../../../../components/Sidebar";

const GetStarted = () => {
  const router = useRouter();
  const handleCancelClick = () => {
    router.push(`/dashboard`);
  }

  const handleContinueClick = () => {
    router.push(`/dashboard/event`);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 w-full">
        <div className="bg-white w-full h-[128px]">
          <DashboardNav />
        </div>

        <div className="mt-4">
          <div className="mr-10">
          <p className="flex flex-col items-center text-black font-bold text-[32px] mr-10">
            Create an Event
          </p>
          </div>
          <div className="ml-60">
            <p className="font-semibold text-[24px] text-black">
              Choose from your courses
            </p>
            <div className="mt-4">
              <form className="space-y-2">
              {/* Radio Inputs */}
              <div>
                <input
                  type="radio"
                  id="course1"
                  name="course"
                  className="mr-2"
                />
                <label htmlFor="course1" className="text-lg text-black">
                  Introduction to Security and Policy Development (CYS 311)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="course2"
                  name="course"
                  className="mr-2"
                />
                <label htmlFor="course2" className="text-lg text-black">
                  Cyber Diplomacy and International Cooperation (CYS 313)
                </label>
              </div>
              <div>
                <input type="radio" id="none" name="course" className="mr-2" />
                <label htmlFor="none" className="text-lg text-black">
                  None
                </label> 
              </div>

              {/* Buttons */}
              <div className="flex flex-row items-center justify-center mr-60 mt-12 gap-10">
                <button
                  type="button"
                  onClick={handleCancelClick}
                  className="w-48 bg-white border border-primary text-primary rounded-full h-12 text-lg font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleContinueClick}
                  className="w-48 bg-primary text-white rounded-full h-12 text-lg font-medium hover:bg-primary-dark"
                >
                  Next
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
