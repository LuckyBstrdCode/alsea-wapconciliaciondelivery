import axios from 'axios';


/*
 *  GET
 */
export async function callApiGet(endpoint) {
    var request = new Request(endpoint, {
      headers: {
        "X-User-Agent": "qwe"
      }
    });
    const response = await fetch(request).then(response => {
      return response.json();
    });
  
    return response;
  }
  

/*
 * POST
 */
export async function callApiPost(endpoint, body) {
  var request = new Request(endpoint, {
    headers: {
      "X-User-Agent": "qwe",
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify(body)
  });
  const response = await fetch(request).then(response => {

    console.info(response);
    console.info(response.status);
    if(response.status == 204) {
      return true;
    }
    return response.json();
  });

  return response;
}

/*
 * PUT
 */
export async function callApiPut(endpoint, body) {

  const headers = {
    "X-User-Agent": "qwe",
    "Content-Type": "application/json"
  }

  const response = await axios.put(endpoint, body, {
    headers: headers
  })

  return response;
}
