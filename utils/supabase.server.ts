import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SECRET = process.env.SUPABASE_SECRET!;
// let supabase: SupabaseClient;
// declare global {
// 	var _supabase: SupabaseClient | undefined;
// }

// if (process.env.NODE_ENV === "production") {
// 	supabase = supabaseJS.createClient(URL, process.env.SUPABASE_SECRET!);
// 	if (!global._supabase) {
// 		global._supabase = supabaseJS.createClient(URL, process.env.SUPABASE_SECRET!);
// 	}
// 	supabase = global._supabase;
// }
// export { supabase };
export let supabase = createClient(SUPABASE_URL, SUPABASE_SECRET);
