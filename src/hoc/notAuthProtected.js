import { Redirect } from "react-router-dom";

const notAuthProtected = (Component) => {
  const WithNoAuth = (props) => {
    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (token) {
      return <Redirect to="/main" />;
    }

    return <Component {...props} />;
  };

  return WithNoAuth;
};

export default notAuthProtected;
