import guitarbg from "@/public/guitarbg.svg"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${guitarbg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </body>
  )
}

export default layout
