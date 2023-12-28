# Events-Ally - Aplicativo de Eventos

Bem-vindo ao Events-Ally, a sua nova plataforma para descobrir, participar e organizar eventos de maneira fácil e interativa! Este projeto é uma aplicação que permite aos usuários explorar eventos, criar novos e pegar ou comprar ingressos para seus eventos.

## Tecnologias Utilizadas

- **Next.js:** Desenvolvimento web moderno e eficiente.
- **Tailwind CSS:** Estilo moderno e responsivo.
- **Typescript:** Código mais seguro e legível.
- **Clerk:** Autenticação simplificada e gerenciamento de sessão.
- **Radix UI:** Componentes UI acessíveis e personalizáveis.
- **Stripe:** Pagamentos seguros e integrados.
- **MongoDB e Mongoose:** Banco de dados robusto para armazenamento de dados.
- **React Hook Form:** Gerenciamento simplificado de formulários.
- **React DatePicker:** Seleção de datas fácil e intuitiva.
- **Lucide React:** Ícones elegantes para uma experiência visual atraente.
- **SVIX:** Integração para eventos em tempo real.
- **Zod:** Validador de esquemas para garantir dados consistentes.

## Features do Projeto 🦉

- **Autenticação (CRUD) com Clerk:** Gerenciamento de usuários por meio do Clerk, garantindo uma autenticação segura e eficiente.

- **Criar Eventos:** Os usuários podem criar facilmente novos eventos, fornecendo detalhes essenciais como título, data, localização e informações adicionais.

- **Ler Eventos:** Acesso fácil a uma visão detalhada de todos os eventos, permitindo que os usuários explorem especificidades do evento, incluindo descrições, horários e informações relacionadas.

- **Atualizar Eventos:** Capacitando os usuários a modificar dinamicamente os detalhes do evento, garantindo que as informações do evento permaneçam precisas e atualizadas.

- **Excluir Eventos:** Um processo direto para remover eventos do sistema, dando aos administradores a capacidade de gerenciar e organizar a plataforma de forma eficaz.

- **Eventos (CRUD):** Funcionalidade abrangente para criar, ler, atualizar e excluir eventos, proporcionando aos usuários total controle sobre o gerenciamento de eventos.

- **Eventos Relacionados:** Conecta inteligentemente eventos relacionados e os exibe na página de detalhes do evento, tornando-a mais envolvente para os usuários.

- **Eventos Organizados:** Organização eficiente de eventos, garantindo uma exibição estruturada e amigável ao usuário, ou seja, mostrando eventos criados pelo usuário no perfil do usuário.

- **Pesquisa e Filtro:** Capacitação dos usuários com um sistema robusto de pesquisa e filtro, permitindo que eles encontrem facilmente os eventos que correspondem às suas preferências.

- **Nova Categoria:** Categorização dinâmica permite a adição contínua de novas categorias de eventos, mantendo sua plataforma adaptável.

- **Checkout e Pagamento com Stripe:** Transações de pagamento suaves e seguras usando o Stripe, aprimorando a experiência do usuário durante o processo de checkout.

- **Pedidos de Eventos:** Sistema abrangente de gerenciamento de pedidos, fornecendo uma visão clara de todas as transações relacionadas a eventos.

- **Pesquisa de Pedidos:** Funcionalidade rápida e eficiente de pesquisa para pedidos, facilitando o rastreamento e gerenciamento.

## Como Contribuir

Sinta-se à vontade para contribuir para o desenvolvimento do Evently! Basta seguir o link do [repositório](https://github.com/EricSousa02/Events-Ally) e fazer suas sugestões ou enviar pull requests.

## Deploy

Confira a versão ao vivo do Evently [aqui](https://events-ally.vercel.app/)!

## Como Configurar

Siga o exemplo de banco das variáveis de ambiente a seguir e de como fazer as tabelas no banco de dados.

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL: /sign-in`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL: /sign-up`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: /`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: /`
- `MONGODB_URI`
- `WEBHOOK_SECRET`
- `UPLOADTHING_SECRET`
- `UPLOADTHING_APP_ID`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_SERVER_URL: http://localhost:3000`