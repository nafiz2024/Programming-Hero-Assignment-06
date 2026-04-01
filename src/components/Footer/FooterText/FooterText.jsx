import React from 'react';

const FooterText = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='container mx-auto px-5 lg:px-0 py-8 flex flex-col lg:flex-row justify-between items-center text-white border-t border-[#E5E7EB]/50'>
                <div className="">
                    <h1>© 2026 Digitools. All rights reserved.</h1>
                </div>
                <div className="flex gap-5">
                    <a href="text-[#FAFAFA]">Privacy Policy</a>
                    <a href="text-[#FAFAFA]">Terms of Service</a>
                    <a href="text-[#FAFAFA]">Cookies</a>
                </div>
            </div>
        </div>
    );
};

export default FooterText;