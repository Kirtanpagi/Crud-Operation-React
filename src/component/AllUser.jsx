import { useEffect, useState } from "react";
import { getStudent, deleteStudent } from "../service/api";
import { Link } from "react-router-dom";

const Alluser = () => {
    const [students, setStudents] = useState([]);

    const getStudentDetails = async () => {
        try {
            let response = await getStudent();
            setStudents(response.data);

            localStorage.setItem('students', JSON.stringify(response.data));
            } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    useEffect(() => {
        getStudentDetails();
    }, []);

    const deleteStudentData = async (id) => {
        try {
            await deleteStudent(id);
            getStudentDetails();
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    return (
        <>
            <div className="container my-4">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.address}</td>
                                <td>
                                    <Link to={`/edit/${student.id}`} className="btn btn-primary me-2">
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteStudentData(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Alluser;
