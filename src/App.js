import React from "react";

export default class App extends React.Component {
  state = {
    otp: ""
  };

componentDidMount() {

if ("OTPCredential" in window) {
  const ac = new AbortController();

  navigator.credentials
    .get({
      otp: { transport: ["sms"] },
      signal: ac.signal
    })
    .then((ot) => {
      if(this.state.otp)
      {
        this.setState({ otp: null });
      }
      this.setState({ otp: ot.code });
      ac.abort();
    })
    .catch((err) => {
      ac.abort();
      console.log(err);
    });
}


}

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Your OTP is: {this.state.otp}</h2>
      </div>
    );
  }
}