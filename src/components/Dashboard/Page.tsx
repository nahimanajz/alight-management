"use client";
import React, { useEffect, useState } from "react";
import CardDataStats from "../CardDataStats";
import * as Icon from "@/components/icons";
import Jobs from "../Tables/Jobs";
import Candidates from "../Tables/Candidates";
import { Job } from "@/types/custom/job";
import { Candidate } from "@/types/custom/candidate";
import { getAll } from "@/app/services/auth";
import { getAll as getCandidates } from "@/app/services/candidate";
import { getAll as getJobs } from "@/app/services/jobs";
import { User } from "@/types/custom/user";
import ActionLink from "../common/ActionLink";
import Image from "next/image";
import CardActivity from "../CardActivity";

type DashboardProps = {
  jobs: Job[];
  candidates: Candidate[];
  users: User[];
  pendingCandidates: Candidate[];
};
const Page: React.FC = () => {
  const [data, setData] = useState<DashboardProps>();
  const [activeTab, setActiveTab] = useState(1);

  const getData = async () => {
    const users = await getAll();
    const candidates = await getCandidates();
    const jobs = await getJobs();
    const pendingCandidates = candidates.filter(
      (candidate) => candidate.status === "onboaring Task",
    );
    setData({ ...data, users, candidates, jobs, pendingCandidates });
  };
  const getTable = () => {
    switch (activeTab) {
      case 1:
        return <Jobs data={data?.jobs.slice(0, 5)} />;
      case 2:
        return <Candidates data={data?.candidates.slice(0, 5)} />;
      default:
        return <Candidates data={data?.pendingCandidates.slice(0, 5)} />;
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const activeTabClx =
    "text-[#071C50] dark:text-white text-base font-semibold leading-[24px] border-b-[2px] border-b-[#F7AC25] border-b-w-[32px] pb-2";
  return (
    <>
      <div className="flex justify-between">
        <span className="text-[22px] font-semibold leading-[33px] text-[#071C50] dark:text-white">
          Overview
        </span>
        <span className="flex space-x-8">
          <ActionLink targetPage="/candidates/addNew" label="Add Candidate" />
          <ActionLink targetPage="/jobs/addNew" label="Add Job" />
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-6">
        <CardActivity
          count={33}
          title={"Interview Scheduled"}
          imgUrl={"/images/interview.svg"}
        />
        <CardActivity
          count={2}
          title={"Interview Feedback Pending"}
          imgUrl={"/images/feedback.svg"}
        />
        <CardActivity
          count={44}
          title={"Approval pending"}
          imgUrl={"/images/approval.svg"}
        />
        <CardActivity
          count={13}
          title={"Offer Acceptance Pending"}
          imgUrl={"/images/acceptance.svg"}
        />

        <CardActivity
          count={17}
          title={"Documentations Pending"}
          imgUrl={"/images/documentation.svg"}
        />
        <CardActivity
          count={3}
          title={"Training Pending"}
          imgUrl={"/images/training.svg"}
        />
        <CardActivity
          count={5}
          title={"Supervisor Allocation Pending"}
          imgUrl={"/images/supervision.svg"}
        />
        <CardActivity
          count={56}
          title={"Project Allocation Pending"}
          imgUrl={"/images/project.svg"}
        />
      </div>
      <div className="mt-12 flex flex-col justify-start gap-4">
        <span className="text-[22px] font-semibold leading-[33px] text-[#333] dark:text-white">
          Require Attention
        </span>
        <div className="text flex gap-8">
          <span
            className={`cursor-pointer ${activeTab === 1 && activeTabClx}`}
            onClick={() => setActiveTab(1)}
          >
            Jobs
          </span>
          <span
            className={`cursor-pointer ${activeTab === 2 && activeTabClx}`}
            onClick={() => setActiveTab(2)}
          >
            Candidates
          </span>
          <span
            className={`cursor-pointer ${activeTab === 3 && activeTabClx}`}
            onClick={() => setActiveTab(3)}
          >
            Onboarding
          </span>
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-between gap-8">
        {getTable()}
      </div>
    </>
  );
};

export default Page;
