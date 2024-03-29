import React from "react";
import { useState } from "react";
import { ordersData } from "../data/dummy";

const SearchAndFilter = () => {
  const [query, setQuery] = useState("");

  console.log(ordersData.filter((order) => order.Location.includes("A")));

  return (
    <div>
      <h1 className="text-center">Contact Database</h1>
      <input placeholder="Search..." type="text" />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 marker:uppercase tracking-wide"
            >
              Customer Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
            >
              Location
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
            >
              OrderId
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
            >
              OrderItems
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
            >
              StatusBg
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
            >
              TotalAmount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-500">
          {ordersData.map((data) => (
            <tr key={data.OrderID}>
              <td className="px-6 py-4 whitespace-nowrap">
                {data.CustomerName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{data.Location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.OrderID}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.OrderItems}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.Status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.StatusBg}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {data.TotalAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchAndFilter;
