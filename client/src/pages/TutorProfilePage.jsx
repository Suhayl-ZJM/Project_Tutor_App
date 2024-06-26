import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Calender from "../components/features/Calender";

const TutorProfilePage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7777/user/${userId}`
        );
        setResults(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8">Error: {error}</div>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-10 p-20">
      {/* <!-- Tutor Card --> */}
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-2 md:flex">
          <img
            src={results.avatarUrl}
            alt="image"
            className="h-32 w-32 md:h-48 object-cover md:w-48"
          />
          <div className="">
            <div className="px-2 mt-5 uppercase tracking-wide text-sm text-gray-700 font-semibold mb-2">
              {results.username}
            </div>
            <div className="px-2 tracking-wide  text-sm text-gray-700 mb-2">
              Goal Oriented and Success guaranteed!
            </div>
          </div>
        </div>
        <div className="px-2">
          <h1 className="px-2 font-semibold">About me</h1>
          <p className="text-gray-600 mb-2 px-2">{results.profile.bio}</p>
        </div>
      </div>
      {/* <!-- Contact Card --> */}
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="font-semibold text:2xl items-center p-6">
          Contact {results.username}
        </h1>
        <div className="flex p-4 items-center">
          <p className="p-4 font-bold text-3xl">
            $ {results.profile.hourlyRate}
          </p>
          <p>/per hour</p>
        </div>
        <button className="w-full mr-8 bg-teal-500 hover:bg-blue-600 text-white py-2 rounded-full">
          Book Now
        </button>
        <button className="w-full mr-8 mt-4 mb-4 bg-transparent hover:bg-blue-600 hover:text-white text-black py-2 rounded-full">
          Send Message
        </button>
      </div>
      {/* <!-- Review --> */}
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden md:col-span-2">
        <h1 className="font-semibold text:2xl items-center p-4">
          Ratings and Reviews
        </h1>
        <div className="flex">
          <span className="text-4xl items-center px-4">0</span>
          <p className="items=center p-4"> No Reviews yet!</p>
        </div>
      </div>
      {/* <!-- Subjects --> */}
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden md:col-span-2">
        <h1 className="font-semibold text:2xl items-center p-4">
          Subjects
        </h1>
      </div>
       {/* <!-- Availability --> */}
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden md:col-span-2">
        <h1 className="font-semibold text:2xl items-center p-4">
          Availability
        </h1>
        <Calender />
      </div>
    </div>
  );
};

export default TutorProfilePage;
