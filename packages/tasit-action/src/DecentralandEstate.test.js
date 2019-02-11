import DecentralandEstate from "./DecentralandEstate";

import { local as localAddresses } from "../../tasit-contracts/decentraland/addresses";
const { EstateRegistry: ESTATE_ADDRESS } = localAddresses;

describe("TasitAction.DecentralandEstate", () => {
  it("should get the Estate owner", async function() {
    const estate = new DecentralandEstate(ESTATE_ADDRESS);
    let owner = await estate.owner();
    expect(owner).to.equal("0x0000000000000000000000000000000000000000");
  });
});