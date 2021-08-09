import {
  Marketplace,
  OrderCreated,
  OrderSuccessful,
  OrderCancelled,
  ChangedPublicationFee,
  ChangedOwnerCutPerMillion
} from "../generated/Marketplace/Marketplace"

import {
  updateNFTOrderProperties,
  cancelActiveOrder
} from './nft'

import * as status from './status'
import { buildCountFromOrder } from './count'
import { Order, NFTData, Account } from "../generated/schema"

export function handleOrderCreated(event: OrderCreated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  
  let nftId = event.params.nftAddress.toHexString() + '-' + event.params.assetId.toString()
  let nft = NFTData.load(nftId)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (nft != null) {
    let orderId = event.params.id.toHex()

    let order = new Order(orderId)
    order.status = status.OPEN
    order.nft = nftId
    order.nftAddress = event.params.nftAddress
    order.tokenId = event.params.assetId
    order.txHash = event.transaction.hash
    order.owner = event.params.seller
    order.price = event.params.priceInWei
    order.expiresAt = event.params.expiresAt
    order.blockNumber = event.block.number
    order.createdAt = event.block.timestamp
    order.updatedAt = event.block.timestamp

    order.save()

    cancelActiveOrder(nft!, event.block.timestamp)

    nft.updatedAt = event.block.timestamp
    nft = updateNFTOrderProperties(nft!, order)
    nft.save()

    let count = buildCountFromOrder(order)
    count.save()
  }
}

export function handleOrderSuccessful(event: OrderSuccessful): void {

  let nftId = event.params.nftAddress.toHexString() + '-' + event.params.assetId.toString()
  let orderId = event.params.id.toHex()

  let nft = NFTData.load(nftId)
  let order = Order.load(orderId)

  if (nft != null && order != null) {
    order.status = status.SOLD
    order.buyer = event.params.buyer
    order.price = event.params.totalPrice
    order.blockNumber = event.block.number
    order.updatedAt = event.block.timestamp
    order.save()

    nft.owner = event.params.buyer.toHex()
    nft.updatedAt = event.block.timestamp
    nft = updateNFTOrderProperties(nft!, order!)
    nft.save()
  }
}

export function handleOrderCancelled(event: OrderCancelled): void {

  let nftId = event.params.nftAddress.toHexString() + '-' + event.params.assetId.toString()
  let orderId = event.params.id.toHex()

  let nft = NFTData.load(nftId)
  let order = Order.load(orderId)

  if (nft != null && order != null) {
    order.status = status.CANCELLED
    order.blockNumber = event.block.number
    order.updatedAt = event.block.timestamp
    order.save()

    nft.updatedAt = event.block.timestamp
    nft = updateNFTOrderProperties(nft!, order!)
    nft.save()
  }
}

export function handleChangedPublicationFee(
  event: ChangedPublicationFee
): void {}

export function handleChangedOwnerCutPerMillion(
  event: ChangedOwnerCutPerMillion
): void {}
