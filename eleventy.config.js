import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import Nunjucks from "nunjucks";

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/_includes")
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
};

export const config = {
  dir: {
    input: "src",
    output: "docs"
  }
};