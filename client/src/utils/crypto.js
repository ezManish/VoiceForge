export function encryptStore(value) {
  try {
    return btoa(encodeURIComponent(value));
  } catch {
    return value;
  }
}

export function decryptStore(value) {
  try {
    return decodeURIComponent(atob(value));
  } catch {
    return value;
  }
}
