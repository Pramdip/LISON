import type { img, icons, Card, describe } from "../types/dashboard";
import gg from "../img/gg.png";
import adam from "../img/Adam.png";
import steve from "../img/Steve.png";
import family from "../img/Family.png";
import powercraft from "../img/powercraft.png";
import massdesign from "../img/massadesigns.png";
import maqar from "../img/maqar.png";
import foster from "../img/foster.png";
import starbeauty from "../img/starbeauty.png";
import jamal from "../img/Jamal.png";
import vlog from "../img/vlog.png";
import cashcow from "../img/cashcow.png";
import reel from "../img/Reel.png";
import squarrel from "../img/squarrel.png";
import singer from "../img/singer.png";
import button from "../img/button.png";

export const imgs: img[] = [
  { image: cashcow, name: "CASH COW" },
  { image: reel, name: "REEL" },
  { image: vlog, name: "VLOG" },
  { image: button, name: "CASH COW" },
  { image: squarrel, name: "CASH COW" },
  { image: singer, name: "PODCAST" },
];
export const icon: icons[] = [
  { icon: gg },
  { icon: foster },
  { icon: powercraft },
  { icon: massdesign },
  { icon: starbeauty },
  { icon: maqar },
];

export const cards: Card[] = [
  {
    name: "100+",
    statement: "Completed Projects",
  },
  {
    name: "50+",
    statement: "Happy Clients",
  },
  {
    name: "10+",
    statement: "Years Experience",
  },
  {
    name: "24/7",
    statement: "Support",
  },
];

export const describes: describe[] = [
  {
    img: jamal,
    description:
      "“Great work as always! Lison got the job done quickly and effectively! Communication on point and I will continue to work with him for all of my graphic design projects! ⭐️⭐️ ⭐️ ⭐️ ⭐️”",
    name: "Kameron Coleman",
    position: "Star Beauty Plus",
  },
  {
    img: adam,
    description:
      "“Lison was an absolute pleasure to work with! He is professional, creative, and has a great work ethic. Lison was always open to feedback and promptly made revisions based on our comments so we could get the final product close to what we originally envisioned. I highly recommend Lison for anyone looking for high-quality video content creation”",
    name: "Ivor Cirwan",
    position: "L4 Studios",
  },
  {
    img: steve,
    description:
      "“Working with Lison has been great. Attention to detail, communication, and punctuality are all on point, I've worked in different styles of editing, and Lison has been able to perform, definitely hire him!”",
    name: "Coach V",
    position: "Power craft Training",
  },
  {
    img: family,
    description:
      "“Working with Lison on a farewell video for my brother was an absolute pleasure. Not only did he understand our requirements promptly, but he also delivered beyond expectations. His creativity and expertise were evident in every frame, and he went above and beyond to ensure our satisfaction. Lison's professionalism shone through in his prompt responses and timely delivery. If you're looking for someone who will exceed your expectations, look no further than Lison.”",
    name: "Manshi Shah Mehta",
    position: "",
  },
];