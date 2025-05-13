import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Usos',
  description: 'Software que uso, gadgets que amo e outras coisas que recomendo.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software que uso, gadgets que amo e outras coisas que recomendo."
      intro="Muitas vezes me perguntam sobre as coisas que uso para construir software. 
      Aqui está uma grande lista de todas as minhas coisas favoritas."
    >
      <div className="space-y-20">
        <ToolsSection title="Ferramentas de Desenvolvimento">
          <Tool title="Cursor">
            Um editor de texto poderoso e leve, ideal para desenvolvedores que buscam eficiência e simplicidade.
          </Tool>
          <Tool title="VSCode">
            Um editor de código-fonte altamente extensível e popular, com suporte para uma ampla gama de linguagens de programação.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Ferramenta de design colaborativa que se tornou essencial para o trabalho em equipe,
            permitindo criar e compartilhar designs de forma eficiente.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Produtividade">
          <Tool title="Linear">
            Uma ferramenta de gerenciamento de projetos que combina simplicidade e eficiência, ideal para equipes ágeis.
          </Tool>
          <Tool title="Slack">
            Plataforma de comunicação que facilita a colaboração em equipe, integrando-se com várias outras ferramentas de produtividade.
          </Tool>
          <Tool title="Clerk">
            Ferramenta que uso para facilitar a criação de usuários e administração dos mesmos.
          </Tool>
          <Tool title="Vercel">
            Plataforma de hospedagem que simplifica o processo de implantação de aplicações web,
            focando na performance e na experiência do desenvolvedor.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
