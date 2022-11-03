import Image from "next/image";
import UniBust from "../assets/bust_3d.png";
import LinkedIcon from "../components/LinkedIcon";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Image src={UniBust} alt="Uni0305" width={174} height={174} />
        <h1 className="flex flex-col gap-2 text-center">
          <p className="text-5xl font-bold">Uni0305</p>
          <p className="text-3xl font-medium">Developer</p>
        </h1>
      </main>
      <footer className="flex flex-col items-center py-8 gap-4 mx-4">
        <div className="flex flex-row items-center gap-2">
          <LinkedIcon icon="simple-icons:notion" href="/notion" />
          <LinkedIcon icon="simple-icons:discord" href="/discord" />
          <LinkedIcon icon="material-symbols:mail-rounded" href="/email" />
          <LinkedIcon icon="simple-icons:youtube" href="/youtube" />
          <LinkedIcon icon="simple-icons:github" href="/github" />
          <LinkedIcon icon="simple-icons:twitch" href="/twitch" />
          <LinkedIcon icon="mdi:minecraft" href="/namemc" />
        </div>
        <hr className="w-full border border-solid border-neutral-500" />
        <p className="text-sm font-normal">
          © 2022, Uni0305. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
