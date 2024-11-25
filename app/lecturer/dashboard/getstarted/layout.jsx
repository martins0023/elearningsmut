export const metadata = {
    title: "getstarted - vconnect",
    description: "Get started now",
  };
  
  const GetStartedLayout = ({ children }) => {
    return (
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    );
  };
  
  export default GetStartedLayout;
  