import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageComponentProps extends Omit<ImageProps, "src"> {
  img: string | { src: string; width?: number; height?: number };
  alt: string;
  className?: string;
  fill?: boolean;
}

export function ImageComponent({
  img,
  alt,
  className,
  fill = false,
  width: propWidth,
  height: propHeight,
  ...props
}: ImageComponentProps) {
  const imgSrc = typeof img === "string" ? img : img.src;
  const width = propWidth || (typeof img === "object" ? img.width : undefined);
  const height = propHeight || (typeof img === "object" ? img.height : undefined);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={imgSrc}
        alt={alt}
        className="object-cover"
        quality={100}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        {...props}
      />
    </div>
  );
} 