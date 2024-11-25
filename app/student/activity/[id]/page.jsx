//import { useRouter } from 'next/router';
import Sidebar from '../../components/Sidebar';
import DashboardNav from '../../components/DashboardNav';
import coursesData from '../../data/courses'; // Assuming data is stored locally or via API

const CourseDetails = () => {
  //const router = useRouter();
  //const { id } = router.query;  // Extract the course id from the URL
  //const course = coursesData.find((course) => course.id === id);  // Find the selected course

  //if (!course) {
  //  return <p>Loading...</p>;  // Show a loading state if course data hasn't loaded
  //}

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="ml-60 w-full">
        <div className="bg-white w-full h-[128px]">
          <DashboardNav />
        </div>

        <div className="p-8">
        
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
