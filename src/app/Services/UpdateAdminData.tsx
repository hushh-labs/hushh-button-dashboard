import axios from "axios";
import qs from "qs"; // Import qs for query string formatting

export default async function updateAdminData(adminData: object) {
  try {
    const email = localStorage.getItem('email');
    console.log(email);

    const data = qs.stringify({
      first_name: adminData.firstName,
      last_name: adminData.lastName,
      gender: adminData.gender,
      DOB_string: `${adminData.birthDate} ${adminData.birthMonth} ${adminData.birthYear}`,
      email: email
    });

    const response = await axios.post(
      "http://localhost:3001/button-Admin/v1/admin/add-Personal-Data",
      data, // Pass the data as a string
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (response.status === 200) {
      console.log(response);
      return 1;
    } else {
      return 0;
    }
  } catch (error) {
    console.log("Internal Server Error: ", error);
    return -1;
  }
}
