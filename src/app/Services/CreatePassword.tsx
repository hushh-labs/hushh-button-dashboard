import axios from "axios";

export default async function createPassword(password: string) {
  try {
    const email = localStorage.getItem("email");
    const response = await axios.post(
      "http://localhost:3001/button-Admin/v1/api/auth/createPassword",
      { email: email, password: password },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response.status === 200) {
      console.log("User created Sucessfully!");
      return 1;
    } else {
      console.log("User not created!");
      return 0;
    }
  } catch (error) {
    console.log("Internal Server Error: ", error);
    return -1;
  }
}
