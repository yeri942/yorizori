import React, { useRef } from "react";
import styled from "styled-components";
import PostTemplete from "./PostTemplete";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import {
  postPageStateAtom,
  MainImageStateAtom,
  SubImageStateAtom,
  categoryAtom,
  cookInfoAtom,
} from "./PostAtom/PostAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import PostStepOne from "./PostStepOne/PostStepOne";
import PostStepTwo from "./PostStepTwo/PostStepTwo";
import PostStepThree from "./PostStepThree/PostStepThree";
import PostStepFour from "./PostStepFour/PostStepFour";
import { Invalidation } from "./util/Invalidation.jsx";
import axios from "axios";

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

function setFormData(formData, data, parentKey) {
  if (!(formData instanceof FormData)) return;
  if (!(data instanceof Object)) return;
  Object.keys(data).forEach((key) => {
    const val = data[key];
    if (parentKey) key = `${parentKey}[${key}]`;
    if (val instanceof Object && !Array.isArray(val)) {
      return setFormData(formData, val, key);
    }
    if (Array.isArray(val)) {
      val.forEach((v, idx) => {
        if (v instanceof Object) {
          setFormData(formData, v, `${key}[${idx}]`);
        } else {
          formData.append(`${key}[${idx}]`, v);
        }
      });
    } else {
      formData.append(key, val);
    }
  });
}

const PostForm = () => {
  const [postPageState, setPostpostPageState] = useRecoilState(postPageStateAtom);
  const mainImage = useRecoilValue(MainImageStateAtom);
  const cookInfo = useRecoilValue(cookInfoAtom);
  const category = useRecoilValue(categoryAtom);
  const subImage = useRecoilValue(SubImageStateAtom);

  const methods = useForm();

  const onSubmit = async (data) => {
    console.log(subImage.file[1]);
    let ingredient = [];
    let seasoning = [];
    let process = [];
    let process_el;
    let ingre_el;
    let seasoning_el;
    let time = {
      min: 0,
      sec: 0,
    };
    let processImage = [];
    let ImageIndex = 1;
    for (let [key, value] of Object.entries(data)) {
      // ingredient
      if (key.indexOf("ingredient_") > -1) {
        ingre_el = new Object({
          ingreName: "",
          ingreCount: "",
        });
        ingre_el.ingreName = value;
      }
      if (key.indexOf("ingredientVolume_") > -1) {
        ingre_el.ingreCount = value;
        ingredient.push(ingre_el);
      }

      // seasoning
      if (key.indexOf("source_") > -1) {
        seasoning_el = new Object({
          ingreName: "",
          ingreCount: "",
        });
        seasoning_el.ingreName = value;
      }
      if (key.indexOf("sourceVolume_") > -1) {
        seasoning_el.ingreCount = value;
        seasoning.push(seasoning_el);
      }

      // process
      if (key.indexOf("order_") > -1) {
        process_el = new Object({
          explain: "",
          processTime: "",
        });
        process_el.explain = value;
        if (subImage.file[ImageIndex]) {
          processImage.push(subImage.file[ImageIndex]);
          ImageIndex++;
        } else {
          setPostpostPageState(3);
          alert("서브이미지 필수임");
        }
      }
      if (key.indexOf("orderTimeMin_") > -1) {
        time = {
          ...time,
          min: value,
        };
      }
      if (key.indexOf("orderTimeSec_") > -1) {
        time = {
          ...time,
          sec: value,
        };
        process_el.processTime = time;
        process.push(process_el);
      }
    }

    const filteredData = {
      desc: data.desc,
      recipeName: data.recipeName,
      ingredient: ingredient,
      seasoning: seasoning,
      process: process,
    };

    const submitData = {
      ...filteredData,
      ...cookInfo,
      ...category,
    };
    console.log(submitData);
    console.log(processImage);

    // for (let key in submitData) {
    //   const value = submitData[key];
    //   formData.append(key, JSON.stringify(value));
    // }
    const formData = new FormData();
    setFormData(formData, submitData);
    formData.append("thumbnail", mainImage);
    formData.append("processImage", processImage);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // for (let i = 0; i < processImage.length; i++) {
    //   formData.append("process[" + i + "].processImage", process[i].processImage);
    // }
    await axios.post("/post", submitData);

    await axios
      .post("/post", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("성공");
      })
      .catch((err) => {
        console.log("error");
      });

    await axios
      .post("/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("성공");
      })
      .catch((err) => {
        console.log("error");
      });

    // Invalidation(submitData, setPostpostPageState);
    // Invalidation(submitData, setPostpostPageState, mainImage);

    // mainImage.file.map((el) => {
    //   formData.append("thumbnail", el);
    // });
    // subImage.file.map((el, idx) => {
    //   if (el) {
    //     return formData.append(`subImg_${idx}`, el);
    //   }
    // });

    // formData.append(JSON.stringify(submitData));
    // for (let key of formData.keys()) {
    //   console.log(key);
    // }

    // /* value 확인하기 */
    // for (let value of formData.values()) {
    //   console.log(value);
    // }

    // console.log(formData.get("subImg_1"));
    // console.log(formData.get("subImg_2"));
    // console.log(formData.get("subImg_3"));

    // 데이터 누수를 방지하기위해 미리보기를 위해 생성한 URL 삭제.
    // subImage.preview.map((el, idx) => {
    //   if (el) {
    //     return window.URL.revokeObjectURL(el);
    //   }
    // });
    // window.URL.revokeObjectURL(mainImage.preview);
  };

  return (
    <FormProvider {...methods}>
      <PostFormBlock onSubmit={methods.handleSubmit(onSubmit)}>
        {postPageState === 1 ? (
          <PostStepOne></PostStepOne>
        ) : postPageState === 2 ? (
          <PostStepTwo></PostStepTwo>
        ) : postPageState === 3 ? (
          <PostStepThree></PostStepThree>
        ) : postPageState === 4 ? (
          <PostStepFour></PostStepFour>
        ) : (
          <PostStepOne></PostStepOne>
        )}
      </PostFormBlock>
    </FormProvider>
  );
};

export default PostForm;
