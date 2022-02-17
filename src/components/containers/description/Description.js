import React from "react";

import './Description.css'

const Description = (props) => {

    const {
        name, 
        binomialName, 
        price, 
        wateringsPerWeek,
        fertilizerType,
        heightInCm
    } = props

    return (
        <section className="description-content">
            <section className="description-content-item">
                Nombre: { name }
            </section>
            <section className="description-content-item">
                Nombre científico: { binomialName }
            </section>
            <section className="description-content-item">
                Precio: { price } €
            </section>
            <section className="description-content-item">
                Riegos por semana: { wateringsPerWeek }
            </section>
            <section className="description-content-item">
                Fertilizante: { fertilizerType }
            </section>
            <section className="description-content-item">
                Altura: { heightInCm } cm
            </section>
        </section>
    )
}

export default Description