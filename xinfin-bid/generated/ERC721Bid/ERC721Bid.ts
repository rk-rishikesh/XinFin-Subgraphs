// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BidCreated extends ethereum.Event {
  get params(): BidCreated__Params {
    return new BidCreated__Params(this);
  }
}

export class BidCreated__Params {
  _event: BidCreated;

  constructor(event: BidCreated) {
    this._event = event;
  }

  get _id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _bidder(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _expiresAt(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class BidAccepted extends ethereum.Event {
  get params(): BidAccepted__Params {
    return new BidAccepted__Params(this);
  }
}

export class BidAccepted__Params {
  _event: BidAccepted;

  constructor(event: BidAccepted) {
    this._event = event;
  }

  get _id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _bidder(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _seller(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get _price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _fee(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class BidCancelled extends ethereum.Event {
  get params(): BidCancelled__Params {
    return new BidCancelled__Params(this);
  }
}

export class BidCancelled__Params {
  _event: BidCancelled;

  constructor(event: BidCancelled) {
    this._event = event;
  }

  get _id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _bidder(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class ChangedOwnerCutPerMillion extends ethereum.Event {
  get params(): ChangedOwnerCutPerMillion__Params {
    return new ChangedOwnerCutPerMillion__Params(this);
  }
}

export class ChangedOwnerCutPerMillion__Params {
  _event: ChangedOwnerCutPerMillion;

  constructor(event: ChangedOwnerCutPerMillion) {
    this._event = event;
  }

  get _ownerCutPerMillion(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ERC721Bid__getBidByBidderResult {
  value0: BigInt;
  value1: Bytes;
  value2: Address;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: Bytes,
    value2: Address,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class ERC721Bid__getBidByTokenResult {
  value0: Bytes;
  value1: Address;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: Bytes, value1: Address, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class ERC721Bid extends ethereum.SmartContract {
  static bind(address: Address): ERC721Bid {
    return new ERC721Bid("ERC721Bid", address);
  }

  bidIdByTokenAndBidder(
    param0: Address,
    param1: BigInt,
    param2: Address
  ): Bytes {
    let result = super.call(
      "bidIdByTokenAndBidder",
      "bidIdByTokenAndBidder(address,uint256,address):(bytes32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
        ethereum.Value.fromAddress(param2)
      ]
    );

    return result[0].toBytes();
  }

  try_bidIdByTokenAndBidder(
    param0: Address,
    param1: BigInt,
    param2: Address
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "bidIdByTokenAndBidder",
      "bidIdByTokenAndBidder(address,uint256,address):(bytes32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
        ethereum.Value.fromAddress(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  bidCounterByToken(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "bidCounterByToken",
      "bidCounterByToken(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_bidCounterByToken(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "bidCounterByToken",
      "bidCounterByToken(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ONE_MILLION(): BigInt {
    let result = super.call("ONE_MILLION", "ONE_MILLION():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ONE_MILLION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ONE_MILLION", "ONE_MILLION():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ownerCutPerMillion(): BigInt {
    let result = super.call(
      "ownerCutPerMillion",
      "ownerCutPerMillion():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_ownerCutPerMillion(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ownerCutPerMillion",
      "ownerCutPerMillion():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_BID_DURATION(): BigInt {
    let result = super.call(
      "MAX_BID_DURATION",
      "MAX_BID_DURATION():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_BID_DURATION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_BID_DURATION",
      "MAX_BID_DURATION():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bidIndexByBidId(param0: Bytes): BigInt {
    let result = super.call(
      "bidIndexByBidId",
      "bidIndexByBidId(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBigInt();
  }

  try_bidIndexByBidId(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "bidIndexByBidId",
      "bidIndexByBidId(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_BID_DURATION(): BigInt {
    let result = super.call(
      "MIN_BID_DURATION",
      "MIN_BID_DURATION():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MIN_BID_DURATION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MIN_BID_DURATION",
      "MIN_BID_DURATION():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getBidByBidder(
    _tokenAddress: Address,
    _tokenId: BigInt,
    _bidder: Address
  ): ERC721Bid__getBidByBidderResult {
    let result = super.call(
      "getBidByBidder",
      "getBidByBidder(address,uint256,address):(uint256,bytes32,address,uint256,uint256)",
      [
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_bidder)
      ]
    );

    return new ERC721Bid__getBidByBidderResult(
      result[0].toBigInt(),
      result[1].toBytes(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_getBidByBidder(
    _tokenAddress: Address,
    _tokenId: BigInt,
    _bidder: Address
  ): ethereum.CallResult<ERC721Bid__getBidByBidderResult> {
    let result = super.tryCall(
      "getBidByBidder",
      "getBidByBidder(address,uint256,address):(uint256,bytes32,address,uint256,uint256)",
      [
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_bidder)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ERC721Bid__getBidByBidderResult(
        value[0].toBigInt(),
        value[1].toBytes(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  getBidByToken(
    _tokenAddress: Address,
    _tokenId: BigInt,
    _index: BigInt
  ): ERC721Bid__getBidByTokenResult {
    let result = super.call(
      "getBidByToken",
      "getBidByToken(address,uint256,uint256):(bytes32,address,uint256,uint256)",
      [
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );

    return new ERC721Bid__getBidByTokenResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getBidByToken(
    _tokenAddress: Address,
    _tokenId: BigInt,
    _index: BigInt
  ): ethereum.CallResult<ERC721Bid__getBidByTokenResult> {
    let result = super.tryCall(
      "getBidByToken",
      "getBidByToken(address,uint256,uint256):(bytes32,address,uint256,uint256)",
      [
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ERC721Bid__getBidByTokenResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ownerCutPerMillion(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class PlaceBidCall extends ethereum.Call {
  get inputs(): PlaceBidCall__Inputs {
    return new PlaceBidCall__Inputs(this);
  }

  get outputs(): PlaceBidCall__Outputs {
    return new PlaceBidCall__Outputs(this);
  }
}

export class PlaceBidCall__Inputs {
  _call: PlaceBidCall;

  constructor(call: PlaceBidCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _duration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class PlaceBidCall__Outputs {
  _call: PlaceBidCall;

  constructor(call: PlaceBidCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }
}

export class RemoveExpiredBidsCall extends ethereum.Call {
  get inputs(): RemoveExpiredBidsCall__Inputs {
    return new RemoveExpiredBidsCall__Inputs(this);
  }

  get outputs(): RemoveExpiredBidsCall__Outputs {
    return new RemoveExpiredBidsCall__Outputs(this);
  }
}

export class RemoveExpiredBidsCall__Inputs {
  _call: RemoveExpiredBidsCall;

  constructor(call: RemoveExpiredBidsCall) {
    this._call = call;
  }

  get _tokenAddresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _bidders(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }
}

export class RemoveExpiredBidsCall__Outputs {
  _call: RemoveExpiredBidsCall;

  constructor(call: RemoveExpiredBidsCall) {
    this._call = call;
  }
}

export class CancelBidCall extends ethereum.Call {
  get inputs(): CancelBidCall__Inputs {
    return new CancelBidCall__Inputs(this);
  }

  get outputs(): CancelBidCall__Outputs {
    return new CancelBidCall__Outputs(this);
  }
}

export class CancelBidCall__Inputs {
  _call: CancelBidCall;

  constructor(call: CancelBidCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelBidCall__Outputs {
  _call: CancelBidCall;

  constructor(call: CancelBidCall) {
    this._call = call;
  }
}

export class SetOwnerCutPerMillionCall extends ethereum.Call {
  get inputs(): SetOwnerCutPerMillionCall__Inputs {
    return new SetOwnerCutPerMillionCall__Inputs(this);
  }

  get outputs(): SetOwnerCutPerMillionCall__Outputs {
    return new SetOwnerCutPerMillionCall__Outputs(this);
  }
}

export class SetOwnerCutPerMillionCall__Inputs {
  _call: SetOwnerCutPerMillionCall;

  constructor(call: SetOwnerCutPerMillionCall) {
    this._call = call;
  }

  get _ownerCutPerMillion(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetOwnerCutPerMillionCall__Outputs {
  _call: SetOwnerCutPerMillionCall;

  constructor(call: SetOwnerCutPerMillionCall) {
    this._call = call;
  }
}