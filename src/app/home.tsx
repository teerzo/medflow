

'use client';
import { useCallback, useEffect, useState } from 'react'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types';

import Link from 'next/link'

export default function Home({ session }: { session: Session | null }) {

    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)
    const user = session?.user

    const [mobile, setMobile] = useState<string | null>(null)
    const [given_name, setGivenName] = useState<string | null>(null)
    const [surname, setSurname] = useState<string | null>(null)
    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`given_name, surname, mobile, avatar_url`)
                .eq('id', user?.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setGivenName(data.given_name)
                setSurname(data.surname)
                setMobile(data.mobile)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            alert('Error loading user data!')
        } finally {
            setLoading(false)
        }
    }, [user, supabase])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    return (
        <div className='prose'>
            <h2> Welcome back {given_name}! </h2>
            <div className='flex flex-row'>
                <Link href="/form"> <button className='btn mr-5'> Start New Form</button> </Link>
                <Link href="/list"> <button className='btn ml-5'> View Existing Forms </button> </Link>
            </div>
        </div>

    )
}