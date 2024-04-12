"use server";

import { createClient } from "@/infrastructure/config/supabaseServer";
import { IDocumentos } from "@/interfaces/IDocumentos";


interface IGetAllDocumentUseCase {
  error?: string | null;
  documentos?: IDocumentos[];
}

export const getAllDocumentUseCase = async (): Promise<IGetAllDocumentUseCase> => {
  const supabase = createClient();
  supabase.auth.getUser();

  let { data, error } = await supabase.from("documento").select("*");

  switch (error) {
    case null: {
      return {
        documentos: data as IDocumentos[],
        error: null
      };
    }

    default: {
      return {
        documentos: [],
        error: error.message,
      };
    }
  }
};
