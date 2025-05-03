import '@/playground/avatar-stack/avatar-stack.css';

export function AvatarStack() {
  return (
    <div className="flex items-center gap-x-16 rounded-full p-2">
      <span className="grid h-[var(--size)] grid-cols-[repeat(4,var(--column))] content-end">
        <span
          data-masked
          className="grid aspect-[1/2] w-[var(--size)] items-end"
        >
          <span className="inline-grid h-[var(--size)] w-full place-items-center rounded-full bg-[#5E6AD2]">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="h-1/2 w-1/2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Linear</title>
              <path
                d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
                fill="#fff"
              />
            </svg>
          </span>
        </span>
        <span
          data-masked
          className="grid aspect-[1/2] w-[var(--size)] items-end"
        >
          <span className="inline-grid h-[var(--size)] w-[var(--size)] place-items-center rounded-full bg-[#0055FF]">
            <svg
              className="h-1/2 w-1/2"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Framer</title>
              <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#fff" />
            </svg>
          </span>
        </span>
        <span
          data-masked
          className="grid aspect-[1/2] w-[var(--size)] items-end"
        >
          <span className="inline-grid h-[var(--size)] w-[var(--size)] place-items-center rounded-full bg-[#06B6D4]">
            <svg
              className="h-1/2 w-1/2"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Tailwind CSS</title>
              <path
                fill="#fff"
                d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
              />
            </svg>
          </span>
        </span>
        <span
          data-masked
          className="grid aspect-[1/2] w-[var(--size)] items-end"
        >
          <span className="inline-grid h-[var(--size)] w-[var(--size)] place-items-center rounded-full bg-[#FF6363]">
            <svg
              className="h-1/2 w-1/2"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Raycast</title>
              <path
                d="M6.004 15.492v2.504L0 11.992l1.258-1.249Zm2.504 2.504H6.004L12.008 24l1.253-1.253zm14.24-4.747L24 11.997 12.003 0 10.75 1.251 15.491 6h-2.865L9.317 2.692 8.065 3.944l2.06 2.06H8.691v9.31H18v-1.432l2.06 2.06 1.252-1.252-3.312-3.32V8.506ZM6.63 5.372 5.38 6.625l1.342 1.343 1.251-1.253Zm10.655 10.655-1.247 1.251 1.342 1.343 1.253-1.251zM3.944 8.059 2.692 9.31l3.312 3.314v-2.506zm9.936 9.937h-2.504l3.314 3.312 1.25-1.252z"
                fill="#fff"
              />
            </svg>
          </span>
        </span>
      </span>
    </div>
  );
}
