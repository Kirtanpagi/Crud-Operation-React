
import React, { useEffect, useState } from "react";
import { getSingleStudent, editStudent } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const initialValues = {
    name: "",
    address: "",
    phone: "",
    email: ""
};

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState(initialValues);

    useEffect(() => {
        getData();
    }, [id]);

    const getData = async () => {
        try {
            let response = await getSingleStudent(id);
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editStudent(user, id);
            navigate('/all');
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <section>
            <div className="container my-4">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Edit User Details</h2>
                                <form onSubmit={handleSubmit}>
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
                                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                            <span className="text-light">Update User</span>
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

export default Edit;
