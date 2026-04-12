import React from "react";

const Filters = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300">
      
      <h2 className="text-lg font-semibold mb-4">Job Type</h2>

      <div className="flex flex-col gap-2 text-sm">
        <label><input type="checkbox" /> Full time...(23)</label>
        <label><input type="checkbox" /> Part time...(15)</label>
        <label><input type="checkbox" /> Internship...(8)</label>
        <label><input type="checkbox" /> Remote...(30)</label>
      </div>

     
      <hr className="my-5" />

      <h2 className="text-lg font-semibold mb-4">Experience</h2>

      <div className="flex flex-col gap-2 text-sm">
        <label><input type="checkbox" /> Entry...(12)</label>
        <label><input type="checkbox" /> Intermediate...(20)</label>
        <label><input type="checkbox" /> Expert...(5)</label>
      </div>

        <hr className="my-5" />

    <h2 className="text-lg font-semibold mb-4">Location</h2>

      <div className="flex flex-col gap-2 text-sm">
        <label><input type="checkbox" /> Pune</label>
        <label><input type="checkbox" /> Bangalore</label>
        <label><input type="checkbox" /> Gurgaon</label>
      </div>

    </div>
  );
};

export default Filters;