export const useApi = async (url, config) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  };

  const data = await fetch(`http://localhost:3000/api/${url}`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => data)
    .catch((e) => console.log("error fetching", e));
  return data;
};
export default useApi;
