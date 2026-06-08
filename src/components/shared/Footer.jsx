import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <h2 className="text-2xl font-bold">
                        Skill<span className="text-green-600">Sphere</span>
                    </h2>

                    <p className="max-w-xs">
                        Learn practical skills from industry experts and
                        accelerate your career growth.
                    </p>
                </aside>

                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Courses</a>
                    <a className="link link-hover">My Profile</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Learning Tips</a>
                    <a className="link link-hover">Trending Courses</a>
                    <a className="link link-hover">Top Instructors</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;