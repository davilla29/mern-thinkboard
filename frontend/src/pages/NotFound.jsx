import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-2xl">Page Not Found</p>
      <Link to="/" className="mt-6 text-blue-500 underline">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
