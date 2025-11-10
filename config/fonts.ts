import { Lora as FontSerif, Montserrat as FontSans,  } from "next/font/google";
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const epic_ride = localFont({
  src: '../public/fonts/epic_ride/Epic Ride.ttf',
  variable: "--font-epic-ride"
})