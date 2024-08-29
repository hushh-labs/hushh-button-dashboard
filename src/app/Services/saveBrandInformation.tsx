import supabase from "../Config/supabaeConfig";

export async function saveBrandInformation(
  brandName: string,
  brandCategory: string,
  websiteURL: string,
  brandDescription: string,
  adminID: string
) {
  try {
    // Map the category based on the brandCategory
    console.log("THis is the brand category: ", brandCategory);
    
    let category: number | undefined;
    if (brandCategory === "1") {
      category = 1;
    } else if (brandCategory === "2") {
      category = 2;
    } else if (brandCategory === "3") {
      category = 3;
    } else if (brandCategory === "4") {
      category = 4;
    } else {
      console.error("Invalid brand category provided");
      return { success: false, error: "Invalid brand category" };
    }

    // Insert the new record and retrieve the inserted data
    const { data: insertedData, error: insertError } = await supabase
      .from("button_brand_details")
      .insert([
        {
          brand_name: brandName,
          category,
          brand_website: websiteURL,
          description: brandDescription,
          admin_id: adminID,
        },
      ])
      .select() // Retrieve the inserted data
      .single(); // Ensure it returns a single row

    if (insertError) {
      console.error("Error inserting brand information:", insertError.message);
      return { success: false, error: insertError.message };
    }

    console.log("Brand information inserted successfully:", insertedData);
  
    return { success: true, data: insertedData };
  } catch (error: any) {
    console.error("Unexpected error:", error.message);
    return { success: false, error: error.message };
  }
}
