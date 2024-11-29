import React, { useEffect, useState } from "react";
import axios from "axios";
import Rectange from "../../../img/Rectangle.png";
import Profile from "../../../img/profile.png";
import EditProfile from "./EditProfile";
import Loader from "./Loader"; // Import the Loader component

export function Tables() {
  const [admin, setAdmin] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true); // State to manage loader visibility

  useEffect(() => {
    axios
      .get("/api/admins/2")
      .then((response) => {
        setAdmin(response.data);
        setLoading(false); // Stop the loader when data is loaded
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
        setLoading(false); // Stop the loader even if there is an error
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedData) => {
    setAdmin(updatedData);
  };

  return (
    <>
      {loading && <Loader />} {/* Show loader while loading */}
      <div className={`min-h-screen bg-gray-100 ${loading ? "opacity-50" : ""}`}>
        {isEditing ? (
          <EditProfile
            admin={admin}
            onClose={() => setIsEditing(false)}
            onSave={handleSave}
          />
        ) : (
          <>
            <div className="profile-container w-full p-4 md:p-10 flex flex-col md:flex-row items-start justify-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Left Column: Profile Image and Info */}
              <div className="animate-fadeInLeft rounded-lg mb-4 pb-8 shadow-md bg-white w-full md:w-1/4">
                <img
                  src={Rectange}
                  alt="Organization Logo"
                  className="w-full rounded-t-lg mb-2 h-32 object-cover"
                />
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full -mt-8 z-10">
                    <img src={Profile} alt="Logo Icon" className="h-10 w-10" />
                  </div>
                  <p
                    style={{ fontFamily: "Poppins" }}
                    className="text-center font-semibold text-base md:text-lg mt-2"
                  >
                    {admin.name || "Admin Name"}
                  </p>
                  <p
                    style={{ fontFamily: "Poppins" }}
                    className="text-center text-gray-500 text-sm md:text-base"
                  >
                    {admin.designation || "Designation"}
                  </p>
                </div>
              </div>

              {/* Right Column: Profile Details */}
              <div className="animate-fadeInRight profile-details bg-white rounded-lg p-6 md:p-10 shadow-md w-full md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      style={{ fontFamily: "Poppins" }}
                      className="block font-semibold text-sm md:text-base text-gray-600"
                    >
                      Name
                    </label>
                    <p
                      style={{ fontFamily: "Poppins" }}
                      className="mt-1 text-sm md:text-base"
                    >
                      {admin.name}
                    </p>
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "Poppins" }}
                      className="block font-semibold text-sm md:text-base text-gray-600"
                    >
                      Designation
                    </label>
                    <p
                      style={{ fontFamily: "Poppins" }}
                      className="mt-1 text-sm md:text-base"
                    >
                      {admin.designation}
                    </p>
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "Poppins" }}
                      className="block font-semibold text-sm md:text-base text-gray-600"
                    >
                      Email
                    </label>
                    <p
                      style={{ fontFamily: "Poppins" }}
                      className="mt-1 text-sm md:text-base"
                    >
                      {admin.email}
                    </p>
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "Poppins" }}
                      className="block font-semibold text-sm md:text-base text-gray-600"
                    >
                      Phone Number
                    </label>
                    <p
                      style={{ fontFamily: "Poppins" }}
                      className="mt-1 text-sm md:text-base"
                    >
                      {admin.phone_no}
                    </p>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label
                      style={{ fontFamily: "Poppins" }}
                      className="block font-semibold text-sm md:text-base text-gray-600"
                    >
                      Address
                    </label>
                    <p
                      style={{ fontFamily: "Poppins" }}
                      className="mt-1 text-sm md:text-base"
                    >
                      {admin.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button
                className="animate-fadeInUp text-white text-sm md:text-base px-8 md:px-12 py-4 md:py-6 rounded-full hover:bg-yellow-600 transition mr-5"
                style={{ backgroundColor: "#fc8c11" }}
                onClick={handleEdit}
              >
                Edit Profile
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Tables;
