export type AppBannerPromptOutcom = "accepted" | "dismissed";

type ChoiceResult = {
  outcome: AppBannerPromptOutcom;
};
type BeforeInstallPromptEvent = Event & {
  readonly userChoice: Promise<ChoiceResult>;
  prompt(): Promise<ChoiceResult>;
};

let deferredPrompt: BeforeInstallPromptEvent;

export function listenBeforeinstallprompt() {
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
  });
}

export async function tryInstallApp(): Promise<AppBannerPromptOutcom> {
  if (deferredPrompt == null) {
    throw new Error("beforeinstallprompt not fired");
  }

  const { outcome } = await deferredPrompt.prompt();

  return outcome;
}

export function isPWA() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
