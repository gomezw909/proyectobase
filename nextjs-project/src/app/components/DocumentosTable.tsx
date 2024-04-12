import { Table } from "@/components/organism/Table";
import { filterDocumentUseCase } from "@/modules/Documentos/usecases/filterDocumentUseCase";
import { getAllDocumentUseCase } from "@/modules/Documentos/usecases/getAllDocumentUseCase";

const heads = ["Identificacion", "Posicion", "Prestamo", "Solicitud", "Despachado", "Fecha1"];

export const DocumentosTable = async ({
  searchParams,
}: {
  searchParams?: {
    prestamo?: string;
    solicitud?: string;
    identificacion?: string;
    fecha_registro?: string;
  };
}) => {
  const data = await getAllDocumentUseCase();
  const data2 = await filterDocumentUseCase();

  if (data.error) {
    console.error(data.error);
    return null;
  }

  return <Table heads={heads} rows={data.documentos} />;
};
