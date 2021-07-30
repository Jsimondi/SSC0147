
export const _address = '0x8Dc6eC65254493f18A5261Df13442d77e0aB9e10'; // endereço da carteira do Caio

export const _abi = [{ // estes sao passados parametros para this.web3js.eth.Contract(), junto com o item acima
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