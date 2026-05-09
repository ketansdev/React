import "./card.css"

const Card = (props) => {
    console.log(props);
    const {name, profile, img} = props;
  return (
    <div className="card">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2>{profile}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam accusantium modi sapiente suscipit perspiciatis esse provident, hic maxime voluptatem.</p>
    </div>
  )
}

export default Card
