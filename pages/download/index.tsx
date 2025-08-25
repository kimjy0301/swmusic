import Image from "next/image";
import messe2 from "../../public/image/messe2.png";
import messe_img_1 from "../../public/image/messe/messe (1).jpg";
import messe_img_2 from "../../public/image/messe/messe (2).jpg";
import messe_img_3 from "../../public/image/messe/messe (3).jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import Head from "next/head";

const Index = () => {
  const [carouselHeigt, setCarouselHeight] = useState(420);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setCarouselHeight(250);
    }
  }, [setCarouselHeight]);

  const catalogDownloads = [
    {
      title: "2025 NEW ITEMS",
      url: "https://drive.google.com/file/d/1c2OPm4sLdG4PkN3DX_vLOo12NpoKUkmP/view?usp=sharing",
      description: "Latest product catalog for 2025",
    },
    {
      title: "SAMWOO MAIN CATALOG 1-6",
      url: "https://drive.google.com/file/d/1v0aKpBzOjNbD21fnUTLq-KPsPCS3FRwQ/view?usp=sharing",
      description: "Main catalog part 1 of 6",
    },
    {
      title: "SAMWOO MAIN CATALOG 2-6",
      url: "https://drive.google.com/file/d/1lK-eI2yPX39yvJEiW-W_OoIdxpG3iygj/view?usp=sharing",
      description: "Main catalog part 2 of 6",
    },
    {
      title: "SAMWOO MAIN CATALOG 3-6",
      url: "https://drive.google.com/file/d/1Lr2kR4TwdXM6wLnW2qTJclYtg0rLaLJV/view?usp=sharing",
      description: "Main catalog part 3 of 6",
    },
    {
      title: "SAMWOO MAIN CATALOG 4-6",
      url: "https://drive.google.com/file/d/10508smtfaI-GLApCorgCBllhui8YB-l8/view?usp=sharing",
      description: "Main catalog part 4 of 6",
    },
    {
      title: "SAMWOO MAIN CATALOG 5-6",
      url: "https://drive.google.com/file/d/1CGBQZWBs3x6H1EtD-ndH9Ikn9N-9V4W8/view?usp=sharing",
      description: "Main catalog part 5 of 6",
    },
    {
      title: "SAMWOO MAIN CATALOG 6-6",
      url: "https://drive.google.com/file/d/1iCn-Fz88SVi16AjbY7zXpzFTm8UrCinA/view?usp=sharing",
      description: "Main catalog part 6 of 6",
    },
    {
      title: "BABICZ",
      url: "https://drive.google.com/file/d/12RXnFwI4oSF1htufBMk7vIhfURwZeHdm/view?usp=sharing",
      description: "BABICZ product catalog",
    },
  ];

  return (
    <>
      <Head>
        <title>DOWNLOAD | SAMWOO MANUFACTURING</title>
        <meta
          name="description"
          content="Download Page for guitar parts and resources from SAMWOO MANUFACTURING."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="QbfEjI-CV9tEUfIi3AUzHr0l72sFMkKeDnSgQeNcfwE"
        />
      </Head>
      <div className="min-h-screen mt-12 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              DOWNLOAD CATALOGS
            </h1>
            <p className="text-lg text-gray-600">
              Download our latest product catalogs and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogDownloads.map((catalog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {catalog.title}
                  </h3>
                  <p className="text-sm text-gray-600">{catalog.description}</p>
                </div>
                <div className="mt-4">
                  <a
                    href={catalog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white text-sm font-medium rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              All catalogs are in PDF format and will open in a new tab
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
