export function Animation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} viewBox="0 0 56 56" {...props}>
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6F48" />
          <stop offset="100%" stopColor="#F02AA6" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx={28} cy={28} r={28} fill="url(#a)" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M33.97 20.678c.565-.498.893-1.21.906-1.962A2.706 2.706 0 0 0 32.16 16a2.794 2.794 0 0 0-1.66.603 2.825 2.825 0 0 0-.854 1.962 2.69 2.69 0 0 0 4.325 2.113Zm-8.752.453c0 .05-.05.05-.1.1v.05a6.308 6.308 0 0 0-2.919 1.41c-.503.473-.958.995-1.358 1.559-1.006 1.408 1.358 2.766 2.315 1.358 1.257-1.762 2.816-2.264 4.527-1.71a141.96 141.96 0 0 0-2.717 5.181c-1.107 2.163-3.47 3.874-5.786 2.566a1.402 1.402 0 1 0-1.508 2.364 6.826 6.826 0 0 0 8.704-1.66c.05 0 .153.05.2.05 1.5.624 2.907 1.454 4.177 2.466.603.502 1.66 3.065 2.263 4.376a1.392 1.392 0 0 0 2.113.452c.393-.382.476-.982.202-1.456-.705-1.456-1.862-4.427-2.818-5.135a31.566 31.566 0 0 0-2.364-1.762l.1-.1a16.972 16.972 0 0 0-1.006-.605 146.15 146.15 0 0 1 2.616-4.728c2.11.667 4.415.19 6.087-1.258.517-.46.973-.984 1.358-1.56.956-1.257-.905-2.515-2.012-1.66a.709.709 0 0 0-.153.202 4.36 4.36 0 0 1-2.013 1.66c-.05.05-.1.05-.1.1h-.051a4.146 4.146 0 0 1-3.622-.452l.101-.101h.05a.383.383 0 0 0-.201-.1 9.292 9.292 0 0 0-.956-.554 7.258 7.258 0 0 0-5.134-1.056l.005.003Z"
        />
      </g>
    </svg>
  );
}

export function Business(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" {...props}>
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6F48" />
          <stop offset="100%" stopColor="#F02AA6" />
        </linearGradient>
        <path
          id="b"
          d="M35 22h-2c0-2.76-2.24-5-5-5s-5 2.24-5 5h-2c-1.1 0-1.99.9-1.99 2L19 36c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V24c0-1.1-.9-2-2-2Zm-7-3c1.66 0 3 1.34 3 3h-6c0-1.66 1.34-3 3-3Zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx={28} cy={28} r={28} fill="url(#a)" />
        <use xlinkHref="#b" fill="#FFF" />
      </g>
    </svg>
  );
}

export function Crypto(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" {...props}>
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6F48" />
          <stop offset="100%" stopColor="#F02AA6" />
        </linearGradient>
        <path
          id="b"
          d="M26 28c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx={28} cy={28} r={28} fill="url(#a)" />
        <use xlinkHref="#b" fill="#FFF" />
      </g>
    </svg>
  );
}

export function Design(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" {...props}>
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6F48" />
          <stop offset="100%" stopColor="#F02AA6" />
        </linearGradient>
        <path
          id="b"
          d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 16L9 8v8H2l7-8V2h7v14Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx={28} cy={28} r={28} fill="url(#a)" />
        <use xlinkHref="#b" fill="#FFF" transform="translate(19 19)" />
      </g>
    </svg>
  );
}

export function Photography(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" {...props}>
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6F48" />
          <stop offset="100%" stopColor="#F02AA6" />
        </linearGradient>
        <path
          id="b"
          d="m31 18 1.83 2H36c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h3.17L25 18h6Zm-3 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 1.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx={28} cy={28} r={28} fill="url(#a)" />
        <use xlinkHref="#b" fill="#FFF" />
      </g>
    </svg>
  );
}
