import NextLink from "next/link";

export default function Link({children, href, ...props}) {
  return (
    <NextLink href={href} passHref>
      <h3 {...props}>{children}</h3>
    </NextLink>
  );
}
