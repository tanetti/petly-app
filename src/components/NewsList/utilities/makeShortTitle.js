export const makeShortTitle = currentTitle => {
  let newShortTitle = null;

  const titleWords = currentTitle.split(' ');
  if (titleWords.length <= 6) return currentTitle;

  const comaSeparetedTitle = currentTitle
    .slice(0, currentTitle.indexOf(','))
    .split(' ');
  if (comaSeparetedTitle.length >= 4 && comaSeparetedTitle.length <= 6) {
    newShortTitle = comaSeparetedTitle.join(' ');
  }

  const dotSeparetedTitle = currentTitle
    .slice(0, currentTitle.indexOf('.'))
    .split(' ');
  if (dotSeparetedTitle.length >= 4 && dotSeparetedTitle.length <= 6) {
    newShortTitle = dotSeparetedTitle.join(' ');
  }

  if (!newShortTitle) {
    titleWords.length = 6;
    newShortTitle = titleWords.join(' ');
  }

  if (newShortTitle.endsWith(',') || newShortTitle.endsWith('.')) {
    newShortTitle = newShortTitle.slice(0, -1);
  }

  return `${newShortTitle}...`;
};
