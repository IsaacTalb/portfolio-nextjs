import Image from "next/image";
import Link from "next/link";
export const ProjectCard = ({ title, cover, slug }: { title: string; cover: string; slug: string }) => (
    <Link href={`/projects?highlight=${slug}`} className="group block">
        <div className="overflow-hidden rounded-2xl border">
            <Image
                src={cover}
                alt={title}
                width={800}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="transition-transform duration-300 group-hover:scale-[1.02] object-cover w-full h-auto aspect-video"
                style={{ position: "relative" }}
            />
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight">{title}</h3>
    </Link>
);
