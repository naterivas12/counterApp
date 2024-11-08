import  PropTypes  from "prop-types";

export const FirstApp = ({title, subTitle,name}) => {
  
  // const newMessage = {nombre:'Kissmark',apellidoPaterno:'Rivas',apellidoMaterno:'Moreno'}
  // console.log(props);
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      <p>{  subTitle }</p>
      <p>{  subTitle }</p>
      <p>{  name }</p>
    </>
  )
}

FirstApp.propTypes={
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps={
  name:'Kissmark rivas',
  subTitle:'No hay subtitulo'
  // title:'No hay titulo'

}
// const newMessage = {nombre:'Kissmark',apellidoPaterno:'Rivas',apellidoMaterno:'Moreno'}
// const newMessage = ['Kissmark','Rivas','Moreno']
// <h1>{ JSON.stringify(newMessage) }</h1>