"use client";

import { useEffect, useState } from "react";
import { createRoom } from "@/app/socket";

export default function WaitingForOpponent() {
  const [roomCode, setRoomCode] = useState<string | null>(null);

  useEffect(() => {
    createRoom().then((code) => {
      setRoomCode(code);
    });
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-3xl font-bold">
        {roomCode ? `Room Code: ${roomCode}` : "Creating room..."}
      </h1>
    </div>
  );
}
