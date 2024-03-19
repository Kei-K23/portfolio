import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Works`,
};

const WorksPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default WorksPageLayout;
