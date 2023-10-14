import React from 'react'
import { useRouter } from 'next/navigation';
import { useFetch } from '../_helpers/useFetch';

export { useUserService };

export default function useUserService() : IUserService {
    const as_endpoint = 'http://localhost:8080/api';
    const router = useRouter();
    const fetch = useFetch();

    return {
        login: async (username, password) => {
            const res = await fetch.post(`${as_endpoint}/auth/token`, { username, password });
            const token = res.token;

            console.log('token : ' + token);

            router.push('http://localhost:3000');
        },
        register: async (user) => {
            console.log('username ' + user.username);

            const res = await fetch.post(`${as_endpoint}/auth/register`, user);

            router.push('http://localhost:3000/login');
        }
    }
}


interface IUser {
    username: string,
    password: string,
    email: string
}

interface IUserService {
    login: (username: string, password: string) => Promise<void>,
    register: (user: IUser) => Promise<void>
}