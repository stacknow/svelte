import { e as escape_html } from './client-DJ0idFQu.js';
import { t as pop, p as push } from './index2-C95a-_Km.js';
import { p as page } from './index4-B7lqZqar.js';

function Error($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}

export { Error as default };
//# sourceMappingURL=error.svelte-Te_LK_Fs.js.map
