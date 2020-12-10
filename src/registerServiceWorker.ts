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
      (window as any).registration = registration;
      registration.showNotification("测试", {
        icon: "/img/icons/android-chrome-192x192.png",
        body: "测试消息",
      });
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
    updated() {
      console.log("New content is available; please refresh.");
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
