"use client";

import { IDocumentos } from "@/interfaces/IDocumentos";
import { createImageUseCase } from "@/modules/Imagenes/usecases/createImageUseCase";
import Image from "next/image";
import { useRef, useState } from "react";

export const ImageUpload = ({ documento }: { documento: IDocumentos }) => {
  const fileInputRef = useRef<any>(null);

  const handleFileChange = async (event: any) => {
    await createImageUseCase({documento, imageFile: event.target.files[0]})
  };

  const handleUpload = async () => {
    if (fileInputRef) {
      fileInputRef?.current?.click();
    }
  };

  return (
    <div>
      <div className="h-96 w-96 bg-gray-600 flex items-center justify-center hover:cursor-pointer">
        {!documento.imageUrl ? (
          <Image onClick={handleUpload} src="/svg/add-image.svg" alt={"No imagen disponible"} width={96} height={96} className="hover:scale-105 transition-all" />
        ) : (
          <Image src={documento.imageUrl} alt={"Imagen"} width={96} height={96} className="hover:scale-105 transition-all" />
        )}
      </div>

      <input hidden ref={fileInputRef} type="file" onChange={handleFileChange} accept="image/*" />
    </div>
  );
};
