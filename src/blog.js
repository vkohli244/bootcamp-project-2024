"use strict";
const blogs = [
    {
        title: "Khao Sok Trip",
        date: "Thursday November 4th",
        description: "This blog covers my trip to Khao Sok national park in Thailand",
        image: "../Images/KhaoSok1.jpg",
        imageAlt: "../Images/KhaoSok1.jpg",
        slug: "blogs/Khao-Sok-Trip.html",
    },
    {
        title: "Painting School Trip",
        date: "Thursday November 5th",
        description: "This blog covers my trip to Khao Sok national park in Thailand",
        image: "../Images/KhaoSok1.jpg",
        imageAlt: "../Images/KhaoSok1.jpg",
        slug: "blogs/Painting-School-Trip.html",
    }
];
const blogContainer = document.getElementById('blog-container');
function renderBlogs(containerId) {
    // Get the container by its ID
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }
    // Iterate over the blogs array
    blogs.forEach(blog => {
        // Create elements for each blog property
        const blogDiv = document.createElement("div");
        blogDiv.classList.add("blog");

        const title = document.createElement("h2");
        title.textContent = blog.title;
        blogDiv.appendChild(title);
        
        const link = document.createElement("a");
        link.textContent = "Click Here";
        link.href = blog.slug;
        link.classList.add("blog-link");
        blogDiv.appendChild(link)
        
        const date = document.createElement("p");
        date.classList.add("blog-date");
        date.textContent = blog.date;
        blogDiv.appendChild(date);

        const description = document.createElement("p");
        description.classList.add("blog-description");
        description.textContent = blog.description;
        blogDiv.appendChild(description);

        // Only add the image if it's provided
        if (blog.image && blog.image !== "None") {
            const image = document.createElement("img");
            image.src = blog.image;
            image.alt = blog.imageAlt;
            image.classList.add("blog-image");
            blogDiv.appendChild(image);
        }
        // Append the blogDiv to the container
        container.appendChild(blogDiv);
    });
}
// Call the renderBlogs function after the document loads
document.addEventListener("DOMContentLoaded", () => {
    renderBlogs("blog-container"); 
});
