//list skills
const skills = ["HTML", "CSS", "JS", "ReactJS", "NodeJS", "C/C++", "SQL"];

const skillslist = document.getElementById("skills-list");

skillslist.innerHTML = skills
  .map((item) => `<span class="skill-tag">${item}</span>`)
  .join("");

//list projects
const projects = [
  {
    title: "Quản lý cửa hàng PROVIS",
    description:
      "Xây dựng trang web quản lý cửa hàng bán quần áo PROVIS bằng HTML, CSS, JS, PHP",
  },
  {
    title: "Quản lý cửa hàng bán quần áo",
    description:
      "Xây dựng ứng dụng quản lý cửa hàng bán quần áo bằng Windows Forms C#",
  },
  {
    title: "Máy bắt ma",
    description: "Xây dựng ứng dụng máy bắt ma bằng Python",
  },
];

const projectsList = document.getElementById("projects-list");

projectsList.innerHTML = projects
  .map(
    (item) =>
      `
    <div class="card mt-3" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-dark">Go somewhere</a>
        </div>
    </div>`
  )
  .join("");
