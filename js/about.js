//education
const education = [
  {
    date: "2011 - 2016",
    school: "Hàm Nghi - Ham Nghi Primary School",
    level: "Primary School",
    address: "Hàm Nghi, p. Bình Khánh, Thành phố Long Xuyên, An Giang, Vietnam",
  },
  {
    date: "2016 - 2020",
    school: "Bình Khánh - Binh Khanh Secondary School",
    level: "Secondary School ",
    address:
      "96 Hàm Nghi, p. Bình Khánh, Thành phố Long Xuyên, An Giang, Vietnam",
  },
  {
    date: "2020 - 2023",
    school: "TTGDTX An Giang - AnGiang Continuing Education Center",
    level: "",
    address:
      "394 Lý Thái Tổ, Phường Mỹ Xuyên, Thành Phố Long Xuyên, Tỉnh An Giang",
  },
  {
    date: "2023 - ...",
    school: "Đại Học An Giang- An Giang Universtiy ",
    level: "Universtiy",
    address: "18 Ung Văn Khiêm, phường Long Xuyên, An Giang,  Việt Nam",
  },
];
const educationList = document.getElementById("education-list");
educationList.innerHTML = education
  .map(
    (item) =>
      `
    <div class="pt-2">
     <p class="date">${item.date}</p>
      <h5 class="name">${item.school}</h4>
      <p class="level">${item.level}</p>
      <p class="address">${item.address}</p>
    </div>
    <hr class="ps-5 pe-5">
    `
  )
  .join("");
//experience
const experience = [
  {
    date: "... - ...",
    name: "Roblox",
    position: "Player",
    address: "18 Ung Văn Khiêm, phường Long Xuyên, An Giang,  Việt Nam",
  },
];
const experienceList = document.getElementById("experience-list");
experienceList.innerHTML = experience
  .map(
    (item) =>
      `
    <div class="pt-2">
     <p class="date">${item.date}</p>
      <h5 class="name">${item.name}</h4>
      <p class="level">${item.position}</p>
      <p class="address">${item.address}</p>
    </div>
    <hr class="ps-5 pe-5">
    `
  )
  .join("");

//Languages
const languages = [
  {
    name: "C/Cpp/C#",
    icon: "./assets/icons/c.svg",
  },
  {
    name: "Java",
    icon: "./assets/icons/c.svg",
  },
  {
    name: "SQL",
    icon: "./assets/icons/sql.svg",
  },

  {
    name: "Python",
    icon: "./assets/icons/python.svg",
  },
  {
    name: "HTML",
    icon: "./assets/icons/html.svg",
  },
  {
    name: "CSS",
    icon: "./assets/icons/css.svg",
  },
  {
    name: "JavaScript",
    icon: "./assets/icons/js.svg",
  },
  {
    name: "PHP",
    icon: "./assets/icons/js.svg",
  },
];

const listLanguages = document.getElementById("languages");
listLanguages.innerHTML = languages
  .map(
    (item) =>
      `
 <li class="language-item col-auto d-flex justify-content-center">
    <img src="${item.icon}" alt="icon" />
    <p class="mb-0 mt-1 ms-0" id="name">${item.name}</p>
  </li>
`
  )
  .join("");

// Tools
const tools = [
  {
    name: "Git",
    icon: "./assets/icons/c.svg",
  },
  {
    name: "Github Action",
    icon: "./assets/icons/c.svg",
  },
  {
    name: "Docker",
    icon: "./assets/icons/sql.svg",
  },

  {
    name: "Postman",
    icon: "./assets/icons/python.svg",
  },
  {
    name: "Figma",
    icon: "./assets/icons/html.svg",
  },
  {
    name: "VS Code",
    icon: "./assets/icons/css.svg",
  },
];

const listTools = document.getElementById("tools");
listTools.innerHTML = tools
  .map(
    (item) =>
      `
 <li class="tool-item col-auto d-flex justify-content-center">
    <img src="${item.icon}" alt="icon" />
    <p class="mb-0 mt-1 ms-0" id="name">${item.name}</p>
  </li>
`
  )
  .join("");

// frameworks
const frameworks = [
  {
    name: "React",
    icon: "./assets/icons/c.svg",
  },
  {
    name: "NodeJS",
    icon: "./assets/icons/c.svg",
  },
];

const listFrameworks = document.getElementById("framework");
listFrameworks.innerHTML = frameworks
  .map(
    (item) =>
      `
    <li class="framework-item col-auto d-flex justify-content-center">
      <img src="${item.icon}" alt="icon" />
      <p class="mb-0 mt-1 ms-0" id="name">${item.name}</p>
    </li>
`
  )
  .join("");

// database
const database = [
  {
    name: "MSSQL",
    icon: "./assets/icons/c.svg",
  },
  {
    name: "MySql",
    icon: "./assets/icons/c.svg",
  },
];

const listDatabase = document.getElementById("database");
listDatabase.innerHTML = database
  .map(
    (item) =>
      `
    <li class="database-item col-auto d-flex justify-content-center">
      <img src="${item.icon}" alt="icon" />
      <p class="mb-0 mt-1 ms-0" id="name">${item.name}</p>
    </li>
`
  )
  .join("");
