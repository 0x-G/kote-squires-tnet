// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Squire extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("faith", Value.fromBigInt(BigInt.zero()));
    this.set("luck", Value.fromBigInt(BigInt.zero()));
    this.set("strength", Value.fromBigInt(BigInt.zero()));
    this.set("type", Value.fromBigInt(BigInt.zero()));
    this.set("wisdom", Value.fromBigInt(BigInt.zero()));
    this.set("genesis", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
    this.set("questing", Value.fromBoolean(false));
    this.set("questtype", Value.fromString(""));
    this.set("finish", Value.fromBigInt(BigInt.zero()));
    this.set("lastfief", Value.fromBigInt(BigInt.zero()));
    this.set("lastupgrade", Value.fromString(""));
    this.set("lastitemtype", Value.fromString(""));
    this.set("lastitemid", Value.fromI32(0));
    this.set("lastitemname", Value.fromString(""));
    this.set("lastitemlevel", Value.fromI32(0));
    this.set("lastitemclass", Value.fromString(""));
    this.set("lastitemrarity", Value.fromString(""));
    this.set("gotitem", Value.fromBoolean(false));
    this.set("image", Value.fromString(""));
    this.set("typename", Value.fromString(""));
    this.set("lastitemimage", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Squire entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Squire must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Squire", id.toString(), this);
    }
  }

  static load(id: string): Squire | null {
    return changetype<Squire | null>(store.get("Squire", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get faith(): BigInt {
    let value = this.get("faith");
    return value!.toBigInt();
  }

  set faith(value: BigInt) {
    this.set("faith", Value.fromBigInt(value));
  }

  get luck(): BigInt {
    let value = this.get("luck");
    return value!.toBigInt();
  }

  set luck(value: BigInt) {
    this.set("luck", Value.fromBigInt(value));
  }

  get strength(): BigInt {
    let value = this.get("strength");
    return value!.toBigInt();
  }

  set strength(value: BigInt) {
    this.set("strength", Value.fromBigInt(value));
  }

  get type(): BigInt {
    let value = this.get("type");
    return value!.toBigInt();
  }

  set type(value: BigInt) {
    this.set("type", Value.fromBigInt(value));
  }

  get wisdom(): BigInt {
    let value = this.get("wisdom");
    return value!.toBigInt();
  }

  set wisdom(value: BigInt) {
    this.set("wisdom", Value.fromBigInt(value));
  }

  get genesis(): BigInt {
    let value = this.get("genesis");
    return value!.toBigInt();
  }

  set genesis(value: BigInt) {
    this.set("genesis", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get questing(): boolean {
    let value = this.get("questing");
    return value!.toBoolean();
  }

  set questing(value: boolean) {
    this.set("questing", Value.fromBoolean(value));
  }

  get questtype(): string {
    let value = this.get("questtype");
    return value!.toString();
  }

  set questtype(value: string) {
    this.set("questtype", Value.fromString(value));
  }

  get finish(): BigInt {
    let value = this.get("finish");
    return value!.toBigInt();
  }

  set finish(value: BigInt) {
    this.set("finish", Value.fromBigInt(value));
  }

  get lastfief(): BigInt {
    let value = this.get("lastfief");
    return value!.toBigInt();
  }

  set lastfief(value: BigInt) {
    this.set("lastfief", Value.fromBigInt(value));
  }

  get lastupgrade(): string {
    let value = this.get("lastupgrade");
    return value!.toString();
  }

  set lastupgrade(value: string) {
    this.set("lastupgrade", Value.fromString(value));
  }

  get lastitemtype(): string {
    let value = this.get("lastitemtype");
    return value!.toString();
  }

  set lastitemtype(value: string) {
    this.set("lastitemtype", Value.fromString(value));
  }

  get lastitemid(): i32 {
    let value = this.get("lastitemid");
    return value!.toI32();
  }

  set lastitemid(value: i32) {
    this.set("lastitemid", Value.fromI32(value));
  }

  get lastitemname(): string {
    let value = this.get("lastitemname");
    return value!.toString();
  }

  set lastitemname(value: string) {
    this.set("lastitemname", Value.fromString(value));
  }

  get lastitemlevel(): i32 {
    let value = this.get("lastitemlevel");
    return value!.toI32();
  }

  set lastitemlevel(value: i32) {
    this.set("lastitemlevel", Value.fromI32(value));
  }

  get lastitemclass(): string {
    let value = this.get("lastitemclass");
    return value!.toString();
  }

  set lastitemclass(value: string) {
    this.set("lastitemclass", Value.fromString(value));
  }

  get lastitemrarity(): string {
    let value = this.get("lastitemrarity");
    return value!.toString();
  }

  set lastitemrarity(value: string) {
    this.set("lastitemrarity", Value.fromString(value));
  }

  get gotitem(): boolean {
    let value = this.get("gotitem");
    return value!.toBoolean();
  }

  set gotitem(value: boolean) {
    this.set("gotitem", Value.fromBoolean(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get typename(): string {
    let value = this.get("typename");
    return value!.toString();
  }

  set typename(value: string) {
    this.set("typename", Value.fromString(value));
  }

  get lastitemimage(): string {
    let value = this.get("lastitemimage");
    return value!.toString();
  }

  set lastitemimage(value: string) {
    this.set("lastitemimage", Value.fromString(value));
  }
}

export class Reward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fief", Value.fromBigInt(BigInt.zero()));
    this.set("squireid", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("wallet", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Reward entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Reward must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Reward", id.toString(), this);
    }
  }

  static load(id: string): Reward | null {
    return changetype<Reward | null>(store.get("Reward", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fief(): BigInt {
    let value = this.get("fief");
    return value!.toBigInt();
  }

  set fief(value: BigInt) {
    this.set("fief", Value.fromBigInt(value));
  }

  get squireid(): BigInt {
    let value = this.get("squireid");
    return value!.toBigInt();
  }

  set squireid(value: BigInt) {
    this.set("squireid", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get wallet(): string {
    let value = this.get("wallet");
    return value!.toString();
  }

  set wallet(value: string) {
    this.set("wallet", Value.fromString(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class SkillUpgrade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("upgraded", Value.fromString(""));
    this.set("newvalue", Value.fromI32(0));
    this.set("squireid", Value.fromBigInt(BigInt.zero()));
    this.set("hash", Value.fromString(""));
    this.set("double", Value.fromBoolean(false));
    this.set("doubleupgraded", Value.fromString(""));
    this.set("doublenewvalue", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SkillUpgrade entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SkillUpgrade must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SkillUpgrade", id.toString(), this);
    }
  }

  static load(id: string): SkillUpgrade | null {
    return changetype<SkillUpgrade | null>(store.get("SkillUpgrade", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get upgraded(): string {
    let value = this.get("upgraded");
    return value!.toString();
  }

  set upgraded(value: string) {
    this.set("upgraded", Value.fromString(value));
  }

  get newvalue(): i32 {
    let value = this.get("newvalue");
    return value!.toI32();
  }

  set newvalue(value: i32) {
    this.set("newvalue", Value.fromI32(value));
  }

  get squireid(): BigInt {
    let value = this.get("squireid");
    return value!.toBigInt();
  }

  set squireid(value: BigInt) {
    this.set("squireid", Value.fromBigInt(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value!.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get double(): boolean {
    let value = this.get("double");
    return value!.toBoolean();
  }

  set double(value: boolean) {
    this.set("double", Value.fromBoolean(value));
  }

  get doubleupgraded(): string {
    let value = this.get("doubleupgraded");
    return value!.toString();
  }

  set doubleupgraded(value: string) {
    this.set("doubleupgraded", Value.fromString(value));
  }

  get doublenewvalue(): i32 {
    let value = this.get("doublenewvalue");
    return value!.toI32();
  }

  set doublenewvalue(value: i32) {
    this.set("doublenewvalue", Value.fromI32(value));
  }
}

export class ItemRewardData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("itemtype", Value.fromString(""));
    this.set("itemid", Value.fromI32(0));
    this.set("itemname", Value.fromString(""));
    this.set("itemlevel", Value.fromI32(0));
    this.set("itemrarity", Value.fromString(""));
    this.set("itemclass", Value.fromString(""));
    this.set("hash", Value.fromString(""));
    this.set("timestamp", Value.fromI32(0));
    this.set("squireId", Value.fromBigInt(BigInt.zero()));
    this.set("quest", Value.fromString(""));
    this.set("gotitem", Value.fromBoolean(false));
    this.set("image", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ItemRewardData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ItemRewardData must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ItemRewardData", id.toString(), this);
    }
  }

  static load(id: string): ItemRewardData | null {
    return changetype<ItemRewardData | null>(store.get("ItemRewardData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get itemtype(): string {
    let value = this.get("itemtype");
    return value!.toString();
  }

  set itemtype(value: string) {
    this.set("itemtype", Value.fromString(value));
  }

  get itemid(): i32 {
    let value = this.get("itemid");
    return value!.toI32();
  }

  set itemid(value: i32) {
    this.set("itemid", Value.fromI32(value));
  }

  get itemname(): string {
    let value = this.get("itemname");
    return value!.toString();
  }

  set itemname(value: string) {
    this.set("itemname", Value.fromString(value));
  }

  get itemlevel(): i32 {
    let value = this.get("itemlevel");
    return value!.toI32();
  }

  set itemlevel(value: i32) {
    this.set("itemlevel", Value.fromI32(value));
  }

  get itemrarity(): string {
    let value = this.get("itemrarity");
    return value!.toString();
  }

  set itemrarity(value: string) {
    this.set("itemrarity", Value.fromString(value));
  }

  get itemclass(): string {
    let value = this.get("itemclass");
    return value!.toString();
  }

  set itemclass(value: string) {
    this.set("itemclass", Value.fromString(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value!.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value!.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get squireId(): BigInt {
    let value = this.get("squireId");
    return value!.toBigInt();
  }

  set squireId(value: BigInt) {
    this.set("squireId", Value.fromBigInt(value));
  }

  get quest(): string {
    let value = this.get("quest");
    return value!.toString();
  }

  set quest(value: string) {
    this.set("quest", Value.fromString(value));
  }

  get gotitem(): boolean {
    let value = this.get("gotitem");
    return value!.toBoolean();
  }

  set gotitem(value: boolean) {
    this.set("gotitem", Value.fromBoolean(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }
}

export class InventoryItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("itemid", Value.fromBigInt(BigInt.zero()));
    this.set("itemamount", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
    this.set("itemtype", Value.fromString(""));
    this.set("itemclass", Value.fromString(""));
    this.set("itemrarity", Value.fromString(""));
    this.set("itemimage", Value.fromString(""));
    this.set("itemlevel", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save InventoryItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type InventoryItem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("InventoryItem", id.toString(), this);
    }
  }

  static load(id: string): InventoryItem | null {
    return changetype<InventoryItem | null>(store.get("InventoryItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get itemid(): BigInt {
    let value = this.get("itemid");
    return value!.toBigInt();
  }

  set itemid(value: BigInt) {
    this.set("itemid", Value.fromBigInt(value));
  }

  get itemamount(): BigInt {
    let value = this.get("itemamount");
    return value!.toBigInt();
  }

  set itemamount(value: BigInt) {
    this.set("itemamount", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get itemtype(): string {
    let value = this.get("itemtype");
    return value!.toString();
  }

  set itemtype(value: string) {
    this.set("itemtype", Value.fromString(value));
  }

  get itemclass(): string {
    let value = this.get("itemclass");
    return value!.toString();
  }

  set itemclass(value: string) {
    this.set("itemclass", Value.fromString(value));
  }

  get itemrarity(): string {
    let value = this.get("itemrarity");
    return value!.toString();
  }

  set itemrarity(value: string) {
    this.set("itemrarity", Value.fromString(value));
  }

  get itemimage(): string {
    let value = this.get("itemimage");
    return value!.toString();
  }

  set itemimage(value: string) {
    this.set("itemimage", Value.fromString(value));
  }

  get itemlevel(): i32 {
    let value = this.get("itemlevel");
    return value!.toI32();
  }

  set itemlevel(value: i32) {
    this.set("itemlevel", Value.fromI32(value));
  }
}
