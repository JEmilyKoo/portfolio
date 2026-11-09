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
    <section className={`${pdf ? 'py-2' : 'py-16'} bg-surface`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={pdf ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            기술과 역량
          </h2>
          <p className="text-lg text-subText ">
            실제로 사용한 프로젝트와 함께 적었습니다.
          </p>
        </motion.div>
        <div className="space-y-12 text-center">
          <div>
            <h3 className="text-xl font-semibold text-text mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              {skills.map((s) => (
                <div
                  key={s.name}
                  className={`bg-surface border border-border rounded-2xl shadow-custom ${pdf ? 'p-4' : 'p-6'} flex flex-col items-start transition hover:scale-[1.03] hover:shadow-lg`}>
                  <div className={`flex items-center w-full ${pdf ? 'mb-1' : 'mb-2'}`}>
                    <span className="font-bold text-primary text-lg mr-2">
                      {s.name}
                    </span>
                    <span className="ml-auto text-xs text-subText">
                      {s.level}
                    </span>
                  </div>
                  <ol className={`pl-2 text-subText ${pdf ? 'text-base' : 'text-[0.98rem]'} list-decimal list-inside space-y-1 text-left`}>
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
            <h3 className={`text-xl font-semibold text-text my-4 text-center ${pdf ? 'pt-8' : ''}`}>
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <div
                  key={skill.category}
                  className="bg-background rounded-xl p-4 border border-bording transition hover:scale-[1.02] hover:shadow-lg">
                  <h4 className="font-semibold text-primary pt-1 mb-3">
                    {skill.category}
                  </h4>
                  <ul className="space-y-2 list-disc pl-3 ml-2">
                    {skill.details.map((detail, index) => (
                      <li
                        key={index}
                        className="ext-sm text-subText text-left">
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
