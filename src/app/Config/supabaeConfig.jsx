import { createClient } from "@supabase/supabase-js";


const projectURL = "***"; // Add the supabase project url here.
const serviceKey = "****"; // add the suapabse service key here

const supabase = createClient(projectURL, serviceKey);


export default supabase;