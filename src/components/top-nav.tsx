"use client";

import Link from "next/link";
import { useState } from "react";

export default function TopNav({
	className,
	links,
	socials,
}: {
	className?: string;
	links: {
		name: string;
		url: string;
	}[];
	socials: {
		name: string;
		icon: string;
		url: string;
	}[];
}) {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className={`shadow-xl text-white bg-slate-800 ${className}`}>
			<div className={"w-full h-12 px-4 flex items-center justify-between"}>
				<Link href={"/"}>
					<div className={"text-lg font-bold"}>Dennise Catolos</div>
				</Link>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={() => setMenuOpen(!menuOpen)}>
					<i className={"fa-solid fa-bars fa-lg"} />
				</div>
			</div>
			{menuOpen && (
				<div>
					<div className={"my-2 flex items-center justify-center gap-3"}>
						{socials.map((social) => (
							<Link key={social.name} href={social.url}>
								<i className={`${social.icon} fa-xl`} />
							</Link>
						))}
					</div>
					<div className={"mb-2"}>
						{links.map((link) => (
							<Link
								key={link.name}
								className={"block leading-10 text-center"}
								href={link.url}
								onClick={() => setMenuOpen(false)}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}