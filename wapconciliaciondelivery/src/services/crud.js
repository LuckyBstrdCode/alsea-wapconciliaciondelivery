import axios from 'axios';
var querystring = require('querystring');

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
    if (response.status === 204) {
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






/*
 * AWS
 */
export async function getToken(endpoint, body) {


  console.info("1234t");

  
  var request = new Request("https://deliverybeta.auth.us-east-1.amazoncognito.com/oauth2/token", {
    headers: {
      "Authorization": "Basic N3YzaW5lYjc5NGpiZTQxbzBhZWlxc28xbm46MTdidTA0bGNqa2gwMmNtNWtsMW5uM2JsbnA4ZDExdWRsdGNhcGk0YXM5aTNmaXFpMXVlbQ==",
      'content-type': 'application/x-www-form-urlencoded',
    },
    method: "post",
    body: querystring.stringify({"grant_type": "client_credentials", "scope": "https://delivery.com/epayment"})
  });

  const response = await fetch(request).then(response => {
    return response.json();
  });

  return response;
}






