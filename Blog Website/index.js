// javascript for index.html
const container=document.querySelector('.blogs');
const searchForm=document.querySelector('.search');

const renderPosts=async (term)=>{
    let uri='http://localhost:3000/posts?_sort=likes&_order=desc';
    if (term){
        uri+=`&q=${term}`;
    }

    const res=await fetch(uri);
    const posts=await res.json();

    let template=``;
    posts.forEach(post=>{
        template+=`
          <div class="post" style="padding: 16px;background: white;border-radius: 10px;margin: 20px 0">
            <h2 style="margin: 0">${post.title}</h2>
            <p style="margin-top: 0"><small>${post.likes} likes</small></p>
            <p style="margin-top: 0">${post.body.slice(0,200)}</p>
            <a href='details.html?id=${post.id}' style="color: #36cca2">read more...</a>
          </div>
        `;
    });

    container.innerHTML=template;
};

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    renderPosts(searchForm.term.value.trim());
});

window.addEventListener('DOMContentLoaded',()=>renderPosts());