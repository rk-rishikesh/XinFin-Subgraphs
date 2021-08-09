import { BigInt } from "@graphprotocol/graph-ts"
import {
  NFT,
  NFTRegistered,
  Transfer,
  Approval,
  ApprovalForAll
} from "../generated/NFT/NFT"
import { NFTData } from "../generated/schema"
import { createAccount } from './wallet'
import {
  cancelActiveOrder,
  clearNFTOrderProperties
} from './nft'


export function handleNFTRegistered(event: NFTRegistered): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type

  let nftId = event.address.toHexString() + '-' + event.params._tokenId.toString()
  let nft = NFTData.load(nftId)

  // Entity fields can be set based on event parameters
  nft.owner = event.params._by.toHex()
  nft.tokenId = event.params._tokenId
  nft.nftAddress = event.address.toHexString()
  nft.createdAt = event.block.timestamp
  let contract = NFT.bind(event.address)
  nft.tokenURI = contract.tokenURI(nft.tokenId)
  // Entities can be written to the store with `.save()`
  nft.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.name(...)
  // - contract.getApproved(...)
  // - contract.totalSupply(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.exists(...)
  // - contract.tokenByIndex(...)
  // - contract.ownerOf(...)
  // - contract.balanceOf(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
  // - contract.tokenCounter(...)
  // - contract.isApprovedForAll(...)
  // - contract.addNFTMetadata(...)
}

export function handleTransfer(event: Transfer): void {
  if (event.params._tokenId.toString() == '') {
    return
  }

  let nftId = event.address.toHexString() + '-' + event.params._tokenId.toString()
  let nft = NFTData.load(nftId)

  nft.tokenId = event.params._tokenId
  nft.owner = event.params._to.toHex()
  nft.nftAddress = event.address.toHexString()
  nft.updatedAt = event.block.timestamp

  let contract = NFT.bind(event.address)
  nft.tokenURI = contract.tokenURI(nft.tokenId)


  if (isMint(event)) {
    nft.createdAt = event.block.timestamp

    nft.searchText = ''

    // let metric = buildCountFromNFT(nft)
    // metric.save()
  } else {
    let oldNFT = NFTData.load(nftId)
    if (cancelActiveOrder(oldNFT!, event.block.timestamp)) {
      nft = clearNFTOrderProperties(nft!)
    }
  }

  createAccount(event.params._to)

  nft.save()
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}
