const Overlay = ({ handleCloseOverlay }: { handleCloseOverlay: () => void }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full overflow-hidden h-dvh bg-[#00000080] z-10"
      onClick={handleCloseOverlay}
    ></div>
  );
};

export default Overlay;
