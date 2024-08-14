import axios from "axios";
import qs from "qs";

export default async function sendOTP(email: string) {
  try {
    console.log("Email passed to function:", email);

    const data = qs.stringify({ email: email });

    const response = await axios.post(
      "http://localhost:3001/button-Admin/v1/api/auth/signUp",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if( response.status == 200){
        console.log("OTP shared sucessfully!");
        return 1;
    }
    else{
        return -1;
    }

  } catch (error) {
   
    console.error("Error sending OTP:", error);
    return 0;
  }
}
