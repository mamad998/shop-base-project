import Link from "next/link";
import ServerComponent from "./components/ServerComponent";
import ClientComponent from "./components/ClientComponent";
export default function HomePage() {
  return (
    <div className="m-10">
      <h1 className="font-semibold text-black">NextOne acadamy</h1>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}
