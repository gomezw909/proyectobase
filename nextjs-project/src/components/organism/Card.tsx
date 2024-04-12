import { CardInfo } from "@/components/atoms/CardInfo";
import { IDocumentos } from "@/interfaces/IDocumentos";
import Image from "next/image";

export const Card = ({ documento }: { documento: IDocumentos }) => {
  return (
    <div className=" bg-gray-100 shadow-md rounded-lg p-6 flex gap-8">
      {/* IMAGEN */}
      <div className="h-96 w-96 bg-gray-600 flex items-center justify-center hover:cursor-pointer">
        <Image src="/svg/add-image.svg" alt={"No imagen disponible"} width={96} height={96} className="hover:scale-105 transition-all"/>
      </div>

      {/* INFO */}
      <div>
        <CardInfo title="Prestamo" value={documento.prestamo} />
        <CardInfo title="Posicion" value={documento.posicion} />
        <CardInfo title="Solicitud" value={documento.solicitud} />
        <CardInfo title="Identificacion" value={documento.identificacion} />
        <CardInfo title="Garantia 1" value={documento.garantia1} />
        <CardInfo title="Garantia 2" value={documento.garantia2} />
        <CardInfo title="Garantia 3" value={documento.garantia3} />
        <CardInfo title="Caja 1" value={documento.caja1} />
        <CardInfo title="Fecha 1" value={documento.fecha1} />
        <CardInfo title="Caja 2" value={documento.caja2} />
        <CardInfo title="Usuario" value={documento.usuario} />
        <CardInfo title="Fecha 2" value={documento.fecha2} />
        <CardInfo title="Despachado" value={documento.despachado ? "Si" : "No"} />
      </div>
    </div>
  );
};
