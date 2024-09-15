import { ListBar } from "@/components/ui/listbar"
import { Hero } from "@/components/ui/hero"
import { AgencyList } from "@/components/ui/agencylist"
import "./globals.css";
import Head from 'next/head'

export default function Home() {
  return (
    <div className="mx-[8em] my-[8em]; mt-[8em]">
      <main>
      <title>Design Agencies</title>
        <Hero></Hero>
        <ListBar></ListBar>
        <AgencyList></AgencyList>

      </main>
      
    </div>
  );
}
