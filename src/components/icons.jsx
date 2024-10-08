import React from "react";

const Icon = ({ icon, style, className, width, height, ...props }) => {
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
          style={style}
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
          style={style}
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
    case "edit":
      return (
        <svg
          width={props.width || "16"}
          height={props.height || "16"}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={style}
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
          style={style}
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
          style={style}
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
          className={className}
          style={style}
          {...props}
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
          style={style}
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
          style={style}
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
          style={style}
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
    case "dashboard":
      return (
        <svg
          width={props.width || "16"}
          height={props.height || "16"}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={style}
          {...props}
        >
          <g id="Icons">
            <path
              id="Vector"
              d="M1.33333 4.00028C1.33333 2.7432 1.33333 2.11466 1.72386 1.72414C2.11438 1.33362 2.74292 1.33362 4 1.33362C5.25708 1.33362 5.88562 1.33362 6.27614 1.72414C6.66667 2.11466 6.66667 2.7432 6.66667 4.00028V5.33362C6.66667 6.5907 6.66667 7.21922 6.27614 7.60975C5.88562 8.00028 5.25708 8.00028 4 8.00028C2.74292 8.00028 2.11438 8.00028 1.72386 7.60975C1.33333 7.21922 1.33333 6.5907 1.33333 5.33362V4.00028Z"
              stroke="#3F3F46"
              stroke-width="1.25"
            />
            <path
              id="Vector_2"
              d="M1.33333 12.6669C1.33333 12.0456 1.33333 11.735 1.43483 11.4899C1.57015 11.1633 1.82972 10.9037 2.15642 10.7683C2.40145 10.6669 2.71208 10.6669 3.33333 10.6669H4.66667C5.28792 10.6669 5.59855 10.6669 5.84358 10.7683C6.17028 10.9037 6.42985 11.1633 6.56517 11.4899C6.66667 11.735 6.66667 12.0456 6.66667 12.6669C6.66667 13.2881 6.66667 13.5987 6.56517 13.8438C6.42985 14.1705 6.17028 14.4301 5.84358 14.5654C5.59855 14.6669 5.28792 14.6669 4.66667 14.6669H3.33333C2.71208 14.6669 2.40145 14.6669 2.15642 14.5654C1.82972 14.4301 1.57015 14.1705 1.43483 13.8438C1.33333 13.5987 1.33333 13.2881 1.33333 12.6669Z"
              stroke="#3F3F46"
              stroke-width="1.25"
            />
            <path
              id="Vector_3"
              d="M9.33334 10.6669C9.33334 9.40984 9.33334 8.78131 9.72387 8.39078C10.1144 8.00024 10.7429 8.00024 12 8.00024C13.2571 8.00024 13.8856 8.00024 14.2761 8.39078C14.6667 8.78131 14.6667 9.40984 14.6667 10.6669V12.0002C14.6667 13.2573 14.6667 13.8858 14.2761 14.2764C13.8856 14.6669 13.2571 14.6669 12 14.6669C10.7429 14.6669 10.1144 14.6669 9.72387 14.2764C9.33334 13.8858 9.33334 13.2573 9.33334 12.0002V10.6669Z"
              stroke="#3F3F46"
              stroke-width="1.25"
            />
            <path
              id="Vector_4"
              d="M9.33334 3.33362C9.33334 2.71236 9.33334 2.40174 9.4348 2.1567C9.57014 1.83 9.82974 1.57044 10.1564 1.43511C10.4015 1.33362 10.7121 1.33362 11.3333 1.33362H12.6667C13.2879 1.33362 13.5985 1.33362 13.8436 1.43511C14.1703 1.57044 14.4299 1.83 14.5652 2.1567C14.6667 2.40174 14.6667 2.71236 14.6667 3.33362C14.6667 3.95487 14.6667 4.2655 14.5652 4.51053C14.4299 4.83723 14.1703 5.0968 13.8436 5.23213C13.5985 5.33362 13.2879 5.33362 12.6667 5.33362H11.3333C10.7121 5.33362 10.4015 5.33362 10.1564 5.23213C9.82974 5.0968 9.57014 4.83723 9.4348 4.51053C9.33334 4.2655 9.33334 3.95487 9.33334 3.33362Z"
              stroke="#3F3F46"
              stroke-width="1.25"
            />
          </g>
        </svg>
      );
    case "archive":
      return (
        <svg
          width={props.width || "16"}
          height={props.height || "16"}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={style}
          {...props}
        >
          <g id="Icons">
            <path
              id="Vector"
              d="M1.33333 10.6669C1.33333 9.1076 1.33333 8.328 1.69098 7.7588C1.87747 7.462 2.12845 7.211 2.42526 7.02454C2.99445 6.66687 3.77407 6.66687 5.33333 6.66687H10.6667C12.2259 6.66687 13.0055 6.66687 13.5747 7.02454C13.8715 7.211 14.1225 7.462 14.309 7.7588C14.6667 8.328 14.6667 9.1076 14.6667 10.6669C14.6667 12.2261 14.6667 13.0057 14.309 13.5749C14.1225 13.8717 13.8715 14.1227 13.5747 14.3092C13.0055 14.6669 12.2259 14.6669 10.6667 14.6669H5.33333C3.77407 14.6669 2.99445 14.6669 2.42526 14.3092C2.12845 14.1227 1.87747 13.8717 1.69098 13.5749C1.33333 13.0057 1.33333 12.2261 1.33333 10.6669Z"
              stroke="#71717A"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M13.3333 6.66691C13.3333 5.73349 13.3333 5.26678 13.1517 4.91026C12.9919 4.59666 12.7369 4.34169 12.4233 4.1819C12.0668 4.00024 11.6001 4.00024 10.6667 4.00024H5.33333C4.39991 4.00024 3.9332 4.00024 3.57668 4.1819C3.26308 4.34169 3.00811 4.59666 2.84832 4.91026C2.66667 5.26678 2.66667 5.73349 2.66667 6.66691"
              stroke="#71717A"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M12 4.00028C12 2.7432 12 2.11466 11.6095 1.72414C11.2189 1.33362 10.5904 1.33362 9.33333 1.33362H6.66667C5.40959 1.33362 4.78105 1.33362 4.39053 1.72414C4 2.11466 4 2.7432 4 4.00028"
              stroke="#71717A"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_4"
              d="M10 9.33362C10 10.07 9.40307 10.667 8.66667 10.667H7.33333C6.59695 10.667 6 10.07 6 9.33362"
              stroke="#71717A"
              stroke-width="1.25"
              stroke-linecap="round"
            />
          </g>
        </svg>
      );
    case "new-menu":
      return (
        <svg
          width={props.width || "16"}
          height={props.height || "16"}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={style}
          {...props}
        >
          <g id="Icons">
            <path
              id="Vector"
              d="M8 5.33362V10.667M10.6667 8.00028H5.33333"
              stroke="#71717A"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M1.66667 8.0002C1.66667 5.01464 1.66667 3.52186 2.59416 2.59436C3.52166 1.66687 5.01444 1.66687 8 1.66687C10.9855 1.66687 12.4783 1.66687 13.4059 2.59436C14.3333 3.52186 14.3333 5.01464 14.3333 8.0002C14.3333 10.9857 14.3333 12.4785 13.4059 13.4061C12.4783 14.3335 10.9855 14.3335 8 14.3335C5.01444 14.3335 3.52166 14.3335 2.59416 13.4061C1.66667 12.4785 1.66667 10.9857 1.66667 8.0002Z"
              stroke="#71717A"
              stroke-width="1.25"
            />
          </g>
        </svg>
      );
    case "next":
      return (
        <svg
          width={props.width || "16"}
          height={props.height || "16"}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M6 12L10 8L6 4"
            stroke="#334155"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "folder":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "24"}
          height={props.height || "24"}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M7 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7"
            stroke="#3F3F46"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      );
    case "three-dot":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "21"}
          height={props.height || "20"}
          viewBox="0 0 21 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M10.3301 10H10.3376"
            stroke="#A1A1AA"
            stroke-width="2.08333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.3334 10H15.3409"
            stroke="#A1A1AA"
            stroke-width="2.08333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.33337 10H5.34086"
            stroke="#A1A1AA"
            stroke-width="2.08333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "grid-view":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M1.66663 15C1.66663 13.7163 1.66663 13.0744 1.95557 12.6029C2.11724 12.339 2.33907 12.1172 2.6029 11.9555C3.07441 11.6666 3.71626 11.6666 4.99996 11.6666C6.28366 11.6666 6.92551 11.6666 7.39702 11.9555C7.66085 12.1172 7.88268 12.339 8.04435 12.6029C8.33329 13.0744 8.33329 13.7163 8.33329 15C8.33329 16.2836 8.33329 16.9255 8.04435 17.397C7.88268 17.6609 7.66085 17.8827 7.39702 18.0444C6.92551 18.3333 6.28366 18.3333 4.99996 18.3333C3.71626 18.3333 3.07441 18.3333 2.6029 18.0444C2.33907 17.8827 2.11724 17.6609 1.95557 17.397C1.66663 16.9255 1.66663 16.2836 1.66663 15Z"
            stroke="#A1A1AA"
            stroke-width="1.25"
          />
          <path
            d="M11.6666 15C11.6666 13.7163 11.6666 13.0744 11.9555 12.6029C12.1172 12.339 12.339 12.1172 12.6029 11.9555C13.0744 11.6666 13.7163 11.6666 15 11.6666C16.2836 11.6666 16.9255 11.6666 17.397 11.9555C17.6609 12.1172 17.8827 12.339 18.0444 12.6029C18.3333 13.0744 18.3333 13.7163 18.3333 15C18.3333 16.2836 18.3333 16.9255 18.0444 17.397C17.8827 17.6609 17.6609 17.8827 17.397 18.0444C16.9255 18.3333 16.2836 18.3333 15 18.3333C13.7163 18.3333 13.0744 18.3333 12.6029 18.0444C12.339 17.8827 12.1172 17.6609 11.9555 17.397C11.6666 16.9255 11.6666 16.2836 11.6666 15Z"
            stroke="#A1A1AA"
            stroke-width="1.25"
          />
          <path
            d="M1.66663 4.99996C1.66663 3.71626 1.66663 3.07441 1.95557 2.6029C2.11724 2.33907 2.33907 2.11724 2.6029 1.95557C3.07441 1.66663 3.71626 1.66663 4.99996 1.66663C6.28366 1.66663 6.92551 1.66663 7.39702 1.95557C7.66085 2.11724 7.88268 2.33907 8.04435 2.6029C8.33329 3.07441 8.33329 3.71626 8.33329 4.99996C8.33329 6.28366 8.33329 6.92551 8.04435 7.39702C7.88268 7.66085 7.66085 7.88268 7.39702 8.04435C6.92551 8.33329 6.28366 8.33329 4.99996 8.33329C3.71626 8.33329 3.07441 8.33329 2.6029 8.04435C2.33907 7.88268 2.11724 7.66085 1.95557 7.39702C1.66663 6.92551 1.66663 6.28366 1.66663 4.99996Z"
            stroke="#A1A1AA"
            stroke-width="1.25"
          />
          <path
            d="M11.6666 4.99996C11.6666 3.71626 11.6666 3.07441 11.9555 2.6029C12.1172 2.33907 12.339 2.11724 12.6029 1.95557C13.0744 1.66663 13.7163 1.66663 15 1.66663C16.2836 1.66663 16.9255 1.66663 17.397 1.95557C17.6609 2.11724 17.8827 2.33907 18.0444 2.6029C18.3333 3.07441 18.3333 3.71626 18.3333 4.99996C18.3333 6.28366 18.3333 6.92551 18.0444 7.39702C17.8827 7.66085 17.6609 7.88268 17.397 8.04435C16.9255 8.33329 16.2836 8.33329 15 8.33329C13.7163 8.33329 13.0744 8.33329 12.6029 8.04435C12.339 7.88268 12.1172 7.66085 11.9555 7.39702C11.6666 6.92551 11.6666 6.28366 11.6666 4.99996Z"
            stroke="#A1A1AA"
            stroke-width="1.25"
          />
        </svg>
      );
    case "list-view":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M1.66663 9.49992C1.66663 8.53467 1.86807 8.33325 2.83329 8.33325H17.1666C18.1319 8.33325 18.3333 8.53467 18.3333 9.49992V10.4999C18.3333 11.4652 18.1319 11.6666 17.1666 11.6666H2.83329C1.86807 11.6666 1.66663 11.4652 1.66663 10.4999V9.49992Z"
            stroke="#A1A1AA"
            stroke-width="1.25"
            stroke-linecap="round"
          />
          <path
            d="M1.66663 2.83341C1.66663 1.86819 1.86807 1.66675 2.83329 1.66675H17.1666C18.1319 1.66675 18.3333 1.86819 18.3333 2.83341V3.83341C18.3333 4.79864 18.1319 5.00008 17.1666 5.00008H2.83329C1.86807 5.00008 1.66663 4.79864 1.66663 3.83341V2.83341Z"
            stroke="#A1A1AA"
            stroke-width="1.25"
            stroke-linecap="round"
          />
          <path
            d="M1.66663 16.1667C1.66663 15.2014 1.86807 15 2.83329 15H17.1666C18.1319 15 18.3333 15.2014 18.3333 16.1667V17.1667C18.3333 18.1319 18.1319 18.3333 17.1666 18.3333H2.83329C1.86807 18.3333 1.66663 18.1319 1.66663 17.1667V16.1667Z"
            stroke="#A1A1AA"
            stroke-width="1.25"
            stroke-linecap="round"
          />
        </svg>
      );
    case "up-arrow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "12"}
          height={props.height || "12"}
          viewBox="0 0 12 12"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M6 2V10"
            stroke="#A1A1AA"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 4.49998C8.5 4.49998 6.6588 2.00001 6 2C5.3412 2 3.5 4.5 3.5 4.5"
            stroke="#A1A1AA"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "folder-comment":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "14"}
          height={props.height || "14"}
          viewBox="0 0 14 14"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M3.55766 11.0834C2.79926 11.0088 2.23112 10.781 1.8501 10.3999C1.16669 9.71657 1.16669 8.61657 1.16669 6.41671V6.12504C1.16669 3.92515 1.16669 2.82521 1.8501 2.14179C2.53352 1.45837 3.63346 1.45837 5.83335 1.45837H8.16669C10.3666 1.45837 11.4665 1.45837 12.1499 2.14179C12.8334 2.82521 12.8334 3.92515 12.8334 6.12504V6.41671C12.8334 8.61657 12.8334 9.71657 12.1499 10.3999C11.4665 11.0834 10.3666 11.0834 8.16669 11.0834C7.83973 11.0907 7.57933 11.1155 7.32354 11.1738C6.62447 11.3347 5.97715 11.6924 5.33744 12.0044C4.42594 12.4488 3.97019 12.6711 3.68417 12.463C3.13701 12.0555 3.67184 10.7928 3.79169 10.2084"
            stroke="#A1A1AA"
            stroke-linecap="round"
          />
        </svg>
      );
    case "left-upgrade":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "40"}
          height={props.height || "100"}
          viewBox="0 0 40 100"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            opacity="0.3"
            d="M28.4235 53.3437L-11.6715 53.7577L-11.2625 47.6162L28.4235 53.3437Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M36.5487 69.5088L30.0099 109.069L24.032 107.602L36.5487 69.5088Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M26.3959 59.6536L-7.27998 81.4188L-10.2144 76.0081L26.3959 59.6536Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M30.6387 36.895L3.87488 7.03732L8.76003 3.29282L30.6387 36.895Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M28.1833 44.0483L-7.09638 24.9923L-9.59728 30.6165L28.1833 44.0483Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M33.4021 67.4833L4.52322 95.3004L9.12097 99.3927L33.4021 67.4833Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M35.3579 36.862L37.6949 -3.16706L31.5408 -3.05313L35.3579 36.862Z"
            fill="white"
          />
        </svg>
      );
    case "right-upgrade":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "59"}
          height={props.height || "85"}
          viewBox="0 0 59 85"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            opacity="0.3"
            d="M53.4235 70.3437L13.3285 70.7577L13.7375 64.6162L53.4235 70.3437Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M51.3959 76.6536L17.72 98.4188L14.7856 93.0081L51.3959 76.6536Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M55.6387 53.895L28.8749 24.0373L33.76 20.2928L55.6387 53.895Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M53.1833 61.0483L17.9036 41.9923L15.4027 47.6165L53.1833 61.0483Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M58.4021 84.4833L29.5232 112.3L34.121 116.393L58.4021 84.4833Z"
            fill="white"
          />
          <path
            opacity="0.3"
            d="M60.3579 53.862L62.6949 13.8329L56.5408 13.9469L60.3579 53.862Z"
            fill="white"
          />
        </svg>
      );
    case "copy-icon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M7.5 12.5C7.5 10.143 7.5 8.9645 8.23223 8.23223C8.9645 7.5 10.143 7.5 12.5 7.5H13.3333C15.6903 7.5 16.8688 7.5 17.6011 8.23223C18.3333 8.9645 18.3333 10.143 18.3333 12.5V13.3333C18.3333 15.6903 18.3333 16.8688 17.6011 17.6011C16.8688 18.3333 15.6903 18.3333 13.3333 18.3333H12.5C10.143 18.3333 8.9645 18.3333 8.23223 17.6011C7.5 16.8688 7.5 15.6903 7.5 13.3333V12.5Z"
            stroke="#F4F4F5"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.1667 7.50008C14.1647 5.03584 14.1274 3.75942 13.4101 2.88544C13.2716 2.71666 13.1168 2.5619 12.9481 2.42338C12.0261 1.66675 10.6563 1.66675 7.91675 1.66675C5.17718 1.66675 3.8074 1.66675 2.88544 2.42338C2.71666 2.56189 2.5619 2.71666 2.42338 2.88544C1.66675 3.8074 1.66675 5.17718 1.66675 7.91675C1.66675 10.6563 1.66675 12.0261 2.42338 12.9481C2.56189 13.1168 2.71666 13.2716 2.88544 13.4101C3.75942 14.1274 5.03584 14.1647 7.50008 14.1667"
            stroke="#F4F4F5"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "upload":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "32"}
          height={props.height || "32"}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M23.3035 12.015C23.3134 12.0149 23.3234 12.0149 23.3334 12.0149C26.6471 12.0149 29.3334 14.7061 29.3334 18.026C29.3334 21.12 27.0001 23.668 24.0001 24.0002M23.3035 12.015C23.3233 11.795 23.3334 11.5722 23.3334 11.347C23.3334 7.28951 20.0502 4.00024 16.0001 4.00024C12.1644 4.00024 9.01652 6.95047 8.69397 10.7095M23.3035 12.015C23.1671 13.5304 22.5715 14.913 21.6571 16.0222M8.69397 10.7095C5.31205 11.0319 2.66675 13.8854 2.66675 17.358C2.66675 20.5892 4.95709 23.2845 8.00008 23.9033M8.69397 10.7095C8.90443 10.6894 9.11772 10.6791 9.33341 10.6791C10.8345 10.6791 12.2197 11.1762 13.3341 12.0149"
            stroke="#27272A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.0001 17.3335V28.0002M16.0001 17.3335C15.0665 17.3335 13.3221 19.9926 12.6667 20.6668M16.0001 17.3335C16.9337 17.3335 18.6781 19.9926 19.3334 20.6668"
            stroke="#27272A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "workspace-comment":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "24"}
          height={props.height || "24"}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5"
            stroke="#3F3F46"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      );
    case "three-dothole":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "24"}
          height={props.height || "24"}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z"
            stroke="#3F3F46"
            stroke-width="1.5"
          />
          <path
            d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"
            stroke="#3F3F46"
            stroke-width="1.5"
          />
          <path
            d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z"
            stroke="#3F3F46"
            stroke-width="1.5"
          />
        </svg>
      );
    case "assest-upload":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M10.0003 6.66675V13.3334M13.3337 10.0001H6.66699"
            stroke="#3F3F46"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.08301 9.99992C2.08301 6.26797 2.08301 4.40199 3.24237 3.24262C4.40175 2.08325 6.26772 2.08325 9.99967 2.08325C13.7316 2.08325 15.5976 2.08325 16.757 3.24262C17.9163 4.40199 17.9163 6.26797 17.9163 9.99992C17.9163 13.7318 17.9163 15.5978 16.757 16.7573C15.5976 17.9166 13.7316 17.9166 9.99967 17.9166C6.26772 17.9166 4.40175 17.9166 3.24237 16.7573C2.08301 15.5978 2.08301 13.7318 2.08301 9.99992Z"
            stroke="#3F3F46"
          />
        </svg>
      );
    case "app-tour":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "24"}
          height={props.height || "24"}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
            stroke="#27272A"
            stroke-width="1.5"
          />
          <path
            d="M12.8638 7.72209L13.7437 9.49644C13.8637 9.74344 14.1837 9.98035 14.4536 10.0257L16.0485 10.2929C17.0684 10.4643 17.3083 11.2103 16.5734 11.9462L15.3335 13.1964C15.1236 13.4081 15.0086 13.8164 15.0736 14.1087L15.4285 15.6562C15.7085 16.8812 15.0636 17.355 13.9887 16.7148L12.4939 15.8226C12.2239 15.6613 11.7789 15.6613 11.504 15.8226L10.0091 16.7148C8.93925 17.355 8.28932 16.8761 8.56929 15.6562L8.92425 14.1087C8.98925 13.8164 8.87426 13.4081 8.66428 13.1964L7.42442 11.9462C6.6945 11.2103 6.92947 10.4643 7.94936 10.2929L9.54419 10.0257C9.80916 9.98035 10.1291 9.74344 10.2491 9.49644L11.129 7.72209C11.609 6.7593 12.3889 6.7593 12.8638 7.72209Z"
            stroke="#27272A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "dropdown-icon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "16"}
          height={props.height || "16"}
          viewBox="0 0 16 16"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M12 6.00003C12 6.00003 9.05407 10 8 10C6.94587 10 4 6 4 6"
            stroke="#52525B"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "artboard-closebtn":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "24"}
          height={props.height || "24"}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M2.50049 12C2.50049 7.52166 2.50049 5.28249 3.89173 3.89124C5.28298 2.5 7.52215 2.5 12.0005 2.5C16.4788 2.5 18.718 2.5 20.1093 3.89124C21.5005 5.28249 21.5005 7.52166 21.5005 12C21.5005 16.4783 21.5005 18.7175 20.1093 20.1088C18.718 21.5 16.4788 21.5 12.0005 21.5C7.52215 21.5 5.28298 21.5 3.89173 20.1088C2.50049 18.7175 2.50049 16.4783 2.50049 12Z"
            fill="#FBE5E7"
          />
          <path
            d="M15 9L9 14.9996M15 15L9 9.00039"
            stroke="#DC3545"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "back-left":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "24"}
          height={props.height || "24"}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "user-status":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "6"}
          height={props.height || "6"}
          viewBox="0 0 6 6"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <circle cx="3" cy="3" r="3" fill="#22C55E" />
        </svg>
      );
    case "status-dropdown":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "16"}
          height={props.height || "16"}
          viewBox="0 0 16 16"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#94A3B8"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "status-tick":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "16"}
          height={props.height || "16"}
          viewBox="0 0 16 16"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M2.40002 10C2.40002 10 3.60002 10 5.20002 12.8C5.20002 12.8 9.64707 5.46666 13.6 4"
            stroke={style?.stroke || "#000000"}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "user-group":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "25"}
          height={props.height || "24"}
          viewBox="0 0 25 24"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M21.1906 18C21.9399 18 22.5359 17.5285 23.0711 16.8691C24.1665 15.5194 22.3679 14.4408 21.682 13.9126C20.9846 13.3756 20.206 13.0714 19.4166 13M18.4166 11C19.7973 11 20.9166 9.88071 20.9166 8.5C20.9166 7.11929 19.7973 6 18.4166 6"
            stroke="#18181B"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3.64258 18C2.89328 18 2.29729 17.5285 1.76217 16.8691C0.666713 15.5194 2.46529 14.4408 3.15127 13.9126C3.84859 13.3756 4.6272 13.0714 5.41662 13M5.91662 11C4.53591 11 3.41662 9.88071 3.41662 8.5C3.41662 7.11929 4.53591 6 5.91662 6"
            stroke="#18181B"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M8.50042 15.1112C7.47865 15.743 4.79961 17.0331 6.43132 18.6474C7.2284 19.436 8.11614 20 9.23225 20H15.601C16.7171 20 17.6048 19.436 18.4019 18.6474C20.0336 17.0331 17.3546 15.743 16.3328 15.1112C13.9367 13.6296 10.8965 13.6296 8.50042 15.1112Z"
            stroke="#18181B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9166 7.5C15.9166 9.433 14.3496 11 12.4166 11C10.4836 11 8.91663 9.433 8.91663 7.5C8.91663 5.567 10.4836 4 12.4166 4C14.3496 4 15.9166 5.567 15.9166 7.5Z"
            stroke="#18181B"
            stroke-width="1.5"
          />
        </svg>
      );
    case "version-filter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M18.4375 6.52083H1.5625C1.32491 6.52083 1.09705 6.42645 0.92905 6.25845C0.761049 6.09045 0.666667 5.86259 0.666667 5.625C0.666667 5.38741 0.761049 5.15955 0.92905 4.99155C1.09705 4.82355 1.32491 4.72917 1.5625 4.72917H18.4375C18.6751 4.72917 18.9029 4.82355 19.0709 4.99155C19.239 5.15955 19.3333 5.38741 19.3333 5.625C19.3333 5.86259 19.239 6.09045 19.0709 6.25845C18.9029 6.42645 18.6751 6.52083 18.4375 6.52083ZM15.3125 10.8958H4.6875C4.44991 10.8958 4.22205 10.8015 4.05405 10.6334C3.88605 10.4654 3.79167 10.2376 3.79167 10C3.79167 9.76241 3.88605 9.53455 4.05405 9.36655C4.22205 9.19855 4.44991 9.10417 4.6875 9.10417H15.3125C15.5501 9.10417 15.7779 9.19855 15.9459 9.36655C16.114 9.53455 16.2083 9.76241 16.2083 10C16.2083 10.2376 16.114 10.4654 15.9459 10.6334C15.7779 10.8015 15.5501 10.8958 15.3125 10.8958ZM11.5625 15.2708H8.4375C8.19991 15.2708 7.97205 15.1765 7.80405 15.0084C7.63605 14.8404 7.54167 14.6126 7.54167 14.375C7.54167 14.1374 7.63605 13.9096 7.80405 13.7416C7.97205 13.5735 8.19991 13.4792 8.4375 13.4792H11.5625C11.8001 13.4792 12.0279 13.5735 12.1959 13.7416C12.364 13.9096 12.4583 14.1374 12.4583 14.375C12.4583 14.6126 12.364 14.8404 12.1959 15.0084C12.0279 15.1765 11.8001 15.2708 11.5625 15.2708Z"
            fill="#27272A"
            stroke="white"
            stroke-width="0.3833333"
          />
        </svg>
      );
    case "version-add":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <g clip-path="url(#clip0_619_3063)">
            <path
              d="M11.2487 11.083H11.082V11.2497V16.6663C11.082 16.9537 10.9679 17.2292 10.7647 17.4324C10.5616 17.6355 10.286 17.7497 9.9987 17.7497C9.71138 17.7497 9.43583 17.6355 9.23267 17.4324C9.0295 17.2292 8.91536 16.9537 8.91536 16.6663V11.2497V11.083H8.7487H3.33203C3.04471 11.083 2.76916 10.9689 2.566 10.7657C2.36283 10.5625 2.2487 10.287 2.2487 9.99967C2.2487 9.71236 2.36283 9.43681 2.566 9.23364C2.76916 9.03048 3.04471 8.91634 3.33203 8.91634H8.7487H8.91536V8.74967V3.33301C8.91536 3.04569 9.0295 2.77014 9.23267 2.56698C9.43583 2.36381 9.71138 2.24967 9.9987 2.24967C10.286 2.24967 10.5616 2.36381 10.7647 2.56698C10.9679 2.77014 11.082 3.04569 11.082 3.33301V8.74967V8.91634H11.2487H16.6654C16.9527 8.91634 17.2282 9.03048 17.4314 9.23364C17.6346 9.43681 17.7487 9.71236 17.7487 9.99967C17.7487 10.287 17.6346 10.5625 17.4314 10.7657C17.2282 10.9689 16.9527 11.083 16.6654 11.083H11.2487Z"
              fill="#27272A"
              stroke="white"
              stroke-width="0.333333"
            />
          </g>
          <defs>
            <clipPath id="clip0_619_3063">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "version-close":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <g clip-path="url(#clip0_619_3067)">
            <path
              d="M10.1162 11.6498L9.99837 11.532L9.88052 11.6498L5.46218 16.0682L5.46216 16.0682L5.4601 16.0703C5.36021 16.1738 5.24071 16.2564 5.10857 16.3132C4.97642 16.3701 4.83428 16.4 4.69044 16.4013C4.5466 16.4027 4.40393 16.3753 4.27077 16.3209C4.13761 16.2665 4.01661 16.1861 3.91485 16.0844C3.81308 15.9828 3.73259 15.8619 3.67805 15.7288C3.62352 15.5956 3.59604 15.453 3.59722 15.3092C3.59841 15.1653 3.62822 15.0231 3.68494 14.8909C3.74165 14.7587 3.82412 14.6392 3.92754 14.5392L3.92756 14.5392L3.92955 14.5372L8.34955 10.1172L8.46741 9.99935L8.34954 9.8815L3.92871 5.4615L3.92872 5.46148L3.92671 5.45953C3.82329 5.35955 3.74082 5.23997 3.6841 5.10777C3.62739 4.97558 3.59757 4.83341 3.59639 4.68956C3.59521 4.54572 3.62269 4.40308 3.67722 4.26997C3.73175 4.13686 3.81225 4.01594 3.91402 3.91427C4.01578 3.8126 4.13677 3.73222 4.26994 3.67781C4.4031 3.6234 4.54577 3.59606 4.68961 3.59738C4.83345 3.59869 4.97559 3.62865 5.10774 3.68548C5.23988 3.74232 5.35938 3.82491 5.45927 3.92842L5.45925 3.92844L5.46135 3.93054L9.88052 8.34971L9.99838 8.46757L10.1162 8.3497L14.5346 3.93053L14.5346 3.93052C14.6352 3.82989 14.7546 3.75005 14.886 3.69557C15.0175 3.64109 15.1583 3.61304 15.3006 3.613C15.4429 3.61297 15.5838 3.64096 15.7152 3.69538C15.8467 3.74979 15.9662 3.82957 16.0668 3.93015C16.1674 4.03074 16.2473 4.15016 16.3017 4.28159C16.3562 4.41303 16.3843 4.55391 16.3843 4.69619C16.3843 4.83847 16.3563 4.97936 16.3019 5.11082C16.2475 5.24228 16.1677 5.36174 16.0672 5.46237L11.6472 9.8815L11.5293 9.99937L11.6472 10.1172L16.068 14.5364C16.068 14.5364 16.068 14.5364 16.068 14.5364C16.2713 14.7396 16.3854 15.0153 16.3854 15.3027C16.3854 15.5901 16.2713 15.8658 16.068 16.069C15.8648 16.2722 15.5891 16.3864 15.3017 16.3864C15.0143 16.3864 14.7386 16.2722 14.5354 16.069L10.1162 11.6498Z"
              fill="#27272A"
              stroke="white"
              stroke-width="0.333333"
            />
          </g>
          <defs>
            <clipPath id="clip0_619_3067">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "search-icon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M14.5834 14.5835L18.3334 18.3335"
            stroke="#A1A1AA"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.6666 9.1665C16.6666 5.02437 13.3088 1.6665 9.16663 1.6665C5.02449 1.6665 1.66663 5.02437 1.66663 9.1665C1.66663 13.3087 5.02449 16.6665 9.16663 16.6665C13.3088 16.6665 16.6666 13.3087 16.6666 9.1665Z"
            stroke="#A1A1AA"
            stroke-width="1.25"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "version-filter1":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "44px"}
          height={props.height || "44px"}
          viewBox="0 0 44 44"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <rect
            x="0.5"
            y="0.98877"
            width="43"
            height="42.0222"
            rx="7.5"
            stroke="#D4D4D8"
          />
          <path
            d="M13 16.9331H15.9333"
            stroke="#27272A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 26.7104H18.8667"
            stroke="#27272A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.6667 26.7104H30.6001"
            stroke="#27272A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.7334 16.9331H30.6001"
            stroke="#27272A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9333 16.9328C15.9333 16.0217 15.9333 15.5661 16.0822 15.2067C16.2807 14.7275 16.6614 14.3468 17.1405 14.1484C17.4999 13.9995 17.9555 13.9995 18.8667 13.9995C19.7779 13.9995 20.2334 13.9995 20.5929 14.1484C21.072 14.3468 21.4527 14.7275 21.6512 15.2067C21.8 15.5661 21.8 16.0217 21.8 16.9328C21.8 17.844 21.8 18.2996 21.6512 18.659C21.4527 19.1381 21.072 19.5188 20.5929 19.7173C20.2334 19.8662 19.7779 19.8662 18.8667 19.8662C17.9555 19.8662 17.4999 19.8662 17.1405 19.7173C16.6614 19.5188 16.2807 19.1381 16.0822 18.659C15.9333 18.2996 15.9333 17.844 15.9333 16.9328Z"
            stroke="#27272A"
            stroke-width="1.5"
          />
          <path
            d="M21.8 26.7102C21.8 25.799 21.8 25.3435 21.9489 24.984C22.1474 24.5049 22.5281 24.1242 23.0072 23.9257C23.3666 23.7769 23.8222 23.7769 24.7334 23.7769C25.6446 23.7769 26.1001 23.7769 26.4596 23.9257C26.9387 24.1242 27.3194 24.5049 27.5179 24.984C27.6667 25.3435 27.6667 25.799 27.6667 26.7102C27.6667 27.6214 27.6667 28.0769 27.5179 28.4364C27.3194 28.9155 26.9387 29.2962 26.4596 29.4947C26.1001 29.6435 25.6446 29.6435 24.7334 29.6435C23.8222 29.6435 23.3666 29.6435 23.0072 29.4947C22.5281 29.2962 22.1474 28.9155 21.9489 28.4364C21.8 28.0769 21.8 27.6214 21.8 26.7102Z"
            stroke="#27272A"
            stroke-width="1.5"
          />
        </svg>
      );
    case "version-filter2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "44"}
          height={props.height || "44"}
          viewBox="0 0 44 44"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <rect
            x="0.5"
            y="0.98877"
            width="43"
            height="42.0222"
            rx="7.5"
            stroke="#D4D4D8"
          />
          <path
            d="M24.8571 25.6468L26.0649 26.955C26.7077 27.6514 27.0291 27.9995 27.4286 27.9995C27.828 27.9995 28.1494 27.6514 28.7923 26.955L30 25.6468M27.4286 27.9228V24.0727C27.4286 22.1072 27.4286 21.1245 27.0456 20.258C26.6625 19.3914 25.9422 18.7443 24.5014 17.45L24 16.9995"
            stroke="#27272A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 16.9995C14 15.9494 14 15.4244 14.2044 15.0233C14.3841 14.6705 14.671 14.3836 15.0238 14.2039C15.4249 13.9995 15.9499 13.9995 17 13.9995C18.0501 13.9995 18.5751 13.9995 18.9762 14.2039C19.329 14.3836 19.6159 14.6705 19.7956 15.0233C20 15.4244 20 15.9494 20 16.9995C20 18.0496 20 18.5747 19.7956 18.9757C19.6159 19.3285 19.329 19.6154 18.9762 19.7952C18.5751 19.9995 18.0501 19.9995 17 19.9995C15.9499 19.9995 15.4249 19.9995 15.0238 19.7952C14.671 19.6154 14.3841 19.3285 14.2044 18.9757C14 18.5747 14 18.0496 14 16.9995Z"
            stroke="#27272A"
            stroke-width="1.5"
          />
          <path
            d="M14 26.9995C14 25.9494 14 25.4243 14.2044 25.0233C14.3841 24.6705 14.671 24.3836 15.0238 24.2039C15.4249 23.9995 15.9499 23.9995 17 23.9995C18.0501 23.9995 18.5751 23.9995 18.9762 24.2039C19.329 24.3836 19.6159 24.6705 19.7956 25.0233C20 25.4243 20 25.9494 20 26.9995C20 28.0496 20 28.5747 19.7956 28.9757C19.6159 29.3285 19.329 29.6154 18.9762 29.7952C18.5751 29.9995 18.0501 29.9995 17 29.9995C15.9499 29.9995 15.4249 29.9995 15.0238 29.7952C14.671 29.6154 14.3841 29.3285 14.2044 28.9757C14 28.5747 14 28.0496 14 26.9995Z"
            stroke="#27272A"
            stroke-width="1.5"
          />
        </svg>
      );
    case "clock":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "14"}
          height={props.height || "14"}
          viewBox="0 0 14 14"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M6.99996 12.8332C10.2216 12.8332 12.8333 10.2215 12.8333 6.99984C12.8333 3.77818 10.2216 1.1665 6.99996 1.1665C3.7783 1.1665 1.16663 3.77818 1.16663 6.99984C1.16663 10.2215 3.7783 12.8332 6.99996 12.8332Z"
            stroke="#023876"
            stroke-width="1.5"
          />
          <path
            d="M7 4.6665V6.99984L8.16667 8.1665"
            stroke="#023876"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "resolve-check":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M18.3333 9.99984C18.3333 5.39746 14.6023 1.6665 9.99996 1.6665C5.39758 1.6665 1.66663 5.39746 1.66663 9.99984C1.66663 14.6022 5.39758 18.3332 9.99996 18.3332C14.6023 18.3332 18.3333 14.6022 18.3333 9.99984Z"
            fill="#00B8A8"
          />
          <path
            d="M6.66663 10.6248C6.66663 10.6248 7.99996 11.3853 8.66663 12.4998C8.66663 12.4998 10.6666 8.12484 13.3333 6.6665"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "comment-reply":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "20"}
          height={props.height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <path
            d="M7.08337 12.0832H12.9167M7.08337 7.9165H10"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.8088 17.4089C15.2946 17.1772 18.0713 14.3612 18.2998 10.8259C18.3445 10.1341 18.3445 9.41758 18.2998 8.72575C18.0713 5.19048 15.2946 2.37444 11.8088 2.14272C10.6195 2.06367 9.37796 2.06384 8.19112 2.14272C4.70528 2.37444 1.92863 5.19048 1.70016 8.72575C1.65545 9.41758 1.65545 10.1341 1.70016 10.8259C1.78337 12.1135 2.35282 13.3057 3.02322 14.3123C3.41247 15.0171 3.15557 15.8967 2.75013 16.665C2.4578 17.219 2.31163 17.496 2.42899 17.6961C2.54636 17.8962 2.80851 17.9026 3.33282 17.9153C4.36968 17.9406 5.06886 17.6466 5.62386 17.2373C5.93862 17.0052 6.09602 16.8892 6.20449 16.8758C6.31296 16.8625 6.52643 16.9504 6.9533 17.1262C7.33696 17.2842 7.78242 17.3817 8.19112 17.4089C9.37796 17.4878 10.6195 17.488 11.8088 17.4089Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "step-progress":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width || "13"}
          height={props.width || "14"}
          viewBox="0 0 13 14"
          fill="none"
          className={className}
          style={style}
          {...props}
        >
          <circle
            cx="6.5"
            cy="7"
            r="4.5"
            fill="#27272A"
            stroke="#A1A1AA"
            stroke-width="4"
          />
        </svg>
      );
    case "sun":
      return (
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 270 270"
          width={props.width || "22px"}
          height={props.height || "22px"}
          className={className}
          style={style}
          {...props}
        >
          <path
            class="cls-1"
            fill="#fff"
            d="M134.51,90.89c-24.28.15-43.91,19.77-43.73,43.69.19,24.89,19.68,44.46,44.2,44.38,23.75-.07,44.1-20.38,43.94-43.84-.17-24.73-19.91-44.39-44.41-44.24Z"
          />
          <path
            class="cls-1"
            fill="#fff"
            d="M249.68,129.05c-.87-.71-1.91-1.33-3.04-1.88-.65-.32-1.29-.64-1.94-.96-12.28-6.79-25.14-12.44-37.61-18.86-.01-.01-.02-.02-.03-.02-.08-.04-.17-.09-.25-.13-2.37-1.22-1.8-2.54-1.15-4.45,4.6-13.66,9.02-27.38,13.66-41.02,1.28-3.77,1.48-7.25-1.47-10.15-1.84-1.81-3.91-2.32-6.13-2.11-1.16.1-2.35.41-3.58.83-13.33,4.55-26.76,8.83-40.08,13.41-2.75.95-4.29,1.01-5.73-1.31-.01-.02-.02-.03-.03-.05-.05-.08-.09-.17-.15-.26-.06-.13-.13-.26-.19-.4-.75-1.57-1.51-3.13-2.27-4.69-.03-.07-.07-.14-.1-.21-1.34-2.77-2.7-5.52-4.06-8.28-.15-.29-.29-.58-.43-.87-3.85-7.78-7.75-15.55-11.54-23.36-.81-1.68-1.73-3.19-2.89-4.36-1.48-1.51-3.36-2.46-5.95-2.49-4.63-.05-6.42,3.34-8.16,6.89-6.05,12.33-12.34,24.55-18.23,36.94-1.52,3.2-2.95,3.84-6.26,2.71-13.31-4.58-26.75-8.75-40.03-13.37-1.86-.65-4.11-.07-5.81-1.15-1.09.13-2.15.47-3.16,1.09-.57.34-1.12.77-1.66,1.3-.56.55-.99,1.1-1.31,1.67-.56.97-.81,1.97-.85,2.99t0,.02c-.08,1.93.57,3.93,1.26,5.96,1.08,3.16,2.14,6.32,3.19,9.48.03.09.06.19.1.28,1.03,3.18,2.1,6.35,3.18,9.52.06.15.11.3.16.45,2.43,7.02,4.93,14.02,7.21,21.09.99,3.08-.57,3.69-2.52,4.66-12.59,6.25-25.15,12.56-37.76,18.76-.91.45-1.8.91-2.61,1.43t-.02.02c-.66.41-1.28.86-1.81,1.38-1.38,1.32-2.26,3.02-2.22,5.48.04,2.57,1.03,4.34,2.56,5.71,1.15,1.05,2.59,1.86,4.15,2.63,1.76.86,3.51,1.73,5.27,2.6,4.97,2.62,10.02,5.1,15.09,7.55,5.65,2.83,11.32,5.64,17.02,8.38,1.59.76,2.53,1.47,2.91,2.44,0,0,.01.01.01.02.23.9-.15,1.89-.54,3.03-4.47,13.32-8.9,26.66-13.43,39.97-.75,2.19-1.35,4.32-1.08,6.35h0c.19,1.48.85,2.9,2.24,4.24,3.24,3.13,6.82,2.45,10.64,1.14,13.16-4.5,26.42-8.71,39.54-13.33,2.23-.78,3.59-.81,4.71.32l.03.03c.46.47.88,1.14,1.3,2.03,5.57,11.65,11.55,23.1,17.11,34.75.59,1.23,1.27,2.4,1.98,3.54.74,1.19,1.52,2.35,2.28,3.52,1.39,1.56,3.19,2.58,5.82,2.61,2.44.03,4.11-.85,5.4-2.2,1.5-2.64,3.01-5.29,4.37-8,5.74-11.38,11.52-22.73,16.96-34.25,1.51-3.2,2.88-3.42,5.99-2.33,13.12,4.6,26.37,8.82,39.53,13.31.83.28,1.64.53,2.44.72,1.16.28,2.28.42,3.38.33,1.66-.12,3.27-.76,4.8-2.25,2.22-2.17,2.52-4.5,2.09-6.94-.2-1.2-.58-2.43-1-3.68-.02-.05-.03-.1-.05-.15-3.93-13.74-9.14-27.06-13.47-40.66-.09-.26-.15-.51-.19-.73-.01-.08-.02-.15-.03-.22,0-.11-.02-.21-.02-.3-.01-.15,0-.28.02-.41.17-1.18,1.23-1.65,2.55-2.3,12.91-6.4,25.74-12.98,38.66-19.34,2.11-1.04,3.88-2.27,4.96-3.96.77-1.17,1.2-2.56,1.19-4.26-.03-2.62-1.16-4.46-2.92-5.89ZM192.71,146.04c.39-2.14.67-4.31.81-6.48-2.38,30.07-28.34,54.42-58.96,54.21-26.94-.18-49.37-18.22-56.31-43.02-.12-.4-.22-.79-.32-1.19-.11-.41-.21-.81-.3-1.22-.11-.41-.2-.83-.28-1.24-3.85-18.82,1.64-39.16,16.41-53.9,19.39-19.36,49.77-22.05,72.27-8.09.2.13.4.26.6.39.31.19.61.39.91.59.39.26.78.52,1.17.81,3.08,2.18,5.94,4.65,8.55,7.36.02.02.04.04.05.06.28.29.56.59.85.89.37.39.72.78,1.06,1.18.37.41.72.83,1.05,1.25.35.41.68.83,1,1.25.33.41.64.82.93,1.23h.01c.31.43.62.85.91,1.28.41.58.8,1.17,1.18,1.76.27.4.52.79.75,1.2.26.4.5.81.73,1.22.25.41.48.82.7,1.24.46.83.89,1.68,1.31,2.54.24.48.46.96.68,1.44.18.38.35.77.51,1.16.19.44.37.88.55,1.32,0,.02.01.03.02.05.17.43.33.86.48,1.29.14.33.26.67.37,1.01.12.34.24.69.35,1.04.19.56.37,1.12.53,1.69.1.32.19.65.28.98.08.27.16.55.22.82.13.47.24.94.35,1.41.12.47.22.95.32,1.43.1.48.2.96.28,1.44.1.48.18.97.25,1.46.08.5.15.99.21,1.49.06.43.11.85.15,1.28.01.04.02.08.01.12.02.2.05.39.06.59.02.1.02.2.03.3.01.17.03.34.04.51,0-.07,0-.14-.01-.21.48,5.36.23,10.76-.76,16.06Z"
          />
        </svg>
      );
    case "moon":
      return (
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 270 270"
          width={props.width || "22px"}
          height={props.height || "22px"}
          className={className}
          style={style}
          {...props}
        >
          <path
            fill="#626262"
            d="M137.17,250.04c-57.56-.44-104.68-39-116.29-95.18-9.81-47.47,13.58-99.12,55.72-123.18,7.67-4.38,15.57-8.14,24.01-10.81,3-.95,5.78-1.81,8.21,1,2.52,2.92,1.03,5.59-.6,8.19-10.8,17.18-15,35.92-13.91,56.11,2.25,41.56,38.3,79.45,79.59,83.99,24.05,2.65,45.86-2.48,65.63-16.38,2.85-2,5.65-4.7,9.38-2.18,3.75,2.54,2.26,6.12,1.42,9.51-12.88,51.96-60.42,89.32-113.16,88.92Z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
