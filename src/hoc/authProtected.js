import { Redirect } from "react-router-dom";

const authProtected = (Component) => {
  const WithAuthProtected = (props) => {
    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (!token) {
      return <Redirect to="/" />;
    }

    return <Component {...props} />;
  };

  return WithAuthProtected;
};

export default authProtected;
