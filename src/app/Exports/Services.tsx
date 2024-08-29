import sendOTP from "../Services/SendOTP";
import verifyOTP from "../Services/VerifyOTP";
import createPassword from "../Services/CreatePassword";
import updateAdminData from "../Services/UpdateAdminData";
import { saveUserDetails } from "../Services/SaveUserDetails";
import { saveBrandInformation } from "../Services/saveBRandInformation";
const Services = {
    sendOTP,
    verifyOTP,
    createPassword,
    updateAdminData,
    saveUserDetails,
    saveBrandInformation
}

export default Services;