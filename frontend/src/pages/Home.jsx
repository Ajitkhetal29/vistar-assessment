import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/Context.jsx";
const Home = () => {
  const {
    handlelogout,
    fetchActiveCustomers,
    activeCustomers,
    auth,
    handleAccountClick,
    navigate,
  } = useContext(AppContext);

  useEffect(() => {
    fetchActiveCustomers();
  });

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="flex justify-end items-center gap-4 mb-6">
          <p className="text-sm text-gray-300">{auth.currentUser?.email}</p>
          <button
            onClick={handlelogout}
            className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 text-sm rounded"
          >
            Sign Out
          </button>
        </div>

        <div>
          <table className="min-w-full  border border-gray-600">
            <thead className="bg-gray-800">
              <tr>
                <th className="border border-gray-600 px-4 py-2  text-white">
                  Customer Name
                </th>
                <th className="border border-gray-600 px-4 py-2  text-white">
                  Accounts
                </th>
                <th className="border border-gray-600 px-4 py-2  text-white">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {activeCustomers.map((cust, index) => (
                <tr key={index} className="hover:bg-gray-700 transition">
                  <td className="border border-gray-600 px-4 py-2">
                    {cust.name}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {cust.accounts?.map((acc, i) => (
                      <button
                        key={i}
                        onClick={() => navigate(`/transactions/${acc}`)}
                        className="text-white-400 hover:underline mr-2"
                      >
                        {acc},
                      </button>
                    ))}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {cust.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
