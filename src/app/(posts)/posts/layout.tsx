import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Posts`,
};

const PostsPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default PostsPageLayout;
