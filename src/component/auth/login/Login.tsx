import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
export function Login() {
  let [status, setStatus] = useState(false);
  let [phone, setP] = useState("");
  let [email, setEmail] = useState("");
  const navigate = useNavigate();
  function setPhone() {
    setStatus((status = !status));
    status ? setP("") : setEmail("");
  }
  let submitForm = (e: any) => {
    e.preventDefault();
  };
  let navigateDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className="loginContainer">
        <div className="login">
          <div className="icon">
            <div className="icon-login"></div>
          </div>
          <div className="top">
            <h1 className="t1">
              Welcome to <span>Crop Circle</span>
            </h1>
            <p>Please sign in or sign up below.</p>
          </div>
          <div className="middle">
            <form onSubmit={submitForm}>
              <div className="form-container">
                <div className="row space-y-15">
                  <div className="col">
                    <div className="flex justify-between align-center">
                      <label className="label" htmlFor="phone">
                        {status ? "Phone Number" : "Email Address"}
                      </label>
                      <label className="label gray" onClick={() => setPhone()}>
                        {status ? "Use Email" : "Use Phone Number"}
                      </label>
                    </div>
                    {status ? (
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setP(e.target.value)}
                        placeholder="Phone"
                      />
                    ) : (
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    )}
                  </div>
                  <div className="col">
                    <button onClick={navigateDashboard} className="btn-gray">
                      {status ? "Continue With Email" : "Continue With Phone"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
