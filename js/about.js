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
    school: "Suzuran - Suzuran Boys High School",
    level: "High School",
    address: "3-17-1 Kurobane Town, Toaru City, Gunma Prefecture, Japan",
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
