export default function DashBoardPage() {
  return (
      <div className="w-full flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-[#f5f5f5]/80 aspect-video rounded-xl" />
            <div className="bg-[#f5f5f5]/80 aspect-video rounded-xl" />
            <div className="bg-[#f5f5f5]/80 aspect-video rounded-xl" />
          </div>
          <div className="bg-[#f5f5f5]/80 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
  );
}
