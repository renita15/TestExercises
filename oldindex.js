import { Selector, t } from "testcafe";

fixture(`Getting Started`).page(
  // declare the fixture
  `https:///www.propelleraero.com/`
); // specify the start page

test("Test", async (t) => {
  await t
    //maximise the brower window

    .maximizeWindow()

    //click on the Blog link
    .click("#menu-item-38")
    .click("[data-filter='.aeropoints']")
    .click("[data-filter='all']");

  const blogCount = await Selector(".posts-wrap .post-bg").count;

  //function countBlogs(){
  //counts and displays the total number of blogs on the site
  console.log("Total number of blogCount/s are " + blogCount);

  var maxCount = 0;
  var title = "";

  for (let i = 0; i < blogCount; i++) {
    const blog = Selector(".posts-wrap .post-bg").nth(i);

    await t.click(blog);
    const wordsInBlog = wordCount(await Selector(".entry-content").textContent);
    console.log(wordsInBlog);

    const blogTitle = await Selector(".entry-title").textContent;
    console.log(blogTitle);

    if (wordsInBlog > maxCount) {
      maxCount = wordsInBlog;
      title = blogTitle;
    }

    await t
      //return to the Blog page https://www.propelleraero.com/blog/ afer accessing a blog as the blogs needs to be reloaded
      .click("#menu-item-38")
      .click("[data-filter='.aeropoints']")
      .click("[data-filter='all']");
  }

  console.log("Blog with highest number of words: " + maxCount);
  console.log("Blog Title with highest number of words: " + title);
});

//word count
function wordCount(words) {
  words = words.replace(/(^\s*)|(\s*$)/gi, "");
  words = words.replace(/[ ]{2,}/gi, " ");
  words = words.replace(/\n /, "\n");
  return words.split(" ").length;
}
