export function KhoaMark(props: React.ComponentProps<"svg">) {
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
            M0 0h96v96H0V0Z
            M128 0h128v96H128V0Z
            M320 0h128v96H320V0Z
            M0 96h128v64H0V96Z
            M192 96h64v128h-64V96Z
            M320 96h64v64h-64V96Z
            M448 96h64v128h-64V96Z
            M0 160h64v96H0v-96Z
            M128 160h64v96h-64v-96Z
            M320 160h128v96H320V96Z
            M0 256h512v0H0Z
          "
      ></path>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M0 0h96v96H0V0ZM128 0h128v96H128V0ZM0 96h128v32H0V96ZM192 96h64v32h-64V96ZM320 96h64v32h-64V96ZM0 128h256v0H0Z"/></svg>`;
}
