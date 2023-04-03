import React from "react";

const index = ({ tableData }) => {
  return (
    <div className="mt-32">
      <table className="table-fixed border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="lg:w1/2 p-4 border border-slate-400 text-left text-sm font-semibold">
              Full Name
            </th>
            <th className="lg:w1/2 p-4  border border-slate-400 text-left text-sm font-semibold">
              Email
            </th>
            <th className="lg:w1/2 p-4  border border-slate-400 text-left text-sm font-semibold">
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item, i) => (
            <tr key={i}>
              <td className="lg:w1/2 p-4 border border-slate-400 text-left text-sm">
                {item.fullname}
              </td>
              <td className="lg:w1/2 p-4 border border-slate-400 text-left text-sm overflow-x-hidden">
                {item.email}
              </td>
              <td className="lg:w1/2 p-4 border border-slate-400 text-left text-sm">
                {item.message}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default index;
