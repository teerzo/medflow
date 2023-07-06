

import { cookies } from 'next/headers'
import { Session, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types'
// import Characters from './characters';

import Link from 'next/link'

import { redirect } from "next/navigation";

import Form from './form';
import useProfile from '../hooks/useProfile';

export default async function Page() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    const id = session?.user?.id;
    console.log('useProfile', id);
    const profile = await useProfile(id)
    console.log('profile', profile);
    if (!session) {
        redirect("/login");
    }
    else {

    }






    return (
        <main className="flex min-h-screen flex-col pt-5">
            <div className="flex flex-row justify-between items-center">
                <Link href="/"> <button className='btn'> Back </button> </Link>
                <div className="prose">
                    <h3> New form </h3>
                </div>
                <button className="btn opacity-25"> Next </button>
            </div>

            <div className="items-center pt-5 ">
                <Form session={session} profile={profile} />
            </div>

            {/* <Characters /> */}
        </main>
    )
}