import Image from 'next/image'
import React from 'react'
import FeaturesCard from './FeaturesCard'

type Props = {}

const Testimonies = (props: Props) => {
  return (
    <section className={'lg:py-16 py-12 lg:px-20 px-10 lg:rounded-3xl bg-[#f7f2ef] h-full lg:w-[43%] w-full flex flex-col gap-y-24'}>
        <div className={'flex gap-4 items-center'}>
            <Image src={"/logo.png.jpg"} alt='logo' width={50} height={50} className={'rounded'} />
            <h1 className={'text-gray-800 font-bold text-2xl'}>K-ICON</h1>
        </div>
        <div>
            <h2 className={'text-gray-800 font-bold text-4xl font-serif'}><span className={''}>K-ICON</span> is your ultimate icon library</h2>
            <div className={'flex gap-6 items-center mt-4'}>
                <Image src={'/icon-box.jpg'} alt='box' width={100} height={100} className={'rounded'}></Image>
                <p className={'text-gray-500 font-semibold lg:text-md text-md'}>We provide you the only icon manager that makes it easy to find your icon</p>
            </div>
        </div>
        <div className={'flex flex-row bg-white rounded-xl p-8 items-center'}>
            <FeaturesCard icon={'/size.jpg'} label='4 GRID SIZE' r value='12, 16, 24, 32 pixels' />
            <FeaturesCard icon={'/styles.jpg'} label='4 STYLES' value='Outline, Fill, Color' />
        </div>
    </section>
  )
}

export default Testimonies