"use client";

import { getById } from "@/app/services/jobs";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Job } from "@/types/custom/job";
import { useEffect, useState } from "react";

type IProps = {
  params: { id: string };
};
export default function Page({ params }: IProps) {
  const [job, setJob] = useState<Job>();

  const getData = async () => {
    const data = await getById(params.id);
    setJob(data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            {JSON.stringify(job)}
          </h3>
        </div>
      </div>
    </DefaultLayout>
  );
}
