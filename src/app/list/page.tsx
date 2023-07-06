

import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types'
import { redirect } from "next/navigation";
// import Characters from './characters';

import Link from 'next/link'


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
                    <h3> Existing Forms </h3>
                </div>
                <button className="btn opacity-25"> Next </button>
            </div>

            <div className="items-center pt-20">
                <div className="bg-base-100 overflow-x-auto p-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Patient</th>
                                <th>Physician</th>
                                <th>Form Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="hover">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td> {user?.email} </td>
                                <td>Form A</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td> {user?.email} </td>
                                <td>Form D</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="hover">
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td> {user?.email} </td>
                                <td>Form B</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* <Characters /> */}
        </main>
    )
}