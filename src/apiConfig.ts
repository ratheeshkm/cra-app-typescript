const getBackendHost = () => {
  const hostName = window.location?.hostname;

  if (hostName === 'localhost') {
    return 'http://localhost:5000';
  }
};

const backendHost = getBackendHost();

export const API_BASE_URL = `${backendHost}/pos/v1`;
