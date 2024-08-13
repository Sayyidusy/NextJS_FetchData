import { createClient } from "@supabase/supabase-js";
import { create } from "domain";

export default createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);