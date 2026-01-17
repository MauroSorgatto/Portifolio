import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Sobre Mim',
  description:
    'Eu sou Mauro Luiz, Moro em Jaragua do Sul/SC .',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Eu sou Mauro Sorgatto. Moro em Jaragua do Sul.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas pela Univali desde 2024,
              mas já tô na área desde 2023. Sempre curti tudo que envolvia tecnologia,
              jogos e informação — muito por influência do meu pai, que também é dev.
              Desde pequeno achava incrível as paradas que ele fazia, e isso me fez querer seguir o mesmo caminho.
            </p>
            <p>
              Minha história com games começou lá em 2013, quando conheci os jogos online como LoL, CS e Tibia.
              Com o tempo fui evoluindo, jogando cada vez melhor, e acabei até jogando com streamers famosos e players profissionais.
              Nesse processo, fui me apaixonando ainda mais pela tecnologia e comecei a ficar curioso sobre como tudo funcionava por trás dos jogos e dos sites.
              Foi aí que decidi mergulhar no mundo da programação.
            </p>
            <p>
              Sou pai de pet, fã de um bom jogo online e também curto esportes como futebol, basquete, skate e um rolê de bike de vez em quando.
              Gosto de manter o equilíbrio entre a vida tech e meus hobbies, sempre buscando aprender e evoluir em tudo que faço.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/MauroSorgatto" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/maurosorgatto/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/MauroSorgatto" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/maurosorgatto/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:mauroluiz312@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mauroluiz312@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
