import React from 'react'

interface IconProps {
  classes?: string;
}



const Instagram = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      fill="none"
      viewBox="0 0 70 70"
      className={classes}
    >
      <path
        d="M34.704 17.242c9.697 0 17.702 8.005 17.702 17.703 0 9.851-8.005 17.702-17.702 17.702-9.852 0-17.703-7.85-17.703-17.702 0-9.698 7.85-17.703 17.703-17.703zm0 29.248c6.31 0 11.39-5.08 11.39-11.545 0-6.312-5.08-11.392-11.39-11.392-6.466 0-11.546 5.08-11.546 11.392 0 6.465 5.234 11.545 11.546 11.545zm22.474-29.864a4.139 4.139 0 01-4.156 4.156 4.139 4.139 0 01-4.156-4.156 4.139 4.139 0 014.156-4.156 4.139 4.139 0 014.156 4.156zm11.7 4.156c.307 5.696.307 22.783 0 28.479-.309 5.541-1.54 10.313-5.542 14.47-4.003 4.002-8.929 5.233-14.47 5.541-5.696.308-22.783.308-28.478 0-5.542-.308-10.314-1.54-14.47-5.542C1.915 59.574.684 54.802.376 49.26c-.308-5.695-.308-22.782 0-28.477.308-5.542 1.54-10.468 5.542-14.47C10.074 2.31 14.846 1.079 20.388.77 26.083.463 43.17.463 48.866.77c5.541.308 10.467 1.54 14.47 5.542 4.002 4.002 5.233 8.928 5.541 14.47zm-7.39 34.482c1.848-4.464 1.386-15.24 1.386-20.32 0-4.925.462-15.7-1.386-20.319-1.231-2.925-3.54-5.388-6.465-6.465-4.618-1.847-15.394-1.386-20.32-1.386-5.08 0-15.855-.461-20.319 1.386-3.079 1.231-5.388 3.54-6.62 6.465C5.919 19.243 6.38 30.02 6.38 34.945c0 5.08-.462 15.855 1.385 20.319 1.231 3.079 3.54 5.388 6.62 6.62 4.463 1.846 15.239 1.385 20.319 1.385 4.925 0 15.701.461 20.319-1.386 2.925-1.231 5.388-3.54 6.465-6.619z"
      ></path>
    </svg>
  )
}

const Twitter = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="79"
      height="64"
      fill="none"
      viewBox="0 0 79 64"
      className={classes}
    >
      <path
        d="M70.767 15.935v2.155c0 21.397-16.163 45.873-45.872 45.873-9.236 0-17.703-2.617-24.784-7.235 1.232.154 2.463.308 3.848.308 7.543 0 14.47-2.617 20.012-6.927-7.081-.154-13.085-4.772-15.086-11.237 1.078.154 2.002.308 3.08.308 1.385 0 2.924-.308 4.155-.616-7.389-1.54-12.93-8.005-12.93-15.855v-.154c2.155 1.231 4.772 1.847 7.389 2-4.464-2.924-7.235-7.85-7.235-13.392 0-3.078.77-5.85 2.155-8.158 8.004 9.698 20.011 16.163 33.404 16.933a15.18 15.18 0 01-.462-3.695C38.44 7.315 45.676.08 54.604.08c4.618 0 8.774 1.847 11.853 5.08 3.54-.77 7.081-2.155 10.16-4.002-1.232 3.848-3.695 6.927-7.081 8.928 3.233-.308 6.465-1.232 9.236-2.463-2.155 3.232-4.926 6.003-8.005 8.312z"
      ></path>
    </svg>
  )
}


const Linkedin = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      fill="none"
      viewBox="0 0 70 70"
      className={classes}
    >
      <path
        d="M16.06 69.5H1.744V23.473H16.06V69.5zM8.825 17.316c-4.464 0-8.158-3.848-8.158-8.467C.667 4.385 4.36.691 8.825.691c4.618 0 8.313 3.694 8.313 8.158 0 4.618-3.695 8.467-8.313 8.467zM69.475 69.5H55.315V47.18c0-5.388-.154-12.161-7.543-12.161-7.39 0-8.467 5.695-8.467 11.699V69.5H24.988V23.473h13.7v6.312h.155c2-3.54 6.619-7.39 13.546-7.39 14.47 0 17.24 9.545 17.24 21.86V69.5h-.153z"
      ></path>
    </svg>
  )
}

const ArrowIcon = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="74"
      height="74"
      fill="none"
      viewBox="0 0 74 74"
    >
      <g filter="url(#filter0_d_96_149)">
        <rect
          width="44"
          height="44"
          x="15"
          y="15"
          fill="#041478"
          rx="22"
        ></rect>
      </g>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M37 42.333L42.333 37m0 0L37 31.667M42.333 37H31.667m18.666 0c0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.333-5.97-13.333-13.333 0-7.364 5.97-13.333 13.333-13.333 7.364 0 13.333 5.97 13.333 13.333z"
      ></path>
      <defs>
        <filter
          id="filter0_d_96_149"
          width="74"
          height="74"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.0156863 0 0 0 0 0.0784314 0 0 0 0 0.470588 0 0 0 0.5 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_96_149"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_96_149"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

