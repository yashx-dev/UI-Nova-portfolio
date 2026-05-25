import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionHeader } from '../ui/SectionHeader';
import { ToolCard } from '../cards/ToolCard';
import { tools } from '../../data/data';

export const Tools = () => {
    return (
        <div className="section-wrap" id="tools" style={{ textAlign: 'center' }}>
            <SectionHeader
                eyebrow="Arsenal"
                title="My Tools"
                noLine
                centered
                delay="delay-1"
            />

            <div className="tools-row">
                {tools.map((tool, index) => (
                    <ScrollReveal key={tool.id} delay={`delay-${index + 1}` as 'delay-1' | 'delay-2' | 'delay-3'| 'delay-4'}>
                        <ToolCard tool={tool} />
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
};