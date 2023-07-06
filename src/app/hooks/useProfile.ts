// import { useCallback, useEffect, useState } from 'react'
import type { Database } from '@/lib/database.types';
import { cookies } from 'next/headers'

import { Session, createServerComponentClient } from '@supabase/auth-helpers-nextjs'

type Profile = Database['public']['Tables']['profiles']['Row']



export default async function useProfile(id: string | undefined) {
    const supabase = createServerComponentClient<Database>({ cookies });

    const { data } = await supabase.from('profiles').select().eq('id', id).single();

    console.log('profile', data);

    // const [profile, setProfile] = useState<Profile | null>(null);
   
    // const user = session?.user

    // console.log('session', session);

    // const getProfile = async () => {
      
    // }
    // useEffect(() => {
    //     getProfile()
    // }, [id, getProfile])


  




    // if( !session ) {
    //     return 
    // }

    // const supabase = createClientComponentClient<Database>()
    // const [loading, setLoading] = useState(true)
    // const [avatar_url, setAvatarUrl] = useState<string | null>(null)
    // const user = session?.user

    // const [mobile, setMobile] = useState<string | null>(null)
    // const [given_name, setGivenName] = useState<string | null>(null)
    // const [surname, setSurname] = useState<string | null>(null)
    // const getProfile = useCallback(async () => {
    //     try {
    //         setLoading(true)

    //         let { data, error, status } = await supabase
    //             .from('profiles')
    //             .select(`given_name, surname, mobile, avatar_url`)
    //             .eq('id', user?.id)
    //             .single()

    //         if (error && status !== 406) {
    //             throw error
    //         }

    //         if (data) {
    //             setGivenName(data.given_name)
    //             setSurname(data.surname)
    //             setMobile(data.mobile)
    //             setAvatarUrl(data.avatar_url)
    //         }
    //     } catch (error) {
    //         alert('Error loading user data!')
    //     } finally {
    //         setLoading(false)
    //     }
    // }, [user, supabase])

    // useEffect(() => {
    //     getProfile()
    // }, [user, getProfile])

    return data;
}