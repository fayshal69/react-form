import PropTypes from 'prop-types';

const Registration = () => {
    return (
        <div className="bg-white p-8 w-[400px] rounded shadow-md">
            <h2 className="text-center text-purple-500 font-light mb-6 text-4xl">Signup Form</h2>
            <label htmlFor="name" className="font-medium">Name</label>
            <input type="text" placeholder="Enter your name" className="input input-bordered w-full  focus:outline-none mb-4" />
            <div className="text-right">
            <button className="btn bg-purple-600 text-white font-light text-lg">Sign up</button>
            </div>
        </div>
    );
};

Registration.propTypes = {
    
};

export default Registration;