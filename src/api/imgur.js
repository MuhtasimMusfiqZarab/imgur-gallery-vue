// here is all the apis we are working with

//this takes querystring object and turn it into url safe query string
import qs from "qs";
import axios from "axios";

const CLIENT_ID = "1346f814942f27f"; // this is my client id from imgur
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    //param(querystring) object to from up the query string after the base url
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token"
    };

    //make the actual url for request //(programatic navigation) autometically navigate to this URL
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  // THis is for fetching images from imgur API
  fetchImages(access_token) {
    // 1st argument is the endpoint we are making request to
    //2nd argument is an object with collection of options to cusmomize the request we are making
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
  }
};

//-----Here is the endpoint for access token request (API to get user insto the oauth flow)
// https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE

///////------------------------------ Imgur oauth2 authorization
// client secret: "f8690e4ffc0be7fecfcf5303d8bc71865ca3b4f4" (not necessary that much)
// client id: "1346f814942f27f"
