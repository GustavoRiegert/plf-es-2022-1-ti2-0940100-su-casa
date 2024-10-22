# SU CASA


**André Sathleer, aamsathler@sga.pucminas.br**

**Bruno Vieira Cardoso, brunogrupo@gmail.com**

**Gustavo Henrique Dos Santos Riegert, ghsriegert@sga.pucminas.br**

**Nicolás Melo Chabot, nicochabmelo@gmail.com**

**Yuri Lucas, ylsferreira@sga.pucminas.br**

---

Professores:

**Hugo Bastos de Paula**

**Joyce Christina de Paiva Carvalho**

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

**Resumo**

Este trabalho consiste na criação de um sistema que permita ao usuário realizar a reserva de um local para a realização de um evento e contratar o staff que irá trabalhar na ocasião. O objetivo do sistema é permitir ao usuário mais facilidade na organização de eventos, além de gerar receita para o proprietário do local e mais oportunidades para o staff contratado.

---


## 1. Introdução

Organização de eventos, inclusive os de pequeno porte, demandam trabalho e tempo por parte de quem os organiza. Uma residência é sinônimo de um lar, mas também de despesas recorrentes para seus donos. E se houvesse uma forma de resolver essas duas questões através de uma única forma?
Esta foi a ideia que norteou a criação da aplicação Su Casa, na qual o proprietário transforma sua residência em um local para eventos, logo sua casa começa a gerar receita, e o promotor consegue fechar a contratação de todo staff através de um clique, economizando tempo e, portanto, dinheiro. 

    1.1 Contextualização

Residências são consideradas ativos na classificação contábil. Contudo, trata-se de um ativo que gera despesas recorrentes, como manutenções, tributos etc. Desta forma, o custo para se manter um imóvel é alto. Portanto, uma solução para reduzir esses impactos financeiros seria a geração de receita. Isto é, o imóvel passar a gerar receitas recorrentes para seu proprietário e não apenas despesas.

A primeira coisa que vem à mente seria disponibilizar o imóvel para locação – integral ou de alguns cômodos. Entretanto, quando o proprietário reside no imóvel, essa opção se torna, às vezes, inconveniente.

O proprietário do imóvel que inspirou a criação da aplicação, identificou que as despesas envolvendo sua casa custavam anualmente aproximadamente R$ 30 mil. A partir disso, ele começou a procurar maneiras para reduzir as despesas. Contudo, a principal delas era compulsória: o IPTU - 1% do valor venal para imóveis acima de R$ 1 milhão, conforme consta na tabela III da Lei nº 5.641/1989. As demais eram manutenções necessárias. Desta forma, não restou muito para se fazer em relação as despesas.

Assim, a única solução viável seria a geração de receitas – com uma ressalva: ele não deixaria de morar em sua casa. Cogitou alugar alguns cômodos. Porém, a ideia de se ter por vários dias algumas pessoas dentro de sua casa, o fizeram desistir. Cogitou, em seguida, alugar seu imóvel para temporada. Contudo, isso feria sua regra inicial, pois por alguns dias não poderia morar em sua casa. Além disso, a ideia de desconhecidos presentes por vários dias em sua residência sem a sua presença, lhe causava desconforto.

Por fim, surgiu a ideia de alugar a parte externa de sua casa para eventos conforme sua conveniência. Desta forma, ele receberia por este aluguel, não precisaria deixar sua residência, preservaria sua intimidade, estaria presente no local e não teria pessoas por mais de um dia ali.

    1.2 Problema

O proprietário gostaria de ter algum controle sobre as pessoas que trabalhariam nos eventos. Sabendo que organizar eventos sempre demandou muita energia de quem os promove, principalmente em razão da gama de fornecedores que envolvem a atividade, ele identificou uma oportunidade que solucionaria essa questão: a equipe seria cadastrada previamente no sistema. Assim, ele teria o controle de quem estaria trabalhando em sua casa e o promotor de eventos teria a facilidade de não ter que buscar mão de obra para a realização do seu evento.

    1.3 Objetivo geral
    
