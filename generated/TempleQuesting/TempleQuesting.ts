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

export class FiefReward extends ethereum.Event {
  get params(): FiefReward__Params {
    return new FiefReward__Params(this);
  }
}

export class FiefReward__Params {
  _event: FiefReward;

  constructor(event: FiefReward) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get squireId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class FinishedQuest extends ethereum.Event {
  get params(): FinishedQuest__Params {
    return new FinishedQuest__Params(this);
  }
}

export class FinishedQuest__Params {
  _event: FinishedQuest;

  constructor(event: FinishedQuest) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get squireId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SquireLevelUp extends ethereum.Event {
  get params(): SquireLevelUp__Params {
    return new SquireLevelUp__Params(this);
  }
}

export class SquireLevelUp__Params {
  _event: SquireLevelUp;

  constructor(event: SquireLevelUp) {
    this._event = event;
  }

  get squireId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get skillType(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class StartedQuest extends ethereum.Event {
  get params(): StartedQuest__Params {
    return new StartedQuest__Params(this);
  }
}

export class StartedQuest__Params {
  _event: StartedQuest;

  constructor(event: StartedQuest) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get squireId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get finishedAt(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TempleQuesting__dropRatesResult {
  value0: i32;
  value1: i32;
  value2: i32;

  constructor(value0: i32, value1: i32, value2: i32) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    return map;
  }
}

export class TempleQuesting extends ethereum.SmartContract {
  static bind(address: Address): TempleQuesting {
    return new TempleQuesting("TempleQuesting", address);
  }

  FIEF_CONTRACT(): Address {
    let result = super.call("FIEF_CONTRACT", "FIEF_CONTRACT():(address)", []);

    return result[0].toAddress();
  }

  try_FIEF_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "FIEF_CONTRACT",
      "FIEF_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  SQUIRE_CONTRACT(): Address {
    let result = super.call(
      "SQUIRE_CONTRACT",
      "SQUIRE_CONTRACT():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_SQUIRE_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "SQUIRE_CONTRACT",
      "SQUIRE_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  canWorship(): boolean {
    let result = super.call("canWorship", "canWorship():(bool)", []);

    return result[0].toBoolean();
  }

  try_canWorship(): ethereum.CallResult<boolean> {
    let result = super.tryCall("canWorship", "canWorship():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkIfSquireCanLeave(squireId: BigInt): boolean {
    let result = super.call(
      "checkIfSquireCanLeave",
      "checkIfSquireCanLeave(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(squireId)]
    );

    return result[0].toBoolean();
  }

  try_checkIfSquireCanLeave(squireId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkIfSquireCanLeave",
      "checkIfSquireCanLeave(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(squireId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkSquires(owner: Address): Array<BigInt> {
    let result = super.call(
      "checkSquires",
      "checkSquires(address):(uint256[])",
      [ethereum.Value.fromAddress(owner)]
    );

    return result[0].toBigIntArray();
  }

  try_checkSquires(owner: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "checkSquires",
      "checkSquires(address):(uint256[])",
      [ethereum.Value.fromAddress(owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  dropRates(param0: i32): TempleQuesting__dropRatesResult {
    let result = super.call(
      "dropRates",
      "dropRates(uint8):(uint16,uint16,uint16)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))]
    );

    return new TempleQuesting__dropRatesResult(
      result[0].toI32(),
      result[1].toI32(),
      result[2].toI32()
    );
  }

  try_dropRates(
    param0: i32
  ): ethereum.CallResult<TempleQuesting__dropRatesResult> {
    let result = super.tryCall(
      "dropRates",
      "dropRates(uint8):(uint16,uint16,uint16)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TempleQuesting__dropRatesResult(
        value[0].toI32(),
        value[1].toI32(),
        value[2].toI32()
      )
    );
  }

  getDay(): BigInt {
    let result = super.call("getDay", "getDay():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getDay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getDay", "getDay():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRewardForLevel(level: BigInt): i32 {
    let result = super.call(
      "getRewardForLevel",
      "getRewardForLevel(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(level)]
    );

    return result[0].toI32();
  }

  try_getRewardForLevel(level: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getRewardForLevel",
      "getRewardForLevel(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(level)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getSkillForID(id: BigInt): i32 {
    let result = super.call("getSkillForID", "getSkillForID(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toI32();
  }

  try_getSkillForID(id: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getSkillForID",
      "getSkillForID(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getSkillForType(tokenId: BigInt): i32 {
    let result = super.call(
      "getSkillForType",
      "getSkillForType(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toI32();
  }

  try_getSkillForType(tokenId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getSkillForType",
      "getSkillForType(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  random(number: BigInt, seed: BigInt): BigInt {
    let result = super.call("random", "random(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(number),
      ethereum.Value.fromUnsignedBigInt(seed)
    ]);

    return result[0].toBigInt();
  }

  try_random(number: BigInt, seed: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("random", "random(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(number),
      ethereum.Value.fromUnsignedBigInt(seed)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  resetTime(): BigInt {
    let result = super.call("resetTime", "resetTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_resetTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("resetTime", "resetTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  squires(): Address {
    let result = super.call("squires", "squires():(address)", []);

    return result[0].toAddress();
  }

  try_squires(): ethereum.CallResult<Address> {
    let result = super.tryCall("squires", "squires():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  squiresQuestingTemple(account: Address): Array<BigInt> {
    let result = super.call(
      "squiresQuestingTemple",
      "squiresQuestingTemple(address):(uint256[])",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigIntArray();
  }

  try_squiresQuestingTemple(
    account: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "squiresQuestingTemple",
      "squiresQuestingTemple(address):(uint256[])",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  tokenSeedId(param0: BigInt): BigInt {
    let result = super.call("tokenSeedId", "tokenSeedId(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_tokenSeedId(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenSeedId",
      "tokenSeedId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenTimer(param0: BigInt): BigInt {
    let result = super.call("tokenTimer", "tokenTimer(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_tokenTimer(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokenTimer", "tokenTimer(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class Areturn1ChangeCall extends ethereum.Call {
  get inputs(): Areturn1ChangeCall__Inputs {
    return new Areturn1ChangeCall__Inputs(this);
  }

  get outputs(): Areturn1ChangeCall__Outputs {
    return new Areturn1ChangeCall__Outputs(this);
  }
}

export class Areturn1ChangeCall__Inputs {
  _call: Areturn1ChangeCall;

  constructor(call: Areturn1ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Areturn1ChangeCall__Outputs {
  _call: Areturn1ChangeCall;

  constructor(call: Areturn1ChangeCall) {
    this._call = call;
  }
}

export class AupgradeChangeCall extends ethereum.Call {
  get inputs(): AupgradeChangeCall__Inputs {
    return new AupgradeChangeCall__Inputs(this);
  }

  get outputs(): AupgradeChangeCall__Outputs {
    return new AupgradeChangeCall__Outputs(this);
  }
}

export class AupgradeChangeCall__Inputs {
  _call: AupgradeChangeCall;

  constructor(call: AupgradeChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AupgradeChangeCall__Outputs {
  _call: AupgradeChangeCall;

  constructor(call: AupgradeChangeCall) {
    this._call = call;
  }
}

export class ChangeResetPeriodCall extends ethereum.Call {
  get inputs(): ChangeResetPeriodCall__Inputs {
    return new ChangeResetPeriodCall__Inputs(this);
  }

  get outputs(): ChangeResetPeriodCall__Outputs {
    return new ChangeResetPeriodCall__Outputs(this);
  }
}

export class ChangeResetPeriodCall__Inputs {
  _call: ChangeResetPeriodCall;

  constructor(call: ChangeResetPeriodCall) {
    this._call = call;
  }

  get _time(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeResetPeriodCall__Outputs {
  _call: ChangeResetPeriodCall;

  constructor(call: ChangeResetPeriodCall) {
    this._call = call;
  }
}

export class FinishTempleQuestCall extends ethereum.Call {
  get inputs(): FinishTempleQuestCall__Inputs {
    return new FinishTempleQuestCall__Inputs(this);
  }

  get outputs(): FinishTempleQuestCall__Outputs {
    return new FinishTempleQuestCall__Outputs(this);
  }
}

export class FinishTempleQuestCall__Inputs {
  _call: FinishTempleQuestCall;

  constructor(call: FinishTempleQuestCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get seeds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get signature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get restart(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class FinishTempleQuestCall__Outputs {
  _call: FinishTempleQuestCall;

  constructor(call: FinishTempleQuestCall) {
    this._call = call;
  }
}

export class InitCall extends ethereum.Call {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }

  get _fief(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _squire(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class QuestTempleCall extends ethereum.Call {
  get inputs(): QuestTempleCall__Inputs {
    return new QuestTempleCall__Inputs(this);
  }

  get outputs(): QuestTempleCall__Outputs {
    return new QuestTempleCall__Outputs(this);
  }
}

export class QuestTempleCall__Inputs {
  _call: QuestTempleCall;

  constructor(call: QuestTempleCall) {
    this._call = call;
  }

  get squireIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class QuestTempleCall__Outputs {
  _call: QuestTempleCall;

  constructor(call: QuestTempleCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetTokenAddressCall extends ethereum.Call {
  get inputs(): SetTokenAddressCall__Inputs {
    return new SetTokenAddressCall__Inputs(this);
  }

  get outputs(): SetTokenAddressCall__Outputs {
    return new SetTokenAddressCall__Outputs(this);
  }
}

export class SetTokenAddressCall__Inputs {
  _call: SetTokenAddressCall;

  constructor(call: SetTokenAddressCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTokenAddressCall__Outputs {
  _call: SetTokenAddressCall;

  constructor(call: SetTokenAddressCall) {
    this._call = call;
  }
}

export class ToggleQuestingCall extends ethereum.Call {
  get inputs(): ToggleQuestingCall__Inputs {
    return new ToggleQuestingCall__Inputs(this);
  }

  get outputs(): ToggleQuestingCall__Outputs {
    return new ToggleQuestingCall__Outputs(this);
  }
}

export class ToggleQuestingCall__Inputs {
  _call: ToggleQuestingCall;

  constructor(call: ToggleQuestingCall) {
    this._call = call;
  }
}

export class ToggleQuestingCall__Outputs {
  _call: ToggleQuestingCall;

  constructor(call: ToggleQuestingCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
