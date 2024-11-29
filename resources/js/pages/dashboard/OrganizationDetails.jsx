import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import img from '../../../img/img-3.png';
import img2 from '../../../img/Vector.png';

function OrganizationDetails({ organization, onBack }) {
  return (
    <div className="p-6 rounded-lg w-full">
      {/* Header Section with Background and Logo */}
      <div className="relative rounded-t-lg overflow-hidden w-full">
        <img
          src={img}
          alt="Header Background"
          className="w-full h-32 object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center mt-20">
          <img
            src={img2}
            alt="Organization Logo"
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Organization Title and Location */}
      <div
        className="text-center mb-15 p-10 rounded-xl bg-white"
      >
        <h1
          style={{ fontFamily: 'Poppins' }}
          className="text-2xl font-semibold md:text-xl sm:text-lg"
        >
          {organization.company_name || 'Solar Bright Energy'}
        </h1>
        <p
          style={{ fontFamily: 'Poppins' }}
          className="text-gray-500 text-base sm:text-sm"
        >
          {organization.location || 'New York, America'}
        </p>
      </div>

      <div className="bg-white">
        {/* Information Sections */}
        <div className="mt-6 p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start relative w-full">
          {/* Edit Icon */}
          <PencilSquareIcon className="h-6 w-6 text-gray-500 absolute top-4 right-4 cursor-pointer" />

          {/* Basic Information */}
          <div className="w-full md:w-1/2 pr-4">
            <div className="p-6 rounded-lg w-full bg-white">
              <h3 className="text-lg mb-4 text-gray-800">Basic Information</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { label: "Organization Name:", value: organization.company_name || "Organization Name" },
                  { label: "Location:", value: organization.location || "Location" },
                  { label: "Contact Information:", value: organization.contact_email || "Contact Information" },
                  { label: "Organization's Website:", value: organization.website || "Organization's Website" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2">
                    <p className="text-gray-600 text-base sm:text-sm" style={{ fontFamily: 'Poppins' }}>{item.label}</p>
                    <p className="text-gray-800 text-base sm:text-sm" style={{ fontFamily: 'Poppins' }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Employees Overview */}
          <div className="w-full md:w-1/2 pl-4 mt-6 md:mt-0">
            <div className="p-6 rounded-lg w-full bg-white">
              <h3 className="text-lg mb-4 text-gray-800">Employee Overview</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { label: "Total Employees:", value: "100" },
                  { label: "Active Users:", value: "80" },
                  { label: "Total Hours Worked:", value: "20 Hours" },
                  { label: "Overtime Hours:", value: "10 Hours" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2">
                    <p className="text-gray-600 text-base sm:text-sm" style={{ fontFamily: 'Poppins' }}>{item.label}</p>
                    <p className="text-gray-800 text-base sm:text-sm" style={{ fontFamily: 'Poppins' }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="p-6 rounded-lg shadow-md w-full bg-white mt-6">
          <h3 className="text-lg mb-4 text-gray-800">Account Information</h3>
          <div className="grid grid-cols-1 gap-2">
            {[
              { label: "Account Manager's Name:", value: organization.account_manager || "Account Manager's Name" },
              { label: "Account Manager's Contact:", value: organization.account_manager_contact || "+92 363-1192922" },
              { label: "Subscription Plan:", value: organization.subscription_plan || "Subscription Plan" },
              { label: "Date of Sign Up:", value: organization.date_signed_up || "20/11/2024" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2">
                <p className="text-gray-600 text-base sm:text-sm" style={{ fontFamily: 'Poppins' }}>{item.label}</p>
                <p className="text-gray-800 text-base sm:text-sm" style={{ fontFamily: 'Poppins' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationDetails;