A Su Casa busca elaborar um sistema para que proprietários possam disponibilizar espaços em sua casa para a realização de eventos,assim garantindo uma renda extra com mais segurança, além disso o sistema faria a seleção automática do staff, com base nos profissionais cadastrados no sistema, facilitando consideravelmente a realização do evento para o promotor.

        1.3.1 Objetivos específicos

- Desenvolver um sistema de comunicação entre organizador e prestador de serviço para que o evento seja planejado, negociado e organizado de maneira agradável, econômica e segura
- Entregar ao organizador ofertas de eventos em locais e com staff mais baratos, privados e econômicos do que as ofertadas no mercado 
-Desenvolver a modelagem de processos de negócios, focando em organização de eventos, na interatividade entre os usuários, staff e locatário.

    1.4 Justificativas

Através da aplicação Su Casa, o proprietário rentabiliza um ativo que antes apenas gerava despesa, o staff tem mais oportunidades de trabalho e o promotor do evento ganha tempo e facilidade na realização da sua festa.

## 2. Participantes do processo

**Proprietário do imóvel**

O proprietário do imóvel é o responsável pelo aplicativo, afinal se trata inicialmente de apenas um imóvel disponível para a realização de eventos. Portanto, ele é o responsável pela administração do sistema.

**Promotor de eventos**

O promotor de eventos é o usuário que irá realizar o agendamento do espaço e selecionar o tipo de evento que irá realizar na ocasião. Portanto, trata-se do organizador do evento, podendo ele ser um profissional da área ou não.

**Staff**

O staff é formado pelo prestador de serviço que for contratado para o evento. Desta forma, refere-se a uma equipe que pode ser formada por garçons, restaurantes, buffets, cozinheiras, músicos etc.

## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

Proprietários de residência com estrutura para realizar eventos, hoje obtêm receita alugando seus imóveis integralmente para temporada ou através do aluguel de cômodos – logo, disponibilizando parcialmente a parte interna de sua residência, através de sites como Airbnb. Portanto, esses proprietários, em regra, acabam deixando suas residências temporariamente quando as alugam integralmente, necessitando, desta forma, de uma acomodação temporária para sua família, ou, então, perdem parte de sua privacidade e intimidade quando alugam parcialmente cômodos de seus imóveis. Além disso, muitas vezes os locatários levam prestadores de serviços para o imóvel sem apresentar relação prévia desses profissionais. Logo, o proprietário não sabe quem são as pessoas que estão trabalhando dentro de sua residência.
Sob a ótica da realização de eventos, em regra, atualmente eles são promovidos de duas maneiras definidas como informal e formal. A maneira informal se dá através da realização do evento direta pelo próprio anfitrião. Portanto, é ele quem contrata o local da festa e o staff para, em geral, reunir alguns poucos convidados. O evento classificado como formal, tem como característica a contratação de um profissional especializado para sua organização, também conhecido como cerimonial. Normalmente, trata-se de ocasiões que envolvem um bom número de convidados ou celebrações mais contundentes, como casamentos ou formaturas. Desta forma, tanto o anfitrião quanto o cerimonial, ao promoverem algum evento, precisam contratar fornecedores um a um – ressalvadas as grandes empresas de eventos que já oferecem o local com buffet e staff definidos. Assim, eventos que não contam com a contratação de grandes empresas de eventos, requerem de seus organizadores não apenas a definição de local, mas também definições e contratações independentes do tipo e quantidade de alimentação e bebidas e do staff para trabalhar no dia da celebração.

## 3.2. Descrição Geral da proposta

A proposta consiste na criação de um sistema que permita ao usuário realizar a reserva de um local para a realização de um evento e contratar o staff que irá trabalhar na ocasião, permitindo ao usuário mais facilidade na organização de eventos, a geração de receita para o proprietário do local, além de mais oportunidades para o staff contratado.

*Descrição geral dos processos*

