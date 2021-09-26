const BASE_URL = "https://hackapi-server.herokuapp.com";

export const getInclusionData = async () => {
  let response = await fetch(`${BASE_URL}/inclusion`);
  response = await response.json();
  return response;
};

export const getChildrenSpace = async () => {
  let response = await fetch(`${BASE_URL}/lazer`);
  response = await response.json();
  return response;
};

export const getDevelopment = async () => {
  let response = await fetch(`${BASE_URL}/development`);
  response = await response.json();
  return response;
};

export const getMaterial = async () => {
  let response = await fetch(`${BASE_URL}/material`);
  response = await response.json();
  return response;
};

export const getSecurity = async () => {};

export const getLearning = async () => {};
