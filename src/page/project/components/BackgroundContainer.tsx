function BackgroundContainer() {
  return (
    <div className="fixed inset-0 bg-[#030014] -z-11">
      {/* for web desktop */}
      <div className="hidden sm:block fixed top-0 left-0 w-[20%] aspect-square bg-[#ad2ac1] opacity-30 rounded-full blur-[150px] -z-9"></div>
      <div className="hidden sm:block fixed top-0 right-0 w-[20%] aspect-square bg-[#6aa894] opacity-30 rounded-full blur-[150px] -z-9"></div>

      <div className="hidden sm:block fixed bottom-0 left-0 w-[20%] aspect-square bg-[#3b8bb3] opacity-30 rounded-full blur-[150px] -z-9"></div>
      <div className="hidden sm:block fixed bottom-0 right-0 w-[20%] aspect-square bg-[#ca23a6] opacity-30 rounded-full blur-[150px] -z-9"></div>
      {/* for web mobile */}
      <div className="fixed sm:hidden top-0 left-0 w-[40%] aspect-square bg-[#ad2ac1] rounded-full opacity-70 blur-[100px] -z-9"></div>
      <div className="fixed sm:hidden top-0 right-0 w-[30%] aspect-square bg-[#7700ff] rounded-full opacity-70 blur-[100px] -z-9"></div>

      <div
        className="sm:hidden fixed top-96 left-1/2 w-[70%] aspect-square
        bg-[#5a8efd] opacity-50 rounded-full blur-[100px]
          -translate-x-1/2 -translate-y-1/2
          will-change-transform
          animate-[float-top_2s_ease-in-out_infinite] -z-9"
      ></div>
      <div
        className="sm:hidden fixed bottom-0 left-1/2 w-[70%] aspect-square
        bg-[#bb1e79] opacity-50 rounded-full blur-[100px]
          -translate-x-1/2 -translate-y-1/2
          will-change-transform
          animate-[float-top_2s_ease-in-out_infinite] -z-9"
      ></div>

      <div className="fixed sm:hidden bottom-0 left-0 w-[40%] aspect-square bg-[#625485] rounded-full opacity-70 blur-[100px] -z-9"></div>
      <div className="fixed sm:hidden bottom-0 right-0 w-[30%] aspect-square bg-[#ca23a6] rounded-full opacity-70 blur-[100px] -z-9"></div>
    </div>
  );
}

export default BackgroundContainer;
