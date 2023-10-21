'use client';

import { useState } from 'react';

export function useModalUtils() {
  const [showModal, seShowModal] = useState(false);

  function openModal() {
    seShowModal(true);
  }

  function closeModal() {
    seShowModal(false);
  }

  return { showModal, openModal, closeModal };
}
