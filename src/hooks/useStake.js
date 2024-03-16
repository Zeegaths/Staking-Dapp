import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getStakingContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const useStake = (poolId, amount) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    // if (!isAddress(address)) return console.error("Invalid address");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getStakingContract(signer);

    try {
   

      const stakeTx = await contract.stake(amount);

      console.log("transaction: ", stakeTx);
      const receipt = await stakeTransaction.wait();

      console.log("receipt: ", receipt);

      if (receiptStake.status) {
        return console.log("Stake successful!");
      }

      console.log("Stake failed!");
    } catch (error) {
      console.error("error: ", error);
    }
  }, [chainId, poolId, amount, walletProvider]);
};

export default useStake;