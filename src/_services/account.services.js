import axiosInstance from "../api/axiosInstance";

const login = (dataLogin) => {
  return axiosInstance.post("/login", dataLogin); // requête post vers le back
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
};

const saveToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("token", token); // enregistrer le token dans le localStorage
  }
};

const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem("token"); // supprimer le token du localStorage
  }
};

const isLogged = () => {
  if (typeof window !== 'undefined') {
    let token = localStorage.getItem("token"); // récupérer le token du localStorage
    return !!token; /* convertir en booléen */
  }
  return false; // retourner false si localStorage n'est pas défini
};

const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("token"); // récupérer le token du localStorage
  }
  return null; // retourner null si localStorage n'est pas défini
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
