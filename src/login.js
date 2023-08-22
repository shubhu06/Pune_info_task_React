import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import './home.css'

export default function Login() {
    let navigate = useNavigate()

    const [users, setUsers] = useState([]);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            // const matchingUser = users.find(user => user.username === values.username && user.password === values.password);
            // if (matchingUser) {
            //     alert("Login Successfully")
            //     navigate("/home");
            // } else {
            //    alert("invalid username or password")
            // }
            for (var user of users) {
                if (user.username === values.username && user.password === values.password) {
                    alert("Login successfully")
                    navigate("/home");
                    break;
                } else {
                    alert("Invalid username or password")

                }
            }
        }
    })

    useEffect(() => {
        fetch('http://localhost:8080/get_all_user')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`API request failed with status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setUsers(data.data);
                console.log(data.data, "check");
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);


    return (
        // <div className="login_box">
        //    <div>
        //    <h2>User Login</h2>
        //     <form onSubmit={formik.handleSubmit}>
        //         <dl>
        //             <dt>User Id</dt>
        //             <dd><input value={formik.values.username} name="username" onChange={formik.handleChange} type="text" /></dd>
        //             <dt>Password</dt>
        //             <dd><input value={formik.values.password} name="password" onChange={formik.handleChange} type="password" /></dd>
        //         </dl>
        //         <button className="btn btn-primary" type="submit">Login</button>
        //     </form>
        //    </div>

        // </div>
        <div class="login_box">
            <form class="w-25" onSubmit={formik.handleSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">User_ID :</label>
                <input type="text" value={formik.values.username} name="username" onChange={formik.handleChange} class="form-control" id="exampleInputEmail1" />

            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password :</label>
                <input type="password" class="form-control" value={formik.values.password} name="password" onChange={formik.handleChange} />
            </div>

            <button type="submit" class="btn btn-primary w-100">Submit</button>
        </form>
</div >
    );
}
