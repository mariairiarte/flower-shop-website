import React from "react";

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
        <section className="detail-view-item-description-content">
            <section className="detail-view-item-description-content-item">
                Nombre: { name }
            </section>
            <section className="detail-view-item-description-content-item">
                Nombre científico: { binomialName }
            </section>
            <section className="detail-view-item-description-content-item">
                Precio: { price }
            </section>
            <section className="detail-view-item-description-content-item">
                Riegos por semana: { wateringsPerWeek }
            </section>
            <section className="detail-view-item-description-content-item">
                Fertilizante: { fertilizerType }
            </section>
            <section className="detail-view-item-description-content-item">
                Altura: { heightInCm } cm
            </section>
        </section>
    )
}

export default Description