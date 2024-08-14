import localFont from "@next/font/local";

export const swearDisplay = localFont({
  src: [
    {
      path: "../public/fonts/fonnts.com-Swear-Display-Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/fonnts.com-Swear-Display-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-swear-display",
});
