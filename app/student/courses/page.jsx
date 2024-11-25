"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";
import coursesData from "../data/courses"; // Import course data

const CoursesPage = () => {
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  const filteredCourses = coursesData.filter((course) => {
    if (filter === "all") return true;
    return course.addedTime === filter;
  });

  const navigateToDetails = (id) => {
    router.push(`/student/courses/${id}`); // Navigate to dynamic page
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
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 items-center bg-black p-3 h-[37px]">
              <Image
                src="/assets/activity.png"
                width={20}
                height={20}
                className="w-[25px] h-[25px] rounded-full"
                alt="profile"
              />
              <p className="text-white font-semibold text-[20px]">Activity</p>
            </div>
            <div className="flex justify-end">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="text-black font-medium text-[16px] bg-white border p-3 rounded-sm"
              >
                <option value="NEWEST">Newest</option>
                <option value="OLDEST">Oldest</option>
                <option value="RECENT">Recent</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[30px] mt-5">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-outline border-[1px] border-[#00000046] cursor-pointer"
                onClick={() => navigateToDetails(course.id)}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={course.courseImage}
                    width={188}
                    height={188}
                    alt="course"
                    className="w-[188px] h-[188px]"
                  />
                  <div>
                    <p className="font-bold text-black text-[20px]">
                      {course.courseName}
                    </p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/images/profile.jpg"
                        width={25}
                        height={25}
                        className="rounded-full"
                        alt="lecturer"
                      />
                      <p className="font-medium text-black text-[16px]">
                        {course.lecturerName}
                      </p>
                    </div>
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

export default CoursesPage;
