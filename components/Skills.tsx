'use client'
import { motion } from 'framer-motion'
import { TrackConfig } from './tracks'
// pdf: ?mode=pdf일 때 PDF 브랜치(origin/pdf, f61d2c1)의 여백 값 사용
export default function Skills({
  config,
  pdf = false,
}: {
  config: TrackConfig
  pdf?: boolean
}) {
  const { skills, softSkills } = config
  return (
    <section className={`${pdf ? 'break-before-page' : 'py-16'} bg-surface`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={pdf ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-center ${pdf ? 'mb-6' : 'mb-12'}`}>
          <h2 className={`${pdf ? 'text-3xl mb-2' : 'text-3xl md:text-4xl mb-4'} font-extrabold`}>
            기술과 역량
          </h2>
          <p className={`${pdf ? 'text-base' : 'text-lg'} text-subText`}>
            기술마다 직접 해 본 일을 적었습니다.
          </p>
        </motion.div>
        <div className={`${pdf ? 'space-y-6' : 'space-y-12'} text-center`}>
          <div>
            <h3 className={`text-xl font-semibold text-text ${pdf ? 'mb-3' : 'mb-4'}`}>
              Technical Skills
            </h3>
            <div className={`grid ${pdf ? 'grid-cols-2 gap-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10'}`}>
              {skills.map((s) => (
                <div
                  key={s.name}
                  className={`bg-surface border border-border rounded-2xl shadow-custom ${pdf ? 'p-4 break-inside-avoid' : 'p-6'} flex flex-col items-start transition hover:scale-[1.03] hover:shadow-lg`}>
                  <div className={`flex w-full ${pdf ? 'items-baseline justify-between gap-3 mb-1' : 'items-center mb-2'}`}>
                    <span className={`font-bold text-primary text-lg mr-2 ${pdf ? 'shrink-0' : ''}`}>
                      {s.name}
                    </span>
                  </div>
                  <ol className={`pl-2 text-subText ${pdf ? 'text-sm' : 'text-[0.98rem]'} list-decimal list-inside space-y-1 text-left`}>
                    {s.desc.map((item, index) => (
                      <li
                        key={index}
                        className="list-none">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-xl font-semibold text-text text-center ${pdf ? 'mb-3' : 'my-4'}`}>
              Soft Skills
            </h3>
            <div className={`grid ${pdf ? 'grid-cols-3 gap-3' : 'grid-cols-1 md:grid-cols-3 gap-6'}`}>
              {softSkills.map((skill) => (
                <div
                  key={skill.category}
                  className={`bg-background rounded-xl p-4 border border-border transition hover:scale-[1.02] hover:shadow-lg ${pdf ? 'break-inside-avoid' : ''}`}>
                  <h4 className={`font-semibold text-primary pt-1 ${pdf ? 'mb-2' : 'mb-3'}`}>
                    {skill.category}
                  </h4>
                  <ul className={`${pdf ? 'space-y-1' : 'space-y-2'} list-disc pl-3 ml-2`}>
                    {skill.details.map((detail, index) => (
                      <li
                        key={index}
                        className="text-sm text-subText text-left">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
