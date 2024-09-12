    import React, { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { addStudent } from "../service/api";


    const initialValues = {
        name: "",
        address: "",
        email: ""
    };

    const Adduser = () => {
        const [user, setUser] = useState(initialValues);
        const navigate = useNavigate();

        const onValueChange = (e) => {
            const { name, value } = e.target;
            setUser({ ...user, [name]: value });
            
        };

        const addData = async (e) => {
            e.preventDefault(); // Prevent default form submission
            await addStudent(user);
            navigate('/all');
        };

        return (
            <section>
                <div className="container my-4">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">User Details</h2>
                                    <form onSubmit={addData}>
                                        <div className="form-outline mb-2">
                                            <input
                                                name="name"
                                                value={user.name}
                                                onChange={onValueChange}
                                                type="text"
                                                id="form3Example1cg"
                                                className="form-control form-control-lg"
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                        </div>
                                        <div className="form-outline mb-2">
                                            <input
                                                name="email"
                                                value={user.email}
                                                onChange={onValueChange}
                                                type="email"
                                                id="form3Example3cg"
                                                className="form-control form-control-lg"
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                        </div>
                                        <div className="form-outline mb-2">
                                            <input
                                                name="address"
                                                value={user.address}
                                                onChange={onValueChange}
                                                type="text"
                                                id="form3Example4cg"
                                                className="form-control form-control-lg"
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example4cg">Current Address</label>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button onClick={() => addData()} type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                <span className="text-light">Add User</span>
                                            </button>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    export default Adduser;
