var searchInput = document.querySelector(".search-input");
var rightNav = document.querySelector(".right-nav");
var menu = document.querySelector(".phone-menu-toggle");
var leftMenu = document.querySelector(".left-menu");
var close = document.querySelector(".close");
var archivesList = document.querySelector(".archives-main");

const createDocs = (function () {
  for (let i = 0; i < 10; i++) {
    let block = document.createElement("div");
    block.classList.add("block");
    if (i % 2 === 0) {
      block.innerHTML = `<i class="fas fa-folder fa-2x"></i>
  
        <div>
          <h1>Folder</h1>
          <h2>
            Visible to only me · 1 doc and 0 folders
          </h2>
        </div>`;
    } else {
      block.innerHTML = `<i class="fas fa-file fa-2x"></i>
  
        <div>
          <h1>Archive</h1>
          <h2>
            Folder - You viewed 1 day ago - Edited 3 days ago
          </h2>
        </div>`;
    }

    archivesList.appendChild(block);
  }
})();

searchInput.addEventListener("focus", () => {
  searchInput.classList.toggle("search-active");
  rightNav.style.width = "30%";
});

searchInput.addEventListener("focusout", () => {
  searchInput.classList.toggle("search-active");
    if (window.screen.width === 1980){
  rightNav.style.width = "23%";}
  else{
    rightNav.style.width = "26%";
  }
});

menu.addEventListener("click", () => {
  leftMenu.classList.toggle("show");
});

close.addEventListener("click", () => {
  leftMenu.classList.toggle("show");
});