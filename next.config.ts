import createMdx from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    ppr: "incremental",
  },
};

const withMdx = createMdx({
  extension: /\.(md|mdx)$/,
});

export default withMdx(nextConfig);
