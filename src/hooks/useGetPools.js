import { useEffect, useState } from "react";
import { getStakingContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
import { ethers } from "ethers";
import stakingAbi from "../constants/stakingAbi.json";
import multicallAbi from "../constants/multicall.json";


import React from 'react'

import React from 'react'

const useGetPools = () => {
  const [data, setData] = useState([]);
  const [numOfPool, setNumOfPool] = useState(0);

  const contract = getStakingContract(readOnlyProvider)
  
  useEffect(() => {
    (async () => {
      contract.id()
        .then((res) => setNumOfPoolOfPool(Number(res)))
        .catch((err) => console.log(err));
      )
    })
  })



export default useGetPools;
