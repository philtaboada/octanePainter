import { DownOutlined, MobileOutlined } from "@ant-design/icons";
import { Menu, Row, Space } from "antd";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Row
      style={{
        backgroundColor: "#E1E1E1",
        color: "black",
        height: "300px",
        width: "100%",
        bottom: 0,
      }}
      justify={"center"}
    >
      <Space
        direction="vertical"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#"
          style={{
            top: "0px",
            backgroundColor: "#ffffff",
            width: "250px",
            height: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
          }}
        >
          <div>
            <svg
              width="44"
              height="84"
              viewBox="0 0 44 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.5465 42.6099V22.8762L40.6077 21.2603V42.6062H38.9234V11.5237L27.1799 17.9837V42.6099H25.3705V24.4735L23.5611 23.4794V42.6099H21.7557V22.4852L19.9463 21.4911V42.6099H18.1447V20.497L16.3353 19.5029V42.6099H14.5259V0.994136L26.2733 7.45785V15.1205L27.1799 15.6194V6.95892L26.2733 6.46372L14.5259 0L12.7204 0.994136V17.5146L10.911 18.5087V1.98826L9.10554 2.9824V19.5029L7.30006 20.497V3.97653L5.49066 4.97066V21.4911L3.68127 22.4852V5.9648L1.87579 6.95892V23.4794L0.0663924 24.4735V42.6099H0.0155869V43.5407H43.5778V42.6099H43.5465ZM33.0536 42.6099H28.9659V24.8384L33.0341 27.0724L33.0536 42.6099Z"
                fill="url(#paint0_linear_16_35)"
              />
              <path
                d="M3.58561e-06 43.4104V51.0954C-0.000511295 51.363 0.0544299 51.628 0.161675 51.8754C0.26892 52.1227 0.426357 52.3474 0.62496 52.5366C0.823563 52.7258 1.05942 52.8758 1.319 52.978C1.57859 53.0802 1.8568 53.1325 2.13767 53.132H2.47766H2.66133C5.62001 53.3761 8.47559 54.286 10.9931 55.7868C15.6397 58.4788 18.8091 60.3069 17.3241 69.7493C16.9716 71.7993 16.7575 73.8688 16.6832 75.9449C16.6832 79.9513 18.7505 83.2315 21.3727 83.5368C21.5023 83.5529 21.6328 83.5616 21.7635 83.5629C24.5812 83.5629 26.8634 80.1523 26.8634 75.9449C26.7887 73.869 26.576 71.7996 26.2264 69.7493C24.757 60.3069 27.9069 58.4788 32.5573 55.7868C35.1002 54.2694 37.9885 53.3564 40.979 53.1246H41.4128C41.6935 53.1246 41.9715 53.0719 42.2309 52.9696C42.4902 52.8672 42.7259 52.7172 42.9244 52.5281C43.1229 52.339 43.2803 52.1144 43.3878 51.8673C43.4952 51.6202 43.5505 51.3554 43.5505 51.0879V43.4104H3.58561e-06ZM21.7909 81.3252C21.404 81.3165 21.0248 81.2207 20.6842 81.0457C20.3436 80.8708 20.0512 80.6216 19.831 80.3184C19.6107 80.0153 19.4688 79.6668 19.4169 79.3014C19.3649 78.9361 19.4044 78.5642 19.5321 78.2162C19.5594 78.1454 19.5946 78.0673 19.6298 77.9816C19.8122 77.583 20.1127 77.2438 20.4945 77.0056C20.8763 76.7673 21.3228 76.6404 21.7791 76.6404C22.2355 76.6404 22.682 76.7673 23.0638 77.0056C23.4456 77.2438 23.7461 77.583 23.9285 77.9816C23.9676 78.0673 24.0028 78.1454 24.0262 78.2162C24.1172 78.455 24.1648 78.7068 24.1669 78.9609C24.1662 79.5716 23.9163 80.1582 23.47 80.5966C23.0237 81.035 22.416 81.291 21.7752 81.3103M39.9122 51.3895L34.6911 47.5917L29.5482 51.3151L24.3662 47.5917L19.1882 51.3151L14.0374 47.5917L8.88282 51.3151L3.05994 47.1114L3.65005 46.3667L8.89846 50.1645L14.0531 46.4412L19.2038 50.1645L24.3819 46.4412L29.5638 50.1645L34.7067 46.4412L40.5218 50.6672L39.9122 51.3895Z"
                fill="url(#paint1_linear_16_35)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_16_35"
                  x1="21.7869"
                  y1="43.7306"
                  x2="21.7869"
                  y2="2.56538"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#159792" />
                  <stop offset="1" stop-color="#1ED1C4" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_16_35"
                  x1="21.787"
                  y1="80.8076"
                  x2="21.787"
                  y2="43.7194"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#159792" />
                  <stop offset="1" stop-color="#1ED1C4" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="116"
              height="44"
              viewBox="0 0 116 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.38518 20.8314C7.79798 20.8658 6.22071 20.5842 4.75422 20.0048C3.48667 19.4902 2.41478 18.6184 1.68256 17.5064C0.900268 16.238 0.481167 14.7962 0.467172 13.3251C0.448934 12.5358 0.438518 11.7402 0.435913 10.9385C0.435913 10.1379 0.435908 9.34486 0.467172 8.55179C0.485908 7.07933 0.910418 5.63741 1.69818 4.37048C2.43713 3.24163 3.51756 2.35246 4.79722 1.82C7.74522 0.678164 11.0447 0.678164 13.9927 1.82C15.2683 2.35853 16.347 3.24631 17.0917 4.37048C17.8839 5.63483 18.3038 7.07928 18.3071 8.55179C18.3462 9.34486 18.3657 10.1379 18.3657 10.9385C18.3657 11.739 18.3657 12.5358 18.3071 13.3251C18.3085 14.7962 17.8941 16.2406 17.1073 17.5064C16.3661 18.6167 15.2899 19.4875 14.02 20.0048C12.5523 20.5845 10.9737 20.8661 9.38518 20.8314ZM9.38518 16.8586C9.84317 16.8762 10.3003 16.8073 10.7302 16.6558C11.1602 16.5044 11.5544 16.2734 11.8902 15.9761C12.5389 15.3878 12.8828 14.4496 12.9219 13.1613C12.961 12.3496 12.9766 11.5863 12.9766 10.8714C12.9766 10.1566 12.9766 9.40816 12.9219 8.63743C12.915 7.90698 12.7416 7.18666 12.4139 6.52629C12.1436 6.01492 11.7135 5.59602 11.1828 5.32738C10.6239 5.06694 10.0071 4.9392 9.38518 4.95504C8.77348 4.94166 8.16746 5.0694 7.61877 5.32738C7.08636 5.59751 6.65288 6.01569 6.37603 6.52629C6.0371 7.18354 5.85811 7.90516 5.85236 8.63743C5.83152 9.41189 5.82241 10.1566 5.82502 10.8714C5.82762 11.5863 5.83673 12.3496 5.85236 13.1613C5.90968 14.4496 6.26271 15.3878 6.91143 15.9761C7.24213 16.2716 7.63101 16.5018 8.05561 16.6532C8.48021 16.8047 8.9321 16.8745 9.38518 16.8586Z"
                fill="#404041"
              />
              <path
                d="M30.0467 20.8314C28.4375 20.8701 26.8383 20.5793 25.3571 19.9788C24.0963 19.4529 23.0313 18.577 22.3011 17.4655C21.5354 16.2224 21.122 14.811 21.1013 13.3698C21.0805 12.6252 21.0701 11.816 21.0701 10.9422C21.0701 10.0747 21.07 9.24809 21.1013 8.45502C21.1246 7.01217 21.5436 5.60023 22.3167 4.35935C23.0473 3.23769 24.1166 2.35257 25.3844 1.82004C26.8576 1.21967 28.4488 0.927627 30.0506 0.963666C31.2396 0.955395 32.4239 1.10834 33.5678 1.41791C34.5895 1.69343 35.5507 2.14247 36.4049 2.74342C37.1949 3.29773 37.844 4.01414 38.3042 4.83966C38.7673 5.69786 39.0097 6.6486 39.0116 7.61355C39.0239 7.68941 39.0161 7.767 38.9888 7.83922C38.9615 7.91144 38.9156 7.97595 38.8552 8.02684C38.7338 8.13601 38.5727 8.19607 38.4058 8.1944H34.4979C34.2926 8.20666 34.0889 8.1529 33.9195 8.04174C33.7499 7.88805 33.6294 7.69188 33.5717 7.47579C33.302 6.50028 32.8604 5.83379 32.2547 5.47635C31.5742 5.09771 30.7951 4.91053 30.0076 4.93647C29.0853 4.89127 28.1813 5.19352 27.4909 5.77795C26.8695 6.34018 26.5334 7.26729 26.4748 8.58163C26.4174 10.0883 26.4174 11.6335 26.4748 13.2172C26.5334 14.5241 26.8656 15.4512 27.4909 16.0171C28.18 16.6037 29.0849 16.9062 30.0076 16.8586C30.8002 16.8835 31.5839 16.6923 32.2664 16.3076C32.8865 15.9377 33.3216 15.2749 33.5717 14.3193C33.6137 14.1009 33.7305 13.9019 33.9038 13.7533C34.0803 13.6451 34.2883 13.593 34.4979 13.6044H38.4058C38.5723 13.6013 38.7334 13.6601 38.8552 13.7682C38.915 13.8195 38.9605 13.8841 38.9878 13.9562C39.0151 14.0283 39.0232 14.1057 39.0116 14.1815C39.0097 15.1465 38.7673 16.0972 38.3042 16.9554C37.8451 17.7817 37.1958 18.4983 36.4049 19.0517C35.5516 19.654 34.5901 20.1032 33.5678 20.3772C32.423 20.6889 31.2372 20.8419 30.0467 20.8314Z"
                fill="#404041"
              />
              <path
                d="M47.2495 20.5559C47.1526 20.5593 47.0559 20.5428 46.9663 20.5075C46.8766 20.4721 46.7959 20.4188 46.7298 20.3511C46.5977 20.2216 46.5247 20.0476 46.5266 19.8671V5.57319H41.3719C41.2741 5.57594 41.1768 5.55875 41.0865 5.5228C40.9962 5.48684 40.915 5.43294 40.8483 5.36469C40.717 5.23472 40.644 5.06106 40.6451 4.88066V1.92804C40.6412 1.83627 40.6573 1.74474 40.6925 1.65924C40.7278 1.57375 40.7812 1.49615 40.8496 1.43139C40.9179 1.36662 40.9996 1.31609 41.0896 1.28301C41.1795 1.24993 41.2756 1.23503 41.3719 1.23923H56.953C57.0492 1.23499 57.1452 1.2499 57.2349 1.28301C57.3246 1.31613 57.4061 1.36672 57.4742 1.43155C57.5422 1.49637 57.5953 1.57401 57.6301 1.6595C57.6648 1.745 57.6805 1.83646 57.676 1.92804V4.88066C57.6785 5.06061 57.607 5.23434 57.4767 5.36469C57.41 5.43294 57.3288 5.48684 57.2385 5.5228C57.1482 5.55875 57.0509 5.57594 56.953 5.57319H51.7984V19.8671C51.7946 20.044 51.7206 20.2129 51.5913 20.34C51.525 20.4074 51.4443 20.4606 51.3547 20.4959C51.265 20.5313 51.1685 20.5479 51.0715 20.5447L47.2495 20.5559Z"
                fill="#404041"
              />
              <path
                d="M57.1289 20.5559C56.9706 20.5479 56.8209 20.4847 56.7085 20.3782C56.596 20.2718 56.5287 20.1296 56.5193 19.9788C56.5177 19.8949 56.5269 19.8111 56.5466 19.7293L63.3543 2.01369C63.4175 1.80375 63.5439 1.61604 63.7178 1.4738C63.9372 1.30314 64.2169 1.2192 64.4994 1.23924H68.7982C69.0806 1.2192 69.3604 1.30314 69.5798 1.4738C69.7537 1.61604 69.8801 1.80375 69.9432 2.01369L76.7196 19.7293C76.7595 19.8069 76.7796 19.8924 76.7782 19.9788C76.7769 20.0538 76.7596 20.1278 76.7273 20.1963C76.6951 20.2648 76.6486 20.3263 76.5906 20.3772C76.5326 20.4348 76.4628 20.4804 76.3855 20.5112C76.3082 20.5419 76.225 20.5571 76.1412 20.5559H72.5381C72.4205 20.5651 72.3021 20.5516 72.19 20.5165C72.0779 20.4813 71.9744 20.4251 71.8855 20.3511C71.7658 20.2476 71.6711 20.1206 71.608 19.9788L70.4786 17.164H62.7447L61.6465 19.9676C61.5872 20.1076 61.498 20.2344 61.3847 20.34C61.2893 20.4171 61.1785 20.475 61.0589 20.5102C60.9394 20.5454 60.8136 20.5572 60.6891 20.5447L57.1289 20.5559ZM63.9327 13.1874H69.3218L66.6253 5.90458L63.9327 13.1874Z"
                fill="#404041"
              />
              <path
                d="M79.7483 20.5559C79.6513 20.5593 79.5547 20.5428 79.465 20.5075C79.3753 20.4721 79.2947 20.4188 79.2285 20.3511C79.0965 20.2216 79.0235 20.0477 79.0253 19.8671V1.92806C79.0217 1.83665 79.0379 1.74551 79.0729 1.66032C79.1078 1.57512 79.1608 1.4977 79.2285 1.43286C79.297 1.36887 79.3783 1.31872 79.4676 1.28545C79.557 1.25218 79.6524 1.23647 79.7483 1.23925H82.82C83.0754 1.21682 83.3298 1.2918 83.5273 1.44776C83.6347 1.54048 83.7281 1.64699 83.8048 1.76423L90.8704 12.3609V1.93551C90.8668 1.8441 90.883 1.75296 90.9179 1.66776C90.9529 1.58257 91.0059 1.50514 91.0736 1.4403C91.1421 1.37631 91.2234 1.32618 91.3127 1.2929C91.402 1.25963 91.4975 1.24391 91.5934 1.24669H95.0715C95.1673 1.24412 95.2627 1.25994 95.352 1.2932C95.4413 1.32646 95.5227 1.37649 95.5912 1.4403C95.659 1.50514 95.712 1.58257 95.7469 1.66776C95.7819 1.75296 95.7981 1.8441 95.7944 1.93551V19.8485C95.8001 20.0374 95.7271 20.2208 95.5912 20.3586C95.525 20.4261 95.4443 20.4793 95.3546 20.5146C95.265 20.5499 95.1684 20.5665 95.0715 20.5634H91.9725C91.8488 20.5729 91.7244 20.5583 91.6068 20.5205C91.4892 20.4828 91.3809 20.4226 91.2886 20.3437C91.1906 20.2476 91.0992 20.1456 91.015 20.0384L83.9494 9.82154V19.8746C83.9496 20.0548 83.8768 20.2282 83.7462 20.3586C83.6793 20.4264 83.5979 20.4797 83.5076 20.515C83.4173 20.5504 83.3201 20.5668 83.2225 20.5634L79.7483 20.5559Z"
                fill="#404041"
              />
              <path
                d="M100.574 20.5559C100.475 20.558 100.378 20.5397 100.287 20.5025C100.197 20.4652 100.116 20.4098 100.05 20.34C99.9207 20.2092 99.8493 20.0357 99.8509 19.8559V1.92804C99.8465 1.83646 99.8621 1.745 99.8969 1.6595C99.9317 1.57401 99.9847 1.49637 100.053 1.43155C100.121 1.36672 100.202 1.31613 100.292 1.28301C100.382 1.2499 100.478 1.23499 100.574 1.23923H114.119C114.215 1.23645 114.31 1.25216 114.4 1.28543C114.489 1.3187 114.57 1.36885 114.639 1.43284C114.706 1.49768 114.759 1.5751 114.794 1.6603C114.829 1.7455 114.846 1.83663 114.842 1.92804V4.53438C114.846 4.62582 114.83 4.71703 114.795 4.80227C114.76 4.8875 114.707 4.96491 114.639 5.02962C114.571 5.09433 114.49 5.14493 114.4 5.17825C114.311 5.21156 114.215 5.22687 114.119 5.2232H104.861V8.94654H113.459C113.556 8.94284 113.653 8.9596 113.743 8.99564C113.833 9.03167 113.913 9.08609 113.978 9.15504C114.046 9.22302 114.099 9.30312 114.134 9.39068C114.168 9.47825 114.185 9.57153 114.181 9.66514V12.063C114.183 12.1524 114.166 12.2413 114.131 12.3244C114.096 12.4074 114.044 12.4831 113.978 12.547C113.912 12.6152 113.832 12.6691 113.742 12.705C113.652 12.741 113.556 12.7582 113.459 12.7555H104.861V16.5906H114.33C114.426 16.5863 114.522 16.6013 114.612 16.6343C114.702 16.6674 114.784 16.718 114.852 16.7827C114.921 16.8475 114.974 16.9251 115.009 17.0106C115.045 17.0961 115.061 17.1876 115.057 17.2794V19.8857C115.057 20.066 114.984 20.2393 114.854 20.3697C114.787 20.4375 114.705 20.4909 114.615 20.5262C114.525 20.5615 114.428 20.578 114.33 20.5745L100.574 20.5559Z"
                fill="#404041"
              />
              <path
                d="M1.3113 43.2684C1.23246 43.2709 1.15398 43.2572 1.08117 43.2283C1.00835 43.1994 0.942904 43.1559 0.889241 43.1009C0.787376 43.0008 0.728773 42.8679 0.7251 42.7285V28.2075C0.721782 28.1333 0.734681 28.0593 0.762966 27.9901C0.791251 27.9209 0.83431 27.8581 0.889419 27.8056C0.944529 27.753 1.01048 27.712 1.0831 27.6851C1.15572 27.6581 1.23343 27.6458 1.3113 27.649H7.8767C9.03444 27.6248 10.1858 27.8183 11.2649 28.2187C12.1776 28.5612 12.9617 29.1565 13.5159 29.9277C14.085 30.7884 14.367 31.7931 14.3249 32.8095C14.3674 33.812 14.0849 34.8026 13.5159 35.6467C12.9602 36.4037 12.1747 36.9805 11.2649 37.2999C10.1803 37.6775 9.03126 37.8594 7.8767 37.836H5.0864V42.7285C5.08162 42.8699 5.01841 43.0037 4.91054 43.1009C4.85405 43.1555 4.78644 43.1986 4.71184 43.2274C4.63724 43.2562 4.55724 43.2701 4.47676 43.2684H1.3113ZM5.01606 34.7345H7.75164C8.33211 34.7634 8.90354 34.5885 9.35782 34.243C9.56703 34.0525 9.72921 33.82 9.83261 33.5624C9.93602 33.3049 9.97807 33.0286 9.95574 32.7537C9.97237 32.2332 9.78894 31.7247 9.43989 31.3239C9.09599 30.9367 8.53324 30.7431 7.75164 30.7431H5.01606V34.7345Z"
                fill="#404041"
              />
              <path
                d="M14.5125 43.2683C14.3843 43.2612 14.2633 43.2095 14.1726 43.123C14.0818 43.0365 14.0275 42.9213 14.0201 42.7991C14.0192 42.7315 14.0271 42.6639 14.0435 42.5981L19.5459 28.2558C19.5966 28.0863 19.6986 27.9348 19.839 27.8202C20.0139 27.6849 20.2356 27.6172 20.4604 27.6303H23.9307C24.1555 27.6172 24.3772 27.6849 24.5521 27.8202C24.6925 27.9348 24.7945 28.0863 24.8452 28.2558L30.3163 42.5981C30.3483 42.6607 30.3644 42.7295 30.3632 42.7991C30.3624 42.8602 30.3485 42.9204 30.3222 42.9761C30.296 43.0319 30.2581 43.0819 30.2108 43.1231C30.1638 43.1696 30.1074 43.2065 30.0449 43.2315C29.9824 43.2565 29.9151 43.269 29.8474 43.2683H26.9711C26.8759 43.2753 26.7801 43.2641 26.6895 43.2354C26.5989 43.2066 26.5153 43.1608 26.4435 43.1007C26.3466 43.0173 26.2705 42.9142 26.2208 42.7991L25.3063 40.5205H19.0535L18.1625 42.7991C18.115 42.9126 18.0431 43.0153 17.9515 43.1007C17.8746 43.1636 17.785 43.2109 17.6882 43.2397C17.5915 43.2685 17.4896 43.2782 17.3887 43.2683H14.5125ZM20.0227 37.3109H24.384L22.2034 31.4132L20.0227 37.3109Z"
                fill="#404041"
              />
              <path
                d="M32.833 43.2683C32.7542 43.2708 32.6757 43.2571 32.6029 43.2282C32.5301 43.1993 32.4646 43.1559 32.411 43.1008C32.3091 43.0007 32.2505 42.8678 32.2468 42.7284V28.2074C32.2435 28.1332 32.2564 28.0592 32.2847 27.99C32.313 27.9208 32.3561 27.858 32.4112 27.8055C32.4663 27.753 32.5322 27.7119 32.6048 27.685C32.6775 27.658 32.7552 27.6458 32.833 27.6489H35.9594C36.1199 27.645 36.2757 27.7011 36.3932 27.8053C36.451 27.8564 36.4966 27.9188 36.527 27.9882C36.5573 28.0575 36.5717 28.1323 36.5691 28.2074V42.7284C36.5643 42.8698 36.5011 43.0036 36.3932 43.1008C36.3367 43.1554 36.2691 43.1985 36.1945 43.2273C36.1199 43.2561 36.0399 43.2701 35.9594 43.2683H32.833Z"
                fill="#404041"
              />
              <path
                d="M40.4223 43.2681C40.3435 43.2706 40.265 43.2569 40.1922 43.228C40.1194 43.1991 40.054 43.1557 40.0003 43.1006C39.8984 43.0005 39.8398 42.8676 39.8361 42.7283V28.2072C39.8328 28.1331 39.8457 28.059 39.874 27.9898C39.9023 27.9206 39.9454 27.8578 40.0005 27.8053C40.0556 27.7528 40.1215 27.7118 40.1942 27.6848C40.2668 27.6579 40.3445 27.6456 40.4223 27.6487H42.9078C43.0105 27.6392 43.114 27.6491 43.2126 27.6778C43.3112 27.7066 43.4029 27.7536 43.4823 27.8163C43.5689 27.8915 43.6438 27.978 43.7051 28.0732L49.4263 36.6369V28.1886C49.423 28.1144 49.4359 28.0404 49.4642 27.9712C49.4925 27.902 49.5355 27.8392 49.5906 27.7867C49.6457 27.7342 49.7117 27.6931 49.7843 27.6662C49.857 27.6392 49.9347 27.627 50.0125 27.6301H52.8263C52.9041 27.627 52.9818 27.6392 53.0545 27.6662C53.1271 27.6931 53.193 27.7342 53.2482 27.7867C53.3033 27.8392 53.3463 27.902 53.3746 27.9712C53.4029 28.0404 53.4158 28.1144 53.4125 28.1886V42.6799C53.4166 42.8328 53.3577 42.9811 53.2483 43.0931C53.1947 43.1482 53.1292 43.1917 53.0564 43.2206C52.9836 43.2495 52.9051 43.2632 52.8263 43.2607H50.3173C50.2175 43.2689 50.117 43.2573 50.0221 43.2265C49.9273 43.1957 49.8402 43.1465 49.7663 43.082C49.6865 43.0048 49.6121 42.9227 49.5436 42.8362L43.8223 34.5704V42.7022C43.8186 42.8415 43.76 42.9745 43.6582 43.0745C43.6045 43.1296 43.539 43.1731 43.4662 43.202C43.3934 43.2309 43.3149 43.2446 43.2361 43.2421L40.4223 43.2681Z"
                fill="#404041"
              />
              <path
                d="M60.8923 43.2683C60.8135 43.2708 60.735 43.2571 60.6622 43.2282C60.5894 43.1993 60.5239 43.1559 60.4703 43.1008C60.3684 43.0007 60.3098 42.8678 60.3061 42.7284V31.1377H56.1324C56.0536 31.1402 55.9751 31.1265 55.9023 31.0976C55.8295 31.0687 55.764 31.0252 55.7103 30.9701C55.6085 30.8701 55.5499 30.7372 55.5462 30.5978V28.2074C55.5429 28.1332 55.5558 28.0592 55.5841 27.99C55.6124 27.9208 55.6554 27.858 55.7105 27.8055C55.7656 27.753 55.8316 27.7119 55.9042 27.685C55.9768 27.658 56.0545 27.6458 56.1324 27.6489H68.7474C68.8252 27.6458 68.9029 27.658 68.9756 27.685C69.0482 27.7119 69.1141 27.753 69.1692 27.8055C69.2244 27.858 69.2674 27.9208 69.2957 27.99C69.324 28.0592 69.3369 28.1332 69.3336 28.2074V30.5978C69.3299 30.7372 69.2713 30.8701 69.1694 30.9701C69.1157 31.0252 69.0503 31.0687 68.9775 31.0976C68.9047 31.1265 68.8262 31.1402 68.7474 31.1377H64.5736V42.7098C64.57 42.8492 64.5114 42.9821 64.4095 43.0822C64.3558 43.1373 64.2904 43.1807 64.2176 43.2096C64.1448 43.2385 64.0663 43.2522 63.9874 43.2497L60.8923 43.2683Z"
                fill="#404041"
              />
              <path
                d="M72.0535 43.2683C71.9746 43.2708 71.8962 43.2571 71.8234 43.2282C71.7505 43.1993 71.6851 43.1559 71.6314 43.1008C71.5296 43.0007 71.471 42.8678 71.4673 42.7284V28.2074C71.464 28.1332 71.4769 28.0592 71.5051 27.99C71.5334 27.9208 71.5765 27.858 71.6316 27.8055C71.6867 27.753 71.7527 27.7119 71.8253 27.685C71.8979 27.658 71.9756 27.6458 72.0535 27.6489H82.9958C83.0737 27.6458 83.1514 27.658 83.224 27.685C83.2966 27.7119 83.3626 27.753 83.4177 27.8055C83.4728 27.858 83.5159 27.9208 83.5442 27.99C83.5724 28.0592 83.5853 28.1332 83.582 28.2074V30.3074C83.5853 30.3816 83.5724 30.4556 83.5442 30.5248C83.5159 30.594 83.4728 30.6568 83.4177 30.7093C83.3626 30.7618 83.2966 30.8029 83.224 30.8298C83.1514 30.8568 83.0737 30.8691 82.9958 30.8659H75.5238V33.8818H82.4878C82.5666 33.8793 82.6451 33.893 82.7179 33.9219C82.7907 33.9508 82.8562 33.9943 82.9098 34.0493C83.0192 34.1613 83.0781 34.3097 83.074 34.4626V36.4062C83.0703 36.5456 83.0117 36.6785 82.9098 36.7786C82.8562 36.8336 82.7907 36.8771 82.7179 36.906C82.6451 36.9349 82.5666 36.9486 82.4878 36.9461H75.5238V40.0514H83.1912C83.2691 40.0482 83.3468 40.0605 83.4194 40.0874C83.492 40.1144 83.558 40.1554 83.6131 40.2079C83.6682 40.2604 83.7113 40.3233 83.7396 40.3925C83.7678 40.4616 83.7807 40.5357 83.7774 40.6099V42.7098C83.7737 42.8492 83.7151 42.9821 83.6133 43.0822C83.5596 43.1373 83.4942 43.1807 83.4213 43.2096C83.3485 43.2385 83.2701 43.2522 83.1912 43.2497L72.0535 43.2683Z"
                fill="#404041"
              />
              <path
                d="M87.0366 43.2683C86.9578 43.271 86.8792 43.2574 86.8063 43.2285C86.7335 43.1996 86.6681 43.156 86.6146 43.1007C86.5127 43.0007 86.4541 42.8677 86.4504 42.7284V28.2074C86.4475 28.1332 86.4606 28.0593 86.4888 27.9901C86.5171 27.921 86.5599 27.8581 86.6146 27.8052C86.6699 27.7529 86.7359 27.712 86.8085 27.6851C86.8811 27.6582 86.9588 27.6459 87.0366 27.6489H93.4066C95.4388 27.6489 97.0332 28.092 98.19 28.9781C99.3468 29.8643 99.9251 31.119 99.9251 32.7424C99.9622 33.6915 99.6891 34.6283 99.1435 35.4232C98.6152 36.1506 97.8844 36.7231 97.0332 37.0764L100.246 42.572C100.289 42.6476 100.313 42.7318 100.316 42.8178C100.312 42.9407 100.257 43.0571 100.164 43.1417C100.12 43.1867 100.068 43.2229 100.009 43.2478C99.9508 43.2728 99.8876 43.2861 99.8235 43.2869H96.6971C96.5783 43.2964 96.4586 43.2825 96.3457 43.246C96.2327 43.2095 96.1288 43.1511 96.0406 43.0747C95.9202 42.9657 95.8174 42.8402 95.7358 42.7023L93.0627 37.7875H90.6711V42.747C90.6663 42.8884 90.6031 43.0222 90.4952 43.1193C90.4387 43.174 90.3711 43.217 90.2965 43.2459C90.2219 43.2747 90.1419 43.2886 90.0614 43.2869L87.0366 43.2683ZM90.6711 34.578H93.3676C93.9681 34.6209 94.5621 34.4362 95.0206 34.0642C95.2071 33.8815 95.3522 33.6643 95.4469 33.4261C95.5417 33.1878 95.5842 32.9336 95.5716 32.6791C95.5963 32.1622 95.4068 31.6568 95.0441 31.2717C94.8185 31.0771 94.5531 30.929 94.2646 30.8367C93.9761 30.7444 93.6707 30.71 93.3676 30.7355H90.6711V34.578Z"
                fill="#404041"
              />
              <path
                d="M108.773 43.4916C107.438 43.5341 106.109 43.3175 104.865 42.8549C103.942 42.5087 103.132 41.9342 102.52 41.1906C102.008 40.5614 101.713 39.7966 101.676 39.0013C101.676 38.9401 101.69 38.8797 101.716 38.8239C101.742 38.7681 101.781 38.7181 101.828 38.6774C101.875 38.6308 101.932 38.5939 101.994 38.5689C102.057 38.5439 102.124 38.5314 102.192 38.5322H105.146C105.322 38.5219 105.497 38.5607 105.65 38.6438C105.772 38.7227 105.88 38.821 105.967 38.9343C106.105 39.176 106.283 39.3948 106.494 39.5821C106.754 39.8101 107.062 39.9816 107.397 40.0848C107.836 40.2207 108.296 40.2849 108.757 40.2747C109.466 40.3166 110.175 40.1778 110.809 39.8726C111.018 39.7674 111.193 39.6099 111.315 39.417C111.437 39.2241 111.501 39.0031 111.501 38.7779C111.505 38.621 111.472 38.4653 111.404 38.3222C111.336 38.1791 111.236 38.0523 111.11 37.9513C110.749 37.6905 110.339 37.4973 109.902 37.3817C109.174 37.1692 108.434 36.994 107.686 36.8566C106.639 36.6626 105.62 36.3514 104.65 35.9295C103.883 35.6075 103.222 35.0926 102.739 34.4402C102.285 33.718 102.058 32.8868 102.085 32.0453C102.112 31.2038 102.392 30.3873 102.891 29.6929C103.469 28.9464 104.252 28.3665 105.154 28.0174C106.262 27.587 107.452 27.3815 108.648 27.4143C109.614 27.3979 110.577 27.5338 111.497 27.8164C112.251 28.0501 112.955 28.4135 113.572 28.8887C114.086 29.2828 114.519 29.7637 114.85 30.3073C115.121 30.754 115.278 31.2553 115.307 31.7706C115.307 31.89 115.261 32.0052 115.178 32.0945C115.133 32.143 115.076 32.1812 115.014 32.2063C114.951 32.2315 114.883 32.2429 114.815 32.2397H111.719C111.566 32.2439 111.413 32.2133 111.274 32.1503C111.139 32.0838 111.025 31.9834 110.946 31.8599C110.821 31.4952 110.558 31.1882 110.207 30.9998C109.735 30.734 109.192 30.6047 108.644 30.6275C108.085 30.5974 107.529 30.7174 107.038 30.9738C106.85 31.0846 106.698 31.2418 106.596 31.4287C106.495 31.6155 106.449 31.8251 106.463 32.0349C106.458 32.3248 106.572 32.6052 106.78 32.8168C107.076 33.0901 107.438 33.2896 107.835 33.3977C108.5 33.6059 109.177 33.7775 109.863 33.9115C111.043 34.099 112.196 34.4176 113.298 34.8609C114.087 35.1673 114.765 35.6846 115.252 36.3503C115.707 37.103 115.921 37.9656 115.869 38.8325C115.817 39.6994 115.501 40.5331 114.959 41.2316C114.299 41.9957 113.437 42.578 112.462 42.9183C111.281 43.3286 110.029 43.5231 108.773 43.4916Z"
                fill="#404041"
              />
            </svg>
          </div>
        </a>

        <Row style={{ display: "flex" }}>
          <Menu
            onClick={({ key }) => {
              if (key === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                const element = document.querySelector(key);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            style={{ flex: "auto", minWidth: 0, flexWrap: "wrap" }}
            mode="horizontal"
            items={[
              {
                label: "HOME",
                key: "#",
              },

              {
                label: "ABOUT US",
                key: "#aboutus",
              },
              {
                label: "SERVICES",
                icon: <DownOutlined />,
                key: "#services",
                children: [
                  {
                    label: "Deck Staining",
                    key: "#deckstaining",
                  },
                  {
                    label: "Drywall Installation",
                    key: "#drywallinstallation",
                  },
                  {
                    label: "Tite Installation",
                    key: "#titeinstallation",
                  },
                  {
                    label: "Residential Painting",
                    key: "#residentialpainting",
                  },
                ],
              },

              {
                style: { color: "#159792" },
                label: "185 458 856",
                key: "tel:185458856",
                icon: <MobileOutlined />,
              },
            ]}
          ></Menu>
        </Row>
        <Space
          align="center"
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {`All rights reserved © ${year} | Octane Painters`}
        </Space>
      </Space>
    </Row>
  );
};

export default Footer;