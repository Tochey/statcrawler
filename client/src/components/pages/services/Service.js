/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ModalPagination from "../../../utilities/pagination";

export default function Service({ serviceEndpoint, tableConfig }) {
  //getting the data
  const [data, setData] = useState([]);
  const [dataPerPage] = useState(10); // sets the service data per page
  const [currentModalPage, setCurrentModalPage] = useState(1); // sets the current modal page
  const [paginatedData, setPaginatedData] = useState([]);

  async function getServiceData() {
    try {
      const res = await fetch(serviceEndpoint);
      const req = await res.json();
      setData(req?.[tableConfig?.dataKey]);
      setPaginatedData([...req?.[tableConfig?.dataKey].slice(0, dataPerPage)]);
      console.log(req?.[tableConfig?.dataKey]);
    } catch (error) {
      alert(error?.message || error);
    }
  }
  useEffect(() => {
    getServiceData();
  }, []);

  if (
    !tableConfig?.columns &&
    !tableConfig?.columns.length > 0 &&
    !tableConfig?.dataKey
  ) {
    throw new Error("Table config is required or not properly configured");
  }
  if (!serviceEndpoint) {
    throw new Error("serviceEndpoint is required");
  }
  // change the modal page
  const paginate = (modalNumber) => {
    // gets the current service data
    const indexOfLastData = modalNumber * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    setPaginatedData([...data.slice(indexOfFirstData, indexOfLastData)]);
    setCurrentModalPage(modalNumber);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-y-auto">
        <div className="flex justify-between py-3 pl-2">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-md">
              <table className="min-w-full divide-y table-auto divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {tableConfig.columns.map((c, idx) => (
                      <th
                        key={idx}
                        className="text-left p-3 text-sm font-bold border-r text-gray-500"
                      >
                        {c.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {paginatedData.map((incident, i) => (
                    <tr key={i} className="odd:bg-gray-200">
                      {tableConfig.columns.map((c, idx) => (
                        <td
                          key={`${idx}-${i}-${c.identifier}`}
                          className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap"
                        >
                          {incident?.[c.identifier]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <ModalPagination
                dataPerPage={dataPerPage}
                totalData={data.length}
                currentModalPage={currentModalPage}
                // currentData={1}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// todo: apply search
