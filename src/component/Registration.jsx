import { useState } from "react";

const Registration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password
        }
        if(isChecked) {
            document.getElementById('my_modal_5').showModal();
        }
    }

    return (
        <div className="bg-white p-8 w-[90%] md:w-[500px] rounded shadow-md">
            <form onSubmit={() => handleSubmit(event)}>
                <h2 className="text-center text-purple-500 font-light mb-6 text-4xl">Signup Form</h2>

                <label className="font-medium text-lg block mb-1">Name</label>
                <input type="text" placeholder="Enter your name"
                className="input input-bordered w-full  focus:outline-none mb-4" 
                onChange={(e) => setName(e.target.value)} required />

                <label className="font-medium text-lg block mb-1">Email</label>
                <input type="email" placeholder="Enter your email" 
                className="input input-bordered w-full  focus:outline-none mb-4" 
                onChange={(e) => setEmail(e.target.value)} required />

                <label className="font-medium text-lg block mb-1">Password</label>
                <input type="password" placeholder="Enter your password" 
                className="input input-bordered w-full  focus:outline-none mb-4" 
                onChange={(e) => setPassword(e.target.value)} required />

                <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" className="checkbox checkbox-accent"
                    onChange={(e) => setIsChecked(e.target.checked)} /> 
                    <p>Do you agree with our term and conditions?</p>
                </div>

                <div className="text-right">
                <button type="submit" className="btn bg-purple-600 text-white font-light text-lg"
                >Sign up</button>
                </div>
            </form>
            <div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <p className="bg-green-200 p-1 rounded">Your name : {name}</p>
                        <p className="my-4 bg-pink-200 p-1 rounded">Your email : {email}</p>
                        <p className="bg-red-200 p-1 rounded">Your password : {password}</p>
                        <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-red-500 text-white">Close</button>
                        </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};



export default Registration;