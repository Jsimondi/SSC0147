import { Injectable } from '@angular/core';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Subject, } from 'rxjs';
import { uDonate_address, uDonate_abi } from '../abis.js'

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  web3js: any;
  provider: any;
  accounts: any;
  uDonate: any;
  web3Modal

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();
  private newOrganization = new Subject<any>();
  newOrganization$ = this.newOrganization.asObservable();

  organization = { // não tenho ctz sobre os parametros ens e tokenAdress
    id: 42,
    wallet: '0x9F887c41362d8f190B1288937961d09f0D20Fcc6',
    ens: 'metamask',
    tokenAdress: '0xa71aE4F58bcdf47e61c29F50Ba00F341D9CFAAdf'
    // tokenAdress: 'ETH'
  }

  constructor() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          // infura serve para vc nao precisar baixar a blockchain inteira na sua máquina
          // da pra criar uma conta lá e ver melhor
          infuraId: "INFURA_ID" // required 
          // infuraId: "bf7607c6bbb44da3ae4fb688cdb76ff0" // required
        }
      }
    };
          
    // contract.defaultChain = 'ropsten';

    this.web3Modal = new Web3Modal({
      // network: "mainnet", // optional
      network: "ropsten", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
    
  }

  async connectAccount() {
    try {
      this.provider = await this.web3Modal.connect(); // set provider
    } catch(e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
    console.log(this.provider)
    this.web3js = new Web3(this.provider); // create web3 instance
    console.log(this.web3js)
    this.accounts = await this.web3js.eth.getAccounts(); 
    console.log(this.accounts, 'esta é minha conta metamask')
    this.accountStatusSource.next(this.accounts)
  }

  async disconnectAccount() {
    console.log("Killing the wallet connection", this.provider);

    if(this.provider?.close) {
      await this.provider.close();
  
      // If the cached provider is not cleared,
      // WalletConnect will default to the existing session
      // and does not allow to re-scan the QR code with a new wallet.
      // Depending on your use case you may want or want not his behavir.
      await this.web3Modal.clearCachedProvider();
      this.provider = null;
    }
  }
  
  async createOrganization(orgID, payableWallet, orgName, tokenAddress) {

    this.provider = await this.web3Modal.connect(); // set provider
    console.log(this.provider)
    this.web3js = new Web3(this.provider); // create web3 instance
    console.log(this.web3js)
    this.accounts = await this.web3js.eth.getAccounts(); 
    console.log(this.accounts)
    this.uDonate = new this.web3js.eth.Contract(uDonate_abi, uDonate_address);
    console.log(this.uDonate)
    // Estou aqui. Esta parte está dizendo que  createOrganization não é uma função
    // Precisa ver se tem sintaxe incompativel no abis.js que fornece o nome do método...
    // ou falta alguma coisa pra poder usar
    const create = await this.uDonate
      .methods.createOrganization(orgID, payableWallet, orgName, tokenAddress)
      .send({ from: this.accounts[0] });

    return create;
  }
  // Ainda nao testado
  async getOrganization(orgID) {
    this.provider = await this.web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts(); 
    
    this.uDonate = new this.web3js.eth.Contract(uDonate_abi, uDonate_address);
    
    const org = await this.uDonate.methods.getOrganization(orgID).call({ from: this.accounts[0] });
    
    const organization = org;
    const walletAddress = organization[1];
    const balence = await this.web3js.eth.getBalance(walletAddress);

    const orgWithBalence = {
      id: organization[0],
      payableWallet: organization[1],
      paused: organization[2],
      ended: organization[3],
      causesIDs: organization[4],
      balence: balence,
    }
    
    return orgWithBalence;
  }
}