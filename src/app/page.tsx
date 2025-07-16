import React from "react";
import SearchInput from "@/components/SearchInput";
import AdvocatesTable from "@/components/AdvocatesTable";

export default async function Home() {
  return (
    <main className="m-6">
      <h1 className="text-2xl mb-4">Solace Advocates</h1>
      <SearchInput />
      <AdvocatesTable />
    </main>
  );
}
