import { Collection } from "@/components/shared";
import { UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.action";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = String(searchParams?.query as string);

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Imaginify
        </h1>

        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map(({ route, icon, label }) => (
            <Link
              key={route}
              href={route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={icon} alt="icon" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <Collection
          images={images?.data}
          page={page}
          totalPages={images?.totalPages}
          hasSearch={true}
        />
      </section>
    </>
  );
}
