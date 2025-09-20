import { BrandLink } from "./brand-link";

export function BrandLoading() {
  return (
    <div>
      <BrandLink />

      <pre className="font-light italic">loading...</pre>
    </div>
  );
}
