// import LoginPage from '@/components/LoginPage'
import dynamic from 'next/dynamic'
import React from 'react'
import { Header } from '@/components/Header'
import { FooterPage } from '@/components/FooterPage'
import LoginPage from '@/components/LoginPage'
const page = () => {

  return (
    <>
      <Header></Header>
      <LoginPage></LoginPage>
     </>
  )
}

export default page