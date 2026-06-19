function buildCallout(rightCol) {
  const directChildren = [...rightCol.children];
  if (directChildren.length <= 2) return;

  const callout = document.createElement('div');
  callout.className = 'nurse-support-columns-callout';

  const icon = document.createElement('span');
  icon.className = 'nurse-support-columns-callout-icon';
  icon.setAttribute('aria-hidden', 'true');

  const content = document.createElement('div');
  content.className = 'nurse-support-columns-callout-content';

  directChildren.slice(2).forEach((element) => content.append(element));

  callout.append(icon, content);
  rightCol.append(callout);
}

/**
 * Decorates nurse support 2-column layout with optional right-side callout.
 * @param {Element} block
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cols = [...row.children];
    if (cols.length !== 2) return;

    row.classList.add('nurse-support-columns-row');
    cols[0].classList.add('nurse-support-columns-left');
    cols[1].classList.add('nurse-support-columns-right');

    buildCallout(cols[1]);
  });
}
