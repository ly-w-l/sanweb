import request from "@/utils/request";
import axios from "axios";

// let getToken = axios.create(
//   axios.create({
//     baseURL: process.env.VUE_APP_BASE_API,
//     timeout: 5000,
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded"
//     }
//   })
// );

export function login(data) {
  let { username, password } = data;
  let params = `username=${username}&password=${password}&grant_type=password`;
  return axios.post(process.env.VUE_APP_BASE_API + "token", params, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
}

export function getInfo() {
  return request({
    url: "/User/GetLoginUser",
    method: "get"
  });
}

export function logout() {
  return request({
    url: "/user/logout",
    method: "post"
  });
}
