import DashboardSkeleton from '@/app/ui/skeletons';
// Keep loading.tsx if you want a single instant skeleton for the whole (overview) segment 
// before any part renders.
// Currently it is a bit redundant unless you introduce an async fetch in the page.tsx
export default function Loading() {
  return <DashboardSkeleton />;
}