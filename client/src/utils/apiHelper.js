// Function to make fetch requests to the api

export const api = (path, method = "GET", body = null, credentials = null) => {
  const url = "full-stack-react-app-production.up.railway.app" + path;

  const options = {
    method,
    headers: {},
  };

  if (body) {
    options.body = JSON.stringify(body);
    options.headers["Content-Type"] = "application/json; charset=utf-8";
  }

  if (credentials) {
    const encodedCredentials = btoa(
      `${credentials.emailAddress}:${credentials.password}`
    );
    options.headers.Authorization = `Basic ${encodedCredentials}`;
  }

  return fetch(url, options);
};
