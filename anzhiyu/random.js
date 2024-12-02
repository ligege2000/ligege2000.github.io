var posts=["2024/12/02/这是一篇新的博文/","2024/12/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };