export function Sword() {
  return (
    <svg
      width={40}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-full bg-[#fff] ring-1 ring-[#ebebeb] dark:ring-0"
    >
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M19.018 9.52a9 9 0 0 1 5-1.52c1.186 0 2.356.228 3.435.684a9 9 0 0 1 2.918 1.947 8.8 8.8 0 0 1 1.945 2.92A8.95 8.95 0 0 1 33 16.988a9.05 9.05 0 0 1-1.52 5.004 9 9 0 0 1-4.042 3.316 8.94 8.94 0 0 1-5.198.517 8.997 8.997 0 0 1-6.55-12.274 9.07 9.07 0 0 1 3.328-4.03m1.809 12.275a5.68 5.68 0 0 0 3.191.973 5.74 5.74 0 0 0 4.058-1.688 5.78 5.78 0 0 0 1.687-4.076c0-1.141-.334-2.266-.973-3.21a5.72 5.72 0 0 0-2.583-2.129 5.75 5.75 0 0 0-3.313-.334 5.73 5.73 0 0 0-2.933 1.582 5.7 5.7 0 0 0-1.566 2.95 5.8 5.8 0 0 0 .32 3.33 5.73 5.73 0 0 0 2.112 2.601"
        clipRule="evenodd"
      />
      <path
        fill="url(#b)"
        fillOpacity=".2"
        fillRule="evenodd"
        d="M19.018 9.52a9 9 0 0 1 5-1.52c1.186 0 2.356.228 3.435.684a9 9 0 0 1 2.918 1.947 8.8 8.8 0 0 1 1.945 2.92A8.95 8.95 0 0 1 33 16.988a9.05 9.05 0 0 1-1.52 5.004 9 9 0 0 1-4.042 3.316 8.94 8.94 0 0 1-5.198.517 8.997 8.997 0 0 1-6.55-12.274 9.07 9.07 0 0 1 3.328-4.03m1.809 12.275a5.68 5.68 0 0 0 3.191.973 5.74 5.74 0 0 0 4.058-1.688 5.78 5.78 0 0 0 1.687-4.076c0-1.141-.334-2.266-.973-3.21a5.72 5.72 0 0 0-2.583-2.129 5.75 5.75 0 0 0-3.313-.334 5.73 5.73 0 0 0-2.933 1.582 5.7 5.7 0 0 0-1.566 2.95 5.8 5.8 0 0 0 .32 3.33 5.73 5.73 0 0 0 2.112 2.601"
        clipRule="evenodd"
      />
      <path
        fill="url(#c)"
        d="M30 34.038c0-3.31-2.694-6.023-6-6.038a5.97 5.97 0 0 0-6 5.977c0 3.31 2.679 5.992 6 6.023s6-2.651 6-5.962"
      />
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(2.41154 9 -11.41154 3.05771 21.588 8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset=".5" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="c"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-12 12 -14.5191 -14.5308 12 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".1" stopColor="#6B6BB3" />
          <stop offset=".6" stopColor="#ED5A72" />
        </radialGradient>
        <linearGradient
          id="a"
          x1="33"
          x2="15"
          y1="8"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".3" stopColor="#2c95c9" />
          <stop offset=".5" stopColor="#6b6bb3" />
          <stop offset=".7" stopColor="#ed5a72" />
        </linearGradient>
      </defs>
    </svg>
  );
}
