const authRoutes = require("./auth-route.json");
var jwtDecode = require("jwt-decode");

// A function to compare two arrays and returns an array of matching values
const diff = function(arr1, arr2) {
  var ret = [];
  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) > -1) {
      ret.push(arr1[i]);
    }
  }
  return ret;
};

// A function to do basic authentication checks on a token.
// NOTE: doesn't check if token has expired
const isAuthorised = (token, route) => {
  console.log("ROUTER", route);
  if (token == null) {
    return false;
  }
  const parsedToken = jwtDecode(token);
  if (parsedToken == null || authRoutes[route] == null) {
    return false;
  }
  const hasAuth = diff(authRoutes[route], parsedToken.authorizations);
  if (hasAuth.length === 0) {
    return false;
  }
  return true;
};

module.exports = {
  isAuthorised,
};
