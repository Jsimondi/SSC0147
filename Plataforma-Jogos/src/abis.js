// The file should export the contract address and the abi in order to import them into the ContractService.
// This file includes all of the functions available on the contract.
export const uDonate_address = '0x8Dc6eC65254493f18A5261Df13442d77e0aB9e10'; // endereço da carteira do Caio
// The Contract Application Binary Interface (ABI) is the standard way to interact with contracts in the Ethereum ecosystem
export const uDonate_abi = [{ // estes sao passados parametros para this.web3js.eth.Contract(), junto com o item acima
    "inputs": [
      {
        "internalType": "address",
        "name": "_registry",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_causeRegistry",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "CreateOrganization",
    "type": "event"
  }
 ]

//  function createOrganization(
//   uint256 id,
//   address payable wallet,
//   string memory ens,
//   address tokenAddress
// )



// id qualquer ? naneshoru
// payable wallet: 0x9F887c41362d8f190B1288937961d09f0D20Fcc6
// ens = domain name for the wallet address = metamask
// tokenAddress = endereço do contrato? = 0xa71aE4F58bcdf47e61c29F50Ba00F341D9CFAAdf