const BankIcon = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 9v8m4.5-8v8m5-8v8M19 9v8M3 18.6v.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437C3.76 21 4.04 21 4.6 21h14.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C21 20.24 21 19.96 21 19.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C20.24 17 19.96 17 19.4 17H4.6c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437C3 17.76 3 18.04 3 18.6zm8.653-15.523l-7.4 1.645c-.447.099-.67.149-.838.269a1 1 0 00-.334.417C3 5.597 3 5.826 3 6.283V7.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437C3.76 9 4.04 9 4.6 9h14.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C21 8.24 21 7.96 21 7.4V6.283c0-.457 0-.686-.081-.875a1 1 0 00-.335-.417c-.166-.12-.39-.17-.837-.27l-7.4-1.644a2.083 2.083 0 00-.26-.049 1 1 0 00-.174 0c-.066.006-.13.02-.26.05z"
      ></path>
    </svg>
  );
}

const BuildingIcon = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 11h4.8c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C21 12.52 21 13.08 21 14.2V21m-8 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C11.48 3 10.92 3 9.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C3 4.52 3 5.08 3 6.2V21m19 0H2M6.5 7h3m-3 4h3m-3 4h3"
      ></path>
    </svg>
  );
}

const CoinsIcon = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.938 15.938A7.001 7.001 0 0015 2a7.001 7.001 0 00-6.938 6.062M16 15a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );
}

const CoinsStackedIcon = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.938 15.938A7.001 7.001 0 0015 2a7.001 7.001 0 00-6.938 6.062M16 15a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );
}

const ConsistencyIcon = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="23"
      fill="none"
      viewBox="0 0 25 23"
    >
      <path
        stroke="#fff"
        strokeMiterlimit="10"
        d="M20.301 8.155l3.699 3.7-3.699 3.698M0 11.854h24M3.903 13.544v4.776M6.437 13.544v9.058M3.903 10.194V4.806M6.437 10.194V0M13.427 13.544v4.776M15.932 13.544v9.058M13.427 10.194V4.806M15.932 10.194V0"
      ></path>
    </svg>
  );
}

const FlexibilityIcon = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="24"
      fill="none"
      viewBox="0 0 26 24"
    >
      <path
        stroke="#fff"
        strokeMiterlimit="10"
        d="M25 12.985H14.693a1.71 1.71 0 00-1.708 1.708v9.159"
      ></path>
      <path
        stroke="#fff"
        strokeMiterlimit="10"
        d="M21.26 9.275l3.74 3.71-3.74 3.74M13.015 9.393V5.8M13.015 11.307V1M9.275 4.74L13.015 1l3.71 3.74M9.422 12.985H5.83M11.277 12.985H1.03M4.74 16.725L1 12.985l3.74-3.74"
      ></path>
    </svg>
  );
}

const ScaleIcon = ({ classes = 'fill-dark' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
      viewBox="0 0 26 26"
    >
      <path
        stroke="#fff"
        strokeMiterlimit="10"
        d="M16.619 9.381l3.567-3.601M14.7 11.267l9.155-9.123M17.527 1H25v7.439M9.382 9.381L5.813 5.78M11.3 11.267L2.144 2.144M1 8.439V1h7.473M9.382 16.585l-3.569 3.601M11.267 14.7l-9.123 9.122M8.473 24.966H1v-7.439M16.585 16.585l3.601 3.601M14.7 14.7l9.155 9.122M25 17.527v7.44h-7.473"
      ></path>
    </svg>
  );
}

const TechnologyIcon = ({ classes = 'fill-dark' }: IconProps) => { 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="26"
      fill="none"
      viewBox="0 0 27 26"
    >
      <path
        stroke="#fff"
        strokeMiterlimit="10"
        d="M8.406 17.852V8.019M8.716 7.735h9.858M18.884 8.02v9.832M18.574 18.136H8.716M13.594 21.903v-3.767M13.594 7.658V4.097M13.594 25a1.548 1.548 0 100-3.097 1.548 1.548 0 000 3.097zM18.91 14.368h4.31M22.858 7.658v2.452l-1.497 1.522h-2.477M24.742 15.916a1.548 1.548 0 100-3.097 1.548 1.548 0 000 3.097zM22.858 7.658a1.548 1.548 0 100-3.097 1.548 1.548 0 000 3.097zM4.071 11.632h4.31M4.355 18.342V15.89l1.522-1.522h2.478M2.548 13.206a1.548 1.548 0 100-3.096 1.548 1.548 0 000 3.096zM4.355 21.439a1.548 1.548 0 100-3.097 1.548 1.548 0 000 3.097zM13.594 4.097a1.548 1.548 0 100-3.097 1.548 1.548 0 000 3.097z"
      ></path>
    </svg>
  );
}

