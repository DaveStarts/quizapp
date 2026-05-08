import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eeiwyxubgfjvfdxrwbat.supabase.co';
const supabaseKey = 'sb_publishable_RFbwTHeI4c8KcwMVcRG0cg_mFQRpOEq';

export const supabase = createClient(supabaseUrl, supabaseKey);
