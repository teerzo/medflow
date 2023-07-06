'use client'
import { useCallback, useEffect, useState } from 'react'
import type { Database } from '@/lib/database.types';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AccountForm({ session }: { session: Session | null }) {
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

    async function updateProfile({
        given_name,
        surname, 
        mobile,
        avatar_url, 
    }: {
        given_name: string | null
        surname: string | null
        mobile: string | null
        avatar_url: string | null
    }) {
        try {
            setLoading(true)

            let { error } = await supabase.from('profiles').upsert({
                id: user?.id as string,
                given_name: given_name,
                surname: surname,
                mobile: mobile,
                avatar_url,
                updated_at: new Date().toISOString(),
            })
            if (error) throw error
            alert('Profile updated!')
        } catch (error) {
            alert('Error updating the data!')
        } finally {
            setLoading(false)
        }
    }

    return (

        <div className="flex flex-row w-full">
            <div className="join join-vertical mr-2">
                <button className="btn join-item">Profile</button>
                <button className="btn join-item opacity-25">Organization</button>
                <button className="btn join-item opacity-25">Misc</button>

                <div className="flex-grow"> </div>

                <form action="/auth/signout" method="post">
                    <button className="btn btn-ghost" type="submit">
                        Sign out
                    </button>
                </form>
            </div>


            <div className="w-full">
                <div className="form-control w-full max-w-xs mb-2">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" value={session?.user.email} disabled />
                    </label>
                </div>

                <div className="form-control w-full max-w-xs mb-2">
                    <label className="label">
                        <span className="label-text">Given Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Given name" className="input input-bordered w-full max-w-xs"
                            value={given_name || ''}
                            onChange={(e) => setGivenName(e.target.value)} />
                    </label>
                </div>

                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Surname Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Surname name" className="input input-bordered"
                            value={surname || ''}
                            onChange={(e) => setSurname(e.target.value)} />
                    </label>
                </div>

                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Mobile</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Mobile" className="input input-bordered"
                            value={mobile || ''}
                            onChange={(e) => setMobile(e.target.value)} />
                    </label>
                </div>

                <div className="flex flex-row justify-end">
                    <button className="btn btn-success"
                        onClick={() => updateProfile({ given_name, surname, mobile, avatar_url })}
                        disabled={loading}>
                        {loading ? 'Loading ...' : 'Update'}
                    </button>
                </div>
            </div>
        </div>
    )
}