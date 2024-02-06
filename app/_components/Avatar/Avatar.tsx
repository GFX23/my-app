import Image from "next/image";

type Props = {
	src: string;
	alt: string;
};

export const Avatar: FP<Props> = ({ src, alt }) => (
	<Image
		src={src}
		alt={alt}
		width={40}
		height={40}
		className="rounded-full border-2 border-white"
	/>
);
