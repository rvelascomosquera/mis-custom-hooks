import { useState } from 'react'


export const useForm = ( initialForm ) => {

  const [formaState, setFormaState] = useState( initialForm)

  const onInputChange = ({target}) => {
    const {name, value} = target
    setFormaState ({
      ...formaState, 
      [ name ]: value
    })
  }

  const onResetForm = ( )=>{
    setFormaState( initialForm )
  }


  return {
    ...formaState,
    formaState,
    onInputChange,
    onResetForm
  }
}
