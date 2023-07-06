'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import type { Session } from '@supabase/auth-helpers-nextjs'

export default function LogoutForm({ session }: { session: Session | null }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const supabase = createClientComponentClient()

    const [showSignup, setSignup] = useState(false);


    const handleSignUp = async () => {
        const res = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        })

        console.log('res', res);

        setSignup(true);
        router.refresh()
    }

    const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
            email,
            password,
        })
        router.refresh()
    }

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    const handleRedirect = async () => {
        router.push('/');
    }

    // for the `session` to be available on first SSR render, it must be
    // fetched in a Server Component and passed down as a prop
    return session ? (
        <div>

            <div className="prose mb-5">
                <h3> Logout? </h3>
            </div>

            <button className='btn mr-5' onClick={handleSignOut}> Yes </button>
            <button className='btn' onClick={handleRedirect}> No </button>


        </div>
    ) : (
        <div className="w-full">

        </div>
    )
}