
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store input data in localStorage
        localStorage.setItem('userData', JSON.stringify(input));
        alert('Registration successful! Data stored in localStorage.');
        navigate('/');
    };

    return (
        <section className="">
            <div className="container my-4">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-outline mb-2">
                                        <input
                                            name="name"
                                            value={input.name}
                                            onChange={handleChange}
                                            type="text"
                                            id="form3Example1cg"
                                            className="form-control form-control-lg"
                                            required />
                                        <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                    </div>
                                    <div className="form-outline mb-2">
                                        <input
                                            name="email"
                                            value={input.email}
                                            onChange={handleChange}
                                            type="email"
                                            id="form3Example3cg"
                                            className="form-control form-control-lg"
                                            required
                                        />
                                        <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                    </div>
                                    <div className="form-outline mb-2">
                                        <input
                                            name="password"
                                            value={input.password}
                                            onChange={handleChange}
                                            type="password"
                                            id="form3Example4cg"
                                            className="form-control form-control-lg"
                                            required
                                        />
                                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                            <span className="text-light">Register</span>
                                        </button>
                                    </div>
                                    <p className="text-center text-muted mt-3 mb-0">
                                        Already have an account? <NavLink to='/' className="fw-bold text-body "><u>Login here</u></NavLink>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
