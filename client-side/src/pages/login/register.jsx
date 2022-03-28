import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
    Grid,
    Button,
    Input
  } from '@material-ui/core';
import { registerRoute } from '../../utils/APIroutes';
import { useNavigate, Link } from 'react-router-dom';


export default function Register () {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        if (localStorage.getItem(process.env.LOCALHOST_KEY)) {
            navigate('/');
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault()
        const {username, password} = values;
        const {data} = await axios.post(registerRoute, {
            username, 
            password
        })

        if (data.status === false) {
            console.log(data.msg)
        }
        if (data.status === true) {
            localStorage.setItem(process.env.LOCALHOST_KEY, JSON.stringify(data.user))
            navigate("/");
        }
    };
    return (
        <form style={{ padding: 30 }} onSubmit={(event) => handleSubmit(event)}>
            <Grid
                container
                spacing={3}
                direction={'column'}
                justify={'center'}
                alignItems={'center'}
            >
                <Grid item xs={12}>
                    <Input type='text' onChange={(e) => handleChange(e)} name="username" label="username"></Input>
                </Grid>
                <Grid item xs={12}>
                    <Input onChange={(e) => handleChange(e)} name="password" label="password" type={'password'}></Input>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" fullWidth> Register </Button>
                </Grid>
                <Grid item xs={12}>
                    <span>
                        Already have an account?
                        <Link to="/login">Login</Link>
                    </span>
                </Grid>
            </Grid>
        </form>
      )
};
