

'use client';

import { useCallback, useEffect, useState } from 'react'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types';

import Link from 'next/link'

type Form = Database['public']['Tables']['forms']['Row']




export default function List() {

    const [loading, setLoading] = useState(true)
    const [forms, setForms] = useState<Form[] | null>(null)

    // useEffect(() => {
    //     console.log('forms', forms);
    // },[forms])

    const supabase = createClientComponentClient()

    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from('forms').select()
            setForms(data)
            console.log('data', data);
        }

        getData()
    }, [])

    useEffect(() => {
        console.log('forms', forms);

    },[forms])


    return (
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>uuid</th>
                    <th>Patient</th>
                    <th>Physician</th>
                    <th>Form Type</th>
                </tr>
            </thead>
            <tbody>
                {forms?.map((form, key) => {
                    return (
                        <tr key={key} className="hover">
                            <th> {form.id}</th>
                            <th> {form.patient_given_name} {form.patient_surname} </th>
                            <th> {form.physician_given_name} {form.physician_surname} </th>
                            <th> {form.form_type} </th>
                        </tr>
                    )
                })}
            </tbody>
        </table >
    )
}