import React from 'react'
import { LockBody, Picture , Spinner , ReleaseBody} from './styles/loading'

// here during the loadig we want to lock the entire body of page
export default function Loading ( { src , ...restProps }) {
  return (
    
    <Spinner {...restProps}>
        <LockBody />
        <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody />
}
