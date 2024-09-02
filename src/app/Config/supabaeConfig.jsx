import { createClient } from "@supabase/supabase-js";


const projectURL = "https://rpmzykoxqnbozgdoqbpc.supabase.co";
const serviceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwbXp5a294cW5ib3pnZG9xYnBjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTkyNzk3MSwiZXhwIjoyMDE3NTAzOTcxfQ.chnzqTCllX3uazNbArr9cmhCIIUUq2YUddGwJ3E7L5E";

const supabase = createClient(projectURL, serviceKey);


export default supabase;