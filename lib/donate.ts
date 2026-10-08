export const ZELLE_EMAIL = "hello@touchinghopecares.com";
export const ZELLE_RECIPIENT = "Touching Hope Cares";
export const DONATE_EVENT = "open-donate";
export const DONATION_AMOUNTS = [25, 50, 100, 250];

const ZELLE_APP_SCHEME = "zelle://";
const ZELLE_IOS = "https://apps.apple.com/us/app/zelle/id1260755201";
const ZELLE_ANDROID =
  "https://play.google.com/store/apps/details?id=com.zellepay.zelle";

export function openDonate() {
  window.dispatchEvent(new Event(DONATE_EVENT));
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    el.remove();
  }
}

/**
 * Tries to launch the Zelle app on the user's phone. Returns false on
 * desktop (nothing to launch). If the app doesn't take focus within a moment,
 * sends the user to the app store so they can install Zelle or use their
 * bank's app instead.
 */
export function launchZelleApp(): boolean {
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);
  if (!isIOS && !isAndroid) return false;

  let left = false;
  const onHide = () => {
    if (document.hidden) left = true;
  };
  document.addEventListener("visibilitychange", onHide);
  window.addEventListener("pagehide", onHide);

  window.location.href = ZELLE_APP_SCHEME;

  setTimeout(() => {
    document.removeEventListener("visibilitychange", onHide);
    window.removeEventListener("pagehide", onHide);
    if (!left && !document.hidden) {
      window.location.href = isIOS ? ZELLE_IOS : ZELLE_ANDROID;
    }
  }, 1500);
  return true;
}
