import { Header, TransformationForm } from "@/components/shared";
import { transformationTypes } from "@/constants";
import { SearchParamProps } from "@/types";
import React from "react";

const AddTransformationType = ({ params: { type } }: SearchParamProps) => {
  const { title, subtitle } = transformationTypes[type];

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <TransformationForm />
    </>
  );
};

export default AddTransformationType;
