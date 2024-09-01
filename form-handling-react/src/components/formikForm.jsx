// src/components/formikForm.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const formikForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted successfully:', values);
      // Simulate API call here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          {...formik.getFieldProps('username')}
        />
        {formik.touched.username && formik.errors.username ? (
          <p style={{ color: 'red' }}>{formik.errors.username}</p>
        ) : null}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <p style={{ color: 'red' }}>{formik.errors.email}</p>
        ) : null}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <p style={{ color: 'red' }}>{formik.errors.password}</p>
        ) : null}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default formikForm;
