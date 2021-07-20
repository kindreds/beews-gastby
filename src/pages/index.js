import React from 'react'
import { StaticImage as Image } from 'gatsby-plugin-image'

// Components
import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'

// Sections
import Hero from '@/sections/Landing/Hero'
import Pricing from '@/sections/Landing/Pricing'
import QueHacemos from '@/sections/Landing/QueHacemos'
import CommonSection from '@/sections/Landing/CommonSection'

// icons
import { Divider } from '@/components/SVGS'

// data
import { detalle, unboxing } from '../data/sections'

const Index = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <QueHacemos />
      <CommonSection {...unboxing}>
        <Image src="../images/videollamada.png" alt="" />
      </CommonSection>
      <CommonSection {...detalle}>
        <Image src="../images/persona-pincel.png" alt="" />
      </CommonSection>
      <Image src="../images/separador.svg" />
      <Pricing />
    </Layout>
  )
}

export default Index
