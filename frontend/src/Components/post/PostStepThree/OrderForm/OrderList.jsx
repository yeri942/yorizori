import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { ResetTextarea } from "../../commonStyle";
import { useForm } from "react-hook-form";
import { OrderListAtom } from "../../PostAtom/PostAtom";

const OrderList = () => {
  const [OrderList, setOrderList] = useRecoilState(OrderListAtom);
  const deleteIngredient = (index) => {
    setOrderList((oldList) => {
      const newList = oldList.filter(function (el, i) {
        return index !== i;
      });
      return newList;
    });
  };

  const { register, watch, setValue } = useForm();

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
      localStorage.setItem("order", JSON.stringify(value));
    });
  }, [watch]);

  useEffect(() => {
    if (localStorage.getItem("order")) {
      const getOrder = JSON.parse(localStorage.getItem("order"));
      OrderList.forEach((el, idx) => {
        setValue(`order_${idx + 1}`, eval(`getOrder.order_${idx + 1}`));
      });
      OrderList.forEach((el, idx) => {
        setValue(`volume_${idx + 1}`, eval(`getOrder.volume_${idx + 1}`));
      });
    }
  }, []);

  return (
    <>
      {OrderList.map((item, index) => {
        return (
          <Wrapper key={`order_wrapper_${index}`}>
            <Ingredient
              {...register(`order_${index + 1}`)}
              placeholder="ex) 마늘을 잘게 썬다."
              key={`order_${index}`}
            ></Ingredient>
            <TimeWrapper key={`TimeWrapper_${index}`}>
              <ImgUploadLabel htmlFor="main_img" />
              <ImgUploadInput id="main_img" type="file" />
              <TimeInput
                {...register(`orderTimeMin_${index + 1}`)}
                placeholder="05"
                type="number"
                key={`TimeInput_min_${index}`}
              />
              <p>:</p>
              <TimeInput
                {...register(`orderTimeSec_${index + 1}`)}
                placeholder="00"
                type="number"
                key={`TimeInput_sec_${index}`}
              />
            </TimeWrapper>
            {index + 1 === OrderList.length && (
              <DeleteBtn
                key={`DeleteBtn_${index}`}
                onClick={() => {
                  deleteIngredient(index);
                }}
              >
                x
              </DeleteBtn>
            )}
          </Wrapper>
        );
      })}
    </>
  );
};

export default OrderList;

const Wrapper = styled.div`
  + div {
    margin-top: 10px;
  }
  position: relative;
  text-align: right;
  margin-top: 20px;
`;

const DeleteBtn = styled.div`
  width: 10px;
  position: absolute;
  top: 3px;
  color: #6666;
`;

const TimeInput = styled.input`
  width: 30px;
  font-weight: bold;
  border: none;
  padding-left: 7px;
`;

const Ingredient = styled.textarea`
  width: 235px;
  height: 54px;
  border: 1px solid #feae11;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 15px 55px 0px 25px;
  font-size: 1rem;
  font-weight: bold;
  ${ResetTextarea};
`;

const TimeWrapper = styled.div`
  width: 95px;
  height: 25px;
  border: 1px solid #feae11;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 0px 10px 0px 10px;
  font-size: 1rem;
  font-weight: bold;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ImgUploadLabel = styled.label`
  position: absolute;
  width: 26px;
  height: 28px;
  background-image: url("../images/bi_camera.png");
  top: -45px;
  right: 14px;
`;

const ImgUploadInput = styled.input`
  display: none;
`;
