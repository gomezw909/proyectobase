import { Card } from "@/components/organism/Card";
import { IDocumentos } from "@/interfaces/IDocumentos";

export default function DocumentoPage({ params }: { params: { identificacion: string } }) {
  return (
    <>
      <header>
        <h2 className="text-[2rem] text-gray-950 font-bold p-8">DOCUMENTO: ${params.identificacion} </h2>
      </header>

      <section className="p-8">
        <Card documento={documento} />

        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-blue-600 text-blue-300 font-bold p-2 rounded-md  w-36 h-12 btn hover:bg-blue-500 btn-outline transition-all hover:scale-105">
            Despachar
          </button>
        </div>
      </section>
    </>
  );
}

const documento: IDocumentos = {
  posicion: 1,
  prestamo: "Prestamo001",
  solicitud: "Solicitud001",
  identificacion: "ID001",
  garantia1: "Garantia1-001",
  garantia2: "Garantia2-001",
  garantia3: "Garantia3-001",
  caja1: "Caja1-001",
  fecha1: "2024-01-01",
  caja2: "Caja2-001",
  usuario: "Usuario001",
  fecha2: "2024-01-02",
  despachado: false,
};
