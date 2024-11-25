"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";
import coursesData from "../data/courses";
import { useRouter } from "next/navigation";

const page = () => {
  const [filter, setFilter] = useState("all"); // filter state
  const router = useRouter();

  const navigateToDetails = (id) => {
    router.push(`/student/group/${id}`); // Navigate to dynamic page
  };

  // Function to handle filtering logic
  const filteredStudents = coursesData.filter((student) => {
    if (filter === "all") return true;
    return student.addedTime === filter;
  });
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

        {/* Content */}
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

          <div className="grid grid-cols-2 gap-[30px] mt-5">
            {filteredStudents.map((course) => (
              <div
                key={course.id}
                className="bg-[#F9F9F9] w-[] h-[163px] border-[0.5px] rounded-md border-primary cursor-pointer"
                onClick={() => navigateToDetails(course.id)}
              >
                <div className="flex items-center gap-3 p-4">
                  <div>
                    <p className="font-bold text-primary text-[20px]">
                      {course.courseName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
