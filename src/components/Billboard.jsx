const imageUrl =
  "https://images.unsplash.com/photo-1531256379416-9f000e90aacc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFubmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";
const labelInfo = "Explore the special collection!";

function Billboard() {
  return (
    <div className="flex w-[90vw] 0  rounded-md mb-12">
      <div
        className="w-full rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className=" font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-wxl ">
            {labelInfo}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
