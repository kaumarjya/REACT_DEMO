import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>{props.msg}</h1>
    <p>Msg</p>
  </div>
);

const HocComp = WrapperComp => {
  return props => (
    <div>
      {props.islogin ? <p>Admin</p> : <p>Viewer</p>}
      <WrapperComp {...props} />
    </div>
  );
};
const requireAuth = WrapperComp => {
  return props => (
    <div>
      {props.isAuthentication ? (
        <WrapperComp {...props} />
      ) : (
        <p>PLease login </p>
      )}
    </div>
  );
};
const MyHocComp = HocComp(Info);
const AuthInfo = requireAuth(Info);
ReactDOM.render(
  <AuthInfo isAuthentication={true} msg="THis is component" />,
  document.getElementById("app")
);
