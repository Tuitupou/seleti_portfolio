import { cn } from "@/lib/utils";

// Skeleton Loading Component
export const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted/50",
        className
      )}
      {...props}
    />
  );
};

// Spinner Component
export const Spinner = ({ size = "default", className, ...props }) => {
  const sizeClasses = {
    small: "h-4 w-4",
    default: "h-6 w-6", 
    large: "h-8 w-8"
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-muted border-t-primary",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
};

// Project Card Skeleton
export const ProjectCardSkeleton = () => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs">
      <Skeleton className="h-48 w-full" />
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex justify-between items-center pt-2">
          <div className="flex space-x-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Skills Card Skeleton
export const SkillCardSkeleton = () => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-xs">
      <div className="text-left mb-4">
        <Skeleton className="h-6 w-24" />
      </div>
      <Skeleton className="w-full h-2 rounded-full mb-2" />
      <div className="text-right">
        <Skeleton className="h-4 w-8 ml-auto" />
      </div>
    </div>
  );
};

// About Cards Skeleton
export const AboutCardSkeleton = () => {
  return (
    <div className="gradient-border p-6">
      <div className="flex items-start gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  );
};

// Page Loading Spinner
export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <Spinner size="large" />
        <p className="text-muted-foreground animate-pulse">Loading amazing content...</p>
      </div>
    </div>
  );
};