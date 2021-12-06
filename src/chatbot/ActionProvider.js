// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    /*Selecciono la primer opcion --> VER TUTORIAL*/
    handleTutorialQuiz = () => {
      const message = this.createChatBotMessage(
        "Genial! el siguiente enlace te llevará al video tutorial de HostingBook",
        {
          widget: "linkTutorial"
        }
      );
      this.setChatbotMessage(message);
    };
    handleContactarQuiz = () => {
      const message = this.createChatBotMessage(
        "Genial! para comunicarte con HostingBook podes llamar al 0358154187966 o hacer click en el siguiente enlace...",
        {
          widget: "linkContacto"  
        }
      );
      this.setChatbotMessage(message);
    };

    handleRedesQuiz = () => {
        const message = this.createChatBotMessage(
          "Genial! a continuación te dejo los enlaces que te llevarán a las redes sociales de HostingBook", 
          {
            widget: "javascriptLinks"
          }
        );
        this.setChatbotMessage(message);
      };

    /*Mensaje si el usuario escribe "opciones"*/
    handleContinue = () => {
      const message = this.createChatBotMessage(
        "En este momento sólo puedo ayudarte con las siguientes opciones:",
        {
          widget: "options"
        }
      );
      this.setChatbotMessage(message);
    };

    /*Mensaje para cuando el usuario encuentra algo que no está codeado*/
    handleUnknown = () => {
      const message = this.createChatBotMessage(
        "Lo siento, no puedo entenderte. Quizás te ayude alguna de las siguientes opciones:",
        {
            widget: "options"
          }
      );
      this.setChatbotMessage(message);
    };

    /*Mensaje de despedida cuando el usuario pone gracias*/
    handleGreeting = () => {
      const message = this.createChatBotMessage(
        "Gracias por hablar conmigo! espero haber sido de ayuda... Hasta la próxima!!!"
      );
      this.setChatbotMessage(message);
    };
    
    /*mensaje de bienvenida cuando el usuario escribe "hello" o "hi"*/
    messageHandler = () => {
      const message = this.createChatBotMessage(
        "Hola!! cómo estás? en este momento sólo puedo ayudarte con las siguientes opciones",
        {
          widget: "options"
        }
      );
      this.setChatbotMessage(message);
    };

    setChatbotMessage = (messages) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages]
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages]
        }));
      }
    };
  }
  export default ActionProvider;
  