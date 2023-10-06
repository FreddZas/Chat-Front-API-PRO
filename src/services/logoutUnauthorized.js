const logoutUnauthorized = (err, redirect) => {
  if (err.response.data.status === 401) {
    localStorage.removeItem("user");
    redirect();
  }
};

export default logoutUnauthorized;
