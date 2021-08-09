import { BigInt, Address } from '@graphprotocol/graph-ts'
import {
  ERC721Bid,
  BidCreated,
  BidAccepted,
  BidCancelled,
  ChangedOwnerCutPerMillion
} from "../generated/ERC721Bid/ERC721Bid"
import { Bid, NFTData } from "../generated/schema"
import * as status from './status'

export function handleBidCreated(event: BidCreated): void {

  let nftId = event.params._tokenAddress.toHexString() + '-' + event.params._tokenId.toString()
  let nft = NFTData.load(nftId)

  let id = event.params._tokenAddress.toHexString() + '-' + event.params._tokenId.toString() + '-' + event.params._bidder.toHexString()

  let bid = new Bid(id)

  if (nft != null) {
    bid.status = status.OPEN
    bid.nftAddress = event.params._tokenAddress
    bid.bidder = event.params._bidder
    bid.price = event.params._price
    bid.tokenId = event.params._tokenId
    bid.blockchainId = event.params._id.toHexString()
    bid.blockNumber = event.block.number
    bid.expiresAt = event.params._expiresAt.times(BigInt.fromI32(1000))
    bid.createdAt = event.block.timestamp
    bid.updatedAt = event.block.timestamp

    bid.nft = nftId
    bid.seller = Address.fromString(nft.owner)

    bid.save()

    nft.updatedAt = event.block.timestamp
    nft.save()
  }
}

export function handleBidAccepted(event: BidAccepted): void {

  let id = event.params._tokenAddress.toHexString() + '-' + event.params._tokenId.toString() + '-' + event.params._bidder.toHexString()

  let bid = Bid.load(id)
  if (bid == null) {
    return
  }
  let nft = NFTData.load(bid.nft)
  if (nft == null) {
    return
  }

  bid.status = status.SOLD
  bid.seller = event.params._seller
  bid.blockNumber = event.block.number
  bid.updatedAt = event.block.timestamp
  bid.save()

  nft.updatedAt = event.block.timestamp
  nft.save()
}

export function handleBidCancelled(event: BidCancelled): void {


  let id = event.params._tokenAddress.toHexString() + '-' + event.params._tokenId.toString() + '-' + event.params._bidder.toHexString()

  let bid = Bid.load(id)
  if (bid == null) {
    return
  }
  let nft = NFTData.load(bid.nft)
  if (nft == null) {
    return
  }

  bid.status = status.CANCELLED
  bid.blockNumber = event.block.number
  bid.updatedAt = event.block.timestamp
  bid.save()

  nft.updatedAt = event.block.timestamp
  nft.save()
}

export function handleChangedOwnerCutPerMillion(
  event: ChangedOwnerCutPerMillion
): void {}
