import Link from "next/link";

export default function ActionLink({
  targetPage,
  label,
}: {
  targetPage: string;
  label: string;
}) {
  return (
    <Link
      href={targetPage}
      className="rounded-md bg-[#082777] px-[16px] py-[8px] text-white "
    >
      {label}
    </Link>
  );
}
