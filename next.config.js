/** @type {import('next').NextConfig} */
const cors = require('micro-cors')();
const nextConfig = {
  reactStrictMode: true,
  api: {
    bodyParser: {
      sizeLimit: '4mb' // Set desired value here
    }
  }
}

module.exports = nextConfig
