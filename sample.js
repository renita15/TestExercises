import { Selector, t } from "testcafe";

const newsLink = Selector(".storylink");

//what is the URL link
fixture("counting the selectors").page("https://news.ycombinator.com/");

test("Test 1", async (t) => {
  if (newsLink.exists) {
    for (let i = 0; i < (await newsLink.count); i++) {
      console.log(await newsLink.nth(i).textContent);
    }
    console.log(await newsLink.count);
  }
});
