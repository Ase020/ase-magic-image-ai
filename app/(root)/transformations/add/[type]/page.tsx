import { Header, TransformationForm } from "@/components/shared";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.action";
import { SearchParamProps, TransformationTypeKey } from "@/types";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AddTransformationType = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];
  const { title, subtitle } = transformation;
  if (!userId) redirect("/sign-in");
  const user = await getUserById(userId);

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <TransformationForm
        userId={user._id}
        // data={}
        action="Add"
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTransformationType;
