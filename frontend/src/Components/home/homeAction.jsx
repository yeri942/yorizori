import { useSetRecoilState } from "recoil";
import { authAtom, usersAtom } from "../states";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

const getFamousList = async (startIndex, limit) => {
  await axios({
    method: "get",
    url: "/like//sortByLike",
    responseType: "json",
    params: {
      startIndex: startIndex,
      limit: limit,
    },
  }).then((res) => setFamousLists(res.data));
};

export { getFamousList };
