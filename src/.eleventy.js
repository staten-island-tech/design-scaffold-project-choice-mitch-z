module.exports = function(eleventyconfig){
    eleventyconfig.addPassthroughCopy("src/style");
    eleventyconfig.addPassthroughCopy("src/Blog.html")
    eleventyconfig.addPassthroughCopy("src/Blog.js");
    eleventyconfig.addPassthroughCopy("src/media")
    return{
        dir:{
            input: "src",
            output: "public",
        },
    };
};