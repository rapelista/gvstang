import Link from 'next/link';

import { GitHub } from '~/assets/svg/github';
import { LinkedIn } from '~/assets/svg/linked-in';

export function Social() {
  return (
    <ul className="flex gap-2">
      <li>
        <Link href="https://github.com/rapelista" target="_blank">
          <GitHub height={16} width={16} />
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/farihakmal" target="_blank">
          <LinkedIn height={16} width={16} />
        </Link>
      </li>
    </ul>
  );
}
