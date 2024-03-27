"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import { getAll } from "../services/candidate";
import { useEffect, useState } from "react";
import CandidatesTable from "@/components/Tables/Candidates";
import { Candidate } from "@/types/custom/candidate";
import ActionLink from "@/components/common/ActionLink";

export const Page = () => {
  const [candidates, setCandidates] = useState<Candidate[]>();
  const getData = async () => {
    const data = await getAll();
    setCandidates(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DefaultLayout>
      <div className="flex justify-between py-6">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Candidates
        </h2>

        <ActionLink targetPage={"/candidates/addNew"} label={"Add New"} />
      </div>
      <CandidatesTable data={candidates} />
    </DefaultLayout>
  );
};
export default Page;
