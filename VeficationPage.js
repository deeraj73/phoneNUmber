import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./Firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import LastPage from "./LastPage";

const VerificationPage = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  const buttonStyle = {
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' style=\'overflow:visible;\' preserveAspectRatio=\'none\' viewBox=\'0 0 216 48\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M216 0H0V48H216V0Z\' fill=\'%232E3B62\'/%3E%3C/svg%3E")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    padding: '20px 180px 20px 140px',
    border: 'none',
    cursor: 'pointer',
    maxWidth: '320px',
    // width: dropdownWidth,
  };

  const phoneNumber = {
    display: 'inline-flex',
    border: '2px solid black',
    
    maxWidth :"320px",
  };
  
  

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section>
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
            <LastPage/>
        ) : (
          <div>
            <h1>
            Please Enter your Phone Number
            </h1>
            {showOTP ? (
              <>
               
             
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <br></br>
                <button
                  onClick={onOTPVerify}
                  
                  style={buttonStyle}
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  Verify OTP
                </button>
              </>
            ) : (
              <>
               
                
                <PhoneInput country={"in"} value={ph} onChange={setPh} style={phoneNumber}/>
                <br></br>
                <br></br>
                <button
                  onClick={onSignup}
                  style={buttonStyle}
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  CONTINUE
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VerificationPage;