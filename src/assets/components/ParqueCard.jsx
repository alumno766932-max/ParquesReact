const ParqueCard = ({ nombre, imagen, descripcion }) => {
    return (
        <>
            <div class="card h-100">
                <img class="card-img-top img-fluid w-100"
                    src={imagen}
                    alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">{nombre}</h4>
                    <p class="card-text">{descripcion}</p>
                </div>
            </div>
        </>
    );
};

export default ParqueCard;