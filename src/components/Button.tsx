import Image from 'next/image';
import React from 'react'

type BtnProps = {
    label: string,
    variant: string,
    rounded?: boolean;
    full?: boolean;
    icon?: string;
}

const Button = ({label, variant, rounded, full, icon}: BtnProps) => {
  return (
    <button className={`${full && "w-full"} ${rounded && "rounded-lg"} ${variant ? variant : "bg-grey-800"} py-4 text-white mt-8 font-semibold text-sm`}>
        {icon && <Image src={icon} alt="btn" width={25} height={25} ></Image>}
        <span className={'uppercase'}>{label}</span>
    </button>
  )
}

export default Button