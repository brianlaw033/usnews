export const isElementNotSeen = el => {
  var rect = el.getBoundingClientRect();
  return (
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

export const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr]
  if (chunkSize <= 0) return cache
  while (tmp.length) cache.push(tmp.splice(0, chunkSize))
  return cache
}

export const isObjectContainKeyword = (obj, keyword) => {
  keyword = keyword.toLowerCase()
  return Object.keys(obj).some(key => {
    return obj[key].toLowerCase().includes(keyword)
  })
}