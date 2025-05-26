import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("Products could not be fetched");
  }

  return data;
}
