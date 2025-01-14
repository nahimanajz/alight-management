"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import { getAll } from "../services/jobs";
import { useEffect, useState } from "react";
import JobTable from "@/components/Tables/Jobs";
import { Job } from "@/types/custom/job";
import ActionLink from "@/components/common/ActionLink";

export const Page = () => {
  const [jobs, setJobs] = useState<Job[]>();
  const getData = async () => {
    const data = await getAll();
    setJobs(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DefaultLayout>
      <div className="flex justify-between py-6">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Jobs
        </h2>
        <ActionLink targetPage={"/jobs/addNew"} label={"Add New"} />
      </div>
      <JobTable data={jobs} />
    </DefaultLayout>
  );
};
export default Page;
