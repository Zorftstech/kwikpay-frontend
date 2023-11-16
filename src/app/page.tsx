// pages/index.tsx
"use client"
import Hero from "@/components/HomeComponents/hero/index";
import Layout from "@/components/layout/layout";
import WhatWeDO from "@/components/HomeComponents/whatWeDo/index";
import WhoWeHelp from "@/components/HomeComponents/whoWeHelp/index";
import WhyChooseUs from "@/components/HomeComponents/whyChooseUs/index";
import { SubHero } from "@/styles/home.style";
import Image from 'next/image';
import { kampus } from "../../public/assets/index";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <SubHero>
        <Image src={kampus} alt='student' />
      </SubHero>
      <WhatWeDO />
      <WhoWeHelp />
      <WhyChooseUs />
    </Layout>
  );
};

export default IndexPage;
