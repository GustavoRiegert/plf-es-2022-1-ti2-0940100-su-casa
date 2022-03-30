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

O staff é formado por usuários que prestarão serviço no evento. Desta forma, refere-se a garçons, restaurantes, buffets, cozinheiras, músicos etc.

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

![ModelagemCadastroPessoa drawio](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti2-0940100-su-casa/blob/master/docs/imagens/Cadastro%20de%20Usu%C3%A1rio%20Mod.png?raw=true)

### 3.3.2 Processo 3 – CADASTRAMENTO DO STAFF

Através desse processo de cadastramento do staff é que ocorre a inserção dos prestadores de serviço no sistema. Desta forma, cada usuário preenche um formulário individual que é submetido para aprovação do administrador - no caso, o proprietário do imóvel. Caso haja alguma pendência, esta é informada ao usuário que deverá reiniciar o cadastramento. Caso contrário, o usuário é informado que seu cadastrado foi realizado com sucesso.

![](https://user-images.githubusercontent.com/68079428/159726036-bd7558b6-6e89-48aa-b5a5-7fccfdfb8045.png)

### 3.3.3 Processo 5 – SERVIÇO DE AGENDAMENTO

No serviço de agendamento o usuário vai negociar diretamente com os personagens do evento, tendo a liberdade e a facilidade pra selecionar o melhor horário, locação e staff que o locatário disponibilizar no Su Casa. Dessa forma o evento e o staff ficaram reservados previamente até que seja realizado ou o usuário(locatário/promotor) realizem o cancelamento.
![Modelo do processo do serviço de atendimento](imagens/ServiçoDeAgendamento_TIS2.drawio(1).png "Serviço de atendimento.")

### 3.3.4 Processo 6 – CANCELAMENTO DO AGENDAMENTO

Através desse processo o usuário Promotor de Eventos conseguirá cancelar o evento já agendado. O processo envolve a comunicação do cancelamento aos usuários Staff que estavam agendados para o evento, assim como para proprietário do imóvel (Administrador) - reabrindo a disponibilidade do local e dos prestadores de serviço para o dia e horário pré-agendados.

![image](https://user-images.githubusercontent.com/68079428/158619810-6241fb2e-0d8c-487e-bcf9-b34a933157c2.png)

### 3.3.5 Processo 7 – AVALIAÇÃO DO SISTEMA

A avaliação do sistema é realizada pelo usuário, no caso, promotor de eventos. Ela pode ser feita a partir da realização do login pelo usuário.

![image](/imagens/Avaliação_TIS.jpg)


## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
| ***Exemplo:***  |    |     |
| login | Caixa de Texto | formato de e-mail |  |
| senha | Caixa de Texto | mínimo de 8 caracteres |   |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

#### Processo 2 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

### 4.2. Tecnologias

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas. Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## 5. Modelo de dados

Apresente o modelo de dados por meio de um modelo relacional ou Diagrama de Entidade-Relacionamento (DER) que contemple todos conceitos e atributos apresentados item anterior. 

![Diagrama de Entidade Relacionamento de Exemplo](imagens/er_diagram.png "Diagrama de Entidade Relacionamento de Exemplo")

## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Percentual reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total atendimento |   | Tabela reclamações | Aprendizado e Crescimento |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de requisições | Mede % de requisições atendidas na semana | ![\frac{\sum{atendidas}}{\sum{requisicoes}}100](https://latex.codecogs.com/svg.latex?\frac{\sum{atendidas}}{\sum{requisicoes}}100) | Tabela solicitações | Processos internos |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês |   | Tabela Pedidos | Clientes |

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




