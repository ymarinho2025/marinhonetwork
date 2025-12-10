document.addEventListener("DOMContentLoaded", () => {
  
  // Marinho's HUB
  document.querySelectorAll(".js-to-marinhohub").forEach(el => {
    el.addEventListener("click", () => { location.href = "../home/me/"; });
  });

  // Perfis
  document.querySelectorAll(".js-profile-yuri").forEach(el => {
    el.addEventListener("click", () => { location.href = "./profile/profileyuri.html"; });
  });

  document.querySelectorAll(".js-profile-amaral").forEach(el => {
    el.addEventListener("click", () => { location.href = "./profile/profileamaral.html"; });
  });

  // Posts
  document.querySelectorAll(".js-post-yuri").forEach(el => {
    el.addEventListener("click", () => { location.href = "./posts/postsyuri.html"; });
  });

  document.querySelectorAll(".js-post-amaral").forEach(el => {
    el.addEventListener("click", () => { location.href = "./posts/postsamaral.html"; });
  });

  document.querySelectorAll(".js-post-troll").forEach(el => {
    el.addEventListener("click", () => { location.href = "./trolled/rickroll.html"; });
  });
});
