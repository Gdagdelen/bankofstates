import axios from "axios";
import axiosInstance from "./axiosInstance";
const BASE_URL = "http://localhost:8081";

class BankService {
  login(userInfo) {
    return axios.post(BASE_URL + "/auth/login", userInfo);
  }
  register(userInfo) {
    return axios.post(BASE_URL + "/auth/register", userInfo);
  }
  deposit(transactionInfo) {
    return axiosInstance.post(BASE_URL + "/account/deposit", transactionInfo);
  }
  withdraw(transactionInfo) {
    return axiosInstance.post(BASE_URL + "/account/withdraw", transactionInfo);
  }
  addRecipient(addRecipient) {
    return axiosInstance.post(BASE_URL + "/account/addRecipient", addRecipient);
  }
  getAllUsers() {
    return axiosInstance.get(BASE_URL + "/user/all");
  }
}
export default new BankService();