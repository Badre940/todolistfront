import axiosInstance from "../api/axiosInstance";

const login = (dataLogin) => {
  return axiosInstance.post("/login", dataLogin);
};

const profile = () => {
  if (typeof window !== 'undefined') {
    const jwt = localStorage.getItem("token");
    return axiosInstance.get("/signup", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  }
  return Promise.reject('localStorage is not available');
};

const saveToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("token", token);
  }
};

const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem("token");
  }
};

const isLogged = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("token");
    return !!token;
  }
  return false;
};

const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("token");
  }
  return null;
};

const accountService = {
  login,
  profile,
  saveToken,
  logout,
  isLogged,
  getToken,
};

export default accountService;
