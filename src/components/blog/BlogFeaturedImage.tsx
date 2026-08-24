"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type BlogFeaturedImageProps = {
  src: string;
  alt: string;
  fallbackSrc: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function BlogFeaturedImage({
  src,
  alt,
  fallbackSrc,
  sizes,
  className,
  priority = false,
}: BlogFeaturedImageProps) {
  const [activeSrc, setActiveSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setActiveSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <Image
      src={activeSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      unoptimized={activeSrc.startsWith("/api/blog-images/")}
      className={className}
      onError={() => {
        if (activeSrc !== fallbackSrc) setActiveSrc(fallbackSrc);
      }}
    />
  );
}
