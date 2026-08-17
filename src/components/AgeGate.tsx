"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";

const STORAGE_KEY = "vaperd_age_verified";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

function getServerSnapshot() {
  return false;
}

export function AgeGate() {
  const verified = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [declined, setDeclined] = useState(false);
  const [justAccepted, setJustAccepted] = useState(false);

  if (verified || justAccepted) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-obsidian px-6 text-center">
      <Image
        src="/logo.jpg"
        alt="Vapeando RD"
        width={220}
        height={220}
        priority
      />

      {declined ? (
        <>
          <p className="max-w-sm font-body text-lg text-bone">
            Este sitio es solo para personas mayores de 18 años. No puedes
            continuar.
          </p>
        </>
      ) : (
        <>
          <p className="max-w-sm font-body text-lg text-bone">
            Este sitio es para mayores de 18 años. ¿Confirmas tu edad?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                window.localStorage.setItem(STORAGE_KEY, "true");
                setJustAccepted(true);
              }}
              className="rounded bg-bone px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-obsidian transition-colors motion-reduce:transition-none hover:bg-brass focus-visible:bg-brass"
            >
              Sí, soy mayor de 18
            </button>
            <button
              type="button"
              onClick={() => setDeclined(true)}
              className="rounded border border-graphite px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-bone transition-colors motion-reduce:transition-none hover:border-brass focus-visible:border-brass"
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
}
