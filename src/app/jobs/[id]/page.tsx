"use client";

import { getById } from "@/app/services/jobs";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Form from "@/components/job/Form";
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
  }, []);
  return (
    <DefaultLayout>
      <Form title={"Update Job detail"} message={"Job is Updated successfully"} job={job} isEditing={true}/>
    </DefaultLayout>
  );
}
