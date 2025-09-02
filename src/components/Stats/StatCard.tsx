import React from "react";

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="font-extrabold text-lg md:text-2xl text-[var(--primary-foreground)]">{value}</div>
    <div className="mt-1 text-base text-[var(--secondary-foreground)]">{label}</div>
  </div>
);

export default StatCard;
