import { ScrollReveal } from './ScrollReveal';

interface SectionHeaderProps {
    eyebrow?: string;
    title: string;
    noLine?: boolean;
    centered?: boolean;
    delay?: 'delay-1' | 'delay-2' | 'delay-3';
}

export const SectionHeader = ({
    eyebrow,
    title,
    noLine = false,
    centered = false,
    delay = 'delay-1'
}: SectionHeaderProps) => {
    return (
        <ScrollReveal delay={delay}>
            {eyebrow && (
                <div className={`section-eyebrow ${noLine ? 'no-line' : ''} ${centered ? 'justify-center' : ''}`}>
                    {eyebrow}
                </div>
            )}
            <h2 className={`section-title ${centered ? 'text-center' : ''}`}>
                {title}
            </h2>
        </ScrollReveal>
    );
};