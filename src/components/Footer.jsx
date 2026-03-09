import {Link} from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Other Colleges */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Other Colleges</h3>
            <ul className="space-y-3 text-md">
              <li>
                <a href="https://seglko.org/sitm">Saroj Institute of Technology & Management</a>
              </li>
              <li>
                <a href="https://seglko.org/ssitm">Shivdan Singh Institute of Technology & Management</a>
              </li>
              <li><a href="https://seglko.org/scp">Saroj College Of Pharmacy</a></li>
              <li><a href="https://seglko.org/scep">Saroj College Of Engineering and Polytechnic</a></li>
              <li><a href="https://seglko.org/lip">Lucknow Institute of Pharmacy</a></li>
            </ul>
          </div>

          {/* Admissions */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Admissions</h3>
            <ul className="space-y-3 text-md">
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/admission/admission-process">Admission Process</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/admission/eligibility">Eligibility Criteria</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/admission/fee-structure">Fee Structure</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3 text-md">
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Contacts</h3>
            <div className="space-y-3 text-md">
              <div className="flex items-start gap-2 hover:text-orange-500 transition-colors">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span className="leading-snug">
                  10th KM Stone, Aligarh–Mathura Road, Aligarh, Uttar Pradesh,India 202001
                </span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <Phone size={18} className="shrink-0" />
                <span>09555699988</span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <Phone size={18} className="shrink-0" />
                <span>09810054878</span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <Mail size={18} className="shrink-0" />
                <span>admission.cell@seglko.org</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/ssitmalg" className="text-white" target= "_blank">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/ssitmalg" className="text-white" target = "_blank">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/ssitmalg" className="text-white" target= "_blank">
                <Linkedin size= {20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm md:text-base font-medium">
            © {new Date().getFullYear()} Saroj Educational Group (SEG). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
