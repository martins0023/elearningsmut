"use client";
import DashboardNav from "../../components/DashboardNav";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const router = useRouter();
  const params = useParams();
  const handleAttendance = () => {
    router.push(`/student/attendance`);
  };

  const JoinClass = (id) => {
    router.push(`/student/courses/classroom/${id}/start`);
  };

  const ViewDetails = (id) => {
    router.push(`/student/courses/${id}`);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this logic runs only on the client-side
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 w-full bg-[#F9F9F9]">
        <div className="bg-white w-full h-[128px]">
          <DashboardNav userId={params.id} />
        </div>

        <motion.div
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
          <div className="w-full p-6 bg-[#F9F9F9]">
            <div>
              <div className="mb-8">
                <div className="flex flex-row justify-between">
                  {/* row 1 */}
                  <div className="flex flex-col gap-[43px] ml-3">
                    <div className="flex flex-row justify-between mb-[-40px] items-center ">
                      <h2 className="text-xl font-bold text-[#000000] text-[24px]">
                        Today’s Schedule
                      </h2>
                      <p className="text-black text-[12px] font-medium underline">
                        view all
                      </p>
                    </div>{" "}
                    {/* schedule section */} {/* col 1 */}
                    <div className="flex flex-row gap-[24px] mt-4">
                      {[
                        {
                          title: "Networking Essentials (NCC 311)",
                          time: "10:30 AM",
                          startsIn: "45 mins",
                          date: "Wed Feb 15",
                        },
                        {
                          title: "Maths for Cybersecurity (CYS314)",
                          time: "10:30 AM",
                          startsIn: "45 mins",
                          date: "Tue Feb 14",
                        },
                      ].map((lecture, index) => (
                        <div
                          key={index}
                          className="bg-primary h-[250px] w-[233px] p-4 rounded-lg"
                        >
                          <p className="text-white text-[12px] font-normal">{`Lecture at ${lecture.time}`}</p>

                          <h3 className="text-[20px] font-bold text-white mt-1">
                            {lecture.title}
                          </h3>
                          <div className="flex flex-row gap-2 items-center mt-3">
                            <Image
                              src="/assets/access-time.png"
                              className="w-[16px] h-[16px]"
                              width={16}
                              height={16}
                            />
                            <p className="text-white font-normal text-[12px]">{`Class starts in ${lecture.startsIn}`}</p>
                          </div>
                          <div className="flex flex-row gap-2 items-center mt-2">
                            <Image
                              src="/assets/access-date.png"
                              className="w-[16px] h-[16px]"
                              width={16}
                              height={16}
                            />
                            <p className="text-white font-normal text-[12px]">{`${lecture.date}`}</p>
                          </div>
                          <div className="flex justify-between mt-4">
                            <button onClick={JoinClass} className="text-[12px] bg-white w-[105px] rounded-sm h-[27px] text-primary justify-items-center text-center items-center">
                              Join the Class
                            </button>
                            <button onClick={ViewDetails} className="text-white text-[10px]">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="bg-white w-fit h-fit pb-4 rounded-lg">
                        <div className="flex flex-col gap-1 mt-2 p-3">
                          <div className="flex flex-row items-center gap-1">
                            <Image
                              src="/assets/access-time-gray.png"
                              width={12}
                              height={12}
                              alt="access time"
                              className="w-[12px] h-[12px]"
                            />
                            <p className="text-[10px] text-[#000000cc] font-normal">
                              Next at 01:30 Pm
                            </p>
                          </div>

                          <div className="flex flex-row items-center gap-1">
                            <Image
                              src="/assets/access-calendar.png"
                              width={12}
                              height={12}
                              alt="access time"
                              className="w-[12px] h-[12px]"
                            />
                            <p className="text-[10px] text-[#00000079] font-normal">
                              Mon Feb 14
                            </p>
                          </div>

                          <p className="text-[10px] text-[#000000c4] font-normal">
                            Hacking
                          </p>
                        </div>
                        <hr className="h-1 w-full text-[#000000c4] mt-2" />
                        <div className="flex flex-col gap-1  p-3">
                          <div className="flex flex-row items-center gap-1">
                            <Image
                              src="/assets/access-time-gray.png"
                              width={12}
                              height={12}
                              alt="access time"
                              className="w-[12px] h-[12px]"
                            />
                            <p className="text-[10px] text-[#000000cc] font-normal">
                              Next at 01:30 Pm
                            </p>
                          </div>

                          <div className="flex flex-row items-center gap-1">
                            <Image
                              src="/assets/access-calendar.png"
                              width={12}
                              height={12}
                              alt="access time"
                              className="w-[12px] h-[12px]"
                            />
                            <p className="text-[10px] text-[#00000079] font-normal">
                              Mon Feb 14
                            </p>
                          </div>

                          <p className="text-[10px] text-[#000000c4] font-normal">
                            Hacking
                          </p>
                        </div>
                        <hr className="h-1 w-full text-[#000000c4] mt-2" />
                        <div className="flex justify-center mt-4">
                          <Image
                            src="/assets/next.png"
                            className="cursor-pointer"
                            width={30}
                            height={30}
                            alt="next"
                          />
                        </div>
                      </div>
                    </div>
                    {/* col 2 */}
                    {/* Attendance section */}
                    <div className="flex flex-row gap-[32px]">
                      <div className="flex flex-col gap-[32px]">
                        <div className="bg-white p-4 rounded-lg w-[301px] h-[97px]">
                          <div className="flex flex-row gap-2">
                            <Image
                              src="/assets/person-icon.png"
                              className="h-[20px] w-[20px]"
                              width={20}
                              height={20}
                            />
                            <p className="text-[16px] font-semibold text-black">
                              Attendance
                            </p>
                          </div>

                          <div className="flex flex-row items-center justify-between">
                            <p className="text-[#8E1011] font-semibold text-[14px]">
                              58%
                            </p>
                            <p className="text-black font-medium text-[10px]">
                              Overall Attendance
                            </p>
                          </div>
                          <div className="w-full bg-gray-200 h-[4px] mt-2">
                        <div
                          className="bg-primary h-[4px]"
                          style={{ width: 130 }}
                        ></div>
                      </div>
                          <button onClick={handleAttendance} className="text-black mt-3 underline text-[10px]">
                            View summary
                          </button>
                        </div>
                      </div>

                      {/* Activity section */}
                      <div className="flex flex-col gap-[32px]">
                        <div className="bg-white p-4 rounded-lg h-fit w-[301px]">
                          <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-3">
                              <Image
                                src="/assets/activity.png"
                                width={25}
                                height={25}
                                className="w-[25px] h-[25px]"
                                alt="activity"
                              />
                              <p className="text-[14px] font-semibold text-black">
                                Activity
                              </p>
                            </div>

                            <div className="flex flex-row items-center justify-end">
                              <button className="text-black font-normal text-[10px] ">
                                View all
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-col gap-3">
                            {[
                              {
                                title: "Dr Bello",
                                time: "4 mins ago",
                                type: "Quiz",
                                resources: ["Shared PDF"],
                                icons: ["/assets/pdf.png"],
                                image: ["/assets/images/profile.jpg"],
                              },
                              {
                                title: "Dr Jimoh H",
                                time: "4 mins ago",
                                type: "Quiz",
                                resources: [
                                  "Shared Ethical Hacking Notes & Study Material",
                                ],
                                icons: ["/assets/pdf.png", "/assets/doc.png"],
                                image: ["/assets/images/profile.jpg"],
                              },
                              {
                                title: "Dr Asakpa",
                                time: "4 mins ago",
                                type: "Quiz",
                                resources: [
                                  "Shared Ethical Hacking Notes & Study Material",
                                ],
                                icons: ["/assets/pdf.png", "/assets/doc.png"],
                                image: ["/assets/images/profile.jpg"],
                              },
                              // Add more items here as needed
                            ].map((item, index) => (
                              <ul className="mt-5" key={index}>
                                <div className="flex flex-row items-center gap-2">
                                <div className="flex flex-row gap-1 mt-1">
                                  {item.image.map((images, iconIndex) => (
                                    <Image
                                      key={iconIndex}
                                      src={images}
                                      width={44}
                                      height={44}
                                      className="mt-1 rounded-full"
                                      alt="Resource Icon"
                                    />
                                  ))}
                                </div>
                                <div className="">
                                <li className="flex flex-row items-center justify-between text-black font-semibold text-[12px]">
                                  <p>{item.title}</p>
                                  
                                  
                                </li>
                                <p className="text-primary text-[8px] font-medium">
                                  {item.type}
                                </p>
                                {item.resources.map((resource, resIndex) => (
                                  <p
                                    key={resIndex}
                                    className="text-[#00000075] text-[8px] font-medium"
                                  >
                                    {resource}
                                  </p>
                                ))}
                                <div className="flex flex-row gap-1 mt-1">
                                  {item.icons.map((icon, iconIndex) => (
                                    <Image
                                      key={iconIndex}
                                      src={icon}
                                      width={24}
                                      height={24}
                                      className="mt-1"
                                      alt="Resource Icon"
                                    />
                                  ))}
                                </div>
                                </div>
                                </div>
                                
                                
                              </ul>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="flex justify-center items-center ml-4">
                    <div className="h-full w-[1px] bg-[#0000006b]"></div>
                  </div>

                  {/* row 2 */}
                  <div className="flex flex-col mr-3">
                    <div className="mt-6 w-[453px]">
                      <p className="text-black font-bold text-[24px]">
                        Submissions
                      </p>

                      <div className="bg-white rounded-md mt-3">
                        <div className="p-5">
                          <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row gap-3">
                              <Image
                                src="/assets/icon1.png"
                                width={30}
                                height={30}
                                className="w-[30px] h-[30px]"
                                alt="submission"
                              />
                              <div className="flex flex-col gap-1">
                                <p className="text-black font-semibold text-[12px]">
                                  Cyber Security Assignment -1
                                </p>
                                <p className="text-black font-semibold text-[8px]">
                                  02 July 2024 02:34 Pm
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-row items-center gap-1">
                              <Image
                                src="/assets/pending.png"
                                width={20}
                                height={20}
                                alt="pending"
                                className="w-[20px] h-[20px]"
                              />
                              <p className="text-[#E7024D] font-semibold text-[10px]">
                                10 Pending
                              </p>
                            </div>
                          </div>

                          <hr className="h-1 w-full text-black font-bold mt-2" />

                          <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row gap-3 mt-3">
                              <Image
                                src="/assets/icon1.png"
                                width={30}
                                height={30}
                                className="w-[30px] h-[30px]"
                                alt="submission"
                              />
                              <div className="flex flex-col gap-1">
                                <p className="text-black font-semibold text-[12px]">
                                  Cyber Security Assignment -1
                                </p>
                                <p className="text-black font-semibold text-[8px]">
                                  02 July 2024 02:34 Pm
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 mt-1">
                              <div className="flex flex-row items-center gap-1">
                                <Image
                                  src="/assets/correct.png"
                                  width={20}
                                  height={20}
                                  alt="correct"
                                  className="w-[20px] h-[20px]"
                                />
                                <p className="text-[#4BAE4F] font-semibold text-[10px]">
                                  30 Submitted
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
