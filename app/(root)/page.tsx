"use client";

import OutlinedButton from "@/components/OutlinedButton";
import SolidButton from "@/components/SolidButton";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [roomCode, setRoomCode] = useState("");

  return (
    <div
      className="flex min-h-screen flex-wrap items-center px-6 font-sans"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      {/* Left Side */}
      <div className="flex flex-5 flex-col justify-center p-10">
        <h1
          className="font-title mb-6 text-7xl font-bold"
          style={{ color: "var(--color-brand)" }}
        >
          Maze Multiplayer
        </h1>
        <h3
          className="font-body text-2xl font-normal"
          style={{ color: "var(--color-text)" }}
        >
          A competitive multiplayer maze game where players race from fixed
          start points to destinations chosen by their opponents.
        </h3>
      </div>

      {/* Right Side */}
      <div
        className="max-w-l m-10 flex-3 rounded-xl p-12 shadow-lg"
        style={{ backgroundColor: "var(--color-secondary-bg)" }}
      >
        <form className="mb-2 w-full">
          <label
            htmlFor="room-code"
            className="mb-3 block text-3xl font-bold"
            style={{ color: "var(--color-brand)" }}
          >
            Enter Room Code:
          </label>
          <p className="text-l mb-4">
            Enter a room code to join an existing room or create a new one if
            you don&apos;t have one yet.
          </p>

          <input
            type="text"
            id="room-code"
            name="room-code"
            placeholder="Enter the room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            required
            className="mb-4 w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:ring-2 focus:outline-none"
            style={{
              color: "var(--color-text)",
              borderColor: "var(--color-brand)",
            }}
          />

          <SolidButton text="Join Room" />
        </form>

        <p className="mb-2 text-center text-sm">or</p>

        <Link href="/waiting-for-opponent" className="block w-full">
          <OutlinedButton text="Create New Room" />
        </Link>
      </div>
    </div>
  );
}
