/**
 * SECURE YOUR CODE JS
 * TCSS 483
 * Taylor Merwin
 * Winter 24 
 */


/**
 * Hashes the input text using SHA-256
 * @param {string} text 
 * @returns Hashed value of the input text
 */
export async function hashInput(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Generates a salt to be used for password hashing
 */
export function generateSalt() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let salt = '';
  const length = 8;
  for (let i = 0; i < length; i++) {
    salt += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return salt;
}