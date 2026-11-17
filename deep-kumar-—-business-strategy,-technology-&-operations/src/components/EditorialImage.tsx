import { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Deep Kumar',
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center p-6 text-center select-none bg-deep-pine text-warm-ivory ${className}`}
      >
        <span className="font-serif text-3xl tracking-tight opacity-90">{fallbackLabel}</span>
        <span className="mt-2 text-xs tracking-widest uppercase opacity-60">
          Business Strategy · Technology · Operations
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
