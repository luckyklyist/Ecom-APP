export function getTokenCookie() {
  if (typeof document !== "undefined") {
    const cookies = document.cookie.split("; ");
    let retrievedToken = null;

    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === "token") {
        retrievedToken = decodeURIComponent(value);
        break;
      }
    }
    return retrievedToken;
  }
  return null;
}
