import Image from 'next/image'
import React from 'react'

type FeaturesProps = {
    icon: string,
    label: string,
    value: string,
    r?: boolean,
}

const FeaturesCard = ({icon, label, value, r}: FeaturesProps) => {
  return (
    <div className={`w-1/2 flex flex-col justify-between items-center h-full border-${r && "r"} gap-y-3 border-gray-400`}>
        <Image src={icon} alt='icon' width={70} height={70} className={'rounded object-contain'}></Image>
        <div className={'text-center'}>
            <h3 className={'text-gray-700 uppercase font-semibold text-md'}>{label}</h3>
            <p className={'text-gray-500'}>{value}</p>
        </div>
    </div>
  )
}

export default FeaturesCard