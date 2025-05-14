import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}
const Avatar = ({ src, alt, size = 50 }: AvatarProps) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <Image src={src} alt={alt} width={size} height={size} objectFit="cover" />
    </div>
  );
};

export default Avatar;
