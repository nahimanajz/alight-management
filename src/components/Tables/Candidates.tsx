"use client";
import { Job } from "@/types/custom/job";
import { FC, useEffect, useState } from "react";
import * as Icon from "@/components/icons";
import Link from "next/link";
import { deleteCandidate } from "@/app/services/candidate";
import { Candidate } from "@/types/custom/candidate";
import { toast } from "react-toastify";
import ActionLink from "../common/ActionLink";

interface IProps {
  data: Candidate[] | undefined;
}
const Candidates: FC<IProps> = ({ data }) => {
  const [apiData, setApiData] = useState(data);

  const handleDelete = (candidate: Candidate) => {
    deleteCandidate(candidate);
    const newData = data?.filter((record) => record.id !== candidate?.id);
    setApiData(newData);
    toast.success("Candidate is deleted successfully");
  };
  useEffect(() => setApiData(data), [data]);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Candidates
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium"> Name</p>
        </div>

        <div className="col-span-1 flex items-center">
          <p className="font-medium">Phone</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Address</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">qualification</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Job preference</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>
      {apiData?.map((candidate, index) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={index}
        >
          <div className="col-span-1 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex flex-col text-black dark:text-white">
                <p className="text-sm ">{candidate.name}</p>
                <p className="text-xs text-black">{candidate.email}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {candidate.phone}
            </p>
          </div>

          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {candidate.address} / city:{candidate.city}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {candidate.qualification}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">{candidate.job_preferences}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">{candidate.status ?? "pending"}</p>
          </div>
          <div className="col-span-1 flex items-center gap-4">
            <Icon.TrashIcon onClick={() =>handleDelete(candidate)} />
            <ActionLink targetPage={`candidates/${candidate?.id}`} label={"Edit"} className="bg-[#4B93E7] py-1 px-2" />
            <ActionLink targetPage={`candidates/${candidate?.id}/feedback`} label={"Reply"} className="bg-[#F7AC25] py-1 px-2" />

          </div>
        </div>
      ))}
    </div>
  );
};

export default Candidates;
