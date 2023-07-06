
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from '@/lib/database.types'
import { redirect } from "next/navigation";

import Home from './home';

export default async function HomePage() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session }, } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login");
  }

  console.log('session', session);

  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Home session={session}/>
    </main>
  )
}
