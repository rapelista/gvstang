import { WORDS } from '~/lib/constants';
import { getRandomInt } from '~/lib/utils';

import { Brand } from './brand';

export function BrandWrapper() {
  const initialIndex = getRandomInt(WORDS.length);

  return <Brand initialIndex={initialIndex} />;
}
