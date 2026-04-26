const apiPath = '/api/v1/dalle';

const config = {
  development: {
    backendUrl: import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1/dalle',
  },
  production: {
    backendUrl: import.meta.env.VITE_API_URL || apiPath,
  },
};

const environment = import.meta.env.PROD ? 'production' : 'development';

export default config[environment];
