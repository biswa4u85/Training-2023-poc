
import Link from "next/link";
export default function Wapper({ children }: any) {

  return (
    <>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        header...</div>
      {children}
      <div>footer...</div>
    </>
  );
}
