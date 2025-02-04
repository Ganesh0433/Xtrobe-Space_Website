import Image from "next/image";
import LatestNews from "./latestnews";
import SocialMediaNews from "./socialmedianews";
import Astroid from "./astroid";
import RocketEvents from "./calender-of-space-events";
import Astronomy from "./astronomy";


export default function Home() {
  return (
    <>
    {/* <LatestNews/>
    <SocialMediaNews/>
    <Astroid/> */}
    <RocketEvents/> {/* <RocketEvents/> */}
    <Astronomy/>
    </>
  );
}
