

import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types'
import { redirect } from "next/navigation";
// import Characters from './characters';

import Link from 'next/link'
import List from './list';

import useForms from '../hooks/useForms';

type Form = Database['public']['Tables']['forms']['Row']


export default async function Page() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    // const id = session?.user?.id;
    // console.log('useProfile', id);
    // const forms = await useForms()
    // console.log('forms', forms);


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
                    <h3> Existing Forms </h3>
                </div>
                <button className="btn opacity-25"> Next </button>
            </div>

            <div className="items-center pt-20">
                <div className="bg-base-100 overflow-x-auto p-5">
                    <List />
                </div>
            </div>
        </main>
    )
}