O proprietário do imóvel realizará o cadastro da sua residência no aplicativo e registrará os dias disponíveis para realização de eventos e seus respectivos valores.
Cozinheiras, restaurantes e buffets especializados realizarão o cadastro dos menus que oferecem e seus respectivos preços com base no número de convidados e datas.
Garçons cadastrarão, além de seu perfil, sua disponibilidade e preço por hora de trabalho e serão alocados aleatoriamente, com base no menor custo, a partir da definição do menu e número de convidados.
Caberá ao proprietário aprovar os perfis cadastrados de garçons, cozinheiras, restaurantes e buffets.
Por fim, restará ao usuário final, o promotor do evento, seja ele o anfitrião ou o cerimonial, realizar seu cadastro, promover pesquisas e selecionar a data do evento no local, o menu e o número de convidados apenas.

## 3.3. Modelagem dos Processos

### 3.3.1 Processo 1 – CADASTRO DE USUÁRIO

Através desse processo o usuário poderá ser cadastrado, assim que o sistema garante que o usuário não está passando informações já disponíveis no banco de dados, o usuário é indagado sobre qual tipo de pessoa ele será no sistema(Promoter ou Locatário). O promoter neste momento irá apenas ser cadastrado e assim finalizando seu processo, enquanto o locatário irá passar imediatamente para o processo da casa decorrente que nosso sistema terá inicialmente apenas um locatário e um local apenas, após o processos de cadastramento da residência o processo de cadastramento de usuário é finalizado.

![ModelagemCadastroPessoa drawio](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti2-0940100-su-casa/blob/6bbbf7c5a6e7bc1058052a1f4c8ad7b9ddd37d9b/docs/imagens/CadastroDeUsu%C3%A1rioFinalApresenta%C3%A7%C3%A3o.png)

### 3.3.2 Processo 2 - CADASTRO DE RESIDÊNCIA

Através desse processo o locatário ira registrar sua residência informando o valor cobrado, os horários disponíveis, a lotação maxima e a disponibilidade da casa para eventos internos e/ou externos. Dessa forma o promoter durante o processo de agendamento terá as informações necessárias para realizar seu evento que foram fornecidas neste cadastro

![CadastroResidência](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti2-0940100-su-casa/blob/master/docs/imagens/cadastro-de-resid%C3%AAncia.png)
### 3.3.3 Processo 3 – CADASTRAMENTO DO STAFF (PRESTADOR DE SERVIÇO)

Através desse processo de cadastramento do staff é que ocorre a inserção dos prestadores de serviço no sistema. Desta forma, cada usuário preenche um formulário com dados de seus serviços e equipe. Estee é submetido para aprovação do administrador - no caso, o proprietário do imóvel. Caso haja alguma pendência, esta é informada ao usuário que deverá reiniciar o cadastramento. Caso contrário, o usuário é informado que seu cadastrado foi realizado com sucesso.

