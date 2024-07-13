// javascript for details.html

const id=new URLSearchParams(window.location.search).get('id');
const container=document.querySelector('.details');
const deleteButton=document.querySelector('.button');

const renderDetails=async ()=>{
    const res= await fetch(`http://localhost:3000/posts/`+ id);
    const post= await res.json();

    container.innerHTML=`
      <h1>${post.title}</h1>
      <p>${post.body}</p>
    `;
};

deleteButton.addEventListener('click',async ()=>{
    const res=await fetch('http://localhost:3000/posts/'+id,{
        method:'Delete'
    });
    window.location.replace('index.html');
});

window.addEventListener('DOMContentLoaded',()=>renderDetails());