import Link from "next/link";
import { cn } from "~/lib/utils";

export function BrandLink({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href">) {
  return (
    <Link {...props} href="/" className={cn("text-2xl font-medium", className)}>
      Gvstang
    </Link>
  );
}
