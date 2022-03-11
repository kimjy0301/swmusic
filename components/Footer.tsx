const Footer = () => {
  return (
    <>
      <div className="footer py-16 text-gray-100 text-sm lg:text-lg flex flex-col lg:flex-row relative">
        <div className="flex flex-col">
          <div className="footer-card my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="ml-1 lg:ml-3">CALL : 82-31-902-2691</span>
          </div>
          <div className="footer-card my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="ml-1 lg:ml-3">FAX : 82-31-902-9611</span>
          </div>
          <div className="footer-card my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="ml-1 lg:ml-3">
              LOCATION : 14-15, Supsongmaeul-ro, Ilsandong-gu, Goyang-si,
              Gyeonggi-do, Republic of Korea
            </span>
          </div>
          <div className="footer-card my-2 items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <span className="ml-1 lg:ml-3">POSTCODE : 10305</span>
          </div>
        </div>
        <div>
          <iframe
            className="rounded-lg shadow-md footer-card h-64"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDF58XvP_UtMPLQxOJaav35ZjKBakUy0RI&q=602,14-15,+Supsongmaeul-ro,+Ilsandong-gu,+Goyang-si,+Gyeonggi-do,+Republic+of+Korea&language=en&zoom=15"
          ></iframe>
        </div>
        <p className="absolute bottom-2 left-auto ">
          Copyright © 2022 SAMWOO MANUFACTURING CO., LTD. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
