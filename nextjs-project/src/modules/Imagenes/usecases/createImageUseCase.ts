"use client";

import { supabaseClient } from "@/infrastructure/config/supabaseClient";
import { createClient } from "@/infrastructure/config/supabaseServer";
import { IDespacho } from "@/interfaces/IDespacho";
import { IDocumentos } from "@/interfaces/IDocumentos";
import { IImagen } from "@/interfaces/IImagen";
import { SupabaseClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export const createImageUseCase = async ({ documento, imageFile }: { documento: IDocumentos; imageFile?: any }): Promise<void> => {
  console.log("🚀 ~ createImageUseCase ~ documento:", documento);
  console.log("🚀 ~ createImageUseCase ~ imageFile:", imageFile);

  supabaseClient.auth.getUser();

  await subirImagen(supabaseClient, imageFile);

    

  //   await supabase.from("documento").update({ image: "" }).eq("identificacion", documento.identificacion).select();

  //   switch (error) {
  //     case null: {
  //       redirect("/");
  //     }

  //     default: {
  //       redirect("/");
  //     }
  //   }
};

async function subirImagen(supabase: SupabaseClient<any, "public", any>, file: any) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `imagenes/${fileName}`;

  const { data } = await supabase.storage.from("documentos").upload(filePath, file);

  await obtenerURLImagen(supabase, data?.path ?? "");
}

async function obtenerURLImagen(supabase: SupabaseClient<any, "public", any>, path: string) {
  const { data } = supabase.storage.from("imagenes").getPublicUrl(path);
  console.log("🚀 ~ obtenerURLImagen ~ data:", data);
}

