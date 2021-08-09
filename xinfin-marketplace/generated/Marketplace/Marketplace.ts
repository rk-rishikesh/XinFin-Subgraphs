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

export class OrderCreated extends ethereum.Event {
  get params(): OrderCreated__Params {
    return new OrderCreated__Params(this);
  }
}

export class OrderCreated__Params {
  _event: OrderCreated;

  constructor(event: OrderCreated) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get assetId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get priceInWei(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get expiresAt(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class OrderSuccessful extends ethereum.Event {
  get params(): OrderSuccessful__Params {
    return new OrderSuccessful__Params(this);
  }
}

export class OrderSuccessful__Params {
  _event: OrderSuccessful;

  constructor(event: OrderSuccessful) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get assetId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get totalPrice(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class OrderCancelled extends ethereum.Event {
  get params(): OrderCancelled__Params {
    return new OrderCancelled__Params(this);
  }
}

export class OrderCancelled__Params {
  _event: OrderCancelled;

  constructor(event: OrderCancelled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get assetId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class ChangedPublicationFee extends ethereum.Event {
  get params(): ChangedPublicationFee__Params {
    return new ChangedPublicationFee__Params(this);
  }
}

export class ChangedPublicationFee__Params {
  _event: ChangedPublicationFee;

  constructor(event: ChangedPublicationFee) {
    this._event = event;
  }

  get publicationFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
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

  get ownerCutPerMillion(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Marketplace__orderByAssetIdResult {
  value0: Bytes;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Bytes,
    value1: Address,
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
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Marketplace extends ethereum.SmartContract {
  static bind(address: Address): Marketplace {
    return new Marketplace("Marketplace", address);
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

  publicationFeeInWei(): BigInt {
    let result = super.call(
      "publicationFeeInWei",
      "publicationFeeInWei():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_publicationFeeInWei(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "publicationFeeInWei",
      "publicationFeeInWei():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  orderByAssetId(
    param0: Address,
    param1: BigInt
  ): Marketplace__orderByAssetIdResult {
    let result = super.call(
      "orderByAssetId",
      "orderByAssetId(address,uint256):(bytes32,address,address,uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new Marketplace__orderByAssetIdResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_orderByAssetId(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Marketplace__orderByAssetIdResult> {
    let result = super.tryCall(
      "orderByAssetId",
      "orderByAssetId(address,uint256):(bytes32,address,address,uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Marketplace__orderByAssetIdResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  getSaleShareAmount(price: BigInt): BigInt {
    let result = super.call(
      "getSaleShareAmount",
      "getSaleShareAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(price)]
    );

    return result[0].toBigInt();
  }

  try_getSaleShareAmount(price: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSaleShareAmount",
      "getSaleShareAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(price)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

export class SetPublicationFeeCall extends ethereum.Call {
  get inputs(): SetPublicationFeeCall__Inputs {
    return new SetPublicationFeeCall__Inputs(this);
  }

  get outputs(): SetPublicationFeeCall__Outputs {
    return new SetPublicationFeeCall__Outputs(this);
  }
}

export class SetPublicationFeeCall__Inputs {
  _call: SetPublicationFeeCall;

  constructor(call: SetPublicationFeeCall) {
    this._call = call;
  }

  get _publicationFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPublicationFeeCall__Outputs {
  _call: SetPublicationFeeCall;

  constructor(call: SetPublicationFeeCall) {
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

export class CreateOrderCall extends ethereum.Call {
  get inputs(): CreateOrderCall__Inputs {
    return new CreateOrderCall__Inputs(this);
  }

  get outputs(): CreateOrderCall__Outputs {
    return new CreateOrderCall__Outputs(this);
  }
}

export class CreateOrderCall__Inputs {
  _call: CreateOrderCall;

  constructor(call: CreateOrderCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get assetId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get priceInWei(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get expiresAt(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateOrderCall__Outputs {
  _call: CreateOrderCall;

  constructor(call: CreateOrderCall) {
    this._call = call;
  }
}

export class CancelOrderCall extends ethereum.Call {
  get inputs(): CancelOrderCall__Inputs {
    return new CancelOrderCall__Inputs(this);
  }

  get outputs(): CancelOrderCall__Outputs {
    return new CancelOrderCall__Outputs(this);
  }
}

export class CancelOrderCall__Inputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get assetId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelOrderCall__Outputs {
  _call: CancelOrderCall;

  constructor(call: CancelOrderCall) {
    this._call = call;
  }
}

export class ExecuteOrderCall extends ethereum.Call {
  get inputs(): ExecuteOrderCall__Inputs {
    return new ExecuteOrderCall__Inputs(this);
  }

  get outputs(): ExecuteOrderCall__Outputs {
    return new ExecuteOrderCall__Outputs(this);
  }
}

export class ExecuteOrderCall__Inputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get assetId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ExecuteOrderCall__Outputs {
  _call: ExecuteOrderCall;

  constructor(call: ExecuteOrderCall) {
    this._call = call;
  }
}
