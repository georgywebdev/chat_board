import React from "react";
import { Room } from "../app/(home)/page";
import { fetchData } from "../lib/utils";
import { revalidatePath } from "next/cache";

const RoomCard = ({ room }: { room: Room }) => {
  const deleteRoom = async () => {
    "use server";

    await fetchData(`/${room.roomId}`, {
      method: "DELETE",
    });

    revalidatePath("/");
  };
  return (
    <div>
      {room.title}
      <form action={deleteRoom}>
        <button type="submit">X</button>
      </form>
    </div>
  );
};

export default RoomCard;
