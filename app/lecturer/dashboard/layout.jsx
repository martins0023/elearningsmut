export const metadata = {
  title: "Dashboard - vconnect",
  description: "welcome to the dashboard",
};

const DashboardLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default DashboardLayout;
