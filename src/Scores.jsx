

const Score = (props) => {
  console.log(props.score)
  return (
    <div>
      <h4>{props.score.date}</h4>
      <h4>{props.score.score}</h4>
    </div>
  )
}

export default Score