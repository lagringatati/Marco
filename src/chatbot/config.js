// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import BotAvatar from "../Components/BotAvatar/BotAvatar.jsx";
import Options from "../Components/Options/Options";
import Quiz from "../Components/Quiz/Quiz";
import UserAvatar from "../Components/UserAvatar/UserAvatar";
import LinkList from "../Components/LinkList/LinkList";
import LinkListTutorial from "../Components/LinkList/LinkListTutorial";
import LinkListContacto from "../Components/LinkList/LinkListContacto"

const config = {
    botName: "QuizBot",
    initialMessages: [
        createChatBotMessage(`Hola, soy Marco! y a partir de este momento seré tu asistente virtual`),   /*Saludo de bienvenida de Marco*/
        createChatBotMessage("Puedo ayudarte con las siguientes opciones", {
            withAvatar: false,
            delay: 500,
            widget: "options"
        })
    ],

    customStyles: {
        botMessageBox: {
            backgroundColor: "#28334AFF"
        },
        chatButton: {
            backgroundColor: "#567572ff"
        }
    },
    customComponents: {
        header: () => (
            <div
                style={{
                    backgroundColor: "#567572ff",
                    padding: "5px",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    display: "flex",
                    fontSize: "0.85rem",
                    paddingTop: "12.5px",
                    paddingBottom: "12.5px",
                    paddingRight: "12.5px",
                    paddingLeft: "12.5px",
                    fontWeight: "700",
                    alignItems: "center"
                }}
            >
                Chat con Marco
            </div>
        ),
        botAvatar: (props) => <BotAvatar {...props} />,
        userAvatar: (props) => <UserAvatar {...props} />
    },

    /*state: {
        linux: [],
        sql: [],
        docker: []
    },*/
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />
        },
        /*REDES SOCIALES*/
        {
            widgetName: "javascriptLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Facebook",
                        url: "https://www.facebook.com/HostingBook-104939168676273",
                        id: 1
                    },
                    {
                        text: "Instagram",
                        url: "https://www.instagram.com/hostingbook/",
                        id: 2
                    },
                    {
                        text: "Twitter",
                        url: "https://twitter.com/Hosting_Book",
                        id: 3
                    },
                    {
                        text: "LinkedIn",
                        url: "https://www.linkedin.com/in/hostingbook/",
                        id: 4
                    }
                ]
            }
        },
        /*HASTA ACA REDES SOCIALES*/
        /*Este es el camino al link del tutorial*/
        {
            widgetName: "linkTutorial",
            widgetFunc: (props) => <LinkListTutorial {...props} />,
            props: {
                options: [
                    {
                      text: "Ver tutorial",
                      url: "https://youtube.com",   //aca va el link del tutorial
                      id: 1
                    }
                ]
            }
        },
        /*HASTA ACA LINK TUTORIAL*/
        /*Este es el camino a la pagina de contacto*/
        {
            widgetName: "linkContacto",
            widgetFunc: (props) => <LinkListContacto {...props} />,
            props: {
                options: [
                    {
                      text: "Contactanos",
                      url: "https://google.com",    //aca va la pagina de contacto
                      id: 1
                    }
                ]
            }
        },
        /*HASTA ACA LINK TUTORIAL*/


        /*{
            widgetName: "linux",
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
                course: "Linux"
            }
        },
        {
            widgetName: "docker",
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
                course: "Docker"
            }
        },
        {
            widgetName: "sql",
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
                course: "Sql"
            }
        }*/
    ]
};

export default config;
