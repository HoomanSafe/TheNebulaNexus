import React from "react";
import footerLogo from "../assets/logo.svg";
import footerIcon from "../assets/cat.svg";
const Footer = () => {
  return (
    <section className="w-full py-16 bgw" id="footer">
      <div
        id="footer-wrapper"
        className="container flex flex-col justify-center items-center gap-6"
      >
        <div className="max-w-[784px] flex-col justify-start items-center gap-3.5 inline-flex">
          <h1 className="text-center footer-text animated text-white text-5xl font-normal">
            JOIN US !
          </h1>
          <h2 className="flex-col justify-start items-center gap-[9px] flex">
            <div className="text-center footer-text text-white md:text-2xl font-normal">
              CA: 0X820EF12ABE4
            </div>
            {/* <p className="text-center footer-text text-white text-[32px] font-normal">
              discover the power of bitpepe in his very exciting journey
            </p> */}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <a
            href="https://t.me/"
            className="w-[215px] h-[54px] footer-text px-8 py-4 bg-white shadow border border-amber-300 justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-black  text-base font-bold leading-snug tracking-tight">
              TELEGRAM
            </div>
          </a>
          <a
            href="https://x.com/"
            className="w-[215px] h-[54px] footer-text px-8 py-4 bg-white shadow border border-amber-300 justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-black text-base font-bold leading-snug tracking-tight">
              TWITTER
            </div>
          </a>{" "}
          <a
            href=""
            className="w-[215px] h-[54px] footer-text px-8 py-4 bg-white shadow border border-amber-300 justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-black text-base font-bold leading-snug tracking-tight">
              DEXTOOL
            </div>
          </a>
        </div>
        <a href="">
          <img
            src={footerIcon}
            className="footer-text w-[5rem] mx-auto"
            alt=""
          />
        </a>

        <div className="w-full gap-10 mt-8xw container flex flex-col justify-center md:flex-row  md:justify-between items-center">
          <a href="">
            <img src={footerIcon} alt="" className="w-[15rem]" />
          </a>
          <div className="flex items-center gap-3">
            <a href="https://t.me/BeastTheDog">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.242188"
                  width="57.0714"
                  height="57.0714"
                  rx="28.5357"
                  fill="white"
                />
                <path
                  d="M20.3447 26.2816C19.9066 26.1356 19.9024 25.8997 20.3531 25.7495L36.3726 20.41C36.8166 20.2623 37.0709 20.5107 36.9466 20.9454L32.3692 36.964C32.2433 37.408 31.9873 37.4231 31.7993 37.0018L28.7829 30.2137L33.8186 23.4994L27.1043 28.5351L20.3447 26.2816Z"
                  fill="#0D0616"
                />
              </svg>
            </a>
            <a href="https://x.com/BeastTheDogETH">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.671875"
                  width="57.0714"
                  height="57.0714"
                  rx="28.5357"
                  fill="white"
                />
                <path
                  d="M41.4008 20.8493C40.49 21.2541 39.509 21.5267 38.4804 21.6506C39.5317 21.0207 40.3351 20.0252 40.7172 18.8377C39.7341 19.4201 38.6457 19.8435 37.487 20.0707C36.5618 19.0814 35.2379 18.4639 33.7778 18.4639C30.4939 18.4639 28.0817 21.5267 28.8231 24.7073C24.5996 24.4945 20.851 22.4705 18.3438 19.3953C17.0117 21.6795 17.654 24.6701 19.9175 26.184C19.0852 26.1571 18.3025 25.9279 17.6168 25.5478C17.561 27.9023 19.2504 30.106 21.6958 30.5975C20.9812 30.7916 20.1964 30.8371 19.3991 30.6842C20.0456 32.7041 21.9271 34.1725 24.1493 34.2138C22.0076 35.8909 19.3165 36.6406 16.6172 36.3225C18.8684 37.7661 21.5388 38.6067 24.4096 38.6067C33.8521 38.6067 39.1847 30.6326 38.8625 23.4805C39.858 22.7659 40.7192 21.8695 41.4008 20.8493Z"
                  fill="#0D0616"
                />
              </svg>
            </a>
            <a href="">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.03125"
                  width="57.0714"
                  height="57.0714"
                  rx="28.5357"
                  fill="white"
                />
                <g clip-path="url(#clip0_2172_498)">
                  <path
                    d="M22.6932 27.6226C22.6932 27.1577 23.0752 26.7758 23.5392 26.7758H24.9662C25.4311 26.7758 25.8291 27.1577 25.8291 27.6395V33.0209C25.9951 32.9709 26.1941 32.921 26.4269 32.871C26.742 32.788 26.9748 32.506 26.9748 32.1733V25.4963C26.9748 25.0314 27.3567 24.6326 27.8377 24.6326H29.2647C29.7295 24.6326 30.1276 25.0145 30.1276 25.4963V31.6923C30.1276 31.6923 30.4764 31.5424 30.8245 31.3933C31.0904 31.2773 31.2564 31.0284 31.2564 30.7286V23.3378C31.2564 22.8729 31.6383 22.4741 32.1032 22.4741H33.5301C33.995 22.4741 34.3769 22.856 34.3769 23.3378V29.4338C35.6048 28.5371 36.8666 27.4574 37.8624 26.1618C38.1614 25.7799 38.2443 25.2812 38.0784 24.8163C36.2526 19.5679 30.5111 16.7769 25.2667 18.6042C20.0223 20.4316 17.2345 26.178 19.0595 31.4272C19.2585 32.025 19.5244 32.5898 19.8394 33.1377C20.0884 33.5696 20.5533 33.8185 21.0512 33.7686C21.3171 33.7517 21.649 33.7186 22.0632 33.6687C22.4282 33.6356 22.6941 33.3198 22.6941 32.954L22.6932 27.6226Z"
                    fill="#0D0616"
                  />
                  <path
                    d="M22.6562 36.2596C27.1537 39.5316 33.444 38.5349 36.7127 34.0342C37.9576 32.3068 38.6376 30.2305 38.6376 28.105C38.6376 27.8721 38.6207 27.6401 38.6046 27.4072C34.9378 32.9046 28.1496 35.4789 22.6562 36.2596Z"
                    fill="#0D0616"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2172_498">
                    <rect
                      width="20.1429"
                      height="20.1429"
                      fill="white"
                      transform="translate(18.4922 18.0449)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.601562"
                  width="57.0714"
                  height="57.0714"
                  rx="28.5357"
                  fill="white"
                />
                <g clip-path="url(#clip0_2172_508)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.5454 19.1934C25.1671 19.8178 24.0394 20.3461 24.0396 20.3676C24.0402 20.4231 27.3477 21.8797 27.4651 21.8762C27.5185 21.8746 27.9059 21.7195 28.3259 21.5316L29.0898 21.19L29.9239 21.5628L30.7581 21.9358L32.1241 21.402C34.1825 20.5976 34.3963 20.5095 34.3628 20.4799C34.3183 20.4406 33.58 20.0957 31.577 19.1787C30.6089 18.7355 29.6693 18.3009 29.489 18.213C29.3086 18.125 29.1364 18.0543 29.1063 18.0557C29.0763 18.0571 27.9238 18.569 26.5454 19.1934ZM20.4999 21.9157L19.0651 22.5602V25.3888C19.0651 26.9446 19.0839 28.2174 19.107 28.2174C19.1301 28.2174 19.836 27.9513 20.6758 27.6261L22.2026 27.0347V24.0532L22.9488 24.4067C23.5237 24.6788 24.099 24.9504 24.6746 25.2214L25.6544 25.6827L26.0903 25.5113C26.3638 25.4036 26.6366 25.2949 26.9089 25.1851C27.1194 25.0999 27.6359 24.8976 28.0568 24.7354C28.4777 24.5732 28.8673 24.4101 28.9225 24.3729C28.9959 24.3235 28.101 23.8935 25.6127 22.7823C23.737 21.9447 22.1421 21.262 22.0686 21.2653C21.995 21.2685 21.2891 21.5612 20.4999 21.9157ZM34.6214 22.0967C33.6441 22.4803 32.8439 22.8096 32.843 22.8283C32.8421 22.8471 33.3748 23.1225 34.0267 23.4402C34.6785 23.7581 35.2119 24.0351 35.2119 24.0559C35.2119 24.0768 34.6351 24.3198 33.9301 24.5962C33.2251 24.8724 31.443 25.5723 29.9699 26.1514L25.0341 28.0915C23.7924 28.5796 22.6733 29.0196 22.547 29.0693C20.0109 30.0676 19.3139 30.3447 19.2181 30.3922C19.1219 30.4401 19.1001 30.7182 19.0829 32.1142L19.0625 33.7792L20.3456 34.3477L21.6287 34.9162L23.4079 34.2179C24.3865 33.8339 25.1871 33.4996 25.1871 33.475C25.1871 33.4504 25.0063 33.348 24.7854 33.2472C24.5643 33.1464 24.1081 32.9234 23.7714 32.7514C23.4347 32.5794 23.099 32.4216 23.0253 32.4007C22.9516 32.3798 22.8924 32.3433 22.8936 32.3195C22.8948 32.2958 23.6783 31.9722 24.6345 31.6003C26.4919 30.8782 27.9132 30.3216 30.9648 29.1216C32.3293 28.5851 33.694 28.0489 35.0589 27.5131C36.2584 27.0423 37.6531 26.4924 38.1581 26.2911L39.0764 25.9252L39.0969 24.2413L39.1174 22.5574L37.816 21.9766C37.1002 21.6571 36.4883 21.3965 36.4563 21.3975C36.4242 21.3984 35.5985 21.713 34.6214 22.0967ZM38.7278 28.1717C38.536 28.2531 38.1572 28.4057 37.886 28.5106C37.6148 28.6155 37.1002 28.8174 36.7424 28.9594L36.0919 29.2174L36.0771 30.6957C36.0689 31.5088 36.0345 32.1704 36.0006 32.1661C35.9236 32.1562 34.7045 31.6125 33.479 31.0414C32.5945 30.6293 32.5389 30.6129 32.3311 30.7025C32.211 30.7542 31.4928 31.0343 30.7352 31.325C29.9776 31.6156 29.333 31.8724 29.3027 31.8956C29.2725 31.9188 30.7972 32.6375 32.6912 33.4927L36.1346 35.0477L37.6055 34.386C38.4145 34.0221 39.1024 33.6901 39.1341 33.6484C39.2054 33.5545 39.1992 28.0107 39.1279 28.0182C39.0996 28.0211 38.9195 28.0902 38.7278 28.1717ZM30.5821 34.6787C30.327 34.7741 30.0719 34.8697 29.8169 34.9653C29.0468 35.255 29.1977 35.2647 28.2816 34.868C27.6714 34.6039 27.4083 34.5224 27.2942 34.562C27.2085 34.5916 26.4715 34.88 25.6562 35.2027C24.841 35.5255 24.1457 35.7895 24.1111 35.7895C23.769 35.7895 24.3377 36.085 26.532 37.0475L29.1054 38.1762L30.1881 37.7114C30.7836 37.4557 31.9848 36.9437 32.8574 36.5737C33.7299 36.2035 34.433 35.8911 34.4199 35.8793C34.4066 35.8675 33.6755 35.5411 32.7951 35.1538L31.1943 34.4497L30.5821 34.6787Z"
                    fill="#0D0616"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2172_508">
                    <rect
                      width="20.1429"
                      height="20.1429"
                      fill="white"
                      transform="translate(19.0625 18.0449)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;