export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-black/40 z-50 px-8 py-4 flex justify-between">
      <h1 className="text-xl font-bold">YourBrand</h1>
      <div className="space-x-6 text-gray-300">
        <a href="#portfolio">עבודות</a>
        <a href="#packages">חבילות</a>
        <a href="#contact">צור קשר</a>
      </div>
    </nav>
  );
}