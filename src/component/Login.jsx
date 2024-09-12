
import { useEffect, useState } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setInput({
                email: userData.email,
                password: userData.password
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    };

    const navigate = useNavigate();

    
    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem(`userData`));
        if (loggedUser && input.email === loggedUser.email && input.password === loggedUser.password) {
            navigate("/adduser");
        } else {
            alert("Incorrect email or password");
        }
    };

    return (
        <section className="">
            <div className="container my-4">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Login to your account</h2>
                                <form onSubmit={handleLogin}>
                                    <div className="form-outline mb-2">
                                        <input
                                            name="email"
                                            value={input.email}
                                            onChange={handleChange}
                                            type="email"
                                            id="form3Example3cg"
                                            className="form-control form-control-lg"
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
                                        />
                                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                            <span className="text-light">Login</span>
                                        </button>
                                    </div>
                                    <p className="text-center text-muted mt-3 mb-0">
                                        Do not have an account? <NavLink to='/register' className="fw-bold text-body"><u>Sign up here</u></NavLink>
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

export default Login;
