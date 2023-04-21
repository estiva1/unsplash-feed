const API_KEY =
  "896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";

const API_ENDPOINT = "https://api.unsplash.com";
const API_COUNT = 300;
const API_ORIENTATION = "landscape";
const API_FEATURED = true;

async function callApi(
  method: string,
  url: string,
  path: string,
  queryParams?: string
) {
  const res = await fetch(`${url}${path}?client_id=${API_KEY}${queryParams}`, {
    method,
    headers: {
      Accept: "application/json",
    },
  });

  return res.json();
}

function generateQueryParams() {
  let queryParams = "";

  queryParams = queryParams.concat(`&orientation=${API_ORIENTATION}`);
  queryParams = queryParams.concat(`&count=${API_COUNT}`);

  if (API_FEATURED) queryParams = queryParams.concat("&featured");

  return queryParams;
}

export async function fetchImages() {
  return await callApi(
    "get",
    API_ENDPOINT,
    "/photos/random",
    generateQueryParams()
  );
}

