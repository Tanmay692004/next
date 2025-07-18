import Image from "next/image";
import hello from "./components/hello";

export default function Home() {
  console.log("What am I? -- Server!")
  return (
    <>
    <h1 className="text-3xl">Hi, Welcome to next</h1>
    <hello/>
    </>
  );
}
