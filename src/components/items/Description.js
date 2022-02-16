import React from "react";

const Description = (props) => {

    const {
        name, 
        scientificName, 
        price, 
        wateringsPerWeek,
        fertilizer,
        height
    } = props

    return (
        <section className="detail-view-item-description-content">
            <section className="detail-view-item-description-content-item">
                Nombre: { name }
            </section>
            <section className="detail-view-item-description-content-item">
                Nombre científico: { scientificName }
            </section>
            <section className="detail-view-item-description-content-item">
                Precio: { price }
            </section>
            <section className="detail-view-item-description-content-item">
                Riegos por semana: { wateringsPerWeek}
            </section>
            <section className="detail-view-item-description-content-item">
                Fertilizante: { fertilizer}
            </section>
            <section className="detail-view-item-description-content-item">
                Altura: { height }
            </section>
        </section>
    )
}

export default Description