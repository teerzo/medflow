

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
            <div className="flex flex-row justify-between items-center">
                <Link href="/"> <button className='btn'> Back </button> </Link>
                <div className="prose">
                    <h3> New form </h3>
                </div>
                <button className="btn opacity-25"> Next </button>
            </div>

            <div className="items-center pt-20 ">
                <form className='form bg-base-100 border-base-200 border-2 rounded p-5'>


                    <div className="prose">
                        <h4> Patient</h4>
                    </div>

                    <div className='flex flex-row'>
                        <div className="form-control mb-5 mr-5">
                            <label className="label">
                                <span className="label-text">Given Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Given name" className="input input-bordered" />
                                {/* <span>BTC</span> */}
                            </label>
                        </div>

                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text">Surname Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Surname name" className="input input-bordered" />
                                {/* <span>BTC</span> */}
                            </label>
                        </div>
                    </div>


                    <div className="prose">
                        <h4> Physician </h4>
                    </div>

                    <div className='flex flex-row'>
                        <div className="form-control mb-5 mr-5">
                            <label className="label">
                                <span className="label-text">Given Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Given name" className="input rounded input-bordered" value="$User" />
                            </label>
                        </div>

                        <div className="form-control mb-5 mr-5">
                            <label className="label">
                                <span className="label-text">Surname Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Surname name" className="input rounded input-bordered" value="$User" />
                            </label>
                        </div>
                    </div>

                    <div className='flex flex-row'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Form selection</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>FORM A </option>
                                <option>FORM B </option>
                                <option>FORM C </option>
                                <option>FORM D </option>
                            </select>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <button className='btn'> SAVE </button>
                    </div>
                </form>
            </div>

            {/* <Characters /> */}
        </main>
    )
}