import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Squires,
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Transfer
} from "../generated/Squires/Squires";

import {
  ForestQuesting,
  FinishedQuest,
  StartedQuest,
  FiefReward,
  SquireLevelUp
} from "../generated/ForestQuesting/ForestQuesting";

import {
  CavernQuesting
} from "../generated/CavernQuesting/CavernQuesting";

import {
  ItemData
} from "../generated/CavernQuesting/ItemData";

import {
  MountainQuesting,
  ItemReward
} from "../generated/MountainQuesting/MountainQuesting";


import { Squire, Reward, Transaction, SkillUpgrade, ItemRewardData } from "../generated/schema"

export function handleFinishedQuest(event: FinishedQuest): void {
  let squire = Squire.load(event.params.squireId.toString());

  if(!squire) {
    squire = new Squire(event.params.squireId.toString());
  }


  let address = Address.fromString("0x0919246fbF29fC7A0c077f4966cc0f1323373a91")

  let contract = Squires.bind(address);

  let tokenId = event.params.squireId;
  
  let faith = contract.faithByTokenId(tokenId);
  let luck = contract.luckByTokenId(tokenId);
  let strength = contract.strengthByTokenId(tokenId);
  let type = contract.squireTypeByTokenId(tokenId);
  let wisdom = contract.wisdomByTokenId(tokenId);
  let genesis = contract.genesisByTokenId(tokenId);
  
  squire.faith = faith;
  squire.luck = luck;
  squire.strength = strength;
  squire.type = type;
  squire.wisdom = wisdom;
  squire.genesis = genesis;
  squire.lastupgrade = "";
  squire.gotitem = false;

  squire.lastitemtype = "";
  squire.lastitemid = 0;
  squire.lastitemclass = "";
  squire.lastitemlevel = 0;
  squire.lastitemname = "";

  squire.owner = event.params._owner.toHexString();
  squire.questing = false;
  squire.finish = new BigInt(0);

  squire.save();

  let tx = Transaction.load(event.transaction.hash.toHexString());

  if(!tx)
    tx = new Transaction(event.transaction.hash.toHexString());

    tx.save();

}

export function handleStartedQuest(event: StartedQuest): void {
  let squire = Squire.load(event.params.squireId.toString());

  if(!squire) {
    squire = new Squire(event.params.squireId.toString());
  }

  let address = Address.fromString("0x0919246fbF29fC7A0c077f4966cc0f1323373a91")

  let contract = Squires.bind(address);

  let tokenId = event.params.squireId;
  
  let faith = contract.faithByTokenId(tokenId);
  let luck = contract.luckByTokenId(tokenId);
  let strength = contract.strengthByTokenId(tokenId);
  let type = contract.squireTypeByTokenId(tokenId);
  let wisdom = contract.wisdomByTokenId(tokenId);
  let genesis = contract.genesisByTokenId(tokenId);
  
  squire.faith = faith;
  squire.luck = luck;
  squire.strength = strength;
  squire.type = type;
  squire.wisdom = wisdom;
  squire.genesis = genesis;


  squire.owner = event.params._owner.toHexString();
  squire.questing = true;
  squire.finish = event.params.finishedAt;

  squire.save();
  
  let tx = Transaction.load(event.transaction.hash.toHexString());

  if(!tx)
    tx = new Transaction(event.transaction.hash.toHexString());

  tx.save();
}

export function handleFiefReward(event: FiefReward): void {
  let squire = Squire.load(event.params.squireId.toString());

  if(!squire)
    return;

  squire.lastfief = event.params.amount;

  squire.save();

  let reward = Reward.load(event.transaction.hash.toHexString() + " " + event.params.squireId.toString());

  if(!reward)
    reward = new Reward(event.transaction.hash.toHexString() + " " + event.params.squireId.toString());

  reward.squireid = event.params.squireId;
  reward.timestamp = event.params.timestamp;
  reward.fief = event.params.amount;
  reward.wallet = event.params._owner.toHexString();

  reward.save();

}

export function handleSquireLevelUp(event: SquireLevelUp): void {
  let squire = Squire.load(event.params.squireId.toString());

  if(!squire)
    return;

  let upgradeType = "";

  let squireAddress = Address.fromString("0x0919246fbF29fC7A0c077f4966cc0f1323373a91")

  let contract = Squires.bind(squireAddress);

  let tokenId = event.params.squireId;

  let levelUp = SkillUpgrade.load(event.transaction.hash.toHexString());

  if(!levelUp)
    levelUp = new SkillUpgrade(event.transaction.hash.toHexString())

  levelUp.squireid = tokenId;

  if(event.params.skillType == 0) {
    upgradeType = "Faith";
    let faith = contract.faithByTokenId(tokenId);
    levelUp.upgraded = upgradeType;
    levelUp.newvalue = faith.toI32();
  }

  if(event.params.skillType == 1) {
    upgradeType = "Luck";
    let luck = contract.luckByTokenId(tokenId);
    levelUp.upgraded = upgradeType;
    levelUp.newvalue = luck.toI32();

  }

  if(event.params.skillType == 2) {
    upgradeType = "Strength";
    let strength = contract.strengthByTokenId(tokenId);
    levelUp.upgraded = upgradeType;
    levelUp.newvalue = strength.toI32();
  }

  if(event.params.skillType == 3) {
    upgradeType = "Wisdom";
    let wisdom = contract.wisdomByTokenId(tokenId);
    levelUp.upgraded = upgradeType;
    levelUp.newvalue = wisdom.toI32();
  }

  squire.lastupgrade = upgradeType;

  squire.save();
  levelUp.save();

}

