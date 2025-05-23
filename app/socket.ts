import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const getSocket = () => {
  if (!socket) socket = io("http://maze-multiplayer-backend.onrender.com");
  return socket;
};

export const onSocketConnect = (cb: () => void) => {
  getSocket().on("connect", cb);
};

export const offSocketConnect = (cb: () => void) => {
  getSocket().off("connect", cb);
};

export const createRoom = (): Promise<string> => {
  return new Promise((resolve) => {
    const s = getSocket();
    s.emit("create-room");
    s.once("room-created", (code: string) => {
      resolve(code);
    });
  });
};

export const joinRoom = (roomCode: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const s = getSocket();
    s.emit("join-room", roomCode);
    s.once("room-joined", () => resolve());
    s.once("room-not-found", () => reject(new Error("Room not found")));
  });
};
