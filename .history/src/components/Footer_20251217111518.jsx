import React from "react";

const Footer = ({ onNavigate }) => {
  const handleNav = (tab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    {/* FOOTER */}
      <footer className="bg-[#052f22] py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-sm text-[#cfe9df]">
          <div>
            <h4 className="text-[#e0b84c] font-semibold">Mannah Caters ~ Food For Soul</h4>
            <p className="text-sm mt-2">Crafting unforgettable culinary experiences with passion and elegance.</p>
          </div>
          <div>
            <h4 className="text-[#e0b84c] font-semibold">Quick Links</h4>
            <ul className="text-sm mt-2 space-y-1">
              <li>Services</li>
              <li>Menu</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#e0b84c] font-semibold">Contact Us</h4>
            <p className="text-sm mt-2">contact@mannahcaters.com</p>
            <p className="text-sm">(123) 456-7890</p>
          </div>
          <div className="text-sm">© 2024 Mannah Caters. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
  );
};

export default Footer;