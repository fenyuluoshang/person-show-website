/* eslint-disable no-console */

import { register } from "register-service-worker";

if ("Notification" in Window) {
  if (Notification.permission === "default") {
    Notification.requestPermission();
  }
}
if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}sw.js`, {
    ready(registration) {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated(registration) {
      console.log("New content is available; please refresh.");
      registration
        .showNotification("检测到更新", {
          icon: "/img/icons/android-chrome-512x512.png",
          body: "检测到更新，请刷新页面。",
        })
        .then(() => {})
        .catch((e) => {
          console.error(e);
        });
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
