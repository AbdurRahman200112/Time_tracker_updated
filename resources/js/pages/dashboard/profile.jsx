import React, { useState, useEffect } from 'react';
import { PlusIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import img from '../../../img/vector.png';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import EditOrganization from './EditOrganization';
import OrganizationDetails from './OrganizationDetails';
import Loader from './Loader'; // Import the Loader component

export function Profile() {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [loading, setLoading] = useState(true); // State for loader

  const navigate = useNavigate();

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = () => {
    axios
      .get('/api/organizations')
      .then((response) => {
        setOrganizations(response.data);
        setLoading(false); // Stop loader after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching organizations:', error);
        setLoading(false); // Stop loader even if there is an error
      });
  };

  const handleEditClick = (e, org) => {
    e.stopPropagation();
    setSelectedOrg({ ...org, mode: 'edit' });
  };

  const handleDetailsClick = (org) => {
    setSelectedOrg({ ...org, mode: 'details' });
  };

  const handleSave = async (updatedOrg) => {
    try {
      await axios.put(`/api/organizations/${updatedOrg.id}`, updatedOrg);
      setOrganizations((prevOrgs) =>
        prevOrgs.map((org) => (org.id === updatedOrg.id ? updatedOrg : org))
      );
      setSelectedOrg(null);
    } catch (error) {
      console.error('Error updating organization:', error);
      alert('Failed to update organization');
    }
  };

  if (loading) {
    return <Loader />; // Display loader while data is loading
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Organizations</h2>
        <Link to="/dashboard/AddOrganization">
          <button
            className="flex items-center px-8 py-4 rounded-full hover:bg-yellow-300"
            style={{ backgroundColor: '#fff2d4', color: '#fc8c11' }}
          >
            <PlusIcon className="h-5 w-5 mr-2 text-orange-500" />
            Add New
          </button>
        </Link>
      </div>
      <p className="text-gray-500 mb-6">Manage all organization details and organization hierarchy</p>

      {selectedOrg ? (
        selectedOrg.mode === 'edit' ? (
          <EditOrganization
            organization={selectedOrg}
            onBack={() => setSelectedOrg(null)}
            onSave={handleSave}
          />
        ) : (
          <OrganizationDetails
            organization={selectedOrg}
            onBack={() => setSelectedOrg(null)}
          />
        )
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="p-7 bg-white rounded-xl shadow-lg relative border border-gray-200 cursor-pointer flex flex-col"
              style={{ height: 'auto' }}
              onClick={() => handleDetailsClick(org)}
            >
              <div className="flex flex-col items-start mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <img src={img} style={{ height: '25px' }} alt="Organization Icon" />
                  <h3 className="text-xl font-semibold text-gray-800">{org.company_name}</h3>
                </div>
                <p className="text-gray-500 text-sm mt-3">{org.address || 'Location not specified'}</p>
              </div>
              <div className="absolute top-4 right-4">
                <PencilSquareIcon
                  className="h-6 w-6 text-orange-500 cursor-pointer"
                  onClick={(e) => handleEditClick(e, org)}
                />
              </div>
              <div className="flex flex-col text-sm text-gray-600 mt-3">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                  <div className="mb-2 md:mb-0 mt-3">
                    <span className="font-medium">Date Signed Up: </span>
                    {new Date(org.date_signed_up).toLocaleDateString('en-CA')}
                  </div>
                  <div>
                    <span className="font-medium">Monthly Plan: </span>
                    <span
                      className={`ml-2 px-3 py-1 rounded-full text-white ${
                        org.monthly_plan === 'Active' ? 'bg-green-500' : 'bg-red-400'
                      }`}
                    >
                      {org.monthly_plan}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
