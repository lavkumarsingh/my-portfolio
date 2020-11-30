import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className="card__container">
            <div className="card">
                <img src={props.url} alt="" />
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

function SkillCard(props) {
    return (
        <div className="card__container">
            <div className="skill__card">
                <img src={props.url} alt="" />
            </div>
        </div>
    )
}

export { SkillCard }
export default Card
