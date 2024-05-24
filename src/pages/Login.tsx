import React, { useState } from 'react';
import styles from "@/styles/login.module.css";
import  accountService  from '../_services/account.services';
import { Form , Button } from "semantic-ui-react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Login = () => {
  const router = useRouter();
 // Initialisez navigate en utilisant useNavigate
    const [dataLogin, setdataLogin] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        //e.preventDefault();
        router.push('/');
        accountService
            .login(dataLogin)
            .then((res) => {
                accountService.saveToken(res.data.token);
                Cookies.set('your_auth_token', res.data.token, {
                    expires: new Date(res.data.expiresIn),
                    
                });
                window.location.reload();
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <div className={styles.titleLogin}>
                    <h1>Login</h1>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            type="email"
                            value={dataLogin.email}
                            placeholder="Email"
                            onChange={(e) =>
                                setdataLogin({ ...dataLogin, email: e.target.value })
                            }
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            type="password"
                            value={dataLogin.password}
                            onChange={(e) =>
                                setdataLogin({ ...dataLogin, password: e.target.value })
                            }
                            placeholder="Password"
                            required
                        />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
