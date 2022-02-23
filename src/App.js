import React,{useState,useEffect} from "react";
import "./App.css";

function useOtp(setOtp,otp) {

    useEffect(() => {
     if ('OTPCredential' in window) {
       const ac = new AbortController()
       navigator.credentials
         .get({
           otp: { transport: ['sms'] },
           signal: ac.signal,
         })
         .then((otp) => {
           setOtp(otp.code)
           ac.abort()
         })
         .catch((err) => {
           ac.abort()
           console.log(err)
           setOtp(err)
         })
     }
    }, [setOtp,otp])
     return otp
   }





export default function App() {
  const [ot,setOtp] =useState(null)
  const otp =useOtp(ot,setOtp) 
  return (
    <div>App otp:{otp}</div>
  )
}