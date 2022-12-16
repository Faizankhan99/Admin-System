import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Error from "../Error";
import Student from "../Student/Student";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