![CADSTAFF drawio (3)](https://user-images.githubusercontent.com/68079428/165407737-0f30fed0-a1d0-4dd1-b436-d7c30cb8af57.png)


### 3.3.4 Processo 4 – SERVIÇO DE AGENDAMENTO

No serviço de agendamento o usuário vai negociar diretamente com os personagens do evento, tendo a liberdade e a facilidade pra selecionar o melhor horário, locação e staff que o locatário disponibilizar no Su Casa. Dessa forma o evento e o staff ficaram reservados previamente até que seja realizado ou o usuário(locatário/promotor) realizem o cancelamento.
![Modelo do processo do serviço de atendimento](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti2-0940100-su-casa/blob/master/docs/imagens/Servi%C3%A7oDeAgendamento_TIS2.drawio%20(1).drawio.png)

### 3.3.5 Processo 5 – CANCELAMENTO DO AGENDAMENTO

Através desse processo o usuário Promotor de Eventos conseguirá cancelar o evento já agendado. O processo envolve a comunicação do cancelamento aos usuários Staff que estavam agendados para o evento, assim como para proprietário do imóvel (Administrador) - reabrindo a disponibilidade do local para o dia e horário pré-agendados.

![CANCELAMENTO drawio (3)](https://user-images.githubusercontent.com/68079428/165408708-83e41a2f-5edc-40ca-8dba-f648f60c1484.png)


### 3.3.6 Processo 6 – AVALIAÇÃO DO SISTEMA

A avaliação do sistema é realizada pelo usuário, no caso, promotor de eventos. Ela pode ser feita a partir da realização do login pelo usuário.

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti2-0940100-su-casa/blob/master/docs/imagens/avalia%C3%A7%C3%A3o_sistema_corrigida.jpg)


## 4. Projeto da Solução

#### Processo 1 – CADASTRO DE USUÁRIO

**Insere dados pessoais**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome Completo | Caixa de Texto |  |  |
| Email | Caixa de Texto | formato de e-mail |  |
| Senha | Caixa de Texto | mínimo de 8 caracteres |   |
| Confirmar Senha | Caixa de Texto | Ser igual à senha |   |
| Telefone | Caixa de Texto | formato de número |   |
| Tipo de usuário | Múltipla Escolha | Opções | Locatário |

#### Processo 2– Cadastro de residência
**Inserir dados da residência**

| **Campo** |    **Tipo**    |   **Restrições**   | **Valor default** |
| --- | --- | --- | --- |
| CEP | Caixa de Texto | Mínimo de 8 caracteres |  |
| Estado | Seleção única |  |   |
| Cidade| Caixa de Texto | |   |
| Endereço | Caixa de Texto | |   |
| Rua | Caixa de Texto | |   |
| Número | Caixa de Texto | Formato de número |   |

**Detalhes do local**

| **Campo** |    **Tipo**    |   **Restrições**   | **Valor default** |
| --- | --- | --- | --- |
| Capacidade de pessoas |  Caixa de Texto | Formato de número  |   |
| Tamanho do local |  Caixa de Texto | Formato de número  |   |
| Banheiros |  Caixa de Texto| Formato de número  |   |
| Fotos | Imagem | Mínimo 1 imagem |   |

**Detalhes para locação**

| **Campo** |    **Tipo**    |   **Restrições**   | **Valor default** |
| --- | --- | --- | --- |
| Dias disponíveis |    Múltipla escolha    | Mínimo 1 seleção |   |
| Valor da locação |    Caixa de texto    | Formato de número|   |



#### Processo 3 – CADASTRAMENTO DO STAFF

**Preenchimento de dados**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Cadastrar Staff] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Escolha Múltipla, Arquivo, Link] |  |  |
|    |    |     |
| Código único | Caixa de Texto | mínimo de 8 caracteres |   |
| E-mail | Caixa de Texto | formato de e-mail |  |
| Senha | Caixa de Texto | mínimo de 8 caracteres |   |
| Confirma Senha | Caixa de Texto | mínimo de 8 caracteres |   |
| Nome | Caixa de Texto | mínimo de 8 caracteres |   |
| Telefone | Caixa de Texto | número |   |
| Whatsapp | Caixa de Texto | número |   |
| Tipo de serviço | Escolha Múltipla | opções |   |
| Descrição do serviço | Caixa de Texto | mínimo de 8 caracteres |   |
| Custo por convidado | Caixa de Texto | mínimo de 8 caracteres |   |
| Número mínimo de convidados | Caixa de Texto | número |   |
| Número máximo de convidados | Caixa de Texto | número |   |



#### Processo 4 – Serviço de agendamento 

**Seleção de horário**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Realizar reserva] | [Data] |  |  |
| ***Exemplo:***  |    |     |
| Reserva do dia | Data  | Seleção em um calendáro virtual |  |
| Seleção da hora | Hora | Entre os horários disponibilizados pelo locátario |   |


