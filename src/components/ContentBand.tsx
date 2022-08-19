import React, { ReactNode } from "react";

interface IContentBandProps {
	children: ReactNode;
	classes?: string;
}

export default function ContentBand({ children, classes }: IContentBandProps) {
	return <section className={`contentBand ${classes}`}>{children}</section>;
}
