export async function getstore(slug: string) {
  let res = await fetch(
    `https://manifest-salesapi.herokuapp.com/shops/${slug}`
  );
  return await res.json();
}

export async function sendOrder(params: unknown) {}
