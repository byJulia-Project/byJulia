# byJulia

## Adicionado branch DEV. 

<strong>
  Chegou a hora de clonarmos o projeto na nossa máquina e começarmos a codar!!
  Para isso temos alguns passos.
</strong>

<em>1° Precisamos criar uma pasta, onde ficará armazenado o nosso projeto.</em>
<strong>Abra o terminal do GitBash:</strong>

```shell
mkdir byJulia
cd byJulia
```
<hr>
<strong>2° Dentro da pasta do byJuliaclonaremos o repositório Git.</strong>

```shell
git clone https://github.com/byJulia-Project/byJulia.git
```
<hr>
<strong>3° Depois de clonado o repositório iremos confirmar em que branch estamos</strong>

```shell
git branch
```
Mensagem exibida pelo terminal: *main
<hr>
<strong>4° Criaremos nossa própria branch para podermos trabalhar</strong>

```shell
git checkout -B <nome-da-branch> 
 Mensagem de sucesso: Switched 'main' to '<nome-da-branch>'
  Tradução: Alterado da branch 'main' para a branch '<nome-da-branch>'
```
<hr>
<strong>5° Feito isso, adicionaremos o nosso nome no final desse arquivo  <em>README.md</em></strong>

```shell
code -r .
```
<hr>
<strong>
  Abra o arquivo README.mdno Visual Studio Code
  Digite: ## <nome-do-colaborador>
</strong>
<hr>
<strong>6° Agora faremos a adição dessa alteração no arquivo README.md a área staged</strong>

```shell
git add README.md
```
<hr>
<strong>6.1 Caso queira ver se deu certo</strong>

```shell
git status
```
<hr>
<strong>7° Agora iremos embrulhar esse arquivo em um pacote</strong>

```shell
git commit -m "Adicionando colaborador <nome-colaborador>
```
<strong>8° Só nos resta empurrar esses arquivos para o repositório remoto</strong>

```shell
git push -u origin <nome-da-branch>
```
<strong>PRONTO!! Sua branch no GitHub e sua área de trabalho está configurada.</strong>

### Matheus
