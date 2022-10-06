const getHash = function() {
  return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
}

export default getHash;