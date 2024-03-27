"use client";
import { Job } from "@/types/custom/job";
import { FC, useEffect, useState } from "react";
import * as Icon from "@/components/icons";
import Link from "next/link";
import { deleteJob } from "@/app/services/jobs";
import { toast } from "react-toastify";
import ActionLink from "../common/ActionLink";

interface IProps {
  data: Job[] | undefined;
}
const Jobs: FC<IProps> = ({ data }) => {
  const [apiData, setApiData] = useState(data);

  const handleDelete = (job: Job) => {
    deleteJob(job);
    const newData = data?.filter((record) => record.id !== job?.id);
    setApiData(newData);
    toast.success("Job is deleted successfully");
  };
  useEffect(() => setApiData(data), [data]);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Jobs
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Role
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              description
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              requirements
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              responsibilities
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>

        {apiData?.map((record, index) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              index === apiData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={index}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0"></div>
              <p className="hidden text-black dark:text-white sm:block">
                {record.role}
              </p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {record.description.substr(0, 60)}
              </p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {record.requirements.substr(0, 60)}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="">{record.responsibilities.substr(0, 60)}...</p>
            </div>
            <div className="items-center justify-center gap-7 p-2.5 sm:flex xl:p-5">
              <Icon.TrashIcon onClick={() => handleDelete(record)} />
              
              <ActionLink targetPage={`jobs/${record?.id}`} label={"Edit"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
