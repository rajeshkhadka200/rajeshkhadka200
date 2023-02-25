const axios = require("axios");
const fs = require("fs");

async function getLatestPost() {
  const apiUrl = process.env.API_URL;
  const response = await axios.get(apiUrl);
  const post = response.data;
  const markdown = `# Latest Blog Post\n\n[${post.title}](${post.url})\n\n${post.description}`;
  fs.writeFileSync("README.md", markdown);
}

getLatestPost();
