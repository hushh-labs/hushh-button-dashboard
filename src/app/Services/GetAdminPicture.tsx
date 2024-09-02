import supabase from "../Config/supabaeConfig";


export default async function getAdminPicture(): Promise<string | null> {
    try {
        let user = JSON.parse(localStorage.getItem('user'));
        let userID = user.id;
        const { data, error } = await supabase
            .storage
            .from('brandAdminImages')
            .getPublicUrl(userID);

        if (error) {
            console.error("Error getting public URL:", error.message);
            return null;
        }

        console.log("Public URL:", data.publicUrl);
        return data.publicUrl;
    } catch (error) {
        console.error("Error retrieving public URL:", error);
        return null;
    }
}
