// pages/index.tsx
"use client"
import Hero from "@/components/hero/index";
import Layout from "@/components/layout/layout";
import WhatWeDO from "@/components/whatWeDo/index";
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
    </Layout>
  );
};

export default IndexPage;
