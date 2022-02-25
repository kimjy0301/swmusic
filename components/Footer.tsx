const Footer = () => {
  return (
    <>
      <div className="footer py-16 text-gray-100 text-sm lg:text-lg flex flex-col lg:flex-row relative">
        <div className="flex flex-col">
          <div className="footer-card my-2">
            ADDRESS : 14-15, Supsongmaeul-ro, Ilsandong-gu, Goyang-si,
            Gyeonggi-do, Republic of Korea
          </div>
          <div className="footer-card my-2">POSTCODE : 10305</div>
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
