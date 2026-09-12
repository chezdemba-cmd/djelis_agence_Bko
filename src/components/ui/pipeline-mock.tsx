import { cn } from "@/lib/utils";

export function PipelineMock({
  type,
  className,
}: {
  type: "message" | "order";
  className?: string;
}) {
  if (type === "message") {
    return (
      <div
        className={cn(
          "mb-3.5 flex aspect-9/16 w-full flex-col justify-between bg-navy p-3 shadow-[0_0_0_1px_rgba(22,40,58,0.16)]",
          className,
        )}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 flex-none rounded-full bg-whatsapp" />
          <span className="font-mono text-[8px] tracking-[0.08em] text-whatsapp">
            ASSISTANT DJELI&apos;S ACTIF
          </span>
        </div>
        <div
          className="max-w-[85%] self-start px-3 py-2.5"
          style={{
            background: "rgba(242,241,236,0.08)",
            borderRadius: "2px 12px 12px 12px",
          }}
        >
          <div className="mb-1 font-mono text-[7.5px] tracking-[0.08em] text-white/62">
            CLIENT
          </div>
          <div className="text-[11px] leading-snug text-[#F2F1EC]/94">
            « Bonjour, j&apos;ai vu votre vidéo. Le produit est encore
            disponible ? »
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-3.5 flex aspect-9/16 w-full flex-col justify-center bg-navy p-3 shadow-[0_0_0_1px_rgba(22,40,58,0.16)]",
        className,
      )}
    >
      <div className="bg-whatsapp/10 px-3.5 py-3.5 shadow-[0_0_0_1px_#25D366]">
        <div className="mb-1.75 font-mono text-[8px] tracking-[0.1em] text-whatsapp">
          COMMANDE CRÉÉE
        </div>
        <div className="font-mono text-[10px] leading-loose text-white/85">
          MARIAM · 2 × MODÈLE NOIR
          <br />
          50 000 FCFA · BAMAKO
          <br />
          PAIEMENT : À CONFIRMER
        </div>
      </div>
    </div>
  );
}
