import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from '@/lib/database.types';
import AccountForm from './account-form'

import Link from 'next/link';

export default async function Account() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { session }, } = await supabase.auth.getSession()

    return (
        <main className="w-full flex min-h-screen flex-col mt-5 items-center">

            <div className="w-2/3 flex flex-row justify-between items-center mb-5">
                <Link href="/"> <button className='btn'> Back </button> </Link>
                <div className="prose">
                    <h3> Account </h3>
                </div>
                <button className="btn opacity-0"> Next </button>
            </div>
            <div className="w-2/3 bg-base-100 border-2 rounded border-base-100 p-5 shadow-lg">
                <AccountForm session={session} />
            </div>
        </main>
    )

}