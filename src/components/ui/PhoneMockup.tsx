import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  className?: string;
}

export default function PhoneMockup({ className }: PhoneMockupProps) {
  return (
    <div
      className={cn("relative mx-auto select-none", className)}
      style={{ width: 260, height: 520 }}
      aria-hidden="true"
    >
      {/* Phone body */}
      <div
        className="absolute inset-0 overflow-hidden shadow-2xl"
        style={{
          borderRadius: 40,
          border: "8px solid #111",
          background: "linear-gradient(160deg, #0D1F2D 0%, #1B3A5C 50%, #0D2840 100%)",
        }}
      >
        {/* Dynamic island */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 bg-black z-10"
          style={{ width: 100, height: 22, borderRadius: 11 }}
        />

        {/* Screen content */}
        <div className="absolute inset-0 pt-12 pb-6 px-4 flex flex-col gap-3">
          {/* Status bar */}
          <div className="flex justify-between items-center text-white/40 text-[8px] px-1">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5">
                {[3, 4, 4, 5].map((h, i) => (
                  <div
                    key={i}
                    className="bg-white/50 rounded-sm"
                    style={{ width: 2, height: h }}
                  />
                ))}
              </div>
              <div className="w-3 h-1.5 rounded-sm border border-white/40 ml-1">
                <div className="w-2/3 h-full bg-white/50 rounded-sm" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-1">
            <div>
              <div className="h-2 w-16 bg-indigo/80 rounded-full mb-1" />
              <div className="h-1.5 w-10 bg-white/20 rounded-full" />
            </div>
            <div className="w-7 h-7 rounded-full bg-indigo/30 border border-indigo/40" />
          </div>

          {/* Map area */}
          <div
            className="flex-1 rounded-2xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #1B3A5C 0%, #2A4F70 40%, #1A3A55 100%)",
              minHeight: 140,
            }}
          >
            {/* Map grid lines */}
            <div className="absolute inset-0 opacity-20">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={`h-${i}`}
                  className="absolute left-0 right-0 border-t border-white/30"
                  style={{ top: `${25 * (i + 1)}%` }}
                />
              ))}
              {[0, 1, 2].map((i) => (
                <div
                  key={`v-${i}`}
                  className="absolute top-0 bottom-0 border-l border-white/30"
                  style={{ left: `${33 * (i + 1)}%` }}
                />
              ))}
            </div>
            {/* Location pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-crimson rounded-full border-2 border-gold shadow-lg shadow-crimson/50" />
              <div className="w-1 h-3 bg-crimson mx-auto -mt-0.5" style={{ borderRadius: "0 0 4px 4px" }} />
            </div>
            {/* MAP label */}
            <div className="absolute bottom-2 left-2 text-[8px] text-white/30 font-medium tracking-wider">
              KYUSHU GO
            </div>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-hidden">
            {[
              { label: "すべて", active: true },
              { label: "グルメ", active: false },
              { label: "観光", active: false },
              { label: "温泉", active: false },
            ].map(({ label, active }) => (
              <div
                key={label}
                className={cn(
                  "shrink-0 px-2.5 py-1 rounded-full flex items-center",
                  active ? "bg-crimson" : "bg-white/10"
                )}
              >
                <span className="text-[8px] text-white font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* Spot cards */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "博多ラーメン", type: "グルメ", color: "#5C1A1A" },
              { name: "太宰府天満宮", type: "観光", color: "#1A3D5C" },
              { name: "別府温泉",     type: "温泉", color: "#2A1A0A" },
              { name: "阿蘇山",       type: "自然", color: "#2D5A3D" },
            ].map(({ name, type, color }) => (
              <div
                key={name}
                className="rounded-xl p-2.5 flex flex-col gap-1"
                style={{ background: `${color}CC` }}
              >
                <div
                  className="w-full rounded-lg"
                  style={{ height: 32, background: `${color}` }}
                />
                <p className="text-[8px] text-white font-semibold leading-tight">{name}</p>
                <p className="text-[7px] text-white/50">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side buttons */}
      <div
        className="absolute bg-[#111]"
        style={{ right: -5, top: 90, width: 3, height: 60, borderRadius: "0 4px 4px 0" }}
      />
      <div
        className="absolute bg-[#111]"
        style={{ left: -5, top: 80, width: 3, height: 36, borderRadius: "4px 0 0 4px" }}
      />
      <div
        className="absolute bg-[#111]"
        style={{ left: -5, top: 128, width: 3, height: 36, borderRadius: "4px 0 0 4px" }}
      />
    </div>
  );
}
