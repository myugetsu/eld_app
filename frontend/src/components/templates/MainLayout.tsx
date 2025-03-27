import React from "react";

type Props = { children: React.ReactNode };

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="p-4 bg-blue-600 text-white text-center">Electronic Log System</header>
      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
