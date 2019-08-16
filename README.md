# Origami

Projeto desenvolvido em React Native para automação residencial utilizando MQTT

## O que é *MQTT*?

*MQTT* é um acrônimo para *Message Queuing Telemetry Transport*, sendo um protocolo leve, baseado em *TCP/IP* para redes instavéis ou de alta latência. Ele é fundamentado no modelo *Publish/Subscribe*, no qual os dispositivos recebem e enviam mensagens de maneira assíncrona, utilizando tópicos.

## Como utilizar?

O projeto utiliza `node`, `npm` e o ambiente configurado do *React Native* como dependências. Após baixar os arquivos para o computador, é necessário rodar o comando `npm install` para baixar as dependências do projeto, e com esse passo finalizado, rodar o comando `react-native run-android` com o emulador de *Android* aberto.

## Como o app funciona?

O *React Native* trabalha com o protocolo *MQTT* através da *lib* *react_native_mqtt*. Essa biblioteca oferece o protocolo *MQTT* através de *websocket*, utilizando um objeto para comunicação. Com o objeto inicializado, o dispositivo começa a receber dados mediante à inscrição dos tópicos predefinidos.

O aplicativo possui duas telas:

- *Light*
- *IR*

A primeira tela trabalha com dispositivos de leitura digital, verificando e alterando o estado dos mesmos.

A segunda tela funciona como um controle remoto, disparando comandos aos dispositivos inscritos no mesmo tópico.


