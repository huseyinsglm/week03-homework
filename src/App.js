import './App.css';
import {createContext, useState} from "react";
import ReactSwitch from "react-switch";
import {TodoFnComponent, TodoClsComponent} from './components/todos';
import {PostFnComponent, PostClsComponent} from './components/post';
import {Button} from './components/button';
import {Header} from "./components/header";

export const ThemeContext = createContext(null);

function App() {
    //açılış ekranı açık renk başlar
    const [theme, setTheme] = useState("light");
    const [activeTab, setActiveTab] = useState("todo-cls")

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Header />
            <div className="App" id={theme}>
                <div className="switch">
                    <label> {theme === "light" ? "Light" : "Dark"}</label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                </div>
                <div className='container'>
                    <div className="btn-group tabs" role="group" aria-label="Basic example">
                        <Button onClick={() => setActiveTab("todo-cls")}
                                className={activeTab === "todo-cls" ? "btn btn-primary" : "btn btn-default"}>Todos Class
                            Component</Button>
                        <Button onClick={() => setActiveTab("todo-fn")}
                                className={activeTab === "todo-fn" ? "btn btn-primary" : "btn btn-default"}>Todos Fn
                            Component</Button>
                        <Button onClick={() => setActiveTab("post-cls")}
                                className={activeTab === "post-cls" ? "btn btn-primary" : "btn btn-default"}>Post Class
                            Component</Button>
                        <Button onClick={() => setActiveTab("post-fn")}
                                className={activeTab === "post-fn" ? "btn btn-primary" : "btn btn-default"}>Post Fn
                            Component</Button>
                    </div>
                    <br/>
                    {/* Çoklu koşul  işlemleri */}
                    {activeTab === "todo-cls" ? <TodoClsComponent/> : null}
                    {activeTab === "todo-fn" ? <TodoFnComponent/> : null}
                    {activeTab === "post-cls" ? <PostClsComponent/> : null}
                    {activeTab === "post-fn" ? <PostFnComponent/> : null}
                </div>
            </div>

        </ThemeContext.Provider>

    );
}

export default App;