import H3Fill from "../../typography/h3_fill";

export function StreamingOffline() {
  return (
    <div className="bg-secondarydark w-[250px] h-[40px] flex flex-row rounded-[5px] justify-center items-center gap-2">
      <div className="h-[20px] w-[20px] bg-thirddark rounded-full"></div>
      <H3Fill>Currently offline</H3Fill>
    </div>
  );
}

export function StreamingOnline() {
  return (
    <div className="bg-secondarydark w-[250px] h-[40px] flex flex-row rounded-[5px] justify-center items-center gap-2">
      <div className="h-[20px] w-[20px] bg-red-600 animate-pulse transition-all rounded-full"></div>
      <H3Fill>Currently streaming!</H3Fill>
    </div>
  );
}
