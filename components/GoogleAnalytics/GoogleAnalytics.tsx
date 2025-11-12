import Script from 'next/script';
import React from 'react';

const GoogleAnalytics = () => {
    return (
        <>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script strategy='afterInteractive' async src="https://www.googletagmanager.com/gtag/js?id=G-1GYSL2F9B9"></Script>
            <Script>
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-1GYSL2F9B9');`}
            </Script>
        </>
    );
};

export default GoogleAnalytics;