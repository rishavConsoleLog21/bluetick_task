import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
    "
    >
      <h1
        className="
        text-4xl
        font-bold
        text-center
        text-blue-600
        mt-10
        mb-5
      "
      >
        Welcome to the BlueTick Consultants
      </h1>
      <p
        className="
          text-lg
          text-center
          font-semibold
          text-gray-600
          max-w-md
          px-5
          mb-5
        "
      >
        This app displays user data in three different view modes: Table, Card,
        and List.
      </p>
      <span className="
        text-sm
        text-yellow-300
        font-semibold
        max-w-md
        px-5
        mb-5
        text-center
      ">
        ⚠️To Edit or delete a user, go to List View mode.
      </span>
      <button
        className="
        bg-blue-600
        text-white
        font-semibold
        py-2
        px-4
        rounded-md
        hover:bg-blue-700
        transition
        duration-300
        ease-in-out
        mb-5
      "
      >
        <Link href="/users">View Users</Link>
      </button>
    </div>
  );
}
