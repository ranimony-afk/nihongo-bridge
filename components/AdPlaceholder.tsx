import { cn } from '@/lib/utils';

export function AdPlaceholder({
  className,
  format = 'horizontal',
  label = 'Advertisement',
}: {
  className?: string;
  format?: 'horizontal' | 'vertical' | 'square';
  label?: string;
}) {
  const dimensions = {
    horizontal: 'min-h-[90px] sm:min-h-[120px]',
    vertical: 'min-h-[250px] sm:min-h-[600px]',
    square: 'min-h-[250px] sm:min-h-[300px]',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center bg-muted/30 border border-dashed border-border rounded-lg text-muted-foreground text-sm',
        dimensions[format],
        className
      )}
      aria-hidden="true"
    >
      <span className="opacity-50">{label} — Ad Placeholder</span>
    </div>
  );
}
