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

const BLOG_IMAGE_CACHE_VERSION = "2";

function versionBlogImage(src: string) {
  if (!src.startsWith("/api/blog-images/")) return src;
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${BLOG_IMAGE_CACHE_VERSION}`;
}

export function BlogFeaturedImage({
  src,
  alt,
  fallbackSrc,
  sizes,
  className,
  priority = false,
}: BlogFeaturedImageProps) {
  const resolvedSrc = versionBlogImage(src || fallbackSrc);
  const resolvedFallbackSrc = versionBlogImage(fallbackSrc);
  const [activeSrc, setActiveSrc] = useState(resolvedSrc);

  useEffect(() => {
    setActiveSrc(resolvedSrc);
  }, [resolvedSrc]);

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
        if (activeSrc !== resolvedFallbackSrc) setActiveSrc(resolvedFallbackSrc);
      }}
    />
  );
}
