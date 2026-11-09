import Link from "next/link";
import { ShoppingCart, User, Store } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
];

export default function StoreHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Store className="h-6 w-6" />

          <span className="text-xl font-bold">ShopEase</span>
        </Link>
        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-600 transition hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Actions */}
        <div className="flex items-center gap-5">
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="text-gray-700 hover:text-black"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>

          <Link
            href="/login"
            aria-label="Account"
            className="text-gray-700 hover:text-black"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
