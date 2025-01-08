import RoomCard from "@/src/components/RoomCard";
import SearchForm from "../../components/SearchForm";
import { revalidatePath } from "next/cache";
import { fetchData } from "@/src/lib/utils";

export interface Room {
  roomId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
  image?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const data = await fetchData<[Room]>(query && `?title= + ${query}`);

  const createRoom = async (formData: { get: (arg0: string) => void }) => {
    "use server";

    await fetchData("/", {
      method: "POST",
      data: {
        title: formData.get("title"),
        description: formData.get("description"),
      },
    });

    revalidatePath("/");
  };

  return (
    <>
      <form action={createRoom}>
        <input name="title" defaultValue={""} placeholder="Title" required />
        <input
          name="description"
          defaultValue={""}
          placeholder="Description"
          required
        />
        <button type="submit">Create new room</button>
      </form>
      <SearchForm query={query} />
      {data.map((room: Room) => (
        <RoomCard key={room.roomId} room={room} />
      ))}
    </>
  );
}
