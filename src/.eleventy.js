module.exports = function(eleventyconfig){
    eleventyconfig.addPassthroughCopy("src/style");
    eleventyconfig.addPassthroughCopy("src/index.html")
    eleventyconfig.addPassthroughCopy("src/Blog.js");
    eleventyconfig.addPassthroughCopy("src/media")
    eleventyconfig.addPassthroughCopy("src/Review1.html");
    return{
        dir:{
            input: "src",
            output: "public",
        },
    };
};