'use client'
import { useCallback, useEffect, useState } from 'react'
import type { Database } from '@/lib/database.types';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import useProfile from '../hooks/useProfile';

type Profile = Database['public']['Tables']['profiles']['Row']



export default function Form({ session, profile }: { session: Session | null, profile: Profile }) {

    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)

    // Form data
    const [patient_given_name, setPatientGivenName] = useState<string | null>(null)
    const [patient_surname, setPatientSurname] = useState<string | null>(null)
    const [physician_given_name, setPhysicianGivenName] = useState<string | null>(profile?.given_name)
    const [physician_surname, setPhysicianSurname] = useState<string | null>(profile?.surname)
    const [physician_mobile, setPhysicianMobile] = useState<string | null>(profile?.mobile)
    const [form_type, setFormType] = useState<string | null>('-1');

    useEffect(() => {
        console.log('profile', profile);
        if (profile) {
            setLoading(false);
        }
    }, [profile])



    async function submitForm({
        patient_given_name,
        patient_surname,

        physician_given_name,
        physician_surname,
        physician_mobile,
        form_type,
    }: {
        patient_given_name: string | null
        patient_surname: string | null

        physician_given_name: string | null
        physician_surname: string | null
        physician_mobile: string | null

        form_type: string | null
    }) {
        try {
            setLoading(true)

            let { error } = await supabase.from('forms').insert({
                patient_given_name: patient_given_name,
                patient_surname: patient_surname,

                physician_given_name: physician_given_name,
                physician_surname: physician_surname,
                physician_mobile: physician_mobile,

                form_type: form_type,
                updated_at: new Date().toISOString(),
            })
            if (error) throw error
            alert('Form submitted!')
        } catch (error) {
            alert('Error submitting the data!')
        } finally {
            setLoading(false)
        }
    }


    return (
        <>

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
                            <input type="text" placeholder="Given name" className="input input-bordered" onChange={(e) => setPatientGivenName(e.target.value)} value={patient_given_name || ''} />
                        </label>
                    </div>

                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Surname Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Surname name" className="input input-bordered" onChange={(e) => setPatientSurname(e.target.value)} value={patient_surname || ''} />
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
                            <input type="text" placeholder="Given name" className="input rounded input-bordered" onChange={(e) => setPhysicianGivenName(e.target.value)} value={physician_given_name || ''} />
                        </label>
                    </div>

                    <div className="form-control mb-5 mr-5">
                        <label className="label">
                            <span className="label-text">Surname Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Surname name" className="input rounded input-bordered" onChange={(e) => setPhysicianSurname(e.target.value)} value={physician_surname || ''} />
                        </label>
                    </div>

                    <div className="form-control mb-5 mr-5">
                        <label className="label">
                            <span className="label-text">Mobile</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Surname name" className="input rounded input-bordered" onChange={(e) => setPhysicianMobile(e.target.value)} value={physician_mobile || ''} />
                        </label>
                    </div>
                </div>

                <div className="prose">
                    <h4> Form </h4>
                </div>


                <div className='flex flex-row'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Form selection</span>
                        </label>
                        <select className="select select-bordered" onChange={(e) => setFormType(e.target.value)} value={form_type || '-1'} >
                            <option disabled value={'-1'}>Pick one</option>
                            <option value={'a'}>FORM A </option>
                            <option value={'b'}>FORM B </option>
                            <option value={'c'}>FORM C </option>
                            <option value={'d'}>FORM D </option>
                        </select>
                    </div>
                </div>


                <div className="flex flex-row justify-end mt-10">
                    <button className="btn btn-success"
                        onClick={() => submitForm({
                            patient_given_name,
                            patient_surname,

                            physician_given_name,
                            physician_surname,
                            physician_mobile,
                            form_type,
                        })}
                        disabled={loading}>
                        {loading ? 'Loading ...' : 'Submit'}
                    </button>
                </div>

                <p> Form: </p>

                <p> patient: {patient_given_name} - {patient_surname} </p>
                <p> type: {form_type} </p>
            </form>
        </>

    )

}