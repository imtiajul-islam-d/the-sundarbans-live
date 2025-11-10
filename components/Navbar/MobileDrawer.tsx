import React from 'react';

const MobileDrawer = ({ dropdown, setDropdown }) => {
    return (
        <section className='fixed top-0 left-0 w-svw h-svh z-50 bg-gray-900'>
            <div>
                <button className='text-5xl text-red-500' onClick={() => setDropdown((e) => !e)}>X</button>
            </div>
        </section>
    );
};

export default MobileDrawer;