function BackgroundContainer() {
  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#3a3a3a12_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a12_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="fixed top-0 left-0 w-[20%] aspect-square bg-[#ad2ac1] opacity-30 rounded-full blur-[150px]"></div>
      <div className="fixed top-0 right-0 w-[20%] aspect-square bg-[#6aa894] opacity-30 rounded-full blur-[150px]"></div>

      <div
        className="fixed top-1/2 left-1/2 w-[20%] aspect-square
        bg-[#6aa894] opacity-30 rounded-full blur-[70px]
          -translate-x-1/2 -translate-y-1/2
          will-change-transform
          animate-[float-bottom_2s_ease-in-out_infinite]"
      ></div>
      <div
        className="fixed top-1/2 left-1/2 w-[20%] aspect-square
        bg-[#5a8efd] opacity-30 rounded-full blur-[70px]
          -translate-x-1/2 -translate-y-1/2
          will-change-transform
          animate-[float-right_2s_ease-in-out_infinite]"
      ></div>
      <div
        className="fixed top-1/2 left-1/2 w-[20%] aspect-square
        bg-[#bb1e79] opacity-30 rounded-full blur-[70px]
          -translate-x-1/2 -translate-y-1/2
          will-change-transform
          animate-[float-top_2s_ease-in-out_infinite]"
      ></div>

      <div className="fixed bottom-0 left-0 w-[20%] aspect-square bg-[#3b8bb3] opacity-30 rounded-full blur-[150px]"></div>
    </>
  );
}

export default BackgroundContainer;
