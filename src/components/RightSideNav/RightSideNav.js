import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://dream-courses-server-side.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="mt-20">
      <h1 className="lg:text-4xl p-2 font-semibold border-b-4 border-b-slate-500 rounded-b-lg text-cyan-900">
        Choice your courses
      </h1>

      {info.map((d) => (
        <Link key={d.id} to={`/course/${d.id}`}>
          <p className="mt-6" key={d.id}>
            <button className="border rounded-full px-4 py-1 bg-green-200 hover:bg-green-500">
              {d.name}{" "}
            </button>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default RightSideNav;
