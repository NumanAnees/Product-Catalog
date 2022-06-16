/** @type {import('next').NextConfig} */
module.exports = {
  publicRuntimeConfig: {
    APP_NAME: "Product Catalog",
    API: "http://localhost:8000/api",
    PRODUCTION: false,
    DOMAIN: "http://localhost:3000",
  },
  images: {
    domains: ["images.pexels.com"],
  },
};
