"use server";

import { createClient } from "@/infrastructure/config/supabaseServer";
import { IDocumentos } from "@/interfaces/IDocumentos";


interface IFilterDocumentUseCase {
  error?: string | null;
  documentos?: IDocumentos[];
}

export const filterDocumentUseCase = async (): Promise<IFilterDocumentUseCase | void>  => {
  const supabase = createClient();
  supabase.auth.getUser();

  let { data, error } = await supabase.from("documento").select("*").filter("prestamo", "eq", "Prestamo00").filter("solicitud", "eq", "Solicitud002");

  console.log("🚀 ~ filterDocumentUseCase ~ data:", data)

//   switch (error) {
//     case null: {
//       return {
//         documentos: data as IDocumentos[],
//         error: null
//       };
//     }

//     default: {
//       return {
//         documentos: [],
//         error: error.message,
//       };
//     }
//   }
};
