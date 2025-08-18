// File: attribixweb/attribixweb/src/components/Features.tsx
import {
  IconChartBar,
  IconShieldCheck,
  IconChartPie,
  IconClock,
} from '@tabler/icons-react'

const features = [
  {
    Icon: IconChartBar,
    title: 'Accurate Tracking',
    desc: 'Track your ads with precision and confidence.',
  },
  {
    Icon: IconShieldCheck,
    title: 'Privacy-Compliant',
    desc: 'Ensure your data aligns with global privacy standards.',
  },
  {
    Icon: IconChartPie,
    title: 'Data-Driven Insights',
    desc: 'Make informed decisions based on accurate analytics.',
  },
  {
    Icon: IconClock,
    title: 'Real-Time Analytics',
    desc: 'Access live performance data for your campaigns.',
  },
]

export default function Features() {
  return (
    <section
      className="
        relative
        py-16
        bg-gradient-to-b
        from-[rgba(15,23,42,0.5)]
        via-[rgba(15,23,42,0.8)]
        to-[rgba(15,23,42,0.5)]
      "
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map(({ Icon, title, desc }) => (
          <div key={title} className="text-center space-y-3">
            <Icon
              size={48}
              className="mx-auto bg-clip-text text-transparent bg-gradient-to-r from-[#004077] to-[#180440]"
            />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}