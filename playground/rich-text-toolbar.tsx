'use client';

export function RichTextToolbar() {
  return (
    <div className="group bg-background-neutral-default border-border-neutral-faded grid grid-cols-8 place-items-center rounded-xl border p-1">
      <div
        className="bg-background-neutral-subtle col-span-1 col-start-1 row-start-1 row-end-2 h-full w-full translate-x-(--x) rounded-lg opacity-0 group-[:has(button:hover)]:opacity-100 group-[:has(button:hover)]:transition-all"
        style={{
          transform: 'translateX(var(--x, 0%))',
        }}
      />
      <button
        className="hover:text-foreground-neutral-default text-foreground-neutral-faded z-10 col-span-1 col-start-1 row-start-1 row-end-2 cursor-pointer p-2"
        onMouseEnter={(e) => {
          (e.currentTarget.closest('.group') as HTMLElement)?.style.setProperty(
            '--x',
            '0%',
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M4 3a1 1 0 0 1 1-1h6a4.5 4.5 0 0 1 3.274 7.587A4.75 4.75 0 0 1 11.25 18H5a1 1 0 0 1-1-1V3Zm2.5 5.5v-4H11a2 2 0 1 1 0 4H6.5Zm0 2.5v4.5h4.75a2.25 2.25 0 0 0 0-4.5H6.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        className="hover:text-foreground-neutral-default text-foreground-neutral-faded z-10 col-span-1 col-start-2 row-start-1 row-end-2 cursor-pointer p-2"
        onMouseEnter={(e) => {
          (e.currentTarget.closest('.group') as HTMLElement)?.style.setProperty(
            '--x',
            '50%',
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M8 2.75A.75.75 0 0 1 8.75 2h7.5a.75.75 0 0 1 0 1.5h-3.215l-4.483 13h2.698a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3.215l4.483-13H8.75A.75.75 0 0 1 8 2.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        className="hover:text-foreground-neutral-default text-foreground-neutral-faded z-10 col-span-1 col-start-3 row-start-1 row-end-2 cursor-pointer p-2"
        onMouseEnter={(e) => {
          (e.currentTarget.closest('.group') as HTMLElement)?.style.setProperty(
            '--x',
            '100%',
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M4.75 2a.75.75 0 0 1 .75.75V9a4.5 4.5 0 1 0 9 0V2.75a.75.75 0 0 1 1.5 0V9A6 6 0 0 1 4 9V2.75A.75.75 0 0 1 4.75 2ZM2 17.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        className="hover:text-foreground-neutral-default text-foreground-neutral-faded z-10 col-span-1 col-start-4 row-start-1 row-end-2 cursor-pointer p-2"
        onMouseEnter={(e) => {
          (e.currentTarget.closest('.group') as HTMLElement)?.style.setProperty(
            '--x',
            '150%',
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M11.617 3.963c-1.186-.318-2.418-.323-3.416.015-.992.336-1.49.91-1.642 1.476-.152.566-.007 1.313.684 2.1.528.6 1.273 1.1 2.128 1.446h7.879a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h3.813a5.976 5.976 0 0 1-.447-.456C5.18 7.479 4.798 6.231 5.11 5.066c.312-1.164 1.268-2.055 2.61-2.509 1.336-.451 2.877-.42 4.286-.043.856.23 1.684.592 2.409 1.074a.75.75 0 1 1-.83 1.25 6.723 6.723 0 0 0-1.968-.875Zm1.909 8.123a.75.75 0 0 1 1.015.309c.53.99.607 2.062.18 3.01-.421.94-1.289 1.648-2.441 2.038-1.336.452-2.877.42-4.286.043-1.409-.377-2.759-1.121-3.69-2.18a.75.75 0 1 1 1.127-.99c.696.791 1.765 1.403 2.952 1.721 1.186.318 2.418.323 3.416-.015.853-.288 1.34-.756 1.555-1.232.21-.467.205-1.049-.136-1.69a.75.75 0 0 1 .308-1.014Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        className="hover:text-foreground-neutral-default text-foreground-neutral-faded z-10 col-span-1 col-start-5 row-start-1 row-end-2 cursor-pointer p-2"
        onMouseEnter={(e) => {
          (e.currentTarget.closest('.group') as HTMLElement)?.style.setProperty(
            '--x',
            '200%',
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        className="hover:text-foreground-neutral-default text-foreground-neutral-faded z-10 col-span-1 col-start-6 row-start-1 row-end-2 cursor-pointer p-2"
        onMouseEnter={(e) => {
          (e.currentTarget.closest('.group') as HTMLElement)?.style.setProperty(
            '--x',
            '250%',
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM1.99 4.75a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 15.25a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 10a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1V10Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        className="hover:text-foreground-neutral-default text-foreground-neutral-faded z-10 col-span-1 col-start-7 row-start-1 row-end-2 cursor-pointer p-2"
        onMouseEnter={(e) => {
          (e.currentTarget.closest('.group') as HTMLElement)?.style.setProperty(
            '--x',
            '300%',
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        className="hover:text-foreground-neutral-default text-foreground-neutral-faded z-10 col-span-1 col-start-8 row-start-1 row-end-2 cursor-pointer p-2"
        onMouseEnter={(e) => {
          (e.currentTarget.closest('.group') as HTMLElement)?.style.setProperty(
            '--x',
            '350%',
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
