const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postSection = document.getElementById("posts-section")
for (let i = 0; i < posts.length; i++) {
    let newPost = `
    <div class= "post-heading">
        <img class="user-icon" src="${posts[i].avatar}">
        <div>
            <div> <span class = "id-name">${posts[i].name}</span></div>
            <span class = "location">${posts[i].location}</span>
        </div>
    </div>
    <div class="post-img">
        <img class="image" src="${posts[i].post}">
    </div>
    <div class="post-interaction">
        <img class="interaction likes" src="images/icon-heart.png">
        <img class="interaction" src="images/icon-comment.png">
        <img class="interaction" src="images/icon-dm.png">
    </div>
    <p class="likes-cnt">${posts[i].likes} likes</p>
    <p class="caption"> <span class="username">${posts[i].username}</span> ${posts[i].comment} </p>
    <div class="space"></div>  
    `
    postSection.innerHTML += newPost;  
}

