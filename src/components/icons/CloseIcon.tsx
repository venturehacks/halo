import React from 'react';

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height={10} width={10} {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M9.802 2.108a.675.675 0 0 0 0-.955L8.847.198a.675.675 0 0 0-.956 0L5.08 3.01a.113.113 0 0 1-.159 0L2.108.198a.675.675 0 0 0-.955 0l-.955.955a.675.675 0 0 0 0 .955L3.01 4.92a.113.113 0 0 1 0 .16L.198 7.892a.675.675 0 0 0 0 .955l.955.955a.675.675 0 0 0 .955 0L4.92 6.99a.113.113 0 0 1 .16 0L7.89 9.802a.675.675 0 0 0 .956 0l.955-.955a.675.675 0 0 0 0-.955L6.99 5.08a.113.113 0 0 1 0-.16l2.812-2.812z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default CloseIcon;