**Seleção de Staff**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Reserva Staff] | [Tabela] |  |  |
| ***Exemplo:***  |    |     |
| Garçons | Seleção única  | Seleção de uma equipe de garços dentro das oferecidas |  |
| Buffet | Múltipla escolha | Promotor irá selecionar 1(um) ou mais buffets que iram fornecer os serviços durante o evento|   |


#### Processo 5 – CANCELAMENTO DO AGENDAMENTO

**Solicitação de Cancelamento**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Solicitação de Cancelamento] | [Múltipla escolha,Tabela] |  |  |
| Eventos agendados | Escolha Múltipla | Lista de eventos agendados previamente e ainda não realizados |  |
| Pedir reembolso | Seleção única | Permitir ao usuário solicitar reembolso |   |


#### Processo 6 – Avaliação do sistema

**Avaliar sistema**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nota de avaliação | Multipla Escolha | de 1 a 5 | 1 |
|  enviar avaliação  |  numero  | de 1 a 5   |  1
|  registrar valor da avaliação   | numero   |  de 1 a 5   |     |



### 4.2. Tecnologias

A plataforma Su Casa usará soluções HTML e CSS (Bootstrap) para desenvolvimento das aplicações. O banco de dados será PostgreSql, pois tem melhor interação com o servidor que irá hospedar o sistema (REPLIT) e o backend será desenvolvido em node.js.


![server](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti2-0940100-su-casa/blob/master/docs/imagens/Untitled%20Diagram.drawio.png)


## 5. Modelo de dados

Apresente o modelo de dados por meio de um modelo relacional ou Diagrama de Entidade-Relacionamento (DER) que contemple todos conceitos e atributos apresentados item anterior. 

![Diagrama de Entidade Relacionamento de Exemplo](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti2-0940100-su-casa/blob/master/docs/imagens/e3cbf5c3-a8ac-4de7-980f-ce5efab6a9fe.jpg)

## 6. Indicadores de desempenho

Abaixo os 5 indicadores definidos.

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Taxa de Satisfação | Avaliar quantitativamente a satisfação dos usuários | Mede a quantidade média de avaliações | Média das avaliações totais   | Tabela de Avaliações | Feedback e melhorias |
| Número de conversão | Avaliar quantitativamente a taxa de conversão de clientes | Mede a quantidade de visitas que realizaram a locação do local | Quantidade de locações dividido pela quantidade de visitas | Dados do servidor e dados da Tabela de Eventos | Melhorias e crescimento |
| Taxa de cancelamento | Avaliar quantitativamente a taxa de cancelamento de eventos já agendados | Mede a quantidade de eventos cancelados no mês | Quantidade de eventos cancelados dividido pela quantidade de eventos realizados no mês  | Tabela de Eventos | Aprendizado e previsão |
| Taxa de Recorrência | Avaliar quantitativamente a proporção de usuários que locaram o espaço mais de uma vez | Mede a quantidade de usuários recorrentes | Total de usuários que alugaram mais de uma vez o espaço dividido pelo total de usuários que já alugaram pelo menos uma vez | Tabela de Usuários e Eventos | Clientes |
| Taxa de Desinteresse | Avaliar quantitativamente a proporção de usuários que nunca locaram o espaço | Mede a quantidade de usuários que possuem cadastro mas nunca alugaram o espaço | Total de usuários que nunca alugaram o espaço dividido pelo total de usuários cadastradados | Tabela de Usuários e Eventos | Clientes |


Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe **a ser proposto**

## 7.Sistema desenvolvido

Faça aqui uma breve descrição do software e coloque as principais telas com uma explicação de como usar cada uma.

## 8. Conclusão

Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo.

# REFERÊNCIAS

Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT.

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf


**[1.1]** - BELO HORIZONTE. Lei Municipal n. 5.641, de 22 de dezembro de 1989.

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._



# APÊNDICES

**Colocar link:**

Do código (armazenado no repositório);

Dos artefatos (armazenado do repositório);

Da apresentação final (armazenado no repositório);

Do vídeo de apresentação (armazenado no repositório) .




