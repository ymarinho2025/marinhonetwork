// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona as imagens pelos seus IDs
  const pfpyuri    = document.getElementById("pfpyuri");
  const pfpamaral  = document.getElementById("pfpamaral");
  const postyuri   = document.getElementById("post1"); // <- id post1
  const postamaral = document.getElementById("post2"); // <- id post2

  // Protege contra elementos ausentes
  if (pfpyuri) {
    pfpyuri.addEventListener("click", function () {
      window.location.href = "../profile/profileyuri.html";
    });
  }

  if (postyuri) {
    postyuri.addEventListener("click", function () {
      window.location.href = "../posts/postsyuri.html";
    });
  }

  if (pfpamaral) {
    pfpamaral.addEventListener("click", function () {
      window.location.href = "../profile/profileamaral.html";
    });
  }

  if (postamaral) {
    postamaral.addEventListener("click", function () {
      window.location.href = "../posts/postsamaral.html";
    });
  }
});