export function handleItemReward(event: ItemReward): void {
  let squire = Squire.load(event.params.squireId.toString());

  let itemDataAddress = Address.fromString("0x949D81Ebec2856e451b54a6203AF3F74C1045E22")

  let itemDataContract = ItemData.bind(itemDataAddress);

  let itemData = itemDataContract.getItemByTypeAndId(event.params.rewardType, event.params.rewardId);

  let itemType = itemData.itemType === 0 ? "Ring" : itemData.itemType === 1 ? "Potion" : "Trinket";

  let itemClass = itemData.itemClass === 0 ? "Northern" : itemData.itemClass === 1 ? "Dreadmade" : itemData.itemClass === 2 ? "Hessian" : itemData.itemClass === 3 ? "Soulforged" :  "Ancient";

  let level = itemData.level;

  let itemId = itemData.itemId;

  let itemName = itemData.name;

  let image = "https://knightsoftheether.com/squires/images/" + itemType.toLowerCase() + "s/" + itemName.replaceAll(" ", "%20") + ".png";

  if(!squire)
    squire = new Squire(event.params.squireId.toString());

  squire.gotitem = true;

  squire.lastitemtype = itemType;
  squire.lastitemid = itemId;
  squire.lastitemclass = itemClass;
  squire.lastitemlevel = level;
  squire.lastitemname = itemName;
  squire.lastitemimage = image;

  squire.save();


  let rewardD = ItemRewardData.load(event.transaction.hash.toHexString() + " " + event.params.squireId.toString());

  if(!rewardD)
    rewardD = new ItemRewardData(event.transaction.hash.toHexString() + " " + event.params.squireId.toString());

  rewardD.squireId = event.params.squireId;

  if(Address.fromString("0x011b9d5d2165c0b5a30397b7bd89b67f396a0cf6").equals(event.address)) {
    rewardD.quest = "forest";
  } 
  
  if(Address.fromString("0x182d830c07a540e382b39a1d6801090cfffc1b00").equals(event.address)) {
    rewardD.quest = "cavern";
  }

  if(Address.fromString("0xd56282634f122af9446313a7a56fcecb84104608").equals(event.address)) {
    rewardD.quest = "mountain";
  }

  rewardD.hash = event.transaction.hash.toHexString();
  rewardD.itemid = itemId;
  rewardD.itemclass = itemClass;
  rewardD.itemlevel = level;
  rewardD.itemname = itemName;
  rewardD.timestamp = event.block.timestamp;
  rewardD.itemtype = itemType;

  rewardD.save();
  
}

export function handleTransfer(event: Transfer): void {
  let squire = Squire.load(event.params.tokenId.toString());

  if(!squire) {
    squire = new Squire(event.params.tokenId.toString());
  }

  let contract = Squires.bind(event.address);

  let tokenId = event.params.tokenId;

  let faith = contract.faithByTokenId(tokenId);
  let luck = contract.luckByTokenId(tokenId);
  let strength = contract.strengthByTokenId(tokenId);
  let type = contract.squireTypeByTokenId(tokenId);
  let wisdom = contract.wisdomByTokenId(tokenId);
  let genesis = contract.genesisByTokenId(tokenId);
  
  squire.faith = faith;
  squire.luck = luck;
  squire.strength = strength;
  squire.type = type;
  squire.wisdom = wisdom;
  squire.genesis = genesis;

  let q = false;

  if(Address.fromString("0x011b9d5d2165c0b5a30397b7bd89b67f396a0cf6").equals(event.params.to)) {
    squire.questing = true;
    squire.owner = event.params.from.toHexString();
    squire.questtype = "forest";
    q = true;
  } 
  
  if(Address.fromString("0x182d830c07a540e382b39a1d6801090cfffc1b00").equals(event.params.to)) {
    squire.questing = true;
    squire.owner = event.params.from.toHexString();
    squire.questtype = "cavern";
    q = true;
  }

  if(Address.fromString("0xd56282634f122af9446313a7a56fcecb84104608").equals(event.params.to)) {
    squire.questing = true;
    squire.owner = event.params.from.toHexString();
    squire.questtype = "mountain";
    q = true;
  }

  if(!q) {
    squire.questing = false;
    squire.owner = event.params.to.toHexString();
  }

  var tf = "";
  var image = "";

  if (type.toI32() == 1 && genesis.toI32() === 0) {
    tf = "Strength";
    image = "https://knightsoftheether.com/squires/images/strength.png";

    squire.typename = tf;
    squire.image = image;
  }
  if (type.toI32() == 2 && genesis.toI32() === 0) {
      tf = "Wisdom";
      image = "https://knightsoftheether.com/squires/images/wisdom.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 3 && genesis.toI32() === 0) {
      tf = "Luck";
      image = "https://knightsoftheether.com/squires/images/luck.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 4 && genesis.toI32() === 0) {
      tf = "Faith";
      image = "https://knightsoftheether.com/squires/images/faith.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 1 && genesis.toI32() == 1) {
      tf = "Genesis Strength";
      image = "https://knightsoftheether.com/squires/images/strengthG.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 2 && genesis.toI32() == 1) {
      tf = "Genesis Wisdom";
      image = "https://knightsoftheether.com/squires/images/wisdomG.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 3 && genesis.toI32() == 1) {
      tf = "Genesis Luck";
      image = "https://knightsoftheether.com/squires/images/luckG.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 4 && genesis.toI32() == 1) {
      tf = "Genesis Faith";
      image = "https://knightsoftheether.com/squires/images/faithG.png";

      squire.typename = tf;
      squire.image = image;
}

  squire.save();
}
