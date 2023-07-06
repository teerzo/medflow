// import { useCallback, useEffect, useState } from 'react'
import type { Database } from '@/lib/database.types';
import { cookies } from 'next/headers'

import { Session, createServerComponentClient } from '@supabase/auth-helpers-nextjs'

type Forms = Database['public']['Tables']['forms']['Row']



export default async function useForms() {
    const supabase = createServerComponentClient<Database>({ cookies });

    const { data } = await supabase.from('forms').select();

    console.log('forms', data);



    return data;
}