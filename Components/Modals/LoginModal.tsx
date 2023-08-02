"use client"

import useLoginModal from '@/hooks/useLoginModal';
import React, { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';


const LoginModal = () => {
    const loginModal = useLoginModal();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            //TODO ADD LOG IN

            loginModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal]);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeholder='Email'
                onChange={(e) => { setEmail(e.target.value) }}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder='Password'
                onChange={(e) => { setPwd(e.target.value) }}
                value={pwd}
                disabled={isLoading}
            />
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel='Sign In'
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}

        />
    )
}

export default LoginModal