import React, { Suspense } from "react";
import SearchInput from "@/components/SearchInput";
import AdvocatesTable from "@/components/AdvocatesTable";

export default async function Home() {
  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <SearchInput />
      <br />
      <br />
      <AdvocatesTable />
    </main>
  );
}
