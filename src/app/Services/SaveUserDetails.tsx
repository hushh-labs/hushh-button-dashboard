import supabase from "../Config/supabaeConfig"; // Ensure this import is correct


export async function saveUserDetails(fullName: string, phoneNumber: string, userId: string) {
    try {
      const { data, error } = await supabase
        .from('users')
        .update({ name: fullName, phoneNumber })
        .eq('hushh_id', userId);
  
      if (error) {
        console.error("Error updating user details:", error);
        return { success: false, error };
      }
  
      console.log("User details updated successfully:", data);
      return { success: true, data };
    } catch (error) {
      console.error("Unexpected error updating user details:", error);
      return { success: false, error };
    }
  }