import React from "react";

const Icon = ({ icon, className, width, height, ...props }) => {
  switch (icon) {
    case "mail":
      return (
        <svg
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg "
          className={className}
          {...props}
        >
          <path
            d="M5.83301 7.08301L8.28469 8.53251C9.71401 9.37759 10.2853 9.37759 11.7147 8.53251L14.1663 7.08301"
            stroke="#18181B"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.68111 11.2297C1.73559 13.7844 1.76283 15.0617 2.70544 16.0079C3.64804 16.9541 4.95991 16.987 7.58366 17.0529C9.20072 17.0936 10.8019 17.0936 12.419 17.0529C15.0427 16.987 16.3545 16.9541 17.2972 16.0079C18.2398 15.0617 18.267 13.7844 18.3215 11.2297C18.339 10.4083 18.339 9.59183 18.3215 8.77041C18.267 6.2158 18.2398 4.93849 17.2972 3.9923C16.3545 3.04611 15.0427 3.01315 12.419 2.94722C10.8019 2.90659 9.20072 2.90659 7.58365 2.94722C4.95991 3.01313 3.64804 3.04609 2.70543 3.99229C1.76282 4.93848 1.73559 6.21579 1.6811 8.77041C1.66359 9.59183 1.66359 10.4083 1.68111 11.2297Z"
            stroke="#18181B"
            stroke-width="1.25"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "arrow-left":
      return (
        <svg
          width={props.width || "24"}
          height={props.height || "24"}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M4 12H20"
            stroke="#A1A1AA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7"
            stroke="#A1A1AA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "checkbox":
      return (
        <svg
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M17 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1Z"
            fill="#FAFAFA"
            stroke="#D4D4D8"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "edit":
      return (
        <svg
          width={props.width || "16"}
          height={props.height || "16"}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M9.38214 2.59031C9.87894 2.05206 10.1273 1.78294 10.3913 1.62596C11.0281 1.24718 11.8124 1.2354 12.4599 1.59489C12.7283 1.74388 12.9843 2.00542 13.4963 2.52852C14.0084 3.05161 14.2645 3.31316 14.4103 3.5873C14.7622 4.24876 14.7507 5.04987 14.3799 5.70048C14.2262 5.97012 13.9627 6.22386 13.4359 6.73134L7.16674 12.7695C6.16826 13.7313 5.66901 14.2121 5.04505 14.4558C4.42109 14.6995 3.73514 14.6816 2.36325 14.6457L2.1766 14.6409C1.75895 14.6299 1.55012 14.6245 1.42874 14.4867C1.30734 14.3489 1.32392 14.1362 1.35706 13.7108L1.37506 13.4798C1.46835 12.2823 1.51499 11.6837 1.74882 11.1455C1.98264 10.6073 2.38597 10.1703 3.19263 9.29634L9.38214 2.59031Z"
            stroke="#A1A1AA"
            stroke-linejoin="round"
          />
          <path
            d="M8.66699 2.66666L13.3337 7.33332"
            stroke="#A1A1AA"
            stroke-linejoin="round"
          />
          <path
            d="M9.33301 14.6667H14.6663"
            stroke="#A1A1AA"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "help-square":
      return (
        <svg
          width={props.width || "24"}
          height={props.height || "24"}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
            stroke="#09090B"
            stroke-width="1.5"
          />
          <path
            d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5"
            stroke="#09090B"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11.9922 17H12.0012"
            stroke="#09090B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "password-eyeOpen":
      return (
        <svg
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M17.9537 9.20416C18.207 9.55941 18.3337 9.73707 18.3337 9.99999C18.3337 10.2629 18.207 10.4406 17.9537 10.7958C16.8152 12.3922 13.908 15.8333 10.0003 15.8333C6.09264 15.8333 3.18541 12.3922 2.04703 10.7958C1.79367 10.4406 1.66699 10.2629 1.66699 9.99999C1.66699 9.73707 1.79367 9.55941 2.04703 9.20416C3.18541 7.60786 6.09264 4.16666 10.0003 4.16666C13.908 4.16666 16.8152 7.60786 17.9537 9.20416Z"
            stroke="#18181B"
          />
          <path
            d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
            stroke="#18181B"
          />
        </svg>
      );
    case "password-eyeClose":
      return (
        <svg
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3337 6.66675C18.3337 6.66675 15.0003 11.6667 10.0003 11.6667C5.00033 11.6667 1.66699 6.66675 1.66699 6.66675"
            stroke="#71717A"
            stroke-linecap="round"
          />
          <path
            d="M12.5 11.25L13.75 13.3333"
            stroke="#71717A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.667 9.16675L18.3337 10.8334"
            stroke="#71717A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.66699 10.8334L3.33366 9.16675"
            stroke="#71717A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 11.25L6.25 13.3333"
            stroke="#71717A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case "password-lock":
      return (
        <svg
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M10 13.3332V11.6666"
            stroke="#18181B"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.16699 12.4999C4.16699 9.27823 6.77867 6.66656 10.0003 6.66656C13.222 6.66656 15.8337 9.27823 15.8337 12.4999C15.8337 15.7216 13.222 18.3332 10.0003 18.3332C6.77867 18.3332 4.16699 15.7216 4.16699 12.4999Z"
            stroke="#18181B"
            stroke-width="1.25"
          />
          <path
            d="M13.75 7.91656V5.41656C13.75 3.3455 12.0711 1.66656 10 1.66656C7.92893 1.66656 6.25 3.3455 6.25 5.41656V7.91656"
            stroke="#18181B"
            stroke-width="1.25"
            stroke-linecap="round"
          />
        </svg>
      );
    case "tick":
      return (
        <svg
          width={props.width || "8"}
          height={props.height || "6"}
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M1 3L3 5L7 1"
            stroke="#18181B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "user":
      return (
        <svg
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M2.08301 10.0001C2.08301 6.26815 2.08301 4.40218 3.24237 3.2428C4.40175 2.08343 6.26772 2.08344 9.99967 2.08344C13.7316 2.08344 15.5976 2.08343 16.757 3.2428C17.9163 4.40218 17.9163 6.26815 17.9163 10.0001C17.9163 13.732 17.9163 15.598 16.757 16.7574C15.5976 17.9168 13.7316 17.9168 9.99967 17.9168C6.26772 17.9168 4.40175 17.9168 3.24237 16.7574C2.08301 15.598 2.08301 13.732 2.08301 10.0001Z"
            stroke="#18181B"
            stroke-width="1.25"
          />
          <path
            d="M6.25 14.1668C8.19308 12.1316 11.786 12.0358 13.75 14.1668M12.0792 7.91677C12.0792 9.06735 11.1452 10.0001 9.99292 10.0001C8.84075 10.0001 7.90664 9.06735 7.90664 7.91677C7.90664 6.76618 8.84075 5.83344 9.99292 5.83344C11.1452 5.83344 12.0792 6.76618 12.0792 7.91677Z"
            stroke="#18181B"
            stroke-width="1.25"
            stroke-linecap="round"
          />
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
