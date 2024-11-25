import { useRouter } from 'next/router';
import Sidebar from '../../components/Sidebar';
import DashboardNav from '../../components/DashboardNav';
import coursesData from '../../data/courses'; // Assuming data is stored locally or via API

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;  // Extract the course id from the URL
  const course = coursesData.find((course) => course.id === id);  // Find the selected course

  if (!course) {
    return <p>Loading...</p>;  // Show a loading state if course data hasn't loaded
  }

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="ml-60 w-full">
        <div className="bg-white w-full h-[128px]">
          <DashboardNav />
        </div>

        <div className="p-8">
          <h1 className="text-[32px] font-semibold">{course.courseName}</h1>
          <div className="text-gray-600 text-[20px] mt-4">{course.description}</div>

          <div className="mt-5">
            <p className="text-[24px] font-semibold">Course Activity</p>
            {/* Render other course-specific information */}
            {course.activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 my-4">
                <Image src={activity.icon} alt="activity icon" width={24} height={24} />
                <div>
                  <p className="text-[20px] font-semibold">{activity.title}</p>
                  <p className="text-[16px] text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
