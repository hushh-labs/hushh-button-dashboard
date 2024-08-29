import axios from "axios";
import qs from "qs";  // Importing qs for query string serialization
import Services from "../Exports/Services";

export default async function createPassword(email: string, password: string, phoneNumber: string, fullName: string) {
  try {
    console.log("This is the received password in the service: ", password);

    // Serialize the data using qs.stringify
    const postData = qs.stringify({ email: email, password: password });

    const response = await axios.post(
      "http://localhost:3001/button-Admin/v1/api/auth/createPassword",
      postData,  // Sending serialized data
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",  // Correct content type for form data
        },
      }
    );

    if (response.status === 200) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      const userId = response.data.user.id;
      
      const response1 = await Services.saveUserDetails(fullName, phoneNumber, userId);
      
      if (response1.success) {
        console.log("User created successfully!", response);
        return 1;
      } else {
        console.log("Something went wrong while updating user details:", response1.error);
        return 0;
      }
    } else {
      console.log("User not created!");
      return 0;
    }
  } catch (error) {
    console.log("Internal Server Error: ", error);
    return -1;
  }
}
