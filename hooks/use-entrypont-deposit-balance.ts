import { useState, useEffect } from 'react';

import { EntryPoint__factory } from '@account-abstraction/contracts';
import { BigNumber } from 'ethers';
import { useSigner } from 'wagmi';


import { ENTRYPOINT_ADDRESS } from '@/config/contracts';

export const useEntrypointDepositBalance = () => {
  const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
  const { data: signer } = useSigner();

 

  return {
    balance
  };
};
