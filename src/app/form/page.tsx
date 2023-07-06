

import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types'
// import Characters from './characters';

import Link from 'next/link'

import { redirect } from "next/navigation";

import Form from './form';

export default async function Page() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    const user = session?.user;

    if (!session) {
        redirect("/login");
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

            <div className="items-center pt-20 ">
               <Form user={user}/>
            </div>

            {/* <Characters /> */}
        </main>
    )
}