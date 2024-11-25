"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"; // Import useState to handle expand/collapse state
import { motion } from "framer-motion";
import Image from "next/image";
import DashboardNav from "../../components/DashboardNav";
import Sidebar from "../../components/Sidebar";

const CourseDetails = ({ params }) => {
  const searchParams = useSearchParams();
  const { id } = params;
  const router = useRouter();

  const [expandedSections, setExpandedSections] = useState({}); // State to track expanded sections

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navigateToLecture = () => {
    router.push(`/student/courses/classroom/${id}`);
  };

  const navigateToLecturer = () => {
    //router.push(`/dashboard/profile/${id}`);
    router.push(`/dashboard/profile`);
  };

  const course = {
    id: 1,
    courseName: "(CYS 311) Introduction to Security and Policy Development",
    lecturer: "Dr. Ajibade Solomon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: [
      { title: "Course Overview", details: "This course contains of the overview needed fo the introduction and getting started of this course." },
      { title: "Cybersecurity Introduction", details: "courseIntro.mp4" },
      { title: "Cyber Attacks", details: "SQLtest.injection" },
      { title: "Cyber Defenses", details: "cyber labs practice." },
    ],
  };

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="ml-60 w-full">
        <div className="bg-white w-full h-[128px]">
          <DashboardNav />
        </div>

        <motion.div
          className="p-8"
          initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotate: 30 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            stiffness: 300,
          }}
        >
          <div className="flex gap-[60px]">
            <div>
              <Image
                src="/assets/cyss311.png"
                width={513}
                height={300}
                alt="course"
                className="rounded-md w-[513px]"
              />
              <h1 className="text-[20px] w-[513px] font-bold mt-4">
                {course.courseName}
              </h1>
              <p className="mt-2 w-[513px] text-left">{course.description}</p>
              <div className="bg-[#F2F2F2] w-[513px] p-3">
                <h2 className="text-[20px] font-bold">What you’ll learn</h2>
                <ul className="list-disc text-[16px] mt-2">
                  {course.content.map((section, index) => (
                    <div key={index} className="flex flex-row gap-2 items-center">
                      <Image
                        src="/assets/check.png"
                        width={14}
                        height={14}
                        className="w-[14px] h-[14px]"
                        alt="check"
                      />
                      <p>{section.title}</p>
                    </div>
                  ))}
                </ul>
                <p className="text-[14px] font-bold">show more</p>
              </div>
            </div>

            <div className="w-[563px]">
              <h2 className="text-[24px] font-bold">Course Content</h2>
              <div className="flex flex-col mt-2 gap-3">
                {course.content.map((section, index) => (
                  <div key={index}>
                    <div
                      className="flex flex-row items-center justify-between cursor-pointer"
                      onClick={() => toggleSection(index)}
                    >
                      <p className="font-medium text-[16px]">{section.title}</p>
                      <Image
                        src={expandedSections[index] ? "/assets/collapse.png" : "/assets/add-black.png"}
                        width={14}
                        height={14}
                        className=""
                        alt={expandedSections[index] ? "collapse" : "expand"}
                      />
                    </div>
                    {expandedSections[index] && (
                      <p className="text-[14px] mt-2 text-gray-600">{section.details}</p>
                    )}
                  </div>
                ))}
                <button
                  onClick={navigateToLecture}
                  className="flex flex-row gap-3 items-center mt-4 p-2 bg-black justify-center h-[56px] text-white w-full"
                >
                  Lecture room
                  <Image
                    src="/assets/east.png"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px]"
                    alt="lecture room"
                  />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-20">
                <div>
                  <p className="text-black font-bold text-[24px]">Lecturer</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <Image
                    src="/assets/images/profile.jpg"
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt="lecturer"
                  />
                  <p>{course.lecturer}</p>
                </div>

                <div>
                  <p className="text-black font-normal text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commod.
                  </p>
                  <p className="font-bold mt-1">show more</p>
                </div>
              </div>
              <button onClick={navigateToLecturer} className="flex flex-row gap-3 items-center mt-4 p-2 bg-outline border border-black justify-center h-[56px] text-black w-full">
                View Profile
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetails;
