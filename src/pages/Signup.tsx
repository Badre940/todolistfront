import React from 'react'
import styles from "@/styles/signup.module.css"
import { useState } from "react";
import axiosInstance from '../api/axiosInstance';
import Cookies from 'js-cookie';
import { Form , Button, FormField, Checkbox } from "semantic-ui-react";
const Signup = () => {
    const [dataSignup, setdataSignup] = useState({
        email: "",
        password: "",
      });

      const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
      
        axiosInstance
          .post('/signup', dataSignup)
          .then((res) => {
            Cookies.set('your_auth_token', res.data.token, { expires: 1 });
         
            console.log(res.data.message);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    


  return (
    <div className={styles.container}>
        <div className={styles.Signup}>
            <div className={styles.titleSignup}>
            <h1>Signup</h1>
            </div>
<Form onSubmit={handleSubmit}>
<Form.Field>
<label>Email</label>
              <input
                type="email"
                value={dataSignup.email}
                placeholder="Email"
                onChange={(e) =>
                    setdataSignup({ ...dataSignup, email: e.target.value })
                }
                required
              />
            </Form.Field>
            <Form.Field>
            <label>password</label>
              <input
                type="password"
                value={dataSignup.password}
                onChange={(e) =>
                    setdataSignup({ ...dataSignup, password: e.target.value })
                }
                placeholder="Mot de passe"
                required
              />
            </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </div>
    </div>
  )
}

export default Signup