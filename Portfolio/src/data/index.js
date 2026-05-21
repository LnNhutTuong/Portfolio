export const PERSONAL_INFO = {
  name: "Lâm Nguyễn Nhựt Tường",
  title: "Front-end Developer / UI-UX Designer ",
  aboutShort: "Lorem",
  aboutLong: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  email: "lnnhuttuong@gmail.com",
  phone: "0333814020",
  address: "Long Xuyên, An Giang, Việt Nam",
  github: "https://github.com/LnNhutTuong",
  linkedin: "https://linkedin.com/in/your-username",
  facebook: "https://www.facebook.com/profile.php?id=61570601574809",
  ins: "https://www.instagram.com/bi._wasi/",
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
    title: "Website Cửa hàng XimenT-Store",
    category: "Fullstack",
    shortDesc:
      "Hệ thống thương mại điện tử tích hợp website bán hàng (Storefront) hiện đại và trang quản trị (Admin Panel) chuyên nghiệp.",
    longDesc:
      "Hệ thống thương mại điện tử hoàn chỉnh dành cho cửa hàng bán lẻ XimenT. Phân hệ khách hàng (Storefront) cung cấp trải nghiệm mua sắm mượt mà với bộ lọc sản phẩm thông minh, giỏ hàng Livewire thời gian thực, quản lý đơn hàng cá nhân và tự động hủy đơn. Phân hệ quản trị (Admin Dashboard) mạnh mẽ với biểu đồ Chart.js thống kê doanh số trực quan, hệ thống quản lý danh mục, sản phẩm biến thể động (Multi-variant tracking), quản lý thương hiệu và quy trình xử lý đơn hàng tối ưu.",
    tags: [
      "Laravel 12",
      "Livewire 3",
      "Tailwind CSS",
      "MySQL",
      "Chart.js",
      "Vite",
    ],
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    githubUrl: "https://github.com/LnNhutTuong/Website-XimenT-Store",
    features: [
      "Giao diện Responsive chuẩn chỉ, tối ưu hóa trải nghiệm di động & hiệu năng SEO vượt trội.",
      "Bộ lọc sản phẩm đa tiêu chí thông minh (theo danh mục, thương hiệu, thuộc tính kích cỡ) và thanh tìm kiếm tối ưu.",
      "Giỏ hàng tương tác thời gian thực sử dụng Livewire 3 và quy trình thanh toán (Checkout) bảo mật.",
      "Hệ thống quản lý biến thể sản phẩm động (quản lý kích thước, giá cả, số lượng tồn kho theo từng variant).",
      "Dashboard quản trị trực quan tích hợp biểu đồ thống kê doanh số (Chart.js) và bộ quản lý CRUD toàn diện.",
      "Cơ chế theo dõi trạng thái đơn hàng thời gian thực và hỗ trợ hủy đơn trực tiếp dành cho khách hàng.",
    ],
  },
  {
    id: 2,
    title: "Ứng dụng Quản lý bán hàng XimenT",
    category: "Desktop Application",
    shortDesc:
      "Phần mềm quản lý bán hàng offline tại cửa hàng với kiến trúc 3 lớp (3-Tier) tối ưu và giao diện Guna.UI2 WinForms hiện đại.",
    longDesc:
      "Giải pháp phần mềm quản lý vận hành nội bộ (ERP thu nhỏ) cho cửa hàng XimenT. Được xây dựng trên nền tảng .NET và SQL Server với kiến trúc 3-Layer (GUI - BUS - DAO) chuẩn chỉnh. Ứng dụng tích hợp bộ thư viện giao diện Guna.UI2 cao cấp mang lại giao diện người dùng mượt mà, chuyên nghiệp. Hệ thống hỗ trợ đầy đủ các nghiệp vụ thực tế như quản lý và bảo mật thông tin nhân viên bằng BCrypt, quản lý khách hàng có ràng buộc hóa đơn chặt chẽ, kiểm soát kho hàng, tạo hóa đơn bán hàng trực tiếp tại quầy và xuất báo cáo/in hóa đơn qua Microsoft ReportViewer.",
    tags: [
      "C# (.NET)",
      "WinForms",
      "SQL Server",
      "Guna.UI2",
      "ReportViewer",
      "3-Layer Architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=600&q=80",
    githubUrl: "https://github.com/LnNhutTuong/Manager-XimenT",
    features: [
      "Kiến trúc 3 lớp (Presentation - Business Logic - Data Access) phân tách rõ ràng, giúp dễ dàng bảo trì và mở rộng.",
      "Thiết kế giao diện Guna.UI2 cao cấp, mượt mà và trực quan, nâng cao tối đa trải nghiệm người dùng.",
      "Hệ thống xác thực và phân quyền nhân viên an toàn tuyệt đối với cơ chế mã hóa mật khẩu BCrypt.",
      "Quản lý chặt chẽ danh mục khách hàng, nhân viên, có cơ chế kiểm tra ràng buộc khóa ngoại ngăn xóa dữ liệu lỗi.",
      "Hỗ trợ nhân viên thu ngân lập hóa đơn và thanh toán trực tiếp tại quầy nhanh chóng, chính xác.",
      "Xuất hóa đơn, biên lai bán hàng và báo cáo thống kê doanh số trực quan thông qua Microsoft ReportViewer.",
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
