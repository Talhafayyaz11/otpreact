import React from "react";
import { useReadOTP } from "react-read-otp";

function App() {
  const [enabled, setEnabled] = React.useState(false);
  const [otp, setOTP] = React.useState('');
  useReadOTP(setOTP, {
      enabled
  });

  const handleSendOtp = () => {
      // do your api call
      // enable otp listener
      setEnabled(true);
  }
  return (
      <div>
          <h3>
              Welcome home 
              otp:{otp}
          </h3>
          <button onClick={handleSendOtp}>send otp</button>
          <input placeholder="Enter otp" value={otp} onChange={e => setOTP(e.target.value)} />
      </div>
  )
}
export default App;
// export default class App extends React.Component {
//   state = {
//     otp: ""
//   };

// componentDidMount() {

// if ("OTPCredential" in window) {
//   const ac = new AbortController();

//   navigator.credentials
//     .get({
//       otp: { transport: ["sms"] },
//       signal: ac.signal
//     })
//     .then((ot) => {
//       if(this.state.otp)
//       {
//         this.setState({ otp: null });
//       }
//       this.setState({ otp: ot.code });
//       ac.abort();
//     })
//     .catch((err) => {
//       ac.abort();
//       console.log(err);
//     });
// }


// }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello OTP TEST</h1>
//         <h2>Your OTP is: {this.state.otp}</h2>
//       </div>
//     );
//   }
// }