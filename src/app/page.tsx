import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedContent from "@/components/FeaturedContent";
import Platforms from "@/components/Platforms";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedContent />
      <Platforms />
      <Newsletter />
    </Layout>
  );
}
