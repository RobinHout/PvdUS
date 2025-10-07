import React from "react";
import Link from "next/link";

/**
 * SocialLinks
 * A tiny, accessible Instagram & LinkedIn icon row for Next.js (TypeScript).
 *
 * Usage:
 * <SocialLinks instagramUrl="https://instagram.com/yourhandle" linkedinUrl="https://www.linkedin.com/in/yourprofile" size={18} />
 */
export type SocialLinksProps = {
    instagramUrl: string;
    linkedinUrl: string;
    /** icon size in px */
    size?: number;
    /** optional extra classes for the wrapper */
    className?: string;
};

const srOnly = "sr-only";

const InstagramIcon: React.FC<{ size: number }> = ({ size }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
);

const LinkedInIcon: React.FC<{ size: number }> = ({ size }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            stroke="currentColor"
            strokeWidth="2"
        />
        <circle cx="8" cy="9" r="1.25" fill="currentColor" />
        <rect x="6.75" y="11" width="2.5" height="7" fill="currentColor" />
        <path
            d="M12 18v-4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4"
            stroke="currentColor"
            strokeWidth="2"
        />
    </svg>
);

const SocialsButton: React.FC<SocialLinksProps> = ({
    instagramUrl,
    linkedinUrl,
    size = 18,
    className,
}) => {
    const baseBtn =
        "inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40 dark:focus-visible:ring-white/50 transition-transform hover:scale-[1.05]";
    const iconWrap =
        "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white";

    return (
        <div
            className={"flex items-center gap-2 " + (className ?? "")}
            aria-label="Social links"
        >
            <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseBtn} ${iconWrap}`}
                aria-label="Open Instagram profile"
                title="Instagram"
            >
                <InstagramIcon size={size} />
                <span className={srOnly}>Instagram</span>
            </Link>

            <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseBtn} ${iconWrap}`}
                aria-label="Open LinkedIn profile"
                title="LinkedIn"
            >
                <LinkedInIcon size={size} />
                <span className={srOnly}>LinkedIn</span>
            </Link>
        </div>
    );
};

export default SocialsButton;
