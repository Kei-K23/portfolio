import { works } from "@/shared/works";
import React from "react";
import { HoverEffect } from "../components/hover-effect";

const WorksPage = async () => {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-20">
      <HoverEffect items={works} />
    </div>
  );
};

export default WorksPage;
