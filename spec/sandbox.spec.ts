import { Selector } from "testcafe";
import { assert } from "chai";

fixture`Sandbox`.page`https://www.google.com`;

test("should be on Sandbox", async (t) => {
  const title = await Selector("title").innerText;

  assert.strictEqual(title, "Google");
});
