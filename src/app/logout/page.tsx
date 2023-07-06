

import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types'
import { redirect } from "next/navigation";

import Link from 'next/link'
// import LoginForm from './login-form'

import LogoutForm from './logout-form';

export default async function Page() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        redirect("/");
    }

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        // router.refresh()
        redirect("/");
    }
    return (
        <main className="flex min-h-screen flex-col mt-20 items-center">
            <div className="bg-base-100 border-2 rounded border-base-100 w-96 p-5 shadow-lg ">

              
                <LogoutForm session={session}/>
            </div>
        </main>
    )
}