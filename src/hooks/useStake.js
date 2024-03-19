import { useCallback } from "react";
import { isSupportedChain } from "../utils";
// import { isAddress } from "ethers";
import { getProvider } from "../constants/providers";
import { getStakingContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from 'react-toastify';
import { ethers } from "ethers";



const useStake = (amount) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async (id) => {
    
    if (!isSupportedChain(chainId)) {
      toast.error("Wrong network");
      return;
    }
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();



    try {

      const contract = getStakingContract(signer);
      console.log("Contract:", contract);

      console.log("id", id);
      console.log("amount", amount);

      const stakeAmount = ethers.parseUnits(amount, 18);
      const transaction = await contract.stake(id, amount);
      console.log("Transaction: ", transaction);
    

      const receipt = await transaction.wait();
      console.log("Receipt: ", receipt);

      if (receipt.status) {
        toast.success("Successful!");
      } else {
        toast.error("Failed!");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }, [chainId, amount, walletProvider]);
};



export default useStake;