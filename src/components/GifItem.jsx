export const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={ url } className="image" alt="title" />
            <p> { title }</p>
        </div>
    );
}