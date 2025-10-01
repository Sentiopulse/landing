import React from "react";

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="font-extrabold text-lg md:text-2xl">{value}</div>
    <div className="mt-1">{label}</div>
  </div>
);

export default StatCard;
