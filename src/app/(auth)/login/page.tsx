import Form from '@/components/Form'
import Testimonies from '@/components/Testimonies'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className={'w-full min-h-full lg:px-32 lg:py-8 flex lg:flex-row flex-col'}>
        <Testimonies />
        <Form />
    </div>
  )
}

export default page