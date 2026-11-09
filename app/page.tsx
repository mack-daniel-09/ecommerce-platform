import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium">
            Welcome to ShopEase
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
            Find products you&apos;ll love.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover quality products, explore our latest collections, and enjoy
            a simple shopping experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-800 transition hover:bg-gray-100"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl bg-white p-10 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <ShoppingBag className="h-12 w-12 text-gray-400" />

            <h2 className="mt-5 text-2xl font-bold">
              Your next favorite product is waiting.
            </h2>

            <p className="mt-3 max-w-lg text-gray-500">
              Our product catalog will be available here once we connect Payload
              CMS.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
