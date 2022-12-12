import React from "react";

//Images
import todo from "../assets/icon-todo.svg"
import calender from "../assets/icon-close-menu.svg"
import reminders from "../assets/icon-reminders.svg"
import planning from "../assets/icon-planning.svg"

//CSS
import "../css/styles.css"


export default function Feature() {

    
    return (
        <div>
            <div className="dropdown-content">
                <a className="nav-link" href="#">
                    <img src={todo} alt="icon todo list" />
                    Todo List
                </a>
                <a className="nav-link" href="#">
                    <img src={calender} alt="Calender icon" />
                    Calender
                </a>
                <a className="nav-link" href="#">
                    <img src={reminders} alt="Reminder icon" />
                    Reminder
                </a>
                <a className="nav-link" href="#">
                    <img src={planning} alt="Planning icon" />
                    Planning
                </a>
            </div>
        </div>
    )
}
