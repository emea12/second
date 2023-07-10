// const { default: axios } = require("axios");

// import axios from "axios";
function DeletUser(id) {
  const res = axios.delete(`/users/${id}`);
  window.location.reload()
  return res
}
