import React from 'react'

type CustomProps = {
    label: string;
    name: string;
    id: string;
    eventListener: (val: string) => void
}

const CustomRadio = ({label, name, id, eventListener}: CustomProps) => {
  return (
    <div className={`relative w-full customRadio`}>
        <input type="radio" name={name} id={id} className={'overflow-hidden absolute w-0 h-0'} />
        <label htmlFor={id} className={'radioCover flex flex-row items-center gap-4 w-full border rounded-md py-3 px-4 text-gray-500 text-sm font-semibold ring ring-slate-300'} onClick={(e) => {
          eventListener(id)
        }}>
            <div className={'p-1 border-2 rounded-full outer-circle flex items-center justify-center'}>
              <div className="inner-circle p-1 bg-white border-0 rounded-full"></div>
            </div>
            <span>{label}</span>
        </label>
    </div>
  )
} 

export default CustomRadio