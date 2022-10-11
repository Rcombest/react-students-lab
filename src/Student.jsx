import Score from "./Scores"

const Student = (props) => {
  return (
    <div>
      <h1>{props.student.name}</h1>
      <h2>{props.student.bio}</h2>
      {props.student.scores.map((score, index) => <Score key={index} score={score}/>)}
    </div>
  )
}

export default Student