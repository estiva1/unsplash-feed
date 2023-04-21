const EXAMPLE_RESPONSE = require("./res.json");
const API_KEY =
  "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";
const API_ENDPOINT = "https://api.unsplash.com";
const API_COUNT = 30;
const API_ORIENTATION = "landscape";
const API_FEATURED = true;

let INITIAL_REQUEST = true;

async function callApi(
  method: string,
  url: string,
  path: string,
  queryParams?: string
) {
  /**
   * Comment back if you want to save the initial request
   * from taking toll on the request limit.
   *
   * Loads local example api response
   */
  /*if (INITIAL_REQUEST) {
        INITIAL_REQUEST = false;

        return EXAMPLE_RESPONSE;
    }*/

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
