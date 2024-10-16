const Footer = () => {
  return (
    <div className="bg-slate-400 py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-xl text-white font-bold tracking-tight">
          Vendio
        </span>
        <span className="text-white text-sm tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Services</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
