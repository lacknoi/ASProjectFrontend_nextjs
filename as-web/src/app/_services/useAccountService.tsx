import React from 'react'
import { useFetch } from '../_helpers/useFetch';

export { useAccountService };

export default function useAccountService() : IAccountService {
    const as_endpoint = 'http://localhost:8082/api';
    const fetch = useFetch();

    return {
        getMobileActive: async () => {
            const res = await fetch.get(`${as_endpoint}/accountservice/mobile/mobileActive?accountNo=66090001`);
            
            const token = res.token;

            console.log('token : ' + token);
        }
    }
}

interface IAccountService {
    getMobileActive: () => Promise<void>
}