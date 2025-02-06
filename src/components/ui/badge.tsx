// Badge.tsx
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { badgeVariants } from '@/components/type/badge-variants'; // 경로는 프로젝트 구조에 맞게 조정하세요.

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  // 필요에 따라 badgeVariants의 variant 타입을 사용하거나 직접 작성할 수 있습니다.
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
