import axios from "axios";
import qs from "qs";

export default async function verifyOTP(email: string, otp:string) {
  try {
    console.log("Email passed to function:", typeof( email));

    const data = qs.stringify({ email: 'sanipatel.off@gmail.com', OTP: otp });

    const response = await axios.post(
      "http://localhost:3001/button-Admin/v1/api/auth/verifyOTP",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if( response.status == 200){
        console.log("OTP verified sucessfully!");
        return 1;
    }
    else{
        return -1;
    }

  } catch (error) {
   
    console.error("Error verifying OTP:", error);
    return 0;
  }
}
