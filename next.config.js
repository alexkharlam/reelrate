/** @type {import('next').NextConfig} */
module.exports = {
  // images: {
  //   domains: ["image.tmdb.org"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
