module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add any domains you want to allow for image optimization
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3000/api', // Set your API URL here
  },
};