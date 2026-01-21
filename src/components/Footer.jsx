// Common Footer Component
import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="bg-linear-to-r from-cyan-700 to-sky-400 text-neutral-content p-10 mt-20  w-full ">

            <footer className="footer sm:footer-horizontal">
                <nav>
                    <img className='w-20' src={logo} alt="AI Model Inventory Manager Logo" />
                    <h3 className='text-xl font-bold text-white'>AI Model Inventory Manager</h3>
                    <p className='text-sm text-[#ccc] mt-2'>
                        Your central hub for MLOps governance and asset traceability.
                    </p>
                </nav>

                <nav>
                    <h6 className="footer-title">Model Catalog</h6>
                    <a className="link link-hover hover:text-[#ccc] text-white">All Models Inventory</a>
                    <a className="link link-hover hover:text-[#ccc] text-white">Search by Framework</a>
                    <a className="link link-hover hover:text-[#ccc] text-white">Models in Production</a>
                    <a className="link link-hover hover:text-[#ccc] text-white">Data Lineage Reports</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Tools & Resources</h6>
                    <a className="link link-hover hover:text-[#ccc] text-white">API Documentation</a>
                    <a className="link link-hover hover:text-[#ccc] text-white">Developer Guide</a>
                    <a className="link link-hover hover:text-[#ccc] text-white">Integration Guides</a>
                    <a className="link link-hover hover:text-[#ccc] text-white">Contact Support</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Legal & Governance</h6>
                    <a className="link link-hover hover:text-[#ccc] text-white">Terms of Service</a>
                    <a className="link link-hover hover:text-[#ccc] text-white">Privacy Policy (Data)</a>
                    <a className="link link-hover hover:text-[#ccc] text-white">Model Risk Guidelines</a>
                    <a className="link link-hover hover:text-[#ccc] text-white">Security & Trust Center</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Social Info</h6>
                    <a href='https://www.instagram.com/ah5232041' target='_blank' className="link link-hover hover:text-[#ccc] text-white">Instagram</a>
                    <a href='https://www.youtube.com' target='_blank' className="link link-hover hover:text-[#ccc] text-white"> Youtube </a>
                    <a href='https://www.facebook.com' target='_blank' className="link link-hover hover:text-[#ccc] text-white">Facebook</a>
                    <a target='_blank' href='https://github.com/alminsfd?tab=repositories' className="link link-hover hover:text-[#ccc] text-white">GitHub </a>
                </nav>
                <nav>
                    <h6 className="footer-title" >Contact info</h6>
                    <span  className=" hover:text-[#ccc] text-white">phone :01577094870</span>
                    <span className=" hover:text-[#ccc] text-white"> alaminhossaintanvir42@gmail.com </span>
                </nav>
            </footer>
            
            <div className="text-center mt-4 border-t border-gray-700 pt-4 text-sm font-medium text-white">
                <p>Copyright © 2025 - All rights reserved by AI Model Inventory manager </p>
            </div>
        </div>
    );
};

export default Footer;