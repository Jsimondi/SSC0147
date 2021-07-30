import { Injectable } from '@angular/core';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Subject, } from 'rxjs';
import { _address, _abi } from '../abis.js'

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  web3js: any;
  provider: any;
  accounts: any;
  contract: any;
  web3Modal

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();
  private newOrganization = new Subject<any>();
  newOrganization$ = this.newOrganization.asObservable();

  organization = { 
    id: 42,
    wallet: '0x9F887c41362d8f190B1288937961d09f0D20Fcc6',
    ens: 'metamask',
    tokenAdress: '0xa71aE4F58bcdf47e61c29F50Ba00F341D9CFAAdf'
  }

  constructor() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "INFURA_ID" // required 
          // infuraId: "bf7607c6bbb44da3ae4fb688cdb76ff0" // required
        }
      }
    };

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
      this.provider = await this.web3Modal.connect();
    } catch(e) {
      console.log("Conexão falhou.", e);
      return;
    }
    this.web3js = new Web3(this.provider);
    this.accounts = await this.web3js.eth.getAccounts(); 
    this.accountStatusSource.next(this.accounts)
  }

  async disconnectAccount() {

    if(this.provider?.close) {
      await this.provider.close();
  
      await this.web3Modal.clearCachedProvider();
      this.provider = null;
    }
  }
  
  async createOrganization(orgID, payableWallet, orgName, tokenAddress) { // criar contrato

    this.provider = await this.web3Modal.connect();

    this.web3js = new Web3(this.provider); 

    this.accounts = await this.web3js.eth.getAccounts(); 

    this.contract = new this.web3js.eth.Contract(_abi, _address);
    const create = await this.contract
      .methods.createOrganization(orgID, payableWallet, orgName, tokenAddress)
      .send({ from: this.accounts[0] });

    return create;
  }
  
  async getOrganization(orgID) { // buscar contrato
    this.provider = await this.web3Modal.connect(); 

    this.web3js = new Web3(this.provider);
    
    this.accounts = await this.web3js.eth.getAccounts(); 

    this.contract = new this.web3js.eth.Contract(_abi, _address);

    const org = await this.contract.methods.getOrganization(orgID).call({ from: this.accounts[0] });
    
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

  async send(id, amount, tip) {
    this.provider = await this.web3Modal.connect(); 

    this.web3js = new Web3(this.provider); 

    this.accounts = await this.web3js.eth.getAccounts(); 

    this.contract = new this.web3js.eth.Contract(_abi, _address);

    const updatedAmt = amount * 1e18;

    const donate = await this.contract.methods.donateETH(id, tip).send({ from: this.accounts[0], value: updatedAmt })

    return donate;
  }
}