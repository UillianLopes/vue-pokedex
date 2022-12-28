export function Replace(str: string, search: string, replace: string) {
  if (typeof str !== 'string') {
    return str;
  }

  return str.split(search).join(replace);
}
