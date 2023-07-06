
"use client"

type Props = {
    user: any
}

export default function Form({ user }: Props) {

    return (
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
                        <input type="text" placeholder="Given name" className="input rounded input-bordered" onChange={() => { }} value={user?.email} />
                    </label>
                </div>

                <div className="form-control mb-5 mr-5">
                    <label className="label">
                        <span className="label-text">Surname Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Surname name" className="input rounded input-bordered" onChange={() => { }} value={user?.email} />
                    </label>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Form selection</span>
                    </label>
                    <select className="select select-bordered" value={-1}>
                        <option disabled value={-1}>Pick one</option>
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
    )

}