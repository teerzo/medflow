

// import { cookies } from 'next/headers'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import type { Database } from '@/lib/database.types'
// import { redirect } from "next/navigation";
// import Characters from './characters';

import Link from 'next/link'


export default async function Page() {
    // const supabase = createServerComponentClient<Database>({ cookies });
    // const { data: { session } } = await supabase.auth.getSession();

    // if (!session) {
    //     redirect("/login");
    // }


    return (
        <main className="flex min-h-screen flex-col pt-5">
            <h3> Login </h3>
        </main>
    )
}