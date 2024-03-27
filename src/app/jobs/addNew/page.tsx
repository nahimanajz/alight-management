"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Form from "@/components/job/Form";

const Page = () => {
  return (
    <DefaultLayout>
      <Form
        title={"Create New Job"}
        message="Job is added successfully"
      />
    </DefaultLayout>
  );
};
export default Page;
