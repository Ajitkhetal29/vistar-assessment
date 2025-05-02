import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/Context";
import axios from "axios";
import { useParams } from "react-router-dom";

const Transactions = () => {
  const { account_id } = useParams();
  const {
    allTransactions,
    backendUrl,
    setAllTransactions,
    auth,
    handlelogout,
    navigate,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchTransactions = async () => {
      
      try {
        const response = await axios.get(backendUrl + "/getAllTransactions", {
          params: { account_id },
        });
        if (response.data.success) {
          setAllTransactions(response.data.allTransactions[0].transactions);
        }
        
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTransactions();
  }, [account_id]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p
            className="text-sm text-gray-300 underline cursor-pointer"
            onClick={() => navigate("/home")}
          >
            Back To Homepage
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-300">{auth.currentUser?.email}</p>
          <button
            onClick={handlelogout}
            className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 text-sm rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
      {allTransactions.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Transactions</h2>
          <table className="min-w-full border border-gray-600">
            <thead className="bg-gray-800">
              <tr>
                <th className="border border-gray-600 px-4 py-2  text-white">
                  Date
                </th>
                <th className="border border-gray-600 px-4 py-2  text-white">
                  Amount
                </th>
                <th className="border border-gray-600 px-4 py-2  text-white">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {allTransactions.map((tx, i) => (
                <tr key={i} className="hover:bg-gray-700 transition">
                  <td className="border border-gray-600 px-4 py-2">
                    {new Date(tx.date).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {tx.amount}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {parseFloat(tx.total).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Transactions;
