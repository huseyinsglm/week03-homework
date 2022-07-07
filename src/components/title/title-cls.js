import React from 'react';



export class TitleClassComponent extends React.Component {

    renderDivComponent = () => {
        const {text, component} = this.props
        return <div className={component} >{text}</div>
    }

    renderH1 = () => {
        const {text, component} = this.props
        return <h1 id="pageTitle" className={component}>{text}</h1>
    }
    render() {

        const {text, component} = this.props

        // const Component = () => components === "h1" ?
        //   <h1 id="pageTitle" className={components}>{text}</h1>
        //   : <div className={components} >{text}</div>

        // const Variable = components === "h1" ?
        //   <h1 id="pageTitle" className={components}>{text}</h1>
        //   : <div className={components} >{text}</div>
        // return Variable
        return component === "h1" ? this.renderH1() : this.renderDivComponent()
    }
}