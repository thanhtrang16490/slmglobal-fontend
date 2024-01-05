import Script from 'next/script'

function AnalyticsGoogle() {
    return (
        <div className="container">
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-NJRYQ2XWDZ" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-NJRYQ2XWDZ');
        `}
            </Script>
        </div>
    )
}

export default AnalyticsGoogle