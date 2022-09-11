import { ref } from "vue";
import Aries from "./components/image/icon/aries.svg";
import Taurus from "./components/image/icon/Taurus.svg";
import Gemini from "./components/image/icon/Gemini.svg";
import Cancer from "./components/image/icon/Cancer.svg";
import Leo from "./components/image/icon/Leo.svg";
import Virgo from "./components/image/icon/Virgo.svg";
import Libra from "./components/image/icon/Libra.svg";
import Scorpio from "./components/image/icon/Scorpio.svg";
import Sagittarius from "./components/image/icon/Sagittarius.svg";
import Capricorn from "./components/image/icon/Capricorn.svg";
import Aquarius from "./components/image/icon/Aquarius.svg";
import Pisces from "./components/image/icon/Pisces.svg";

export const arrayData = ref([
  {
    moon: "03",
    name: "овен",
    image: Aries,
  },
  {
    moon: "04",
    name: "телець",
    image: Taurus,
  },
  {
    moon: "05",
    name: "близнюки",
    image: Gemini,
  },
  {
    moon: "06",
    name: "рак",
    image: Cancer,
  },
  {
    moon: "07",
    name: "лев",
    image: Leo,
  },
  {
    moon: "08",
    name: "діва",
    image: Virgo,
  },
  {
    moon: "09",
    name: "терези",
    image: Libra,
  },
  {
    moon: "10",
    name: "скорпіон",
    image: Scorpio,
  },
  {
    moon: "11",
    name: "стрілець",
    image: Sagittarius,
  },
  {
    moon: "12",
    name: "козеріг",
    image: Capricorn,
  },
  {
    moon: "01",
    name: "водолій",
    image: Aquarius,
  },
  {
    moon: "02",
    name: "риби",
    image: Pisces,
  },
]);
