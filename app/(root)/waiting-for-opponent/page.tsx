"use client";

import { useEffect, useState } from "react";
import {
  connectSocket,
  createRoom,
  onSocketConnect,
  offSocketConnect,
} from "@/app/socket";

export default function WaitingForOpponent() {
  const [roomCode, setRoomCode] = useState<string | null>(null);

  useEffect(() => {
    connectSocket();

    const handleConnect = () => {
      createRoom().then((code) => {
        setRoomCode(code);
      });
    };

    onSocketConnect(handleConnect);

    return () => {
      offSocketConnect(handleConnect);
    };
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-3xl font-bold">
        {roomCode ? `Room Code: ${roomCode}` : "Creating room..."}
      </h1>
    </div>
  );
}
