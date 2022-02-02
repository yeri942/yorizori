import React, { useRef } from "react";
import styled from "styled-components";
import PostTemplete from "./PostTemplete";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import {
  pageStateAtom,
  MainImageStateAtom,
  SubImageStateAtom,
  categoryAtom,
  cookInfoAtom,
} from "./PostAtom/PostAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import PostStepOne from "./PostStepOne/PostStepOne";
import PostStepTwo from "./PostStepTwo/PostStepTwo";
import PostStepThree from "./PostStepThree/PostStepThree";
import PostStepFour from "./PostStepFour/PostStepFour";

const PostFormBlock = styled.form``;
document.addEventListener(
  "keydown",
  function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  },
  true
);

const PostForm = () => {
  const pageState = useRecoilValue(pageStateAtom);
  const mainImage = useRecoilValue(MainImageStateAtom);
  const cookInfo = useRecoilValue(cookInfoAtom);
  const category = useRecoilValue(categoryAtom);
  const subImage = useRecoilValue(SubImageStateAtom);
  const methods = useForm();
  const formData = new FormData();

  const onSubmit = (data) => {
    mainImage.file.map((el) => {
      formData.append("mainImg", el);
    });
    subImage.file.map((el, idx) => {
      if (el) {
        return formData.append(`subImg_${idx}`, el);
      }
    });

    console.log(data);
    const submitData = {
      ...data,
      ...cookInfo,
      ...category,
    };
    console.log(formData.get("subImg_1"));
    console.log(formData.get("subImg_2"));
    console.log(formData.get("subImg_3"));
  };
  return (
    <FormProvider {...methods}>
      <PostFormBlock onSubmit={methods.handleSubmit(onSubmit)}>
        {pageState === 1 ? (
          <PostStepOne></PostStepOne>
        ) : pageState === 2 ? (
          <PostStepTwo></PostStepTwo>
        ) : pageState === 3 ? (
          <PostStepThree></PostStepThree>
        ) : pageState === 4 ? (
          <PostStepFour></PostStepFour>
        ) : (
          <PostStepOne></PostStepOne>
        )}
      </PostFormBlock>
    </FormProvider>
  );
};

export default PostForm;