interface LogoProps {
  variant?: 'default' | 'dark';
}

function Logo({variant = 'default' } : LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="184"
      height="60"
      fill="none"
      viewBox="0 0 184 60"
    >
      <g clipPath="url(#clip0_375_61)">
        <path
          className='fill-primary'
          d="M30.006 0C13.436 0 0 13.432 0 30.003c0 11.59 6.572 21.646 16.193 26.64L25.46 36.79h6.328l-.693 1.465a.545.545 0 00.731.724l6.098-2.962a.547.547 0 00.147-.881l-3.212-3.152a.542.542 0 00-.875.157l-.904 1.914H18.65c-1.49 0-2.795-1.218-2.798-2.709a2.703 2.703 0 01.288-1.224l.709-1.497 2.305-4.886h.006c.032-.067.058-.138.09-.205.029-.07.06-.135.093-.202 0 0 .01-.023.016-.032a9.41 9.41 0 013.023-3.562 9.335 9.335 0 015.424-1.721h17.215c1.571 0 2.95 1.282 2.953 2.85a2.812 2.812 0 01-.298 1.279l-.754 1.596h-21.68l-2.309 4.886h18.639c.987 0 1.898.33 2.622.894a4.272 4.272 0 011.667 3.392c0 .394-.054.782-.154 1.145-.06.218-.137.432-.233.631a1.082 1.082 0 01-.055.122l-.933 1.978h-.016a2.953 2.953 0 01-.119.276c0 .006 0 .006-.006.012 0 .007-.006.013-.01.02l-.147.31-.01.02v.006a9.328 9.328 0 01-1.526 2.193 9.37 9.37 0 01-6.873 2.991h-6.742l-7.517 16.164A29.886 29.886 0 0030.006 60C46.577 60 60.01 46.568 60.01 29.997 60.01 13.426 46.577 0 30.006 0zM22.9 36.79l-2.754 5.834h-5.597a2.865 2.865 0 01-2.379-4.096l.821-1.735h9.91v-.003z"
        ></path>
        <path
          fill={variant === 'dark' ? '#1C1C1C' : '#FFFFFF'} className='transition-all'
          d="M76.979 34.756c0 2.318 1.657 3.933 4.347 3.933 2.94 0 4.347-1.449 4.347-3.103 0-4.76-13.455-2.276-13.455-11.342 0-3.975 3.52-7.492 9.108-7.492 5.174 0 8.694 3.52 8.694 8.28h-4.76c0-2.317-1.45-3.725-3.934-3.725-2.485 0-3.934 1.45-3.934 2.899 0 4.513 13.455 2.112 13.455 11.592 0 3.725-3.767 7.45-9.521 7.45-5.755 0-9.316-3.52-9.316-8.486h4.969v-.006zM99.955 21.715h-7.659v-4.761h20.286v4.76h-7.658v21.32h-4.97v-21.32zM115.894 16.954h9.73c4.969 0 8.899 3.892 8.899 8.694 0 4.802-3.934 8.694-8.899 8.694h-4.761v8.694h-4.969V16.954zm9.73 12.628c2.071 0 3.933-1.863 3.933-3.934 0-2.07-1.862-3.933-3.933-3.933h-4.761v7.867h4.761z"
        ></path>
        <path
          className='fill-primary'
          d="M138.665 24.821h1.035l.414 2.69h.208c.289-.539.706-.994 1.161-1.45a5.575 5.575 0 013.808-1.448c2.113 0 3.395.993 4.222 1.987.497.58.869 1.24 1.161 1.946a7.589 7.589 0 011.282-1.946c.952-.994 2.318-1.987 4.514-1.987 3.312 0 6.001 2.731 6.001 7.245v11.178h-1.449V31.858c0-3.52-2.276-5.796-4.76-5.796-2.69 0-4.969 2.276-4.969 5.796v11.178h-1.449V31.858c0-3.52-2.277-5.796-4.761-5.796-2.69 0-4.969 2.276-4.969 5.796v11.178h-1.449V24.821zM182.96 38.481c-.994 2.318-3.52 4.76-7.246 4.76-4.802 0-8.694-3.933-8.694-9.316 0-5.382 3.934-9.316 8.486-9.316 4.552 0 8.072 3.726 8.072 8.486 0 .455-.083.744-.125 1.036l-.083.413h-14.904c.455 4.472 3.27 7.245 7.245 7.245 2.898 0 4.719-1.904 5.588-3.311h1.657l.004.003zm-.827-5.383c-.209-4.138-3.107-7.036-6.624-7.036-3.516 0-6.581 3.064-7.036 7.036h13.66z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_375_61">
          <path fill="#fff" d="M0 0H183.578V60H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export { ArrowIcon, Logo, Twitter, Instagram, Linkedin, CoinsIcon, CoinsStackedIcon, FlexibilityIcon, TechnologyIcon, ScaleIcon, ConsistencyIcon, BuildingIcon, BankIcon }; 

