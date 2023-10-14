'use client';

import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useUserService } from '../_services/useUserService';
import { useRouter } from 'next/navigation';

type Props = {
    title: any;
    user: any;
}

export { Register };

export default function Register({ title, user }: Props) {
    const router = useRouter();
    const userService = useUserService();
    const { register, handleSubmit, reset, formState } = useForm({ defaultValues: user });
    const { errors } = formState;

    async function onSubmit(data: any) {
        userService.register(data);
    }

    const fields = {
        email: register('email', { required: 'First Name is required' }),
        username: register('username', { required: 'Username is required' }),
        password: register('password', {
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
            // password only required in add mode
            validate:  value => !user && !value ? 'Password is required' : undefined
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{title}</h1>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Username</label>
                    <input {...fields.username} type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.username?.message?.toString()}</div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">
                        Password
                        {user && <em className="ms-1">(Leave blank to keep the same password)</em>}
                    </label>
                    <input {...fields.password} type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.password?.message?.toString()}</div>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Email</label>
                    <input {...fields.email} type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.email?.message?.toString()}</div>
                </div>
            </div>
            <div className="mb-3">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary me-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                    Save
                </button>
                <button onClick={() => reset()} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Reset</button>
                </div>
        </form>
    );
}