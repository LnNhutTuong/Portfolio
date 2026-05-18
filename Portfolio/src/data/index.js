export const PERSONAL_INFO = {
  name: "Lâm Nguyễn Nhựt Tường",
  title: "Front-end Developer / UI-UX Designer ",
  aboutShort: "Lorem",
  aboutLong: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  email: "lnnhuttuong@gmail.com",
  phone: "0325729105",
  address: "Long Xuyên, An Giang, Việt Nam",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  facebook: "https://facebook.com/your-username",
  ins: "https://instagram.com/your-username",
};

export const SKILLS = [
  {
    category: "Languages",
    skills: [
      {
        id: 1,
        name: "HTML5 / CSS3",
      },
      {
        id: 2,
        name: "JavaScript (ES6+)",
      },
      {
        id: 3,
        name: "Python",
      },
      {
        id: 4,
        name: "SQL",
      },
      {
        id: 5,
        name: "PHP",
      },
    ],
  },
  {
    category: "Framework & Libraries",
    skills: [
      {
        id: 1,
        name: "Tailwind CSS",
      },
      {
        id: 2,
        name: "ReactJS",
      },
      {
        id: 3,
        name: "Bootstrap",
      },
      {
        id: 4,
        name: "Laravel",
      },
      {
        id: 5,
        name: "Scss",
      },
      {
        id: 6,
        name: "Axios",
      },
      {
        id: 7,
        name: "React Router",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        id: 1,
        name: "MySQL",
      },
      {
        id: 2,
        name: "SQL Server",
      },
      {
        id: 3,
        name: "Eloquent ORM",
      },
      {
        id: 4,
        name: "Migration",
      },
      {
        id: 5,
        name: "CRUD",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        id: 1,
        name: "Git",
      },
      {
        id: 2,
        name: "VS Code",
      },
      {
        id: 3,
        name: "Postman",
      },
      {
        id: 4,
        name: "MySQL Workbench",
      },
      {
        id: 5,
        name: "SSMS",
      },
      {
        id: 6,
        name: "phpMyAdmin",
      },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Ứng dụng E-Commerce TrendyShop",
    category: "Frontend",
    shortDesc:
      "Trang thương mại điện tử mua sắm thời trang cao cấp với giỏ hàng và thanh toán trực tuyến.",
    longDesc:
      "TrendyShop là một dự án đầy tâm huyết giúp người dùng trải nghiệm mua sắm mượt mà nhất. Hệ thống bao gồm tính năng lọc sản phẩm theo danh mục, sắp xếp giá, thanh toán giả lập, quản lý giỏ hàng real-time bằng React Context, và giao diện tương thích 100% mọi màn hình di động.",
    tags: ["React", "Tailwind CSS", "Context API", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    liveUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/your-username/trendyshop",
    features: [
      "Bộ lọc sản phẩm đa năng nâng cao",
      "Giỏ hàng hoạt động mượt mà lưu trạng thái vào LocalStorage",
      "Giao diện chuẩn Responsive & Tối ưu hóa điểm SEO",
      "Trang Checkout chi tiết hóa đơn thanh toán",
    ],
  },
  {
    id: 2,
    title: "Dashboard Quản Lý Rạp Chiếu Phim",
    category: "Fullstack",
    shortDesc:
      "Hệ thống quản trị lịch chiếu phim, ghế ngồi và doanh thu thời gian thực dành cho Admin.",
    longDesc:
      "Hệ thống quản trị mạnh mẽ giúp nhân viên rạp quản lý sơ đồ ghế, thêm bớt phim chiếu và cập nhật giá vé động. Tích hợp biểu đồ thống kê trực quan hiển thị doanh số bán vé hàng tuần/tháng bằng Chart.js.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
    liveUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/your-username/cinema-dashboard",
    features: [
      "Đặt vé & Giữ ghế trực tuyến đồng bộ hóa thời gian thực",
      "Dashboard thống kê doanh thu biểu đồ cột & tròn chuyên nghiệp",
      "Phân quyền người dùng (Admin, Nhân viên, Khách hàng)",
      "Gửi email xác nhận đặt vé tự động",
    ],
  },
  {
    id: 3,
    title: "Ứng Dụng Xem Thời Tiết Toàn Cầu",
    category: "Frontend",
    shortDesc:
      "Dự báo thời tiết 7 ngày tới dựa theo vị trí GPS hoặc tìm kiếm thành phố.",
    longDesc:
      "Dự án tương tác với API thời tiết OpenWeatherMap thế giới để trả về các thông số môi trường chuẩn xác như độ ẩm, chỉ số UV, tốc độ gió và hiển thị giao diện động thay đổi theo trạng thái thời tiết (mưa, nắng, tuyết).",
    tags: ["JavaScript", "OpenWeather API", "Tailwind CSS", "Vite"],
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=600&q=80",
    liveUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/your-username/weather-app",
    features: [
      "Tự động phát hiện vị trí của người dùng bằng GPS",
      "Biểu đồ dự báo nhiệt độ các mốc giờ trong ngày",
      "Tìm kiếm nhanh hơn 200,000 thành phố trên toàn cầu",
      "Đổi hình nền ứng dụng tương thích với thời tiết hiện tại",
    ],
  },
  {
    id: 4,
    title: "Thiết kế UI/UX Ứng Dụng TravelGo",
    category: "Design",
    shortDesc:
      "Bản vẽ thiết kế ứng dụng di động hỗ trợ đặt tour du lịch bụi giá rẻ.",
    longDesc:
      "Hồ sơ thiết kế hoàn chỉnh trên Figma từ nghiên cứu người dùng (User Research), vẽ sơ đồ luồng (Wireframe), thiết kế chi tiết (High-fidelity) đến tạo chuyển động tương tác trực quan cho hơn 15 màn hình ứng dụng.",
    tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    liveUrl: "https://your-figma-link.com",
    githubUrl: "#",
    features: [
      "Nghiên cứu thị trường sâu rộng & Xác định chân dung người dùng (Persona)",
      "Hệ thống màu sắc và Typography thống nhất (Design System)",
      "Nguyên mẫu tương tác cao (Interactive Prototype) bấm như app thật",
      "Tối ưu hóa các nút chạm (Touch target) chuẩn Apple HIG",
    ],
  },
];

export const EXPERIENCES = [
  {
    time: "2023 - Hiện tại",
    role: "Sinh viên",
    company: "Đại học An Giang ",
    desc: "Chuyên ngành Kỹ thuật phần mềm",
  },
];
