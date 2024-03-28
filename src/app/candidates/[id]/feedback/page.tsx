"use client";
import { getById } from "@/app/services/candidate";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Form from "@/components/candidate/Form";
import { Candidate } from "@/types/custom/candidate";
import { FC, useEffect, useState } from "react";
import { IParamProps } from "../page";
import FeedbackForm from "@/components/candidate/FeedbackForm";

const Page: FC<IParamProps> = ({ params }) => {
  const [candidate, setCandidate] = useState<Candidate>();
  const getData = async () => {
    const data = await getById(params.id);
    setCandidate(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DefaultLayout>
      <FeedbackForm
        title={"Update Candidate detail"}
        message={"Bit of feedback is given to a candidate"}
        candidate={candidate}
      />
    </DefaultLayout>
  );
};
export default Page;
