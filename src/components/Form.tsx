"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import CustomRadio from './CustomRadio'

type Props = {}

const Form = (props: Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [category, setCategory] = useState("");

    return (
        <div className={'flex flex-grow rounded-3xl text-center lg:py-8 items-center justify-center px-8 py-16'}>
            <form action="" className={'flex flex-col justify-start items-start'}>
                <h1 className={'flex items-end'}>
                    <Image src={'/person-1.png'} alt='user' width={75} height={75} className={'rounded-full object-cover bg-black inline mr-3 mb-0'}></Image>
                    <p className={'inline-flex font-bold text-3xl text-gray-600 overflow-hidden mb-2'}>Welcome in K-ICON platform</p>
                </h1>

                <div className={'flex flex-col w-full text-start mt-6'}>
                    <label className={'font-bold px-1 text-gray-600'}>I will use for</label>
                    <div className={'flex flex-row sm:gap-6 gap-3 mt-3'}>
                        <CustomRadio label='Myself Only' name='category' id='self' eventListener={(val) => {setCategory(val)}} />
                        <CustomRadio label='My Team' name='category' id='team' eventListener={(val) => {setCategory(val)}} />
                    </div>
                </div>

                <Input value={email} eventListener={(val) => {
                    setEmail(val)
                }} label={"Email"} type={'email'} placeholder={"tuhelrana@gmail.com"} id={"email"} />

                <Input value={password} eventListener={(val) => {
                    setPassword(val)
                }} label={"Password"} type={'password'} placeholder={"*****"} id={"password"} />

                <Button label='Sign in' variant='bg-orange-400' full rounded />

            </form>
        </div>
    )
}

export default Form