"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react"); // Import Lucide icons
var react_router_dom_1 = require("react-router-dom");
var container_1 = require("@/components/container");
var helpers_1 = require("@/lib/helpers");
var SocialLink = function (_a) {
    var href = _a.href, icon = _a.icon, hoverColor = _a.hoverColor;
    return (<a href={href} target="_blank" rel="noopener noreferrer" className={"hover:".concat(hoverColor)}>
      {icon}
    </a>);
};
var FooterLink = function (_a) {
    var to = _a.to, children = _a.children;
    return (<li>
      <react_router_dom_1.Link to={to} className="hover:underline text-gray-300 hover:text-gray-100">
        {children}
      </react_router_dom_1.Link>
    </li>);
};
var Footer = function () {
    return (<div className="w-full bg-black text-gray-300 hover:text-gray-100 py-8">
      <container_1.Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column: Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {helpers_1.MainRoutes.map(function (route) { return (<FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>); })}
            </ul>
          </div>

          {/* Second Column: About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p>
              We are committed to helping you unlock your full potential with
              AI-powered tools. Our platform offers a wide range of resources to
              improve your interview skills and chances of success.
            </p>
          </div>

          {/* Third Column: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul>
              <FooterLink to="/services/interview-prep">
                Interview Preparation
              </FooterLink>
              <FooterLink to="/services/career-coaching">
                Career Coaching
              </FooterLink>
              <FooterLink to="/services/resume-building">
                Resume Building
              </FooterLink>
            </ul>
          </div>

          {/* Fourth Column: Address and Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="mb-4">Pune, India</p>
            <div className="flex gap-4">
              <SocialLink href="https://facebook.com" icon={<lucide_react_1.Facebook size={24}/>} hoverColor="text-blue-500"/>
              <SocialLink href="https://twitter.com" icon={<lucide_react_1.Twitter size={24}/>} hoverColor="text-blue-400"/>
              <SocialLink href="https://instagram.com" icon={<lucide_react_1.Instagram size={24}/>} hoverColor="text-pink-500"/>
              <SocialLink href="https://linkedin.com" icon={<lucide_react_1.Linkedin size={24}/>} hoverColor="text-blue-700"/>
            </div>
          </div>
        </div>
      </container_1.Container>
    </div>);
};
exports.Footer = Footer;
