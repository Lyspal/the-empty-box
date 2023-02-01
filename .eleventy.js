module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPassthroughCopy("src/images/");
  eleventyConfig.addPassthroughCopy("src/assets/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
