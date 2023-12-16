import { NextResponse } from 'next/server';
//   Mayur Token with symbol name MYS and supply 300000
import { preprocessRequest, translatePromptToJSON } from '../../api-helpers/parse-builder-prompt/processors';

const _prompt = `
Develop a Solidity smart contract to implement the following approach for the web application:
Approach Heading: __HEADING__
Approach Content:   
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";

contract MyToken is ERC20, ERC20Burnable, ERC20Pausable, Ownable, ERC20Permit, ERC20Votes, ERC20FlashMint {
    constructor(address initialOwner)
        ERC20("MyToken", "MTK")
        Ownable(initialOwner)
        ERC20Permit("MyToken")
    {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // The following functions are overrides required by Solidity.

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Pausable, ERC20Votes)
    {
        super._update(from, to, value);
    }

    function nonces(address owner)
        public
        view
        override(ERC20Permit, Nonces)
        returns (uint256)
    {
        return super.nonces(owner);
    }
}

Additional Details: Use "Approach Content" for generation of code, and implement following functionality: __FEATURE__ using eth function with vaulue set by owner

Your task is to provide the Solidity code for the smart contract that will effectively integrate this approach into the web application. 
Include relevant functions, variables, and any necessary logic to ensure the successful implementation of the specified feature.
Ensure that the generated Solidity code:
1. Compiles without errors.
2. Is complete and ready for deployment.
3. The version of Solidity used is "0.8.0" and SPDX-License-Identifier should be "MIT".
     
Note: Consider best practices and security considerations for smart contracts during the development.
`
export async function POST(request: Request) {
    try {
        const _request = await request.json();
        console.log({ _request })
        let prompt = _prompt
        let __HEADING__ = 'NEWTAJ Token with symbol name NTJ and supply 300000';
        if (_request.additionDetails) {
            __HEADING__ = _request.additionDetails
        }
        let __FEATURE__ = 'ERC20 token'
        if (_request.featuresRequest && _request?.featuresRequest?.length) {
            __FEATURE__ = _request?.featuresRequest.join(', ')
        }
        prompt = prompt.replace('__HEADING__', __HEADING__);
        prompt = prompt.replace('__FEATURE__', __FEATURE__);
        const preprocessedJSON = await preprocessRequest(prompt);
        return NextResponse.json({ message: 'Here is gas fee for Ethereum!', data: JSON.stringify(_request), preprocessedJSON }, { status: 200 });
    } catch (error: any) {
        const message = error.message || 'We ran into a problem Try again in a few minutes!';
        return NextResponse.json({ message, data: error }, { status: 500 });

    }
} 