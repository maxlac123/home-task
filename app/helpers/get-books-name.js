import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function getBooksName(params/*, hash*/) {
  let [author] = params;
  return htmlSafe(`<strong>${"Автор:"}</strong> ${author}`);
}

export default helper(getBooksName);
