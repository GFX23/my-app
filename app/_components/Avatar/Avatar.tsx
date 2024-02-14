import Image from "next/image";

type Props = {
	src: string;
	alt: string;
};

export const Avatar: FP<Props> = ({ src, alt }) => (
	<Image
		src={src}
		alt={alt}
		width={32}
		height={32}
		className="rounded-full border-2 border-white"
	/>
);
