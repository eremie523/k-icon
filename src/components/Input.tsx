import React from 'react'

type InputProps = {
    label: string; 
    placeholder: string; 
    id: string;
    type: "email" | "password" | "text" | "number" | "telephone";
    name?: string; 
    value: string;
    eventListener: (val: any) => void
}

const Input = ({label, type, placeholder, id, name, eventListener, value}: InputProps) => {
  return (
    <div className={'flex flex-col w-full text-start mt-6'}>
        <label htmlFor={id} className={'font-bold px-1 text-gray-600'}>{label}</label>
        <input type={type} id={id} placeholder={placeholder} name={name ? name : id} className={'border-4 px-6 mt-2 py-4 w-full rounded-xl'} value={value} onChange={(e) => {eventListener(e.target.value)}} />
    </div>
  )
}

export default Input