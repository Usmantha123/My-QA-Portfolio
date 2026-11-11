import React from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, BookOpen, Check, Sparkles } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-blue-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-surface-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="EXPERTISE"
          title="My Skills & Expertise"
          subtitle="Methodologies, tools, and testing practices I use to ensure software quality and defect-free releases."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-divider">
                    <div className="w-10 h-10 rounded-xl bg-surface-secondary flex items-center justify-center border border-divider">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-content">
                        {category.title}
                      </h3>
                      <span className="text-xs text-content-secondary">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Skill Items */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-secondary/60 hover:bg-surface-secondary border border-divider/60 hover:border-blue-500/40 text-xs sm:text-sm font-medium text-content transition-all cursor-default group"
                      >
                        <Check className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                        <span>{skill.name}</span>
                        {skill.status === 'learning' && (
                          <Badge variant="warning" size="sm" className="ml-1 text-[10px] py-0 px-1.5">
                            Learning
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Honest QA Note */}
                <div className="mt-6 pt-4 border-t border-divider/50 text-[11px] text-content-secondary flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>Hands-on applied competency &bull; No fictional metrics</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

