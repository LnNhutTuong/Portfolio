
const Footer =()=>{
    return(
        <footer className="py-3 border-t bg-white border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-base font-bold bg-gradient-to-r from-stone-900 to-stone-950 bg-clip-text text-transparent">
              XimenT
            </span>
            <p className="text-xs text-slate-500 mt-1">© {new Date().getFullYear()} - by XimenT</p>
          </div>
          <p className="text-center text-xs text-slate-500 font-mono py-2">
          Crafted with <span className="text-red-500">❤</span> and Code
        </p>
        </div>
        
      </footer>
    );
}

export default Footer;