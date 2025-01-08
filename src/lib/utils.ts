export async function fetchData<TResponse>(
  path: string = "/",
  options: RequestInit & { data?: unknown } = {}
): Promise<TResponse> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL + path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
      ...(options.data ? { body: JSON.stringify(options.data) } : {}),
    });

    const { data } = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
