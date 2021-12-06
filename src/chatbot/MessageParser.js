// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
    //toma las siguientes palabras del input para realizar atajos
    parse(message) {
      const lowercase = message.toLowerCase();
      if (lowercase.includes("hola") || lowercase.includes("buenas")) {
        this.actionProvider.messageHandler();
      } else if (lowercase.includes("tutorial")) {
        this.actionProvider.handleTutorialQuiz();
      } else if (lowercase.includes("contactar")) {
        this.actionProvider.handleContactarQuiz();
      } else if (lowercase.includes("redes")) {
        this.actionProvider.handleRedesQuiz();
      } else if (lowercase.includes("opciones")) {
        this.actionProvider.handleContinue();
      } else if (lowercase.includes("gracias") || lowercase.includes("chau")) {
        this.actionProvider.handleGreeting();
      } else {  //todos los otros casos
        this.actionProvider.handleUnknown();
      }
    }
  }
  export default MessageParser;
  