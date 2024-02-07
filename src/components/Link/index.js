import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
    return (
        <NextLink href={href} passHref legacyBehavior>
            <a {...props}>{children}</a>
        </NextLink>
    )
}