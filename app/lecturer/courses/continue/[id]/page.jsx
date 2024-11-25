"use client";
import { useRouter, useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Sidebar from "../../../../../components/Sidebar";
import DashboardNav from "../../../../../components/DashboardNav";
import { useState, useEffect } from "react";

// Dynamically import ReactQuill to avoid server-side issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Image from "next/image";

const ContinueCourse = () => {
  const router = useRouter();
  //const { id } = router.query || {}; // Get course ID from the URL
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const imgSrc = searchParams.get("imgSrc");
  const { id } = useParams(); // This will correctly extract the dynamic id from the URL

  const [courseDescription, setCourseDescription] = useState("");
  const [subtitle, setSubtitle] = useState("");
  //const [id, setId] = useState(null); // State to store the course ID

  // Function to handle "Continue" button click
  const handleContinue = () => {
    if (!subtitle || courseDescription.length < 200) {
      alert(
        "Please ensure the subtitle is filled and the course description has at least 200 words."
      );
    } else {
      // Handle course submission
      router.push(`/dashboard/courses/continue/${id}/requirements`);
      //console.log("Submitting:", { subtitle, courseDescription });
    }
  };

  // Use useEffect to wait for router.query to be populated
  useEffect(() => {
    if (router.query && router.query.id) {
      setId(router.query.id); // Set the course ID once it's available
    }
  }, [router.query]);

  if (!title || !imgSrc) {
    return <p>Loading...</p>; // Display a loading message if the data is not yet available
  }

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60 w-full">
        {/* Dashboard Navigation */}
        <div className="bg-white w-full h-[128px]">
          <DashboardNav />
        </div>

        <div className="flex flex-col items-center w-full mt-8">
          <p className="text-black font-bold text-[32px]">
            What will students learn in your course?
          </p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center mt-8">
          <div className="flex flex-col">
            <label className="text-black text-[20px] font-bold mb-2">
              Course subtitle
            </label>
            <textarea
              className="border border-gray-300 rounded-md w-[920px] h-[122px] p-2 text-black"
              placeholder="e.g. Define ... , Identify ...."
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <p className="text-gray-500 mt-2 text-[14px] font-normal">
              Your title should be a mix of attention-grabbing, informative
              content. It should have a minimum of 80 words.
            </p>
            <div className="flex flex-row items-center">
              <Image
                src="/assets/add-black.png"
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
                alt="add more"
              />
              <p className="text-black font-bold text-[14px]">
                Add more to your response
              </p>
            </div>
          </div>

          <div className="mt-6 ">
            <div className="flex flex-col w-[920px]">
              <label className="text-black text-[20px] font-bold mb-2">
                Course description
              </label>
              <ReactQuill
                value={courseDescription}
                onChange={setCourseDescription}
                className="h-[218px] mb-4"
                placeholder="Insert your course description"
                theme="snow"
                modules={{
                  toolbar: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["bold", "italic", "underline"],
                    [{ align: [] }],
                  ],
                }}
              />
            </div>
          </div>
          <div className="items-start">
            <p className="text-gray-500 text-[14px]">
              Description should have a minimum of 200 words.
            </p>
          </div>
          {/* Bottom Buttons */}
          <div className="flex flex-row justify-between mt-8 mb-10 gap-[370px]">
            <div>
              <button
                className="text-primary border border-primary rounded-full px-6 py-2 w-[250px] h-[50px] font-semibold"
                onClick={() => router.back()}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                className="bg-primary text-white rounded-full px-6 py-2 w-[250px] h-[50px] font-semibold"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueCourse;
