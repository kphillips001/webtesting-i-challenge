const { repair, succeed, fail, get } = require("./enhancer.js");
// test away!

const item = {
  name: "item",
  durability: 0,
  enhancement: 0,
};

const item2 = {
  name: "item2",
  durability: 60,
  enhancement: 10,
};

const item3 = {
  name: "item3",
  durability: 60,
  enhancement: 16,
};

const item4 = {
  name: "item4",
  durability: 100,
  enhancement: 19,
};

const item5 = {
  name: "item5",
  durability: 0,
  enhancement: 0,
};

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("should accept an item object and restore durability to 100", () => {
      repair(item);
      expect(item.durability).toBe(100);
    });
  });

  describe("succeed()", () => {
    it("should increase enhancement by one if it is less than 20", () => {
      succeed(item);
      expect(item.enhancement).toBe(1);
    });
  });

  describe("fail()", () => {
    it("should subtract 5 from durability after checking that enhancement is less than 15", () => {
      fail(item2);
      expect(item2.durability).toBe(55);
    });

    it("should subtract 10 from durability if enhancement is between 15 and 17", () => {
      fail(item3);
      expect(item3.durability).toBe(50);
    });

    it("should subtract 1 from enhancement and 10 from durability if enhancement is greater than 17", () => {
      fail(item4);
      expect(item4.enhancement).toBe(18);
      expect(item4.durability).toBe(90);
    });
  });

  describe("get()", () => {
    it("should return item name and [enhancement level] if enhancement is greater than 0", () => {
      get(item2);
      expect(item2.name).toBe("item2[10]");
    });

    it("should return item name untouched if enhancement is equal to 0", () => {
      get(item5);
      expect(item5.name).toBe("item5");
    });
  });
});