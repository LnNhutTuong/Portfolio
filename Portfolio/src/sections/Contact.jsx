import { Icons } from "../components/Icon";
import { PERSONAL_INFO } from "../data";
import { useState } from "react";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
const currentInfo = PERSONAL_INFO;

  //state save input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  //update state after input value
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_atf7q1b",
        "template_sjkyqhe",
        formData,
        "xy12v0HxBwVifHw6e"
    );

    toast.success("Gửi mail thành công");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    toast.error("Gửi mail thất bại");
    console.log(error);
  }
};

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-4rem)] flex items-center scroll-mt-16 py-20 border-t bg-slate-950 border-slate-900 text-slate-100 relative overflow-hidden"
    >
      <div className="absolute -bottom-24 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Liên Hệ & Trao Đổi
          </h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-white">Thông tin kết nối</h3>
            <p className="leading-relaxed text-slate-400 text-sm sm:text-base">
              Tôi luôn cởi mở để thảo luận về các cơ hội nghề nghiệp mới, các dự
              án freelance thú vị, hoặc đơn giản là cùng nhau trao đổi về giải
              pháp công nghệ.
            </p>

            <div className="space-y-4">
              <div
                className="p-4 rounded-xl border flex items-center space-x-4 cursor-pointer hover:scale-[1.01] transition-all duration-200 bg-slate-900/60 border-slate-800 hover:border-slate-700 group relative"
                title="Click để sao chép địa chỉ Email"
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
                  <Icons.Email />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-xs text-slate-500">
                    Địa chỉ Email của tôi
                  </span>
                  <span className="font-semibold text-sm text-slate-200 hover:underline truncate block">
                    {currentInfo.email}
                  </span>
                </div>

                <div className="text-slate-500 group-hover:text-indigo-400 transition-colors pr-2">
                    <Icons.Copy />
                </div>
              </div>

              <div className="p-4 rounded-xl border flex items-center space-x-4 bg-slate-900/60 border-slate-800">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Icons.Phone />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">
                    Số điện thoại / Zalo
                  </span>
                  <span className="font-semibold text-sm text-slate-200">
                    {currentInfo.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border bg-slate-900/30 border-slate-800 shadow-xl relative">
              <h4 className="text-xl font-bold mb-6 text-white">
                Gửi tin nhắn cho tôi
              </h4>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid  grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Họ và tên
                    </label>
                    <input
                      name = "name"
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all bg-slate-900 border-slate-800 text-white placeholder-slate-650 text-sm"
                      value = {formData.name}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Địa chỉ Email
                    </label>
                    <input
                      name = "email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all bg-slate-900 border-slate-800 text-white placeholder-slate-650 text-sm"
                      value = {formData.email}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Nội dung tin nhắn
                  </label>
                  <textarea
                    name = "message"
                    rows={4}
                    required
                    placeholder="Chào Minh, tôi có một dự án cần trao đổi..."
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all bg-slate-900 border-slate-800 text-white placeholder-slate-650 text-sm"
                    value = {formData.message}
                    onChange={handleOnChange}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-indigo-500 to-teal-600 text-white hover:from-indigo-400 hover:to-teal-500 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/10  active:scale-95`}
                >
                  <span>Gửi tin nhắn</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
