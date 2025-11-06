export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="
            M48 0h96v64H48V0Z
            M0 64h64v64H0V64Z
            M128 64h64v64h-64V64Z
            M0 128h192v64H0v-64Z
            M0 192h64v64H0v-64Z
            M128 192h64v64h-64v-64Z
            M256 0h64v256h-64V0Z
            M320 0h128v64H320V0Z
            M448 64h64v64h-64V64Z
            M320 128h128v64H320v-64Z
            M448 192h64v64h-64v-64Z
          "
      ></path>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
