import Image from 'next/image'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import type { Database } from '@/lib/database.types'
import Link from 'next/link'

export default async function Home() {

  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <main className="flex min-h-screen flex-col items-center pt-20">






      {session ?
        <div className='prose'>

          <h2> Welcome: $User </h2>
          <div className='flex flex-row'>
            <Link href="/form"> <button className='btn mr-5'> Start New Form</button> </Link>
            <Link href="/list"> <button className='btn ml-5'> View Existing Forms </button> </Link>
          </div>
        </div>
        :
        <div>
          <h1> Logged out</h1>
        </div>
      }


    </main>
  )
}
