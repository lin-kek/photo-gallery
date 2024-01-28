"use client";

import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import { photoList } from "@/data/photoList";

import GalleryItem from "@/components/GalleryItem";
import Modal from "@/components/Modal";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  function openModal(id: number) {
    const photo = photoList.find((item) => item.id === id);

    if (photo) {
      setModalImage(photo.image);
      setShowModal(true);
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="mx-2 my-2">
      <h1 className="text-center text-3xl font-bold my-10">
        Amazing Things Created by Humanity
      </h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((item) => (
          <GalleryItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>

      <AnimatePresence>
        {showModal && <Modal image={modalImage} closeModal={closeModal} />}
      </AnimatePresence>
    </div>
  );
}
